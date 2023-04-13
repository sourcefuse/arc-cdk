const { cdktf } = require("projen");
const project = new cdktf.ConstructLibraryCdktf({
  author: "saurabh jindal",
  authorAddress: "saurabh.jindal@sourcefuse.com",
  cdktfVersion: "^0.15.3",
  constructsVersion: "^10.1.232",
  defaultReleaseBranch: "main",
  name: "arc-cdk",
  repositoryUrl: "https://github.com/sourcefuse/arc-cdk",
  prettier: true,
  releaseToNpm: true,
  peerDeps: ["@cdktf/provider-aws@^12.0.4", "@cdktf/provider-docker@^6.0.1"],
  depsUpgrade: false,
  devDeps: [
    "markdown-toc@^1.2.0",
    "husky@^8.0.3",
    "@commitlint/cli@^17.4.4",
    "@commitlint/config-conventional@^17.4.4",
    "commitizen@^4.3.0",
    "cz-conventional-changelog@^3.3.0",
    "cz-customizable@^7.0.0",
  ],
  keywords: ["arc", "aws", "lambda"],
  dependabot: true,
});
project.setScript("prepare", "husky install");
project.setScript("toc", "node toc.js");
project.addFields({
  config: {
    commitizen: {
      path: "./node_modules/cz-customizable",
    },
    "cz-customizable": {
      config: "./.cz-config.cjs",
    },
  },
});
project.postCompileTask.exec("npm run toc");
project.synth();
