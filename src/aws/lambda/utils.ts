import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { IEnvironmentVars } from "./interface";

const ssmRefSyntax = RegExp(
  /^(?:\${)?ssm(?:\.([a-zA-Z0-9-]+))?:([a-zA-Z0-9_.\-/]+)[~]?(true|false|split)?/
);

/* The `getParsedValue` function is responsible for parsing and resolving values for environment
variables. It takes in the scope (a Construct object), the key (the name of the environment
variable), and the value (the value of the environment variable) as parameters. */
const getParsedValue = (
  scope: Construct,
  key: string,
  value: string
): string => {
  if (value.indexOf("ssm:") > -1) {
    const groups = value.match(ssmRefSyntax);
    if (groups && groups.length > 0) {
      const param = groups[2];
      const decrypt = groups[3] === "true";
      const configSSM = {
        name: param,
        withDecryption: decrypt,
      };
      const latestStringToken = new aws.dataAwsSsmParameter.DataAwsSsmParameter(
        scope,
        "ssm-" + key,
        configSSM as aws.dataAwsSsmParameter.DataAwsSsmParameterConfig
      );
      value = latestStringToken.value;
    }
  }
  return value;
};

export const UpdateEnvironmentVariable = (
  scope: Construct,
  env: IEnvironmentVars
): IEnvironmentVars => {
  for (const key in env) {
    const value: string = env[key];
    env[key] = getParsedValue(scope, key, value);
  }
  return env;
};
