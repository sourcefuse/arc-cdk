import { ApiGatewayApiKey } from "@cdktf/provider-aws/lib/api-gateway-api-key";
import { ApiGatewayDeployment } from "@cdktf/provider-aws/lib/api-gateway-deployment";
import { ApiGatewayIntegration } from "@cdktf/provider-aws/lib/api-gateway-integration";
import { ApiGatewayMethod } from "@cdktf/provider-aws/lib/api-gateway-method";
import { ApiGatewayMethodResponse } from "@cdktf/provider-aws/lib/api-gateway-method-response";
import { ApiGatewayMethodSettings } from "@cdktf/provider-aws/lib/api-gateway-method-settings";
import { ApiGatewayModel } from "@cdktf/provider-aws/lib/api-gateway-model";
import { ApiGatewayResource } from "@cdktf/provider-aws/lib/api-gateway-resource";
import { ApiGatewayRestApi } from "@cdktf/provider-aws/lib/api-gateway-rest-api";
import { ApiGatewayStage } from "@cdktf/provider-aws/lib/api-gateway-stage";
import { ApiGatewayUsagePlan } from "@cdktf/provider-aws/lib/api-gateway-usage-plan";
import { ApiGatewayUsagePlanKey } from "@cdktf/provider-aws/lib/api-gateway-usage-plan-key";
import { LambdaPermission } from "@cdktf/provider-aws/lib/lambda-permission";
import { Wafv2WebAclAssociation } from "@cdktf/provider-aws/lib/wafv2-web-acl-association";
import { ITerraformDependable } from "cdktf/lib/terraform-dependable";
import { Construct } from "constructs";

import { IProxyIntegration, IRestAPIGatewayConfig } from "./interface";

import {
  APIGatewayAuthorizer,
  APIGatewayHTTPMethod,
  APIGatewayLoggingLevel,
  APIGatewayUsagePlanKey,
} from "./types";
import { getResourceName } from "../../utils/helper";
import { Tags } from "../tags";

/* The `export class RestApiGateway` is defining a TypeScript class called `RestApiGateway` that
extends the `Construct` class. This class is used to create and manage resources related to an API
Gateway in an AWS environment using the CDK for Terraform (cdktf) library. */
export class RestApiGateway extends Construct {
  private props: IRestAPIGatewayConfig;
  private dependsOnResource: ITerraformDependable[] = [];
  public apiGateway: ApiGatewayRestApi;
  public deployment: ApiGatewayDeployment;

  constructor(scope: Construct, id: string, props: IRestAPIGatewayConfig) {
    super(scope, id);
    this.props = props;
    const { namespace, environment } = props;

    props.name = getResourceName({
      namespace,
      environment,
      name: id + "-" + props.name,
    });
    const defaultTags = new Tags(this, id + "-tags", {
      project: namespace,
      environment,
      extraTags: props.tags,
    });

    this.apiGateway = new ApiGatewayRestApi(
      this,
      props.name + "-RestAPIGateway",
      {
        name: props.name,
        description: props.description,
        endpointConfiguration: {
          types: [props.type],
        },
        tags: defaultTags.tagsOutput,
      }
    );

    for (const obj of props.proxyIntegrations) {
      this.createProxyIntegration(props.name, obj);
    }

    this.deployment = new ApiGatewayDeployment(
      this,
      props.name + "-deployment",
      {
        restApiId: this.apiGateway.id,
        dependsOn: this.dependsOnResource,
        variables: {
          deployed_at: "${timestamp()}",
        },
      }
    );

    const apiStage = new ApiGatewayStage(
      this,
      props.name + "-stage-" + this.props.stageName,
      {
        stageName: props.stageName,
        description: props.stageName,
        restApiId: this.apiGateway.id,
        deploymentId: this.deployment.id,
        dependsOn: [this.deployment],
        tags: defaultTags.tagsOutput,
      }
    );

    new ApiGatewayMethodSettings(this, props.name + "-method-setting", {
      restApiId: this.apiGateway.id,
      methodPath: "*/*",
      stageName: apiStage.stageName,
      settings: {
        dataTraceEnabled: props.dataTraceEnabled || false,
        loggingLevel: props.loggingLevel || APIGatewayLoggingLevel.OFF,
        throttlingBurstLimit: props.throttlingBurstLimit || -1,
        throttlingRateLimit: props.throttlingRateLimit || -1,
      },
      dependsOn: [apiStage],
    });

    const apiKey: ApiGatewayApiKey = new ApiGatewayApiKey(
      this,
      props.name + "-api-key",
      {
        name: props.apiKeyName ?? props.name + "-api-key",
        description: props.apiKeyName ?? props.name + "-api-key",
        enabled: props.apiKeyRequired,
        tags: defaultTags.tagsOutput,
      }
    );

    const apiKeyUsage: ApiGatewayUsagePlan = new ApiGatewayUsagePlan(
      this,
      props.name + "-api-key-usage-plan",
      {
        name:
          this.props.apiKeyUsagePlanName ?? props.name + "-api-key-usage-plan",
        description:
          this.props.apiKeyUsagePlanName ?? props.name + "-api-key-usage-plan",
        apiStages: [
          {
            apiId: this.apiGateway.id,
            stage: apiStage.stageName,
          },
        ],
        throttleSettings: {
          burstLimit: props.apiKeyBurstLimit ?? 5000,
          rateLimit: props.apiKeyRateLimit ?? 10000,
        },
        dependsOn: [apiStage, apiKey],
        tags: defaultTags.tagsOutput,
      }
    );

    new ApiGatewayUsagePlanKey(this, props.name + "-api-key-usage-plan-key", {
      keyId: apiKey.id,
      keyType: APIGatewayUsagePlanKey.API_KEY,
      usagePlanId: apiKeyUsage.id,
      dependsOn: [apiKeyUsage],
    });

    if (props.webAclArn) {
      new Wafv2WebAclAssociation(
        this,
        props.name + "-waf-apigateway-association",
        {
          resourceArn: this.apiGateway.arn + "/stages/" + props.stageName,
          webAclArn: props.webAclArn,
          dependsOn: [apiStage],
        }
      );
    }
  }

