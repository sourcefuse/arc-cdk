import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithSns } from "./interface";
import { iamLambdaRole, iamSnsPolicy } from "../../constants";
import { getResourceName } from "../../utils/helper";
import { Lambda } from "../lambda";

export class LambdaWithSns extends Construct {
  constructor(scope: Construct, id: string, config: ILambdaWithSns) {
    super(scope, id);

    const {
      namespace,
      environment,
      name,
      kmsMasterKeyId,
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
        iamPolicy: createRole?.iamPolicy ?? JSON.stringify(iamSnsPolicy),
      },
      ...restConfig,
    });

    const awsSnsTopic = new aws.snsTopic.SnsTopic(this, "sns-topic", {
      name: resourceName,
      kmsMasterKeyId: kmsMasterKeyId,
    });

    new aws.snsTopicSubscription.SnsTopicSubscription(
      this,
      "sns-topic-subscription",
      {
        // NOSONAR
        topicArn: awsSnsTopic.arn,
        protocol: "lambda",
        endpoint: lambda.arn,
      }
    );

    new aws.lambdaPermission.LambdaPermission( // NOSONAR
      this,
      "lambda-permission-with-sns",
      {
        action: "lambda:InvokeFunction",
        functionName: lambda.functionName,
        principal: "sns.amazonaws.com",
        sourceArn: awsSnsTopic.arn,
      }
    );
  }
}
