import * as aws from '@cdktf/provider-aws';
import { Construct } from 'constructs';

export default class AwsProvider extends Construct {
    constructor(scope: Construct, name: string) {
        super(scope, name);
        new aws.provider.AwsProvider(this, name, {
            region: process.env.AWS_REGION,
        });
    }
}