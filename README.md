# MyBlog

一个面向后端与大数据学习者的中文知识库技术站，使用 `VitePress` 构建。

## 技术栈

- `VitePress`
- `Vue 3`
- `TypeScript`
- `Vitest`
- `GitHub Pages`

## 本地开发

建议使用 Node.js 22 LTS，并配合 `pnpm` 进行依赖管理。

```bash
git switch <你的开发分支>
```

```bash
pnpm install
pnpm docs:dev
```

## 生产构建

```bash
pnpm docs:build
pnpm test
```

## Git 工作流

- 不在 `main` 分支直接开发
- 新功能优先在开发分支上完成
- 需要创建独立工作区时，统一使用 `~/Codes/worktree/<项目相对目录>/<项目名>/<分支名>`，并通过 `pnpm worktree:path <分支名>` 计算目录
- 提交按小模块拆分，并使用中文提交信息
- 合并回主分支时使用 `--no-ff`

## 目录结构

- `docs/`：站点内容与 VitePress 配置
- `docs/.vitepress/`：站点主题、导航和构建配置
- `docs/backend/`：后端基础知识库
- `docs/bigdata/`：大数据专题
- `docs/roadmap/`：学习路线
- `docs/updates/`：更新归档与独立文章

## 发布说明

当前首版默认面向 `GitHub Pages` 部署，工作流会在 GitHub Actions 中执行构建与发布。

工作流文件位于 `.github/workflows/deploy.yml`，默认会在：

- 提交 `pull_request` 时执行安装、测试与构建
- 推送到 `main` 时执行构建并发布到 GitHub Pages

## 操作文档

- 站点结构、内容规范与发布流程见 [docs/技术方案.md](docs/技术方案.md)
- 日常维护、文档 CRUD、导航模块调整、worktree 与启动命令见 [docs/操作手册.md](docs/操作手册.md)
