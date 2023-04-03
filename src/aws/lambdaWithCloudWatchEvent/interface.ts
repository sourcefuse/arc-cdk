import { ILambda } from "../lambda/interface";

export interface ILambdaWithCloudWatchEvent extends ILambda {
  scheduleExpression: string;
}
