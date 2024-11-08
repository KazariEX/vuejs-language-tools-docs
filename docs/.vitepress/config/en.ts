import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",

  themeConfig: {
    nav: [
      {
        text: "Plugins",
        items: [
          { text: "Why Plugin?", link: "/plugins/why" },
          { text: "Use Plugin", link: "/plugins/use" },
          { text: "Write a Plugin", link: "/plugins/write" }
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "VSCode Configurations", link: "/reference/vscode-configurations" },
          { text: "Vue Compiler Options", link: "/reference/vue-compiler-options" }
        ]
      }
    ],

    sidebar: [
      {
        text: "Plugins",
        items: [
          { text: "Why Plugin?", link: "/plugins/why" },
          { text: "Use Plugin", link: "/plugins/use" },
          { text: "Write a Plugin", link: "/plugins/write" }
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "VSCode Configurations", link: "/reference/vscode-configurations" },
          { text: "Vue Compiler Options", link: "/reference/vue-compiler-options" }
        ]
      }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2020-${new Date().getFullYear()} Johnson Chu`
    }
  }
});