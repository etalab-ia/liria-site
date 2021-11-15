const { path } = require("@vuepress/utils");

module.exports = {
  title: "DoctoScan",
  theme: path.resolve(__dirname, "./theme"),
  base: "/ocrxtract-site/",
  markdown: {
    anchor: false,
  },
};
