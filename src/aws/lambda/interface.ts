import { LambdaFunctionConfig } from "@cdktf/provider-aws/lib/lambda-function";
import { IBase } from "../../utils/interfaces";

/** @internal */
interface LambdaConfig
  extends Omit<
    LambdaFunctionConfig,
    | "environment"
    | "role"
    | "functionName"
    | "layers"
    | "filename"
    | "packageType"
    | "imageUri"
  > {}

export interface ICreateRole {
  /**
   *  The IAM Role to be created.
   */
  iamRole: string;

  /**
   * The IAM Policy to be created.
   */
  iamPolicy: string;
}

export interface ILambda extends IBase, LambdaConfig {
  /**
   * The local path to the directory containing the Lambda function's code.
   */
  codePath: string;

  /**
   * The local path to the directory containing the Lambda function's layer code (optional).
   */
  layerPath?: string;

  /**
   * The ARN of an existing IAM role to attach to the Lambda function (optional).
   */
  roleArn?: string;

  /**
   * The S3 bucket to upload the Lambda function's code to (optional).
   */
  s3Bucket?: string;

  /**
   * Configuration for creating a new IAM role to attach to the Lambda function (optional).
   */
  createRole?: ICreateRole;

  /**
   * The environment variables to set for the Lambda function (optional).
   */
  envVars?: {
    [x: string]: string;
  };

  /**
   * The data to pass to the Lambda function when it is invoked (optional).
   */
  invocationData?: string;

  /**
   * Whether to use a Docker image for the Lambda function (optional).
   */
  useImage?: boolean;
}

export interface IEnvironmentVars {
  [key: string]: string
}