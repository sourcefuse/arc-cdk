import { Wafv2IpSet } from "@cdktf/provider-aws/lib/wafv2-ip-set";
import { Construct } from "constructs";
import { IWafv2IpSetConfig } from "./interface";
import { Tags } from "../tags";

export class WAFIPSet extends Construct {
  ipSet: Wafv2IpSet;

  constructor(scope: Construct, id: string, props: IWafv2IpSetConfig) {
    super(scope, id);
    const { namespace, environment } = props;

    const defaultTags = new Tags(this, id + "-tags", {
      project: namespace,
      environment,
      extraTags: props.tags,
    });

    this.ipSet = new Wafv2IpSet(this, id + "-" + props.name, {
      ...props,
      tags: defaultTags.tagsOutput,
    });
  }
}
