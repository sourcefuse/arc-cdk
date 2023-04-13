import { IBase } from "../../utils/interfaces";

export interface ICreateEcrImage extends IBase {
  codePath: string;
  repositoryUrl: string;
}
