import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: "Vue Language Tools",

  rewrites: {
    "en/:rest*": ":rest*"
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/language-tools" }
    ]
  }
});