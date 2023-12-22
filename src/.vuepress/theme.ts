import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://zekee.top",

  author: {
    name: "leezekee",
    url: "https://github.com/leezekee",
    email: "leezekee111156@gmail.com"
  },
  footer: `<div class="my-footer">
    <a href="https://beian.miit.gov.cn/" class= "icpcode" > 豫ICP备2022018624号 - 2 </a>
    <span class="beian">
      <img src="https://image.zekee.top/blog/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png" class="logo">
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=41030402000184" rel="noreferrer">豫公网安备41030402000184</a>
    </span>
    <span>
      Powered By <a href="https://v2.vuepress.vuejs.org/zh/">VuePress</a>. Themed By <a href="https://theme-hope.vuejs.press/zh/">vuepress-theme-hope</a>
    </span>
  </div>`,
  iconAssets: "fontawesome-with-brands",
  copyright: 'CC-BY-SA LICENSED | Copyright © 2023 leezekee',
  logo: "https://image.zekee.top/blog/avatar.jpg",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  displayFooter: true,
  contributors: false,

  blog: {

    description: "一个在读的大烂王",
    roundAvatar: true,
    avatar: "https://image.zekee.top/blog/avatar.jpg",
    // intro: "/intro.html",
    medias: {
      Gitee: "https://gitee.com/leezekee",
      GitHub: "https://github.com/leezekee",
      Steam: "https://steamcommunity.com/profiles/76561199074208998/",
      Gmail: "mailto:leezekee111156@gmail.com",
      NetEaseMusic: [
        "https://music.163.com/#/user/home?id=485692347",
        `<svg t="1703224333899" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5968">
          <circle cx=512 cy=512 r=512 fill="#d81e06"></circle>
          <circle cx=512 cy=512 r=256 fill="#fff"></circle>
          <path d="M512 900.19699398C297.59880039 900.19699398 123.80300602 726.40119961 123.80300602 512S297.59880039 123.80300602 512 123.80300602s388.19699398 173.79579437 388.19699398 388.19699398-173.79579437 388.19699398-388.19699398 388.19699398z m-42.15819352-404.96710411c9.31672785-32.60854747 41.73117711-59.82115642 77.25120205-63.97486485 7.25928409 26.94087167 15.06204365 53.29944693 21.15673585 80.08504039 2.05744376 8.92853055 1.43632918 19.21575119-0.69875458 28.22192084-8.26859596 34.62717214-48.44698481 48.21406661-76.78536566 26.59149437-20.57444037-15.72197825-28.80421722-43.47806359-20.92381766-70.92359075z m148.1747928-7.64748047c-4.85246211-18.05116021-9.93784334-35.98586131-15.25614186-55.1239734 19.40984938 5.04656121 35.24828673 13.97509178 48.7187221 27.09614985 48.79636211 47.39885293 53.76528332 128.10500791 11.41299162 183.65599771-44.06035909 57.84135176-122.47615121 82.84123874-195.18544842 62.30561749-89.36294824-25.23280429-147.82541549-114.59575253-133.57858552-206.36552185 10.63659793-68.63322878 49.3010185-116.6143772 112.57712876-144.91393712 15.79961734-7.06518499 22.51542594-21.73903134 16.30427374-36.10232042-6.09469311-14.13037087-20.96263766-19.56512849-36.6457968-13.31515719-105.62840198 42.27465261-167.70110126 160.48063719-142.46829608 271.23323949 27.67844535 121.03982293 135.67484929 200.42610783 259.12149328 188.62491892 67.23571961-6.40525039 122.8255285-36.80107499 163.66385192-91.10983382 58.46246725-77.71703844 50.34915039-185.67462237-17.97352019-252.28922648-25.85391978-25.23280429-57.10377807-39.51845426-92.7790821-44.75911368-3.22203475-0.50465639-8.42387506-2.01862467-9.00616965-4.11488752-3.37731384-12.1505662-6.98754588-24.5340497-7.99685867-37.0339932-1.12577099-13.85863266 11.25771252-24.84460789 25.23280519-25.03870609 9.82138424-0.11645909 16.84774922 5.04656121 23.40827871 11.64590981 11.7623689 11.64590981 27.32906806 12.49994349 38.35386238 2.40682105 11.25771252-10.24840063 11.49063071-26.31975617 0.69875459-39.13025695-21.97194955-26.08683798-61.5680429-34.58835214-94.33186946-20.30270307-32.88028566 14.36328907-51.28082317 46.07898284-46.58363924 81.24963138 1.47514827 10.86951612 4.27016663 21.62257225 6.48289039 32.68618657l-10.09312244 2.79501834a149.96049836 149.96049836 0 0 0-81.44372867 54.89105522c-35.75294313 47.36003293-36.33523861 109.7821095-1.59160827 153.22135309 49.45629669 61.87860109 145.45741354 49.84449399 175.58150083-22.04958955 11.02479431-26.24211708 10.67541703-53.10534873 3.37731386-80.16267858z" fill="#d81e06" p-id="7193"></path>
        </svg>`
      ]
    },
  },

  pageInfo: [
    "Author", "Date", "Word", "ReadingTime", "Original", "Category", "Tag"
  ],

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  plugins: {
    blog: true,
    photoSwipe: true,
    copyright: {
      license: 'CC-BY-SA 4.0',
      author: 'leezekee',
      triggerWords: 100,
      global: true,
      disableCopy: false
    },
    comment: {
      // You should generate and use your own comment service
      // provider: "Giscus",
      // repo: 'leezekee/blog-comment',
      // repoId: 'R_kgDOKoOSxw',
      // category: 'Announcements',
      // categoryId: 'DIC_kwDOKoOSx84CaoBQ',
      // mapping: 'pathname',
      // strict: false,
      // lazyLoading: false
      provider: "Waline",
      serverURL: "https://waline.zekee.top",
      meta: ["nick", "mail"],
      requiredMeta: ["nick", "mail"],
    },
    seo: true,

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});