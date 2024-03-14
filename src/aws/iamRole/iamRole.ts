import { IamPolicy } from "@cdktf/provider-aws/lib/iam-policy";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";
import { Construct } from "constructs";
import { IIamRole } from "./interface";
import { Tags } from "../tags";

export class IAMRole extends Construct {
  iamRole: IamRole;
  private managedPolicyArns: string[] = [];

  constructor(scope: Construct, id: string, props: IIamRole) {
    super(scope, id);
    const { namespace, environment } = props;
    const defaultTags = new Tags(this, id + "-tags", {
      project: namespace,
      environment,
      extraTags: props.tags,
    });

    if (props.iamPolicyConfig) {
      const policy = new IamPolicy(this, id + "-iam-policy", {
        ...props.iamPolicyConfig,
        tags: defaultTags.tagsOutput,
      });
      this.managedPolicyArns.push(policy.arn);
    }
    props.iamRoleConfig.managedPolicyArns = this.managedPolicyArns;
    this.iamRole = new IamRole(this, id + "-role", {
      ...props.iamRoleConfig,
      tags: defaultTags.tagsOutput,
    });
  }
}
