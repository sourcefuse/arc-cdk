import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ICreateEcrRepository } from "./interface";
import { getResourceName } from "../../utils/helper";

export class CreateEcrRepository extends Construct {
  /**
   * The created Amazon ECR repository.
   */
  ecrRepository: aws.ecrRepository.EcrRepository;

  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration options for creating the Amazon ECR repository.
   */
  constructor(scope: Construct, id: string, config: ICreateEcrRepository) {
    super(scope, id);

    const { namespace, environment, name, ...restConfig } = config;

    const resourceName = getResourceName({
      namespace: namespace,
      environment: environment,
      name: name,
    });

    this.ecrRepository = new aws.ecrRepository.EcrRepository(
      this,
      "ecr-repository",
      {
        name: resourceName,
        imageScanningConfiguration: {
          scanOnPush: true,
        },
        ...restConfig,
      }
    );
  }
}
