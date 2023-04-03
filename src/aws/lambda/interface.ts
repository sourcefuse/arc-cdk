import { LambdaFunctionConfig } from "@cdktf/provider-aws/lib/lambda-function";
import { IBase } from "../../utils/interfaces";

/** @internal */
interface LambdaConfig
  extends Omit<LambdaFunctionConfig, "environment" | "role" | "functionName"> {}

export interface ICreateRole {
  iamRole: string;
  iamPolicy: string;
}
export interface ILambda extends IBase, LambdaConfig {
  codePath: string;
  layerPath?: string;
  roleArn?: string;
  s3Bucket?: string;
  createRole?: ICreateRole;
  envVars?: {
    [x: string]: string;
  };
  invocationData?: string;
}
