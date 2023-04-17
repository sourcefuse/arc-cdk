import { IBase } from "../../utils/interfaces";

export interface ICreateEcrImage extends IBase {
  /**
   * The path to the directory containing the Dockerfile and application code.
   */
  codePath: string;
  /**
   * The URL of the ECR repository to which the image will be pushed.
   */
  repositoryUrl: string;
}
