import { IBase } from "../../utils/interfaces";

/** @internal */
interface BaseConfig extends Omit<IBase, "name"> {}

export interface IAcmCertificate extends BaseConfig {
  /**
   * The domain name associated with the certificate.
   */
  domainName: string;

  /**
   * The ID of the hosted zone associated with the domain name.
   */
  hostedZoneId: string;

  /**
   * The time to live (TTL) of the DNS record created for the validation of the certificate.
   */
  ttl?: number;
}
