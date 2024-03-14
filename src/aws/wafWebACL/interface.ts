import { Wafv2WebAclConfig } from "@cdktf/provider-aws/lib/wafv2-web-acl";
import { Wafv2WebAclRule } from "@cdktf/provider-aws/lib/wafv2-web-acl/index-structs";

/** @internal */
interface BaseConfig extends Omit<Wafv2WebAclConfig, "rule"> {}
export interface IWafV2WebAclConfig extends BaseConfig {
  namespace: string;
  environment: string;
  rule: Wafv2WebAclRule[];
}
