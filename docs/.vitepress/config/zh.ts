import { defineConfig } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",

  themeConfig: {
    nav: [
      {
        text: "插件",
        items: [
          { text: "为什么需要插件？", link: "/zh/plugins/why" },
          { text: "使用插件", link: "/zh/plugins/use" },
          { text: "编写插件", link: "/zh/plugins/write" }
        ]
      },
      {
        text: "参考",
        items: [
          { text: "VSCode 选项", link: "/zh/reference/vscode-configurations" },
          { text: "Vue Compiler 选项", link: "/zh/reference/vue-compiler-options" }
        ]
      }
    ],

    sidebar: [
      {
        text: "插件",
        items: [
          { text: "为什么需要插件？", link: "/zh/plugins/why" },
          { text: "使用插件", link: "/zh/plugins/use" },
          { text: "编写插件", link: "/zh/plugins/write" }
        ]
      },
      {
        text: "参考",
        items: [
          { text: "VSCode 选项", link: "/zh/reference/vscode-configurations" },
          { text: "Vue Compiler 选项", link: "/zh/reference/vue-compiler-options" }
        ]
      }
    ],

    editLink: {
      pattern: "https://github.com/KazariEX/vuejs-language-tools-docs/blame/main/docs/:path",
      text: "在 GitHub 上查看此页面"
    },

    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2020-${new Date().getFullYear()} Johnson Chu`
    },

    docFooter: {
      prev: "上一页",
      next: "下一页"
    },

    outline: {
      label: "页面导航"
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式"
  }
});