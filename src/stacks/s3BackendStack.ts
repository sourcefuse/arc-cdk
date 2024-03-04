import { TerraformStack, S3Backend, S3BackendConfig } from "cdktf";
import { Construct } from "constructs";
import AwsProvider from "./awsProvider";

export class S3BackendStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: S3BackendConfig) {
    super(scope, id);
    new AwsProvider(this, "aws");
    new S3Backend(this, config);
  }
}
