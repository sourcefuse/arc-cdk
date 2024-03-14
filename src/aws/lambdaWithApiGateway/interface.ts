import { GatewayProtocolType } from "./types";
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

  /**
   * The protocol for the API Gateway endpoint (optional)
   */
  apiGatewayProtocolType?: GatewayProtocolType;

  /**
   * REST API gateway Method (Only applicable to REST type)
   */
  apiRestMethod?: string;

  /**
   * IS API Key required (Only applicable to REST type)
   */
  apiKeyRequired?: boolean;

  /**
   * API Key name(Only applicable to REST type)
   */
  apiKeyName?: string;
  /**
   * API Key name(Only applicable to REST type)
   */
  usagePlanName?: string;

  /**
   * API Gateway Stage (Only applicable to REST type)
   */
  stageName?: string;

  /**
   * Access-Control-Allow-Headers value (Only applicable to REST type)
   */
  accessControlAllowHeaderVal?: string;

  /**
   * Access-Control-Allow-Headers value (Only applicable to REST type)
   */
  accessControlAllowMethodVal?: string;

  /**
   * Access-Control-Allow-Headers value (Only applicable to REST type)
   */
  accessControlAllowOriginVal?: string;
}
