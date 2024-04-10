import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithSqs } from "./interface";
import { iamLambdaRole, iamSqsPolicy } from "../../constants";
import { getResourceName } from "../../utils/helper";
import { Lambda } from "../lambda";
import { Tags } from "../tags";
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
      tags,
      fifoQueue,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    const defaultTags = new Tags(this, "lambdaWithSqsTags", {
      project: namespace,
      environment,
      extraTags: tags,
    });

    const lambda = new Lambda(this, "lambda", {
      namespace,
      environment,
      name,
      createRole: {
        iamRole: createRole?.iamRole ?? JSON.stringify(iamLambdaRole),
        iamPolicy: createRole?.iamPolicy ?? JSON.stringify(iamSqsPolicy),
      },
      tags,
      ...restConfig,
    });

    //Creating DLQueue
    const resultsUpdatesDlQueue = new aws.sqsQueue.SqsQueue(this, "dlQueue", {
      name: `${resourceName}-dlq`,
      kmsMasterKeyId,
      kmsDataKeyReusePeriodSeconds,
      tags: defaultTags.tagsOutput,
    });

    const redrivePolicy = {
      deadLetterTargetArn: resultsUpdatesDlQueue.arn,
      maxReceiveCount,
    };

    // Create SqsQueue
    const awsSqsQueue = new aws.sqsQueue.SqsQueue(this, "sqsQueue", {
      delaySeconds,
      maxMessageSize,
      messageRetentionSeconds,
      receiveWaitTimeSeconds,
      name: !fifoQueue ? resourceName : resourceName + ".fifo",
      policy: JSON.stringify(iamSqsPolicy),
      redrivePolicy: JSON.stringify(redrivePolicy),
      kmsMasterKeyId: kmsMasterKeyId,
      kmsDataKeyReusePeriodSeconds: kmsDataKeyReusePeriodSeconds,
      tags: defaultTags.tagsOutput,
      fifoQueue,
    });

    // Update SQS visibility timeout if lambda has a timeout.
    awsSqsQueue.visibilityTimeoutSeconds = config.timeout ?? 30;

    new aws.lambdaEventSourceMapping.LambdaEventSourceMapping( // NOSONAR
      this,
      "lambdaEventSourceMapping",
      {
        eventSourceArn: awsSqsQueue.arn,
        enabled: true,
        functionName: lambda.arn,
        batchSize,
      }
    );
  }
}
