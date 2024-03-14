import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithApiGateway } from "./interface";
import { getResourceName } from "../../utils/helper";
import { ApiGatewayCustomDomainName } from "../apiGatewayCustomDomainName";
import { CreateAcmCertificate } from "../createAcmCertificate";
import { Lambda } from "../lambda";
import { Tags } from "../tags";
export class LambdaWithApiGateway extends Construct {
  /**
   * The HTTP URL of the API Gateway or the domain name if the custom domain name is provided.
   */
  url: string | undefined;

  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
  constructor(scope: Construct, id: string, config: ILambdaWithApiGateway) {
    super(scope, id);

    let {
      namespace,
      environment,
      name,
      customDomainName,
      tags,
      apiGatewayProtocolType,
      apiRestMethod,
      apiKeyRequired,
      apiKeyName,
      usagePlanName,
      stageName,
      accessControlAllowHeaderVal,
      accessControlAllowMethodVal,
      accessControlAllowOriginVal,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace: namespace,
      environment: environment,
      name,
    });

    const defaultTags = new Tags(this, "lambdaTags", {
      project: namespace,
      environment,
      extraTags: tags,
    });

    const lambda = new Lambda(this, `lambda`, {
      namespace,
      environment,
      name,
      tags,
      ...restConfig,
    });

    let api = null;
    if (apiGatewayProtocolType === "REST") {
      api = new aws.apiGatewayRestApi.ApiGatewayRestApi(
        this,
        "ApiGatewayRestApi",
        {
          name: resourceName,
          endpointConfiguration: { types: ["REGIONAL"] },
        }
      );

      const resource = new aws.apiGatewayResource.ApiGatewayResource(
        this,
        "resource",
        {
          restApiId: api.id,
          parentId: api.rootResourceId,
          pathPart: "resource",
        }
      );

      const optionApiMethod = new aws.apiGatewayMethod.ApiGatewayMethod(
        this,
        "optionApiMethod",
        {
          restApiId: api.id,
          resourceId: resource.id,
          httpMethod: "OPTIONS",
          authorization: "NONE",
        }
      );

      const apiMethod = new aws.apiGatewayMethod.ApiGatewayMethod(
        this,
        "apiMethod",
        {
          restApiId: api.id,
          resourceId: resource.id,
          httpMethod: apiRestMethod ?? "ANY",
          authorization: "NONE",
          apiKeyRequired: apiKeyRequired,
        }
      );

      const optionIntegration =
        new aws.apiGatewayIntegration.ApiGatewayIntegration(
          this,
          "optionIntegration",
          {
            restApiId: api.id,
            resourceId: resource.id,
            httpMethod: optionApiMethod.httpMethod,
            integrationHttpMethod: "POST",
            type: "MOCK",
            uri: lambda.invokeArn,
            dependsOn: [optionApiMethod],
            requestTemplates: { "application/json": '{"statusCode": 200}' },
          }
        );
      const apiIntegration =
        new aws.apiGatewayIntegration.ApiGatewayIntegration(
          this,
          "apiIntegration",
          {
            restApiId: api.id,
            resourceId: resource.id,
            httpMethod: apiMethod.httpMethod,
            integrationHttpMethod: "POST",
            type: "AWS_PROXY",
            uri: lambda.invokeArn,
            dependsOn: [apiMethod],
          }
        );

      const apiMethodResponse =
        new aws.apiGatewayMethodResponse.ApiGatewayMethodResponse(
          this,
          "apiMethodResponse",
          {
            restApiId: api.id,
            resourceId: resource.id,
            httpMethod: apiRestMethod ?? "ANY",
            statusCode: "200",
            responseParameters: {
              "method.response.header.Access-Control-Allow-Headers": true,
              "method.response.header.Access-Control-Allow-Methods": true,
              "method.response.header.Access-Control-Allow-Origin": true,
            },
            dependsOn: [apiIntegration],
          }
        );

      //NOSONAR
      new aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse(
        this,
        "apiIntegrationResponse",
        {
          restApiId: api.id,
          resourceId: resource.id,
          httpMethod: apiRestMethod ?? "ANY",
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Headers":
              accessControlAllowHeaderVal ??
              "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
            "method.response.header.Access-Control-Allow-Methods":
              accessControlAllowMethodVal ??
              "'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'",
            "method.response.header.Access-Control-Allow-Origin":
              accessControlAllowOriginVal ?? "'*'",
          },
          dependsOn: [apiMethodResponse],
        }
      );

