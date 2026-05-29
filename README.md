# 个人站脚手架

参考 [patrickcollison.com](https://patrickcollison.com) 的主题清单式架构，基于 Next.js 15 + MDX + Tailwind v4 搭建。

## 启动

```bash
pnpm install   # 或 npm install / yarn
pnpm dev       # 启动开发服务器 http://localhost:3000
pnpm build     # 静态构建到 out/
```

## 项目结构

```
app/
  ├── page.tsx              # 首页（极简入口 + 近期博客 + 主题链接）
  ├── about/page.tsx        # 关于
  ├── blog/
  │   ├── page.tsx          # 博客列表（按年份分组）
  │   └── [slug]/page.tsx   # 博客详情（渲染 MDX）
  ├── notes/page.tsx        # 札记（短想法）
  ├── works/page.tsx        # 作品（百兽志、Primi）
  ├── reading/page.tsx      # 在读 / 读过 / 想读
  ├── feed.xml/route.ts     # RSS 输出
  ├── layout.tsx            # 全局布局 + 字体加载
  └── globals.css           # 设计系统（颜色、字体、排版）

content/
  ├── blog/*.mdx            # 博客文章（前置 frontmatter）
  └── notes/*.md            # 札记（短想法、引用）

components/
  ├── Nav.tsx               # 顶部导航
  └── Footer.tsx            # 页脚（含 RSS 链接）

lib/
  └── content.ts            # 读取 MDX 文件、按日期排序
```

## 写一篇新文章

在 `content/blog/` 下新建一个 `.mdx` 文件：

```mdx
---
title: 标题
date: 2026-05-23
summary: 一句摘要，可选。
tags: [tag1, tag2]
---

正文。支持 Markdown 和 MDX 组件。
```

`date` 字段决定排序和显示。文件名会变成 URL slug。

## 设计系统

颜色与字体定义都在 `app/globals.css` 的 `@theme` 块里：
- 米白底 `#EEEEE8` + 墨蓝主文字 `#2A3640`（沿用百兽志的月光蓝色系）
- 中文 Noto Serif SC，英文/数字 Cormorant Garamond italic
- 暗色模式自动适配（基于 `prefers-color-scheme`）

修改这几个 CSS 变量就能整体换肤。

## 部署到 Vercel

1. 把 repo 推到 GitHub
2. Vercel 导入 → 一路默认 → 完成
3. 在项目设置里绑定域名

`next.config.mjs` 已配置 `output: 'export'`，所以也可以部署到任意静态托管（Cloudflare Pages、Netlify、GitHub Pages）。

## 下一步建议

- 修改 `app/layout.tsx` 里的 `metadataBase` 为你的实际域名
- 修改 `app/feed.xml/route.ts` 里的 `site` 变量
- 替换 `app/about/page.tsx` 的内容
- 在 `app/works/page.tsx` 的 `works` 数组里填入真实链接和截图
- 想加新主题页（比如 /seasons 节气），就在 `app/` 下新建一个文件夹

设计上有意保持简陋——按 Patrick 的方式，从最朴素的 `<ul>` 开始，等内容长出来再考虑视觉精装。
