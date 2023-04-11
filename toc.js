const toc = require('markdown-toc');
const fs = require('fs');

const mardownContent = fs.readFileSync(__dirname + '/API.md', 'utf-8')

fs.writeFileSync("API.md",toc.insert(`<!-- toc --> <!-- tocstop --> ${mardownContent}`,{stripHeadingTags:false,maxdepth:3}))