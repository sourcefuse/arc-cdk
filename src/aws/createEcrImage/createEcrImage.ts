import * as aws from "@cdktf/provider-aws";
import * as docker from "@cdktf/provider-docker";
import { RegistryImage } from "@cdktf/provider-docker/lib/registry-image";
import { Construct } from "constructs";
import { ICreateEcrImage } from "./interface";
import { getResourceName } from "../../utils/helper";

export class CreateEcrImage extends Construct {
  ecrImage: RegistryImage;
  constructor(scope: Construct, id: string, config: ICreateEcrImage) {
    super(scope, id);

    const { namespace, environment, name, codePath, repositoryUrl } = config;

    const resourceName = getResourceName({
      namespace: namespace,
      environment: environment,
      name: name,
    });

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

    const dockerImage = new docker.image.Image(this, "image", {
      buildAttribute: {
        context: codePath,
      },
      name: `${repositoryUrl}:${resourceName}`,
    });

    this.ecrImage = new docker.registryImage.RegistryImage(this, "ecr-image", {
      name: dockerImage.name,
    });
  }
}
