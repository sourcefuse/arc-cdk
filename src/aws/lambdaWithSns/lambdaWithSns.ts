import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithSns } from "./interface";
import { iamLambdaRole, iamSnsPolicy } from "../../constants";
import { getResourceName } from "../../utils/helper";
import { Lambda } from "../lambda";
import { Tags } from "../tags";
export class LambdaWithSns extends Construct {
  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
  constructor(scope: Construct, id: string, config: ILambdaWithSns) {
    super(scope, id);

    const {
      namespace,
      environment,
      name,
      kmsMasterKeyId,
      createRole,
      tags,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    const defaultTags = new Tags(this, "lambdaWithSnsTags", {
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
        iamPolicy: createRole?.iamPolicy ?? JSON.stringify(iamSnsPolicy),
      },
      tags,
      ...restConfig,
    });

    const awsSnsTopic = new aws.snsTopic.SnsTopic(this, "sns-topic", {
      name: resourceName,
      kmsMasterKeyId: kmsMasterKeyId,
      tags: defaultTags.tagsOutput,
    });

    new aws.snsTopicSubscription.SnsTopicSubscription(
      this,
      "snsTopicSubscription",
      {
        // NOSONAR
        topicArn: awsSnsTopic.arn,
        protocol: "lambda",
        endpoint: lambda.arn,
      }
    );

    new aws.lambdaPermission.LambdaPermission(this, "snsLambdaPermission", {
      // NOSONAR
      action: "lambda:InvokeFunction",
      functionName: lambda.functionName,
      principal: "sns.amazonaws.com",
      sourceArn: awsSnsTopic.arn,
    });
  }
}