  /* The `private getAPIIntegrationURI` method in the `RestApiGateway` class is a helper method that
    generates the URI for integrating with a Lambda function in the API Gateway. It takes the name of
    the Lambda function as a parameter and constructs the ARN (Amazon Resource Name) for invoking the
    Lambda function through the API Gateway. The generated URI follows the format
    `arn:aws:apigateway:<region>:lambda:path/2015-03-31/functions/<lambdaName>/invocations`, where
    `<region>` is the AWS region and `<lambdaName>` is the name of the Lambda function being
    integrated with. */
  private getAPIIntegrationURI(lambdaName: string): string {
    return `arn:aws:apigateway:${this.props.region}:lambda:path/2015-03-31/functions/${lambdaName}/invocations`;
  }

  /* The `private createProxyIntegration` method within the `RestApiGateway` class is responsible for
    creating proxy integrations for the API Gateway. It takes in the name of the integration and an
    object containing details about the integration, such as the path, methods, authorization, and
    Lambda function to integrate with. */
  private createProxyIntegration(name: string, obj: IProxyIntegration) {
    const proxy = new ApiGatewayResource(this, name + "-proxy-" + obj.name, {
      restApiId: this.apiGateway.id,
      parentId: this.apiGateway.rootResourceId,
      pathPart: obj.path,
    });

    for (const method of obj.methods) {
      const proxyMethod: ApiGatewayMethod = new ApiGatewayMethod(
        this,
        name + "-proxy-method" + obj.name + "-" + method.name,
        {
          restApiId: this.apiGateway.id,
          resourceId: proxy.id,
          authorization: method.authorization ?? APIGatewayAuthorizer.NONE,
          httpMethod: method.method ?? APIGatewayHTTPMethod.ANY,
          apiKeyRequired: method.apiKeyRequired || false,
        }
      );
      this.dependsOnResource.push(proxyMethod);

      const proxyMethodRes: ApiGatewayMethodResponse =
        new ApiGatewayMethodResponse(
          this,
          name + "-proxy-method-response" + obj.name + "-" + method.name,
          {
            restApiId: this.apiGateway.id,
            resourceId: proxy.id,
            statusCode: "200",
            httpMethod: method.method ?? APIGatewayHTTPMethod.ANY,
            responseParameters: {
              "method.response.header.Access-Control-Allow-Origin": true,
            },
            dependsOn: [proxyMethod],
          }
        );
      this.dependsOnResource.push(proxyMethodRes);

      const apiInt: ApiGatewayIntegration = new ApiGatewayIntegration(
        this,
        name + "-proxy-integration" + obj.name + "-" + method.name,
        {
          httpMethod: proxyMethod.httpMethod,
          resourceId: proxyMethod.resourceId,
          restApiId: this.apiGateway.id,
          type: "AWS_PROXY",
          integrationHttpMethod: APIGatewayHTTPMethod.POST,
          uri: this.getAPIIntegrationURI(method.lambdaName),
        }
      );
      this.dependsOnResource.push(apiInt);

      if (method.schema) {
        const apiModel: ApiGatewayModel = new ApiGatewayModel(
          this,
          name + "-model-" + obj.name + "-" + method.name,
          {
            restApiId: this.apiGateway.id,
            contentType: "application/json",
            name: method.name,
            description: getResourceName({
              namespace: this.props.namespace,
              environment: this.props.environment,
              name: name + "-model-" + obj.name,
            }),
            schema: method.schema,
          }
        );
        this.dependsOnResource.push(apiModel);
      }

      new LambdaPermission(
        this,
        name + "-apigateway-lambda-permission" + obj.name + "-" + method.name,
        {
          action: "lambda:InvokeFunction",
          functionName: method.lambdaName,
          principal: "apigateway.amazonaws.com",
          sourceArn: `${this.apiGateway.executionArn}/*/${method.method}/${obj.path}`,
        }
      );
    }
  }
}
