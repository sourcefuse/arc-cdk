export interface IApiGatewayCustomDomainName {
  /**
   * The domain name for the custom domain.
   */
  domainName: string;
  /**
   * The ARN of the ACM certificate for the custom domain.
   */
  acmCertificateArn: string;
  /**
   * The ID of the Route 53 hosted zone that contains the domain record sets for the custom domain.
   */
  hostedZoneId: string;
  /**
   * The ID of the API Gateway API that is associated with the custom domain.
   */
  apiId: string;
  /**
   * The name of the deployment stage associated with the custom domain (if any).
   */
  apiStage?: string;
}
