import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILambdaWithCloudWatchEvent } from "./interface";
import { getResourceName } from "../../utils/helper";
import { Lambda } from "../lambda";

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

    const { namespace, environment, name, scheduleExpression, ...restConfig } =
      config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    const lambda = new Lambda(this, "lambda", {
      namespace,
      environment,
      name,
      ...restConfig,
    });

    const awsCloudwatchEventRuleLambdaCron =
      new aws.cloudwatchEventRule.CloudwatchEventRule(this, "lambda_cron", {
        name: resourceName,
        scheduleExpression: scheduleExpression,
      });

    new aws.cloudwatchEventTarget.CloudwatchEventTarget(this, "invoke_lambda", {
      // NOSONAR
      arn: lambda.arn,
      rule: awsCloudwatchEventRuleLambdaCron.name,
    });

    new aws.lambdaPermission.LambdaPermission( // NOSONAR
      this,
      "allow_cloudwatch_to_invoke",
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
