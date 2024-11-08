import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: "en-US",

  themeConfig: {
    nav: [
      {
        text: "Reference",
        items: [
          { text: "VSCode Configurations", link: "/reference/vscode-configurations" },
          { text: "Vue Compiler Options", link: "/reference/vue-compiler-options" }
        ]
      }
    ],

    sidebar: {
      "/reference": [
        {
          text: "Reference",
          items: [
            { text: "VSCode Configurations", link: "/reference/vscode-configurations" },
            { text: "Vue Compiler Options", link: "/reference/vue-compiler-options" }
          ]
        }
      ]
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2020-${new Date().getFullYear()} Johnson Chu`
    }
  }
});