import * as aws from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { IAcmCertificate } from "./interface";
import { Tags } from "../tags";

/**
 * Creates an ACM Certificate with the specified domain name and hosted zone ID.
 */
export class CreateAcmCertificate extends Construct {
  /**
   * The ARN of the created ACM certificate.
   */
  acmArn: string;

  /**
   * @param scope The parent construct of this stack.
   * @param id The ID of the construct.
   * @param config The configuration of the ACM Certificate.
   */
  constructor(scope: Construct, id: string, config: IAcmCertificate) {
    super(scope, id);

    let { domainName, hostedZoneId, ttl, namespace, environment, tags } =
      config;

    const defaultTags = new Tags(this, "createAcmCertificateTags", {
      project: namespace,
      environment,
      extraTags: tags,
    });

    const awsAcmCertificate = new aws.acmCertificate.AcmCertificate(
      this,
      "acmCertificate",
      {
        domainName,
        validationMethod: "DNS",
        lifecycle: {
          createBeforeDestroy: true,
        },
        tags: defaultTags.tagsOutput,
      }
    );

    ttl = ttl ?? 300;

    const awsRoute53Record = new aws.route53Record.Route53Record(
      this,
      "createAcmCertificateRoute53Record",
      {
        allowOverwrite: true,
        name: `\${each.value.name}`,
        records: [`\${each.value.record}`],
        ttl,
        type: `\${each.value.type}`,
        zoneId: hostedZoneId,
      }
    );
    awsRoute53Record.addOverride(
      "for_each",
      `\${{
      for dvo in ${awsAcmCertificate.terraformResourceType}.${awsAcmCertificate.friendlyUniqueId}.domain_validation_options : dvo.domain_name => {
        name   = dvo.resource_record_name
        record = dvo.resource_record_value
        type   = dvo.resource_record_type
      }
    }}`
    );

    const awsAcmCertificateValidation =
      new aws.acmCertificateValidation.AcmCertificateValidation(
        this,
        "awsAcmCertificateValidation",
        {
          certificateArn: awsAcmCertificate.arn,
        }
      );
    awsAcmCertificateValidation.addOverride(
      "validation_record_fqdns",
      `\${[for record in ${awsRoute53Record.terraformResourceType}.${awsRoute53Record.friendlyUniqueId} : record.fqdn]}`
    );

    this.acmArn = awsAcmCertificateValidation.certificateArn;
  }
}
