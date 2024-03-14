import { CodebuildProject } from "@cdktf/provider-aws/lib/codebuild-project";
import { Construct } from "constructs";
import { ICodebuildProjectConfig } from "./interface";

export class Codebuild extends Construct {
  /**
   * Codebuild Resource
   */
  codebuildProject: CodebuildProject;

  constructor(scope: Construct, id: string, props: ICodebuildProjectConfig) {
    super(scope, id);
    this.codebuildProject = new CodebuildProject(this, "cb", props);
  }
}