      const optionMethodResponse =
        new aws.apiGatewayMethodResponse.ApiGatewayMethodResponse(
          this,
          "optionMethodResponse",
          {
            restApiId: api.id,
            resourceId: resource.id,
            httpMethod: "OPTIONS",
            statusCode: "200",
            responseParameters: {
              "method.response.header.Access-Control-Allow-Headers": true,
              "method.response.header.Access-Control-Allow-Methods": true,
              "method.response.header.Access-Control-Allow-Origin": true,
            },
            dependsOn: [optionIntegration],
          }
        );

      new aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse(
        this,
        "optionApiIntegrationResponse",
        {
          restApiId: api.id,
          resourceId: resource.id,
          httpMethod: "OPTIONS",
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Headers":
              accessControlAllowHeaderVal ??
              "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
            "method.response.header.Access-Control-Allow-Methods":
              accessControlAllowMethodVal ??
              "'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'",
            "method.response.header.Access-Control-Allow-Origin":
              accessControlAllowOriginVal ?? "'*'",
          },
          dependsOn: [optionMethodResponse],
        }
      );

      const lambPermission = new aws.lambdaPermission.LambdaPermission(
        this,
        "lambdaPermission",
        {
          // NOSONAR
          functionName: lambda.functionName,
          statementId: "AllowExecutionFromApiGateway",
          action: "lambda:InvokeFunction",
          principal: "apigateway.amazonaws.com",
          sourceArn: `${api.executionArn}/*/*`,
          dependsOn: [api],
        }
      );

      const apiDep = new aws.apiGatewayDeployment.ApiGatewayDeployment(
        this,
        "api-deployment",
        {
          restApiId: api.id,
          dependsOn: [lambPermission],
        }
      );
      const apiStage = new aws.apiGatewayStage.ApiGatewayStage(
        this,
        "api-stage",
        {
          restApiId: api.id,
          stageName: stageName ?? "default",
          deploymentId: apiDep.id,
          dependsOn: [apiDep],
        }
      );
      if (apiKeyRequired) {
        const randomNumStr = `${Math.floor(Math.random() * 10)}${Date.now()}`;
        const apiKey = new aws.apiGatewayApiKey.ApiGatewayApiKey(
          this,
          "api-key",
          {
            name: apiKeyName ?? `api-key-${randomNumStr}`,
            description: apiKeyName ?? `api-key-${randomNumStr}`,
            enabled: true,
          }
        );
        const usage = new aws.apiGatewayUsagePlan.ApiGatewayUsagePlan(
          this,
          "usage-plan",
          {
            name: usagePlanName ?? `usage-plan-${randomNumStr}`,
            description: usagePlanName ?? `usage-plan-${randomNumStr}`,
            apiStages: [
              {
                apiId: api.id,
                stage: apiStage.stageName,
              },
            ],
            throttleSettings: {
              burstLimit: 10,
              rateLimit: 10,
            },
            dependsOn: [apiKey],
          }
        );
        new aws.apiGatewayUsagePlanKey.ApiGatewayUsagePlanKey(
          this,
          "usage-key",
          {
            keyId: apiKey.id,
            keyType: "API_KEY",
            usagePlanId: usage.id,
            dependsOn: [usage],
          }
        );
      }
    } else {
      api = new aws.apigatewayv2Api.Apigatewayv2Api(this, "apigatewayv2Api", {
        name: resourceName,
        protocolType: apiGatewayProtocolType ?? "HTTP",
        target: lambda.arn,
        tags: defaultTags.tagsOutput,
      });
      this.url = customDomainName
        ? customDomainName.domainName
        : api.apiEndpoint;
      new aws.lambdaPermission.LambdaPermission(this, "lambdaPermission", {
        // NOSONAR
        functionName: lambda.functionName,
        action: "lambda:InvokeFunction",
        principal: "apigateway.amazonaws.com",
        sourceArn: `${api.executionArn}/*/*`,
      });
      this.url = customDomainName
        ? customDomainName.domainName
        : api.apiEndpoint;
    }

    if (customDomainName && api !== null) {
      const newCustomDomainName = {
        ...customDomainName,
        acmCertificateArn: customDomainName.acmCertificateArn || "",
      };
      if (!newCustomDomainName.acmCertificateArn) {
        const acmCertificate = new CreateAcmCertificate(
          this,
          "acmCertificate",
          {
            domainName: newCustomDomainName.domainName,
            hostedZoneId: newCustomDomainName.hostedZoneId,
            namespace,
            environment,
            tags,
          }
        );
        newCustomDomainName.acmCertificateArn = acmCertificate.acmArn;
      }
      new ApiGatewayCustomDomainName(this, "apiGatewayCustomDomainName", {
        apiId: api.id,
        namespace,
        environment,
        tags,
        ...newCustomDomainName,
      });
    }
  }
}
