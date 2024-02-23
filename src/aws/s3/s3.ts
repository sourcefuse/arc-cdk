import * as path from "path";
import * as aws from "@cdktf/provider-aws";
import { S3Bucket, S3BucketConfig } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketCorsConfigurationCorsRule } from "@cdktf/provider-aws/lib/s3-bucket-cors-configuration";
import { AssetType, Fn, TerraformAsset, TerraformIterator } from "cdktf";
import { Construct } from "constructs";
import * as mimeType from "mime-types";

export class S3 extends Construct {
  /**
   * The Amazon Resource Name (ARN) of the S3 Bucket.
   */
  arn: string;

  /**
   * Amazon Resource Bucket
   */
  bucket: S3Bucket;

  /**
   * Config of S3 Bucket.
   */
  // private config: IS3;

  constructor(scope: Construct, id: string, config: S3BucketConfig) {
    super(scope, id);
    this.bucket = new S3Bucket(this, id, config);
    this.arn = this.bucket.arn;
  }

  updateBucketPreventDestroy(enable: boolean): void {
    this.bucket.addOverride("lifecycle", [
      {
        prevent_destroy: enable,
      },
    ]);
  }

  syncFilesToBucket(dirPath: string): void {
    const asset = new TerraformAsset(this, "bucket-asset-dir", {
      path: path.resolve(__dirname, dirPath),
      type: AssetType.DIRECTORY,
    });

    const forEach = TerraformIterator.fromList(Fn.fileset(asset.path, "**"));
    new aws.s3Object.S3Object(this, "dynamic-assets-upload", {
      forEach,
      bucket: this.bucket.bucket,
      forceDestroy: true,
      key: forEach.value,
      source: `${asset.path}/${forEach.value}`,
      etag: Fn.filemd5(`${asset.path}/${forEach.value}`),
      contentType: mimeType.lookup(forEach.value).toString(),
    });
  }

  // // Upload Zip file
  uploadFolderAsZip(zipPath: string): void {
    const asset = new TerraformAsset(this, "bucket-asset-zip", {
      path: path.resolve(__dirname, zipPath),
      type: AssetType.ARCHIVE,
    });
    new aws.s3BucketObject.S3BucketObject(this, "bucket-archive", {
      bucket: this.bucket.bucket,
      key: asset.fileName,
      source: asset.path,
    });
  }

  updateCorsConfiguration(corsRule: S3BucketCorsConfigurationCorsRule[]): void {
    new aws.s3BucketCorsConfiguration.S3BucketCorsConfiguration(
      this,
      "aws_s3_bucket_cors",
      {
        bucket: this.bucket.bucket,
        corsRule,
      }
    );
  }

  //   updateCorsConfigurationFromPath(corsPath: string): void {
  //     const corsRule: S3BucketCorsConfigurationCorsRule[] = require(corsPath);
  //     new aws.s3BucketCorsConfiguration.S3BucketCorsConfiguration(
  //       this,
  //       "aws_s3_bucket_cors_via_path",
  //       {
  //         bucket: this.bucket.bucket,
  //         corsRule,
  //       }
  //     );
  //   }
}
