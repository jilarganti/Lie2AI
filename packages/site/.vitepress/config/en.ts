import { defineConfig, type DefaultTheme } from "vitepress"

export const en = defineConfig({
  title: "Lie to AI",
  lang: "en-US",
  description:
    "AI-centric Video Meetings: Speech and Emotion Analysis. Assessment of personality traits and truthfulness of statements of participants during a video conference.",
  // head: [['link', { rel: 'icon', href: '/LogoDark.png' }]],
  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarDocs() },
      "/about/": { base: "/about/", items: sidebarAbout() },
    },

    // editLink: {
    //     pattern: 'https://github.com/vuejs/vitepress/edit/main/guide/:path',
    //     text: 'Edit this page on GitHub'
    // },

    footer: {
      // message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present, Golden Fish",
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  // const signInLabel = path === "/landing" ? "Logout" : "Sign in"

  return [
    { text: "Guide", link: "/guide/how-it-works", activeMatch: "/guide/" },
    { text: "About", link: "/about/team", activeMatch: "/about/" },
    {
      text: "Sign in",
      items: [
        {
          text: "with Google",
          link: "/landing",
        },
        {
          text: "with Microsoft",
          link: "/landing",
        },
      ],
    },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: true,
      items: [
        { text: "What is Lie to AI?", link: "what-is-lie2ai" },
        { text: "How it works?", link: "how-it-works" },
        { text: "Get started", link: "getting-started" },
        { text: "Demo", link: "demo" },
      ],
    },
    {
      text: "Use Cases",
      collapsed: true,
      // items: [
      //   { text: "Медиа SDK", link: "markdown" },
      //   { text: "ИИ ассистенты", link: "markdown" },
      //   // { text: 'Интеграции', link: 'markdown' },
      // ],
    },
  ]
}

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "About",
      items: [{ text: "Team", link: "team" }],
    },
  ]
}
