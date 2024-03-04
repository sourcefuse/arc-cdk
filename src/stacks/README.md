## S3 Stack Backend

Stores the state as a given key in a given bucket on Amazon S3. This backend
also supports state locking and consistency checking via Dynamo DB, which
can be enabled by setting the dynamodb_table field to an existing DynamoDB
table name. A single DynamoDB table can be used to lock multiple remote
state files. Terraform generates key names that include the values of the
bucket and key variables.

Warning! It is highly recommended that you enable Bucket Versioning on the
S3 bucket to allow for state recovery in the case of accidental deletions
and human error.

Read more about this backend in the Terraform docs:
https://www.terraform.io/language/settings/backends/s3

Below is an example
```javascript
class MyStack extends S3BackendStack {
  constructor(scope: Construct, id: string) {
    /**
     * Backend Config
     */
    const backendConfig: S3BackendConfig = {
      bucket: "", // bucket for tf state storage
      key: "....../terraform.tfstate", // Key to tf state file
      region: process.env.AWS_REGION,
      encrypt: true
    }
    super(scope, id, backendConfig);
  }
}
```