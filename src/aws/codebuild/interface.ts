import { CodebuildProjectConfig } from "@cdktf/provider-aws/lib/codebuild-project";

/** @internal */
interface BaseConfig extends Omit<CodebuildProjectConfig, ""> {}
export interface ICodebuildProjectConfig extends BaseConfig {
  namespace: string;
  // environment: string;
}
