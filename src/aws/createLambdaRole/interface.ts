import { IBase } from "../../utils/interfaces";

export interface ICreateLambdaRole extends IBase {
  iamRole: string;
  iamPolicy: string;
}
