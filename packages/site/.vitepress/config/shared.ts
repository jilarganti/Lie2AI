import { defineConfig } from "vitepress"
import markdownItFootnote from "markdown-it-footnote"

// import { search as ruSearch } from "./ru"

export const shared = defineConfig({
  // title: "Lie to AI",

  srcDir: "./docs",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(markdownItFootnote)
    },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, "[!code")
        },
      },
    ],
  },

  sitemap: {
    hostname: "https://vitepress.dev",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"))
    },
  },

  /* prettier-ignore */
  head: [
        // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
        // ['link', { rel: 'icon', type: 'image/png', href: '/play.png' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'Lie to AI | AI-centric Video Meetings: Speech and Emotion Analysis' }],
        ['meta', { property: 'og:site_name', content: 'Lie to AI' }],
        // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
        ['meta', { property: 'og:url', content: 'https://lie2ai.vercel.app/' }],
        // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
    ],

  themeConfig: {
    // logo: {
    //   light: "/LogoDark.png",
    //   dark: "/LogoLight.png",
    // },

    socialLinks: [{ icon: "github", link: "https://github.com/jilarganti/Lie2AI" }],

    editLink: {
      pattern: "https://github.com/jilarganti/Lie2AI/edit/main/packages/site/:path",
    },

    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "OAF8W52W8I",
    //     apiKey: "12c782af03f5595d06a56e517eb8c67b",
    //     indexName: "arvis-doc",
    //     locales: { ...ruSearch },
    //   },
    // },
  },
})
