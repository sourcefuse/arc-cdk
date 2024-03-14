import { Wafv2IpSetConfig } from "@cdktf/provider-aws/lib/wafv2-ip-set";

/** @internal */
interface BaseConfig extends Omit<Wafv2IpSetConfig, ""> {}
export interface IWafv2IpSetConfig extends BaseConfig {
  namespace: string;
  environment: string;
}
