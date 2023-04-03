export interface IApiGatewayCustomDomainName {
  domainName: string;
  acmCertificateArn: string;
  hostedZoneId: string;
  apiId: string;
  apiStage?: string;
}
