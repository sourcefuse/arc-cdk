import * as aws from "@cdktf/provider-aws";
import { LambdaFunction } from "@cdktf/provider-aws/lib/lambda-function";
import { AssetType, TerraformAsset } from "cdktf";
import { Construct } from "constructs";
import { ILambda } from "./interface";
import { iamLambdaPolicy, iamLambdaRole } from "../../constants";
import { getResourceName } from "../../utils/helper";
import { CreateLambdaRole } from "../createLambdaRole";

export class Lambda extends Construct {
  arn: string;
  functionName: string;
  lambdaFunc: LambdaFunction;

  constructor(scope: Construct, id: string, config: ILambda) {
    super(scope, id);

    let {
      namespace,
      environment,
      codePath,
      layerPath,
      roleArn,
      envVars,
      name,
      invocationData,
      createRole,
      s3Bucket,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    // Creating Archive of Lambda
    const asset = new TerraformAsset(this, "lambda-asset", {
      path: codePath,
      type: AssetType.ARCHIVE, // if left empty it infers directory and file
    });

    const layers: string[] = [];
    if (layerPath) {
      // Creating Archive of Lambda Layer
      const layerAsset = new TerraformAsset(this, "lambda-layer-asset", {
        path: layerPath,
        type: AssetType.ARCHIVE, // if left empty it infers directory and file
      });

      let lambdaLayers: aws.lambdaLayerVersion.LambdaLayerVersion;

      if (s3Bucket) {
        const s3Object = new aws.s3Object.S3Object(this, "s3", {
          bucket: s3Bucket,
          key: resourceName,
          source: layerAsset.path,
        });
        lambdaLayers = new aws.lambdaLayerVersion.LambdaLayerVersion(
          this,
          "lambda-layer",
          {
            s3Bucket: s3Bucket,
            s3Key: s3Object.key,
            layerName: "resourceName",
          }
        );
      } else {
        // Create Lambda Layer for function
        lambdaLayers = new aws.lambdaLayerVersion.LambdaLayerVersion(
          this,
          "lambda-layer",
          {
            filename: layerAsset.path,
            layerName: resourceName,
          }
        );
      }
      layers.push(lambdaLayers.arn);
    }

    if (!roleArn) {
      createRole = {
        iamPolicy: createRole?.iamPolicy ?? JSON.stringify(iamLambdaPolicy),
        iamRole: createRole?.iamRole ?? JSON.stringify(iamLambdaRole),
      };
      const role = new CreateLambdaRole(this, "lambda-role", {
        namespace,
        environment,
        name: resourceName,
        iamRole: createRole.iamRole,
        iamPolicy: createRole.iamPolicy,
      });
      roleArn = role.arn;
    }

    // Create Lambda function
    this.lambdaFunc = new aws.lambdaFunction.LambdaFunction(
      this,
      "lambda-function",
      {
        functionName: resourceName,
        filename: asset.path,
        role: roleArn,
        layers,
        ...restConfig,
      }
    );

    if (invocationData) {
      new aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation( // NOSONAR
        this,
        "invocation",
        {
          functionName: this.lambdaFunc.functionName,
          input: invocationData,
        }
      );
    }

    if (envVars) {
      this.lambdaFunc.putEnvironment({ variables: envVars });
    }

    this.arn = this.lambdaFunc.arn;
    this.functionName = this.lambdaFunc.functionName;
  }
}
