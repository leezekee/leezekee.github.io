import { sidebar } from "vuepress-theme-hope";
import getSideBar from "./utils/auto-sidebar";

export default sidebar({
  "/": [
    "",
    "intro",
    // {
    //   text: "文章列表",
    //   prefix: "posts/",
    //   icon: 'book',
    //   collapsible: false,
    //   children: [
    //     {
    //       text: "瞎折腾",
    //       prefix: "瞎折腾/",
    //       collapsible: true,
    //       children: [
    //         {
    //           text: "平板+Windows实现远程唤醒+远程桌面",
    //           link: "平板+Windows实现远程唤醒+远程桌面",
    //         },
    //         {
    //           text: '使用256G洋垃圾打造3合1移动硬盘',
    //           link: '使用256G洋垃圾打造3合1移动硬盘',
    //         },
    //         {
    //           text: 'Windows无线网络突然消失',
    //           link: 'Windows无线网络突然消失'
    //         }
    //       ],
    //     },
    //     {
    //       text: '开发',
    //       prefix: "开发/",
    //       collapsible: true,
    //       children: [
    //         {
    //           text: '前端',
    //           prefix: "前端开发/",
    //           collapsible: true,
    //           children: [
    //             {
    //               text: 'Axios封装',
    //               link: 'Axios封装',
    //             }, {
    //               text: 'Vuepress自动生成侧边栏目录',
    //               link: 'Vuepress自动生成侧边栏目录',
    //             }
    //           ],
    //         },
    //         {
    //           text: '运维',
    //           prefix: "运维/",
    //           collapsible: true,
    //           children: [
    //             {
    //               text: 'Git部署私服',
    //               link: 'Git部署私服',
    //             },
    //             {
    //               text: '利用Git Hooks自动打包部署',
    //               link: '利用Git Hooks自动打包部署'
    //             }
    //           ],
    //         }
    //         // {
    //         //   text: '后端',
    //         //   prefix: "后端开发/",
    //         //   collapsible: true,
    //         //   children: [
    //         //     {
    //         //     }
    //         //   ],
    //         // },
    //       ],
    //     }, {
    //       text: "算法",
    //       prefix: "算法",
    //       collapsible: true,
    //       children: [
    //         {
    //           text: "树",
    //           prefix: "树",
    //           collapsible: true,
    //           children: [
    //             {
    //               text: "树的深度相关问题",
    //               link: "树的深度相关问题",
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
    getSideBar()
  ],
});
