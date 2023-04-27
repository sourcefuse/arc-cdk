import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithCloudWatchEvent } from "./interface";
import { getResourceName } from "../../utils/helper";
import { Lambda } from "../lambda";
import { Tags } from "../tags";

export class LambdaWithCloudWatchEvent extends Construct {
  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
  constructor(
    scope: Construct,
    id: string,
    config: ILambdaWithCloudWatchEvent
  ) {
    super(scope, id);

    const {
      namespace,
      environment,
      name,
      scheduleExpression,
      tags,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    const defaultTags = new Tags(this, "lambdaWithCloudWatchEventTags", {
      project: namespace,
      environment,
      extraTags: tags,
    });

    const lambda = new Lambda(this, "lambda", {
      namespace,
      environment,
      name,
      tags,
      ...restConfig,
    });

    const awsCloudwatchEventRuleLambdaCron =
      new aws.cloudwatchEventRule.CloudwatchEventRule(
        this,
        "cloudwatchEventRule",
        {
          name: resourceName,
          scheduleExpression: scheduleExpression,
          tags: defaultTags.tagsOutput,
        }
      );

    new aws.cloudwatchEventTarget.CloudwatchEventTarget(
      this,
      "cloudwatchEventTarget",
      {
        // NOSONAR
        arn: lambda.arn,
        rule: awsCloudwatchEventRuleLambdaCron.name,
      }
    );

    new aws.lambdaPermission.LambdaPermission( // NOSONAR
      this,
      "CloudWatchLambdaPermission",
      {
        action: "lambda:InvokeFunction",
        functionName: lambda.functionName,
        principal: "events.amazonaws.com",
        sourceArn: awsCloudwatchEventRuleLambdaCron.arn,
        statementId: "CloudWatchInvoke",
      }
    );
  }
}
