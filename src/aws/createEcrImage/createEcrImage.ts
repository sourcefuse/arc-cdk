import * as aws from "@cdktf/provider-aws";
import * as docker from "@cdktf/provider-docker";
import { RegistryImage } from "@cdktf/provider-docker/lib/registry-image";
import { Construct } from "constructs";
import ShortUniqueId from "short-unique-id";
import { ICreateEcrImage } from "./interface";
export class CreateEcrImage extends Construct {
  /** The created ECR image. */
  ecrImage: RegistryImage;

  /**
   * Creates a new CreateEcrImage object.
   * @param scope The parent Construct of this stack.
   * @param id The ID of this construct.
   * @param config The configuration options for creating the ECR image.
   */
  constructor(scope: Construct, id: string, config: ICreateEcrImage) {
    super(scope, id);

    const { codePath, repositoryUrl } = config;

    const awsCallerIdentity =
      new aws.dataAwsCallerIdentity.DataAwsCallerIdentity(
        this,
        "awsCallerIdentity"
      );

    const awsEcrAuthorizationToken =
      new aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken(
        this,
        "awsEcrAuthorizationToken"
      );

    new docker.provider.DockerProvider(this, "auth", {
      registryAuth: [
        {
          address: `${awsCallerIdentity.accountId}.dkr.ecr.${process.env.AWS_REGION}.amazonaws.com`,
          password: awsEcrAuthorizationToken.password,
          username: awsEcrAuthorizationToken.userName,
        },
      ],
    });

    const uid = new ShortUniqueId({ length: 10 });
    const dockerImage = new docker.image.Image(this, "image", {
      buildAttribute: {
        context: codePath,
      },
      name: `${repositoryUrl}:${uid()}`,
    });

    this.ecrImage = new docker.registryImage.RegistryImage(this, "ecr-image", {
      name: dockerImage.name,
    });
  }
}
