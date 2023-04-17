import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ICreateLambdaRole } from "./interface";
import { getResourceName } from "../../utils/helper";

export class CreateLambdaRole extends Construct {
  /**
   * The ARN of the created IAM role.
   */
  arn: string;

  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
  constructor(scope: Construct, id: string, config: ICreateLambdaRole) {
    super(scope, id);

    const { namespace, environment, name, iamRole, iamPolicy } = config;

    const resourceName = getResourceName({
      namespace: namespace,
      environment: environment,
      name: name,
    });

    // Create Lambda role
    const role = new aws.iamRole.IamRole(this, "lambda-exec", {
      name: resourceName,
      assumeRolePolicy: iamRole,
    });
    const lambdaRole = new aws.iamPolicy.IamPolicy(this, "lambda-policy", {
      policy: iamPolicy,
    });

    // Add execution role for lambda to write to CloudWatch logs
    new aws.iamRolePolicyAttachment.IamRolePolicyAttachment( // NOSONAR
      this,
      "lambda-managed-policy",
      {
        policyArn: lambdaRole.arn,
        role: role.name,
      }
    );

    this.arn = role.arn;
  }
}
