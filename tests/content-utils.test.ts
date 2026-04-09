import { describe, expect, it } from 'vitest'
import type { ContentData } from 'vitepress'

import { buildRecentUpdates } from '../docs/.vitepress/theme/data/content-utils'

function createContentData(
  overrides: Partial<ContentData> & {
    frontmatter?: Record<string, unknown>
  }
): ContentData {
  return {
    url: '/updates/example',
    src: undefined,
    html: undefined,
    excerpt: undefined,
    frontmatter: {},
    ...overrides
  }
}

describe('buildRecentUpdates', () => {
  it('按日期倒序返回最近更新内容', () => {
    const updates = buildRecentUpdates([
      createContentData({
        url: '/updates/older',
        frontmatter: {
          title: '较早的更新',
          description: '较早的内容',
          date: '2026-04-01'
        }
      }),
      createContentData({
        url: '/updates/newer',
        frontmatter: {
          title: '较新的更新',
          description: '较新的内容',
          date: '2026-04-09'
        }
      })
    ])

    expect(updates.map((item) => item.title)).toEqual(['较新的更新', '较早的更新'])
  })

  it('会过滤草稿内容并限制返回数量', () => {
    const updates = buildRecentUpdates(
      [
        createContentData({
          url: '/updates/keep-1',
          frontmatter: {
            title: '保留 1',
            description: '保留 1',
            date: '2026-04-09'
          }
        }),
        createContentData({
          url: '/updates/draft',
          frontmatter: {
            title: '草稿内容',
            description: '不应该显示',
            date: '2026-04-08',
            draft: true
          }
        }),
        createContentData({
          url: '/updates/keep-2',
          frontmatter: {
            title: '保留 2',
            description: '保留 2',
            date: '2026-04-07'
          }
        }),
        createContentData({
          url: '/updates/keep-3',
          frontmatter: {
            title: '保留 3',
            description: '保留 3',
            date: '2026-04-06'
          }
        })
      ],
      2
    )

    expect(updates).toHaveLength(2)
    expect(updates.map((item) => item.title)).toEqual(['保留 1', '保留 2'])
  })

  it('会为缺失描述的内容生成默认说明', () => {
    const updates = buildRecentUpdates([
      createContentData({
        url: '/updates/no-description',
        frontmatter: {
          title: '只有标题',
          date: '2026-04-09'
        }
      })
    ])

    expect(updates[0]).toMatchObject({
      title: '只有标题',
      description: '持续更新中，欢迎稍后回来看完整内容。'
    })
  })
})
