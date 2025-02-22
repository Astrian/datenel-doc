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
        { text: "For Vue.js 3 (Soon™️)", link: "#" }
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
            { text: "SingleDatePicker", link: "/guide/react/components/singledatepicker" },
            { text: "SingleWeekPicker", link: "/guide/react/components/singleweekpicker" },
          ]}
        ]
      },
      {
        text: "For Vue.js 3 (Soon™️)",
      }
    ]
  }
})
