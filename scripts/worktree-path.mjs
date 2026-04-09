import { execFileSync } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'

function sanitizeBranchSegment(segment) {
  return segment.trim().replace(/\s+/g, '-')
}

function normalizeBranchPath(branchName) {
  return branchName
    .split(/[\\/]+/)
    .map(sanitizeBranchSegment)
    .filter((segment) => segment.length > 0)
}

export function resolveProjectRootFromWorktrees(currentPath, worktreePaths) {
  const normalizedCurrentPath = path.resolve(currentPath)
  const normalizedPaths = worktreePaths.map((worktreePath) => path.resolve(worktreePath))
  const hasWorktreeSegment = normalizedCurrentPath.includes(`${path.sep}worktree${path.sep}`)

  if (!hasWorktreeSegment) {
    return normalizedCurrentPath
  }

  const primaryProjectPath = normalizedPaths.find(
    (worktreePath) => !worktreePath.includes(`${path.sep}worktree${path.sep}`)
  )

  return primaryProjectPath ?? normalizedCurrentPath
}

function listGitWorktreePaths(cwd) {
  const output = execFileSync('git', ['worktree', 'list', '--porcelain'], {
    cwd,
    encoding: 'utf8'
  })

  return output
    .split('\n')
    .filter((line) => line.startsWith('worktree '))
    .map((line) => line.slice('worktree '.length).trim())
}

export function buildWorktreePath({
  projectRoot,
  branchName,
  homeDir = process.env.HOME ?? ''
}) {
  const codesRoot = path.join(homeDir, 'Codes')
  const normalizedProjectRoot = path.resolve(projectRoot)
  const relativeProjectPath = path.relative(codesRoot, normalizedProjectRoot)

  if (
    relativeProjectPath.startsWith('..') ||
    path.isAbsolute(relativeProjectPath) ||
    relativeProjectPath.length === 0
  ) {
    throw new Error('项目路径必须位于 ~/Codes 目录下')
  }

  const projectDir = path.dirname(relativeProjectPath)
  const projectName = path.basename(relativeProjectPath)
  const branchSegments = normalizeBranchPath(branchName)

  // 先按原项目结构创建项目目录，再用分支名作为子目录，便于同一项目并行维护多条 worktree 线。
  return path.join(codesRoot, 'worktree', projectDir, projectName, ...branchSegments)
}

function printUsage() {
  console.error('用法: node scripts/worktree-path.mjs <分支名> [项目目录]')
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const branchName = process.argv[2]
  const currentPath = process.argv[3] ?? process.cwd()

  if (!branchName) {
    printUsage()
    process.exitCode = 1
  } else {
    try {
      const worktreePaths = listGitWorktreePaths(currentPath)
      const projectRoot = resolveProjectRootFromWorktrees(currentPath, worktreePaths)

      console.log(
        buildWorktreePath({
          projectRoot,
          branchName
        })
      )
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error))
      process.exitCode = 1
    }
  }
}
