import { defineConfig, type DefaultTheme } from "vitepress"

export const ru = defineConfig({
  lang: "ru-RU",
  description: "Видеовстречи с поддержкой ИИ-помощника",
  // head: [['link', { rel: 'icon', href: '/LogoDark.png' }]],
  themeConfig: {
    nav: nav(),

    sidebar: {
      "/ru/guide/": { base: "/ru/guide/", items: sidebarDocs() },
      "/ru/about/": { base: "/ru/about/", items: sidebarAbout() },
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
  return [
    { text: "Дока", link: "/ru/guide/how-it-works", activeMatch: "/ru/guide/" },
    { text: "О нас", link: "/ru/about/team", activeMatch: "/ru/about/" },
    {
      text: "Войти",
      items: [
        {
          text: "через Google",
          link: "/landing",
        },
        {
          text: "через Microsoft",
          link: "/landing",
        },
      ],
    },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Введение",
      collapsed: false,
      items: [
        { text: "Нафига?", link: "what-for" },
        { text: "Как это работает?", link: "how-it-works" },
      ],
    },
    {
      text: "Кейсы",
      collapsed: true,
      // items: [
      //   { text: "Медиа SDK", link: "markdown" },
      //   { text: "ИИ ассистенты", link: "markdown" },
      //   // { text: 'Интеграции', link: 'markdown' },
      // ],
    },

    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "О нас",
      items: [{ text: "Команда", link: "team" }],
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  ru: {
    placeholder: "Поиск",
    translations: {
      button: {
        buttonText: "Поиск",
        buttonAriaLabel: "Поиск",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Очистить поиск",
          resetButtonAriaLabel: "Очистить поиск",
          cancelButtonText: "Закрыть",
          cancelButtonAriaLabel: "Закрыть",
        },
        startScreen: {
          recentSearchesTitle: "История поиска",
          noRecentSearchesText: "Нет результатов поиска",
          saveRecentSearchButtonTitle: "Сохранить историю поиска",
          removeRecentSearchButtonTitle: "Удалить историю поиска",
          favoriteSearchesTitle: "Избранное",
          removeFavoriteSearchButtonTitle: "Удалить из избранного",
        },
        errorScreen: {
          titleText: "Невозможно получить результаты",
          helpText: "Проверьте подключение к сети",
        },
        footer: {
          selectText: "Выбрать",
          navigateText: "Следующий",
          closeText: "Закрыть",
          searchByText: "",
        },
        noResultsScreen: {
          noResultsText: "Не найдено",
          suggestedQueryText: "Попробуйте так",
          reportMissingResultsText: "Должны ли быть результаты по этому запросу?",
          reportMissingResultsLinkText: "Отправить отзыв",
        },
      },
    },
  },
}
