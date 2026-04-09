import { describe, expect, it } from 'vitest'

import { buildWorktreePath, resolveProjectRootFromWorktrees } from '../scripts/worktree-path.mjs'

describe('buildWorktreePath', () => {
  it('会把项目路径映射到 Codes/worktree 下并追加分支标识', () => {
    const target = buildWorktreePath({
      projectRoot: '/Users/hwj/Codes/MyProjects/MyBlog',
      branchName: 'codex/worktree-manuals',
      homeDir: '/Users/hwj'
    })

    expect(target).toBe('/Users/hwj/Codes/worktree/MyProjects/MyBlog/codex-worktree-manuals')
  })

  it('会清洗分支中的斜杠和空白字符', () => {
    const target = buildWorktreePath({
      projectRoot: '/Users/hwj/Codes/githubProject/demo-app',
      branchName: 'feature/docs header',
      homeDir: '/Users/hwj'
    })

    expect(target).toBe('/Users/hwj/Codes/worktree/githubProject/demo-app/feature-docs-header')
  })

  it('项目不在 Codes 目录下时会抛出错误', () => {
    expect(() =>
      buildWorktreePath({
        projectRoot: '/Users/hwj/tmp/demo-app',
        branchName: 'codex/test',
        homeDir: '/Users/hwj'
      })
    ).toThrow('项目路径必须位于 ~/Codes 目录下')
  })
})

describe('resolveProjectRootFromWorktrees', () => {
  it('在 worktree 中执行时会回到主项目目录', () => {
    const projectRoot = resolveProjectRootFromWorktrees(
      '/Users/hwj/Codes/worktree/MyProjects/MyBlog/codex-worktree-manuals',
      [
        '/Users/hwj/Codes/MyProjects/MyBlog',
        '/Users/hwj/Codes/worktree/MyProjects/MyBlog/codex-worktree-manuals'
      ]
    )

    expect(projectRoot).toBe('/Users/hwj/Codes/MyProjects/MyBlog')
  })

  it('在主项目目录执行时会保留当前路径', () => {
    const projectRoot = resolveProjectRootFromWorktrees(
      '/Users/hwj/Codes/MyProjects/MyBlog',
      [
        '/Users/hwj/Codes/MyProjects/MyBlog',
        '/Users/hwj/Codes/worktree/MyProjects/MyBlog/codex-worktree-manuals'
      ]
    )

    expect(projectRoot).toBe('/Users/hwj/Codes/MyProjects/MyBlog')
  })
})
