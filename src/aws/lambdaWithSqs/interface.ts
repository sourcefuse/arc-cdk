import { ILambda } from "../lambda/interface";

export interface ILambdaWithSqs extends ILambda {
  /**
   * The ID or ARN of the KMS key that is used to encrypt messages in the queue.
   */
  kmsMasterKeyId: string;

  /**
   * The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again.
   */
  kmsDataKeyReusePeriodSeconds: number;

  /**
   * The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10.
   */
  maxReceiveCount: number;

  /**
   * The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0.
   */
  delaySeconds: number;

  /**
   * The maximum size of the message payload that is allowed to be published to the queue, in bytes.
   */
  maxMessageSize: number;

  /**
   * The length of time, in seconds, for which Amazon SQS retains messages that are not deleted.
   */
  messageRetentionSeconds: number;

  /**
   * The length of time, in seconds, for which the call waits for a message to arrive in the queue before returning.
   */
  receiveWaitTimeSeconds: number;

  /**
   * The maximum number of messages to retrieve from the queue during a single request to the Amazon SQS service.
   */
  batchSize: number;
}
