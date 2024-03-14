import { IamPolicyConfig } from "@cdktf/provider-aws/lib/iam-policy";
import { IamRoleConfig } from "@cdktf/provider-aws/lib/iam-role";

/** @internal */
interface RoleConfig extends Omit<IamRoleConfig, "managedPolicyArns"> {}
/** @internal */
interface PolicyConfig extends Omit<IamPolicyConfig, ""> {}

export interface IIamRoleConfig extends RoleConfig {
  managedPolicyArns?: string[];
}

export interface IIamPolicyConfig extends PolicyConfig {}
export interface IIamRole {
  namespace: string;
  environment: string;
  iamPolicyConfig?: IIamPolicyConfig;
  iamRoleConfig: IIamRoleConfig;
  tags: { [key: string]: string };
}
