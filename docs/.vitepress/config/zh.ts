import { defineConfig } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",

  themeConfig: {
    nav: [
      {
        text: "参考",
        items: [
          { text: "VSCode 选项", link: "/zh/reference/vscode-configurations" },
          { text: "Compiler 选项", link: "/zh/reference/vue-compiler-options" }
        ]
      }
    ],

    sidebar: {
      "/zh/reference": [
        {
          text: "参考",
          items: [
            { text: "VSCode 选项", link: "/zh/reference/vscode-configurations" },
            { text: "Compiler 选项", link: "/zh/reference/vue-compiler-options" }
          ]
        }
      ]
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