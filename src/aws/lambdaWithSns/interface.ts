import { ILambda } from "../lambda/interface";

export interface ILambdaWithSns extends ILambda {
  /**
   * The AWS KMS key ID for encrypting messages sent to the function.
   */
  kmsMasterKeyId: string;
}
