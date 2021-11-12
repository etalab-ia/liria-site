const { path } = require("@vuepress/utils");

module.exports = {
  title: "DoctoScan",
  theme: path.resolve(__dirname, "./theme"),
  markdown: {
    anchor: false,
  },
};
