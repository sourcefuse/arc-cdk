import { Wafv2WebAcl } from "@cdktf/provider-aws/lib/wafv2-web-acl";
import { Construct } from "constructs";
import { IWafV2WebAclConfig } from "./interface";
import { Tags } from "../tags";

export class WafWebACL extends Construct {
  wafv2WebACL: Wafv2WebAcl;

  constructor(scope: Construct, id: string, props: IWafV2WebAclConfig) {
    super(scope, id);
    const { namespace, environment } = props;

    const defaultTags = new Tags(this, id + "-Tags", {
      project: namespace,
      environment,
      extraTags: props.tags,
    });

    this.wafv2WebACL = new Wafv2WebAcl(this, id + props.name, {
      ...props,
      tags: defaultTags.tagsOutput,
    });
  }
}
