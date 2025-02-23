import DefaultTheme from "vitepress/theme"
import plausible from '@astrian/vitepress-plugin-plausible'

export default {
  ...DefaultTheme,
  enhanceApp: () => {
    plausible({
      domain: 'datenel.js.org',
			api: 'https://plausible.io/api/event'
    })
  }
}