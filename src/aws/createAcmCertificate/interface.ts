export interface IAcmCertificate {
  domainName: string;
  hostedZoneId: string;
  ttl?: number;
}
