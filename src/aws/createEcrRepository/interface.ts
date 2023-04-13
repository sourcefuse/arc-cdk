import { EcrRepositoryConfig } from "@cdktf/provider-aws/lib/ecr-repository";
import { IBase } from "../../utils/interfaces";

/** @internal */
interface EcrRepoConfig extends Omit<EcrRepositoryConfig, "name"> {}

export interface ICreateEcrRepository extends IBase, EcrRepoConfig {}
