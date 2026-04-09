import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import HomeTopicGrid from './components/HomeTopicGrid.vue'
import RecentUpdates from './components/RecentUpdates.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeTopicGrid', HomeTopicGrid)
    app.component('RecentUpdates', RecentUpdates)
  }
} satisfies Theme

