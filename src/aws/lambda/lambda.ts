import * as aws from "@cdktf/provider-aws";
import {
  LambdaFunction,
  LambdaFunctionConfig,
} from "@cdktf/provider-aws/lib/lambda-function";
import { AssetType, TerraformAsset } from "cdktf";
import { Construct } from "constructs";
import { ILambda } from "./interface";
import { iamLambdaPolicy, iamLambdaRole } from "../../constants";
import { getResourceName } from "../../utils/helper";
import { CreateEcrImage } from "../createEcrImage";
import { CreateEcrRepository } from "../createEcrRepository";
import { CreateLambdaRole } from "../createLambdaRole";
import { Tags } from "../tags";
import { UpdateEnvironmentVariable } from "./utils";

export class Lambda extends Construct {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   */
  arn: string;

  /**
   * The name of the Lambda function.
   */
  functionName: string;

  /**
   * The LambdaFunction construct representing the created Lambda function.
   */
  lambdaFunc: LambdaFunction;

  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for this resource.
   */
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
      useImage,
      tags,
      ...restConfig
    } = config;

    const resourceName = getResourceName({
      namespace,
      environment,
      name,
    });

    const defaultTags = new Tags(this, "lambdaTags", {
      project: namespace,
      environment,
      extraTags: tags,
    });

    if (!roleArn) {
      createRole = {
        iamPolicy: createRole?.iamPolicy ?? JSON.stringify(iamLambdaPolicy),
        iamRole: createRole?.iamRole ?? JSON.stringify(iamLambdaRole),
      };
      const role = new CreateLambdaRole(this, "createLambdaRole", {
        namespace,
        environment,
        name: resourceName,
        iamRole: createRole.iamRole,
        iamPolicy: createRole.iamPolicy,
        tags,
      });
      roleArn = role.arn;
    }

    let lambdaConfig: LambdaFunctionConfig = {
      functionName: resourceName,
      role: roleArn,
      tags: defaultTags.tagsOutput,
    };

    if (useImage) {
      const repo = new CreateEcrRepository(this, "lambda-repo", {
        namespace,
        environment,
        name,
        tags,
      });

      const image = new CreateEcrImage(this, "lambda-image", {
        codePath,
        repositoryUrl: repo.ecrRepository.repositoryUrl,
      });

      lambdaConfig = {
        ...lambdaConfig,
        imageUri: image?.ecrImage?.name,
        packageType: "Image",
        sourceCodeHash: image?.ecrImage?.id,
        ...restConfig,
      };
    } else {
      // Creating Archive of Lambda
      const asset = new TerraformAsset(this, "lambdaCodeAsset", {
        path: codePath,
        type: AssetType.ARCHIVE, // if left empty it infers directory and file
      });

      const layers: string[] = [];
      if (layerPath) {
        // Creating Archive of Lambda Layer
        const layerAsset = new TerraformAsset(this, "lambdaLayerAsset", {
          path: layerPath,
          type: AssetType.ARCHIVE, // if left empty it infers directory and file
        });

        let lambdaLayers: aws.lambdaLayerVersion.LambdaLayerVersion;

        if (s3Bucket) {
          const s3Object = new aws.s3Object.S3Object(this, "s3Object", {
            bucket: s3Bucket,
            key: resourceName,
            source: layerAsset.path,
            tags: defaultTags.tagsOutput,
          });

          lambdaLayers = new aws.lambdaLayerVersion.LambdaLayerVersion(
            this,
            "lambdaLayerVersion",
            {
              s3Bucket: s3Bucket,
              s3Key: s3Object.key,
              layerName: resourceName,
              sourceCodeHash: `\${filebase64sha256("${layerAsset.path}")}`,
            }
          );
        } else {
          // Create Lambda Layer for function
          lambdaLayers = new aws.lambdaLayerVersion.LambdaLayerVersion(
            this,
            "lambdaLayerVersion",
            {
              filename: layerAsset.path,
              layerName: resourceName,
            }
          );
        }
        layers.push(lambdaLayers.arn);
      }

      lambdaConfig = {
        ...lambdaConfig,
        layers,
        filename: asset.path,
        sourceCodeHash: `\${filebase64sha256("${asset.path}")}`,
        ...restConfig,
      };
    }

    // Create Lambda function
    this.lambdaFunc = new aws.lambdaFunction.LambdaFunction(
      this,
      "lambdaFunction",
      lambdaConfig
    );

    if (invocationData) {
      new aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation( // NOSONAR
        this,
        "dataAwsLambdaInvocation",
        {
          functionName: this.lambdaFunc.functionName,
          input: invocationData,
        }
      );
    }

    if (envVars) {
      this.lambdaFunc.putEnvironment({
        variables: UpdateEnvironmentVariable(this, envVars)
      });
    }

    this.arn = this.lambdaFunc.arn;
    this.functionName = this.lambdaFunc.functionName;
  }
}
