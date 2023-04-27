import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ICreateLambdaRole } from "./interface";
import { getResourceName } from "../../utils/helper";
import { Tags } from "../tags";
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

    const { namespace, environment, name, iamRole, iamPolicy, tags } = config;

    const resourceName = getResourceName({
      namespace: namespace,
      environment: environment,
      name: name,
    });

    const defaultTags = new Tags(this, "createEcrRepositoryTags", {
      project: namespace,
      environment,
      extraTags: tags,
    });

    // Create Lambda role
    const role = new aws.iamRole.IamRole(this, "iamRole", {
      name: resourceName,
      assumeRolePolicy: iamRole,
      tags: defaultTags.tagsOutput,
    });

    const lambdaRole = new aws.iamPolicy.IamPolicy(this, "iamPolicy", {
      policy: iamPolicy,
      tags: defaultTags.tagsOutput,
    });

    // Add execution role for lambda to write to CloudWatch logs
    new aws.iamRolePolicyAttachment.IamRolePolicyAttachment( // NOSONAR
      this,
      "iamRolePolicyAttachment",
      {
        policyArn: lambdaRole.arn,
        role: role.name,
      }
    );

    this.arn = role.arn;
  }
}
