import { defineUserConfig } from '@vuepress/cli';
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //   },
  //   "/en/": {
  //     lang: "en-US",
  //   },
  // },
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
  ],
  head: [
    ['script',
      {
        src: 'https://umami.zekee.top/script.js',
        "data-website-id": '7fd44cad-d2c3-4a17-a899-9b1c71c3cd8a'
      }
    ],
    ['script',
      {
        "type": "text/javascript",
        "src": '/js/canvas-nest.js',
      }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/jquery-3.7.1.min.js"
    }],
    ['script',
      {
        "type": "text/javascript",
        "src": '/js/mouse-click.js',
      }
    ],
    ['script',
      {
        "type": "text/javascript",
        "src": '/js/ribbon.js',
        "defer": true
      }
    ],
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
