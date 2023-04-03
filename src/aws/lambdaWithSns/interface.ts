import { ILambda } from "../lambda/interface";

export interface ILambdaWithSns extends ILambda {
  kmsMasterKeyId: string;
}
