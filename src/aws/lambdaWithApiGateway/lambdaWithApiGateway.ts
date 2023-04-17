import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithApiGateway } from "./interface";
import { getResourceName } from "../../utils/helper";
import { ApiGatewayCustomDomainName } from "../apiGatewayCustomDomainName";
import { CreateAcmCertificate } from "../createAcmCertificate";
import { Lambda } from "../lambda";

export class LambdaWithApiGateway extends Construct {
  /**
   * The HTTP URL of the API Gateway or the domain name if the custom domain name is provided.
   */
  url: string;

  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
  constructor(scope: Construct, id: string, config: ILambdaWithApiGateway) {
    super(scope, id);

    let { namespace, environment, name, customDomainName, ...restConfig } =
      config;

    const resourceName = getResourceName({
      namespace: namespace,
      environment: environment,
      name,
    });

    const lambda = new Lambda(this, `lambda`, {
      namespace,
      environment,
      name,
      ...restConfig,
    });

    // Create and configure API gateway
    const api = new aws.apigatewayv2Api.Apigatewayv2Api(this, "api-gw", {
      name: resourceName,
      protocolType: "HTTP",
      target: lambda.arn,
    });

    new aws.lambdaPermission.LambdaPermission(this, "apigw-lambda-permission", {
      // NOSONAR
      functionName: lambda.functionName,
      action: "lambda:InvokeFunction",
      principal: "apigateway.amazonaws.com",
      sourceArn: `${api.executionArn}/*/*`,
    });

    if (customDomainName) {
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
          }
        );
        newCustomDomainName.acmCertificateArn = acmCertificate.acmArn;
      }
      new ApiGatewayCustomDomainName(this, "api-gateway-custom-domain-name", {
        // NOSONAR
        apiId: api.id,
        ...newCustomDomainName,
      });
    }

    this.url = customDomainName ? customDomainName.domainName : api.apiEndpoint;
  }
}
