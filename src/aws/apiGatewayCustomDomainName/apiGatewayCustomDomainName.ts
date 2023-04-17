import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { IApiGatewayCustomDomainName } from "./interface";

/**
 * Represents a custom domain name for an API Gateway.
 */
export class ApiGatewayCustomDomainName extends Construct {
  /**
   * Creates a new `ApiGatewayCustomDomainName`.
   * @param scope  The parent construct.
   * @param id  The ID of the construct.
   * @param config  The configuration for the custom domain name.
   */
  constructor(
    scope: Construct,
    id: string,
    config: IApiGatewayCustomDomainName
  ) {
    super(scope, id);

    let { domainName, apiStage, acmCertificateArn, apiId, hostedZoneId } =
      config;

    const apigatewayv2DomainName =
      new aws.apigatewayv2DomainName.Apigatewayv2DomainName(
        this,
        "api-gw-domain",
        {
          domainName,
          domainNameConfiguration: {
            endpointType: "REGIONAL",
            certificateArn: acmCertificateArn,
            securityPolicy: "TLS_1_2",
          },
        }
      );

    apiStage = apiStage ?? "$default";

    const apigatewayv2ApiMapping =
      new aws.apigatewayv2ApiMapping.Apigatewayv2ApiMapping(
        this,
        "path-mapping",
        {
          apiId,
          stage: apiStage,
          domainName: apigatewayv2DomainName.domainName,
        }
      );

    new aws.route53Record.Route53Record(this, "app_domain_records", {
      // NOSONAR
      alias: {
        evaluateTargetHealth: false,
        name: apigatewayv2DomainName.domainNameConfiguration.targetDomainName,
        zoneId: apigatewayv2DomainName.domainNameConfiguration.hostedZoneId,
      },

      name: apigatewayv2ApiMapping.domainName,
      type: "A",
      zoneId: hostedZoneId,
    });
  }
}
