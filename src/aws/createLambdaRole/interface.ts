import { IBase } from "../../utils/interfaces";

export interface ICreateLambdaRole extends IBase {
  /**
   *  The IAM Role to be created.
   */
  iamRole: string;

  /**
   * The IAM Policy to be created.
   */
  iamPolicy: string;
}
