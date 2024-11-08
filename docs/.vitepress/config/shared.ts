import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: "Vue Language Tools",

  lastUpdated: true,
  rewrites: {
    "en/:rest*": ":rest*"
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/language-tools" }
    ]
  }
});