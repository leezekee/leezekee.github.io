import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "文章",
      prefix: "posts/",
      icon: 'book',
      collapsible: true,
      children: [
        {
          text: "瞎折腾",
          prefix: "瞎折腾/",
          collapsible: true,
          children: [
            {
              text: "平板+Windows实现远程唤醒+远程桌面",
              link: "平板+Windows实现远程唤醒+远程桌面",
            },
            {
              text: '使用256G洋垃圾打造3合1移动硬盘',
              link: '使用256G洋垃圾打造3合1移动硬盘',
            }
          ],
        },
        {
          text: '开发',
          prefix: "开发/",
          collapsible: true,
          children: [
            {
              text: '前端',
              prefix: "前端开发/",
              collapsible: true,
              children: [
                {
                  text: 'Axios封装',
                  link: 'Axios封装',
                }
              ],
            },
            // {
            //   text: '后端',
            //   prefix: "后端开发/",
            //   collapsible: true,
            //   children: [
            //     {

            //     }
            //   ],
            // },
          ],
        }
      ]
    },
  ],
});