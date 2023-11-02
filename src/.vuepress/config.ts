import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "leezekee's Blog",
  description: "leezekee's Blog",

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          // @ts-ignore
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          // @ts-ignore
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    commentPlugin({
      provider: "Giscus",
      repo: 'leezekee/blog-comment',
      repoId: 'R_kgDOKoOSxw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOKoOSx84CaoBQ',
      mapping: 'pathname',
      strict: false,
    })
  ],
  head: [
    ['script',
      {
        src: 'https://umami.zekee.top/script.js',
        "data-website-id": '7fd44cad-d2c3-4a17-a899-9b1c71c3cd8a'
      }
    ]
  ]


  // Enable it with pwa
  // shouldPrefetch: false,
});
