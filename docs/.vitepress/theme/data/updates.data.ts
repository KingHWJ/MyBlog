import { createContentLoader } from 'vitepress'

import { buildRecentUpdates, type UpdateCardItem } from './content-utils'

declare const data: UpdateCardItem[]

export { data }

export default createContentLoader<UpdateCardItem[]>('updates/*.md', {
  excerpt: true,
  globOptions: {
    ignore: ['**/updates/index.md']
  },
  transform(rawData) {
    return buildRecentUpdates(rawData, 4)
  }
})
