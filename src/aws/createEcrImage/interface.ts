export interface ICreateEcrImage {
  /**
   * The path to the directory containing the Dockerfile and application code.
   */
  codePath: string;
  /**
   * The URL of the ECR repository to which the image will be pushed.
   */
  repositoryUrl: string;
}
