import { ILambda } from "../lambda/interface";

export interface ILambdaWithCloudWatchEvent extends ILambda {
  /**
   * The schedule expression for the CloudWatch Event.
   */
  scheduleExpression: string;
}
