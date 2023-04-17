import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithSqs } from "./interface";
import { iamLambdaRole, iamSqsPolicy } from "../../constants";
import { getResourceName } from "../../utils/helper";
import { Lambda } from "../lambda";

export class LambdaWithSqs extends Construct {
  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
  constructor(scope: Construct, id: string, config: ILambdaWithSqs) {
    super(scope, id);

    const {
      namespace,
      environment,
      name,
      kmsMasterKeyId,
      kmsDataKeyReusePeriodSeconds,
      maxReceiveCount,
      delaySeconds,
      maxMessageSize,
      messageRetentionSeconds,
      receiveWaitTimeSeconds,
      batchSize,
      createRole,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    const lambda = new Lambda(this, "lambda", {
      namespace,
      environment,
      name,
      createRole: {
        iamRole: createRole?.iamRole ?? JSON.stringify(iamLambdaRole),
        iamPolicy: createRole?.iamPolicy ?? JSON.stringify(iamSqsPolicy),
      },
      ...restConfig,
    });

    //Creating DLQueue
    const resultsUpdatesDlQueue = new aws.sqsQueue.SqsQueue(this, "dl-queue", {
      name: `${resourceName}-dlq`,
      kmsMasterKeyId,
      kmsDataKeyReusePeriodSeconds,
    });

    const redrivePolicy = {
      deadLetterTargetArn: resultsUpdatesDlQueue.arn,
      maxReceiveCount,
    };

    // Create SqsQueue
    const awsSqsQueue = new aws.sqsQueue.SqsQueue(this, "sqs-queue", {
      delaySeconds,
      maxMessageSize,
      messageRetentionSeconds,
      receiveWaitTimeSeconds,
      name: resourceName,
      policy: JSON.stringify(iamSqsPolicy),
      redrivePolicy: JSON.stringify(redrivePolicy),
      kmsMasterKeyId: kmsMasterKeyId,
      kmsDataKeyReusePeriodSeconds: kmsDataKeyReusePeriodSeconds,
    });

    new aws.lambdaEventSourceMapping.LambdaEventSourceMapping( // NOSONAR
      this,
      "event-source-mapping",
      {
        eventSourceArn: awsSqsQueue.arn,
        enabled: true,
        functionName: lambda.arn,
        batchSize,
      }
    );
  }
}
