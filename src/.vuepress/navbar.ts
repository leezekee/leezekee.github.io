import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章详情",
    icon: "bookmark",
    link: "helloWorld"
  },
  {
    text: "个人介绍",
    icon: "circle-info",
    link: "intro"
  }
]);
