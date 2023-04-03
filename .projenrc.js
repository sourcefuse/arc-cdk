const { cdktf } = require("projen");
const project = new cdktf.ConstructLibraryCdktf({
  author: "saurabh",
  authorAddress: "saurabh.jindal@sourcefuse.com",
  cdktfVersion: "^0.15.3",
  constructsVersion: "^10.1.232",
  defaultReleaseBranch: "main",
  name: "arc-cdktf",
  repositoryUrl: "https://github.com/sourcefuse/arc-cdktf",
  prettier: true,
  releaseToNpm: true,
  stability: "experimental",
  peerDeps: ["@cdktf/provider-aws@^12.0.4"],
  depsUpgrade: false,
  // deps: [],
  // deps: ["cdktf-tf-module-stack@^0.2.0", "ts-essentials@^9.3.0"],
  // bundledDeps: ["cdktf-tf-module-stack@^0.2.0", "ts-essentials@^9.3.0"],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
