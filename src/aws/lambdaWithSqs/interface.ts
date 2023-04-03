import { ILambda } from "../lambda/interface";

export interface ILambdaWithSqs extends ILambda {
  kmsMasterKeyId: string;
  kmsDataKeyReusePeriodSeconds: number;
  maxReceiveCount: number;
  delaySeconds: number;
  maxMessageSize: number;
  messageRetentionSeconds: number;
  receiveWaitTimeSeconds: number;
  batchSize: number;
}
