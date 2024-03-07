## ARC-CDK Lambda

* ### Setting up the Environment Variables

    *  All parameters which needs to be fetched from ssm will be started with **ssm:**
    
```typescript
{
    "dbHost": `ssm:/namespace/environment/aurora/cluster_admin_db_username~true`,
    "region": process.env.region
}
```

* ### Full Implementation of deploy lambda with arc-cdk
```typescript
import * as aws from "@cdktf/provider-aws";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { ILambda, Lambda } from "arc-cdk";

dotenv.config();
export class LambdaStack extends TerraformStack {
    constructor(scope: Construct, id: string, config: Omit<ILambda, "name">) {
        super(scope, id);

        new aws.provider.AwsProvider(this, id, {
            region: process.env.AWS_REGION,
            accessKey: process.env.AWS_ACCESS_KEY_ID,
            secretKey: process.env.AWS_SECRET_ACCESS_KEY
        });

        const myLambda = new Lambda(this, "my-test-lambda", {
            ...config,
            name: id,
        });

        new TerraformOutput(this, 'lambda_arn', {
            value: myLambda.arn,
        });
    }
}

const app = new App();
new LambdaStack(app, "aws_lambda", {
    s3Bucket: process.env.S3_BUCKET!,
    codePath: resolve(__dirname, "../../dist/"),
    // layerPath: resolve(__dirname, "../layers"),
    handler: "cron.handler",
    runtime: "nodejs16.x",
    memorySize: 256,
    timeout: 30,
    namespace: process.env.NAMESPACE || "arc",
    environment: process.env.ENV || "dev",
    envVars: {
        "dbHost": `ssm:/aurora/cluster_admin_db_username~true`,
        "region": process.env.region || "us-east-1",
    }
});
app.synth();
```

* ### Implementation of Lambda with enable versioning and aliasing.
```javascript
import * as aws from "@cdktf/provider-aws";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { ILambda, Lambda } from "arc-cdk";

dotenv.config();
export class LambdaStack extends TerraformStack {
    constructor(scope: Construct, id: string, config: Omit<ILambda, "name">) {
        super(scope, id);

        new aws.provider.AwsProvider(this, id, {
            region: process.env.AWS_REGION,
            accessKey: process.env.AWS_ACCESS_KEY_ID,
            secretKey: process.env.AWS_SECRET_ACCESS_KEY
        });

        const myLambda = new Lambda(this, "my-test-lambda", {
            ...config,
            name: id,
        });

        new aws.lambdaAlias.LambdaAlias(this, 'lambda-alias', {
            functionVersion: '$LATEST' // or the version Number,
            functionVersion: myLambda.lambdaFunc.version, // for the latest version number.
            name: 'dev', // alias name
            functionName: myLambda.arn,
        });

        new TerraformOutput(this, 'lambda_arn', {
            value: myLambda.arn,
        });

        new TerraformOutput(this, 'lambda_version', {
            value: myLambda.lambdaFunc.version,
        });
    }
}

const app = new App();
new LambdaStack(app, "aws_lambda", {
    s3Bucket: process.env.S3_BUCKET!,
    codePath: resolve(__dirname, "../../dist/"),
    // layerPath: resolve(__dirname, "../layers"),
    handler: "cron.handler",
    runtime: "nodejs16.x",
    memorySize: 256,
    timeout: 6,
    namespace: process.env.NAMESPACE || "arc",
    environment: process.env.ENV || "dev",
    envVars: {
        "dbHost": `ssm:/aurora/cluster_admin_db_username~true`,
        "region": process.env.region || "us-east-1",
    },
    publish: true,
});
app.synth();
```