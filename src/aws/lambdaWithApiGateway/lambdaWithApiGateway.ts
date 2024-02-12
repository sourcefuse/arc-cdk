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
  url: string;

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

    // Create and configure API gateway
    const api = new aws.apigatewayv2Api.Apigatewayv2Api(
      this,
      "apigatewayv2Api",
      {
        name: resourceName,
        protocolType: apiGatewayProtocolType || "HTTP",
        target: lambda.arn,
        tags: defaultTags.tagsOutput,
      }
    );

    new aws.lambdaPermission.LambdaPermission(this, "lambdaPermission", {
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
            namespace,
            environment,
            tags,
          }
        );
        newCustomDomainName.acmCertificateArn = acmCertificate.acmArn;
      }
      new ApiGatewayCustomDomainName(this, "apiGatewayCustomDomainName", {
        // NOSONAR
        apiId: api.id,
        namespace,
        environment,
        tags,
        ...newCustomDomainName,
      });
    }

    this.url = customDomainName ? customDomainName.domainName : api.apiEndpoint;
  }
}
