import type { ContentData } from 'vitepress'

export interface UpdateCardItem {
  title: string
  description: string
  date: string
  url: string
  category: string
  tags: string[]
}

const DEFAULT_UPDATE_DESCRIPTION = '持续更新中，欢迎稍后回来看完整内容。'

function toTimestamp(value: unknown): number {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return 0
  }

  const parsed = Date.parse(value)

  return Number.isNaN(parsed) ? 0 : parsed
}

function toTags(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0)
    : []
}

// 统一收敛更新文章的首页展示字段，避免组件里散落兼容逻辑。
function toUpdateCardItem(content: ContentData): UpdateCardItem | null {
  const title = typeof content.frontmatter.title === 'string' ? content.frontmatter.title.trim() : ''

  if (!title) {
    return null
  }

  const description =
    typeof content.frontmatter.description === 'string' && content.frontmatter.description.trim().length > 0
      ? content.frontmatter.description.trim()
      : DEFAULT_UPDATE_DESCRIPTION

  const date = typeof content.frontmatter.date === 'string' ? content.frontmatter.date : '日期待补充'
  const category =
    typeof content.frontmatter.category === 'string' && content.frontmatter.category.trim().length > 0
      ? content.frontmatter.category.trim()
      : '更新归档'

  return {
    title,
    description,
    date,
    url: content.url,
    category,
    tags: toTags(content.frontmatter.tags)
  }
}

export function buildRecentUpdates(contents: ContentData[], limit = 4): UpdateCardItem[] {
  return contents
    .filter((content) => content.frontmatter.draft !== true)
    .sort((left, right) => toTimestamp(right.frontmatter.date) - toTimestamp(left.frontmatter.date))
    .map(toUpdateCardItem)
    .filter((item): item is UpdateCardItem => item !== null)
    .slice(0, limit)
}
