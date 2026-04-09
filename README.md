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
pnpm install
pnpm docs:dev
```

## 生产构建

```bash
pnpm docs:build
pnpm test
```

## 目录结构

- `docs/`：站点内容与 VitePress 配置
- `docs/.vitepress/`：站点主题、导航和构建配置
- `docs/backend/`：后端基础知识库
- `docs/bigdata/`：大数据专题
- `docs/roadmap/`：学习路线
- `docs/updates/`：更新归档与独立文章

## 发布说明

当前首版默认面向 `GitHub Pages` 部署，工作流会在 GitHub Actions 中执行构建与发布。

更详细的内容规范、frontmatter 约定和发布流程，见 [docs/技术方案.md](docs/技术方案.md)。

