import { ILambda } from "../lambda/interface";

export interface ICustomDomainName {
  /**
   * The domain name to use for the custom domain.
   */
  domainName: string;

  /**
   * The ARN of the ACM certificate to use for SSL/TLS encryption.
   */
  acmCertificateArn?: string;

  /**
   * The ID of the Amazon Route 53 hosted zone associated with the domain.
   */
  hostedZoneId: string;
}

export interface ILambdaWithApiGateway extends ILambda {
  /**
   * Custom domain name for the API Gateway endpoint (optional)
   */
  customDomainName?: ICustomDomainName;
}
