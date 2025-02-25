import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Datenel Documentation",
  description: "Datenel Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/index.html' },
      { text: 'npm Packages', items: [
        { text: "For React", link: "https://www.npmjs.com/package/datenel-react" },
        { text: "For Vue.js 3", link: "https://www.npmjs.com/package/datenel-vue3" }
      ] }
    ],

    sidebar: [
      {
        text: "Overview",
        link: "/guide/index.html"
      },
      {
        text: "For React",
        items: [
          { text: "Getting start", link: "/guide/react/gettingstart" },
          { text: "Components", items: [
            { text: "SingleDatePicker", link: "/guide/react/components/SingleDatePicker" },
            { text: "SingleWeekPicker", link: "/guide/react/components/SingleWeekPicker" },
          ]}
        ]
      },
      {
        text: "For Vue.js 3",
        items: [
          { text: "Getting start", link: "/guide/vue3/gettingstart" },
          { text: "Components", items: [
            { text: "SingleDatePicker", link: "/guide/vue3/components/SingleDatePicker" },
            { text: "SingleWeekPicker", link: "/guide/vue3/components/SingleWeekPicker" },
          ]}
        ]
      },
      {
        text: "DLC",
        items: [
          { text: "Colour Schemes & Themes", link: "/guide/external/design" },
        ]
      }
    ],

    outline: {
      level: [2, 3]
    }
  },
  locales: {
    root: {
      lang: "en-US",
      label: "English",
    },
    "zh-cn": {
      lang: "zh-CN",
      label: "简体中文",
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-cn' },
          { text: '指南', link: '/zh-cn/guide/index.html' },
          { text: 'npm 包', items: [
            { text: "React 版", link: "https://www.npmjs.com/package/datenel-react" },
            { text: "Vue.js 3 版 (Soon™️)", link: "#" }
          ] }
        ],
        sidebar: [
          {
            text: "概述",
            link: "/zh-cn/guide/index.html"
          },
          {
            text: "React 版",
            items: [
              { text: "快速上手", link: "/zh-cn/guide/react/gettingstart" },
              { text: "组件", items: [
                { text: "SingleDatePicker", link: "/zh-cn/guide/react/components/SingleDatePicker" },
                { text: "SingleWeekPicker", link: "/zh-cn/guide/react/components/SingleWeekPicker" },
              ]}
            ]
          },
          {
            text: "Vue.js 3 版 (Soon™️)",
          },
          {
            text: "额外内容",
            items: [
              { text: "配色方案与主题", link: "/zh-cn/guide/external/design" },
            ]
          }
        ]
      }
    },
  }
})
