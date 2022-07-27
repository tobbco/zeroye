const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "zeroye",
  description: 'vdoing博客主题模板',
  base: '/zeroye/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "56ba6686641ca3bd2823",
        clientSecret: "20bb068563fe468aad742d8c3e0ccc832eb78b5b",
        owner: "eryajf",
        repo: "zeroye",
      },
    ],
    // 增强 markdown
    [
      "md-enhance", {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true,
      },
    ],
  ],
}