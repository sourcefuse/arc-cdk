const toc = require("markdown-toc");
const fs = require("fs");

const mardownContent = fs.readFileSync(__dirname + "/API.md", "utf-8");

const addToc = () => {
  try {
    const apiData = toc.insert(
      `<!-- toc --> <!-- tocstop --> ${mardownContent}`,
      {
        stripHeadingTags: false,
        maxdepth: 3,
      }
    );
    fs.writeFileSync("API.md", apiData);
  } catch (e) {
    if (
      e.message !== "markdown-toc only supports one Table of Contents per file."
    ) {
      console.error(e);
    }
  }
};

addToc();
