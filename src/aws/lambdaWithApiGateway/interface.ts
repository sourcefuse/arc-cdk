import { ILambda } from "../lambda/interface";

export interface ICustomDomainName {
  domainName: string;
  acmCertificateArn?: string;
  hostedZoneId: string;
}
export interface ILambdaWithApiGateway extends ILambda {
  customDomainName?: ICustomDomainName;
}
