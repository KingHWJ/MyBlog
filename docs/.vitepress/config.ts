import { defineConfig } from 'vitepress'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'MyBlog'

// GitHub Pages 走项目页时需要带上仓库名，本地开发仍保持根路径。
const base = process.env.GITHUB_ACTIONS === 'true' ? `/${repositoryName}/` : '/'

export default defineConfig({
  title: 'MyBlog',
  description: '面向后端与大数据学习者的中文知识库技术站。',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { name: 'author', content: 'hwj' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MyBlog' }],
    ['meta', { property: 'og:description', content: '后端与大数据知识库技术站' }],
    ['link', { rel: 'icon', href: `${base}favicon.svg` }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo-mark.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线', link: '/roadmap/' },
      { text: '后端基础', link: '/backend/' },
      { text: '大数据', link: '/bigdata/' },
      { text: '归档/更新', link: '/updates/' }
    ],
    sidebar: {
      '/roadmap/': [
        {
          text: '学习路线',
          items: [
            { text: '学习路线总览', link: '/roadmap/' },
            { text: '后端学习路线', link: '/roadmap/backend-roadmap' },
            { text: '大数据学习路线', link: '/roadmap/bigdata-roadmap' }
          ]
        }
      ],
      '/backend/': [
        {
          text: '后端总览',
          items: [{ text: '后端知识库首页', link: '/backend/' }]
        },
        {
          text: 'Java',
          items: [
            { text: 'Java 专题首页', link: '/backend/java/' },
            { text: 'Java 学习主线', link: '/backend/java/java-learning-path' }
          ]
        },
        {
          text: '数据库',
          items: [
            { text: '数据库专题首页', link: '/backend/database/' },
            { text: 'MySQL 索引设计', link: '/backend/database/mysql-indexing' }
          ]
        },
        {
          text: '计算机网络',
          items: [
            { text: '网络专题首页', link: '/backend/network/' },
            { text: 'TCP 与 HTTP 脉络', link: '/backend/network/tcp-http-map' }
          ]
        },
        {
          text: '操作系统',
          items: [
            { text: '操作系统专题首页', link: '/backend/os/' },
            { text: '进程、线程与内存', link: '/backend/os/process-thread-memory' }
          ]
        }
      ],
      '/bigdata/': [
        {
          text: '大数据专题',
          items: [
            { text: '大数据首页', link: '/bigdata/' },
            { text: '生态概览', link: '/bigdata/ecosystem-overview' },
            { text: 'Spark 批处理入门', link: '/bigdata/spark-batch-basics' }
          ]
        }
      ],
      '/updates/': [
        {
          text: '更新归档',
          items: [
            { text: '更新首页', link: '/updates/' },
            { text: '站点首版启动记录', link: '/updates/2026-04-09-site-launch' },
            { text: '后端知识库规划', link: '/updates/2026-04-09-backend-learning-map' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    socialLinks: [],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    search: false,
    footer: {
      message: '以体系化知识沉淀为主，持续迭代中。',
      copyright: 'Copyright © 2026 hwj'
    }
  }
})

