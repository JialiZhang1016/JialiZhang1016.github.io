# Profile Website

## 项目概述

Jiali Zhang 的个人学术主页，部署在 GitHub Pages (`JialiZhang1016.github.io`)。纯静态 HTML/CSS/JS，无构建工具。

## 站点结构

```
profile/
├── index.html          # 主页（About, News, Research, Experience, Projects预览, Publications, Awards, Skills）
├── projects.html       # 项目详情页（完整描述 + 图片 + 论文/代码链接）
├── blog.html           # 博客列表页
├── blog/               # 博客文章（每篇一个独立 HTML）
├── style.css           # 全局样式（含 13+ 主题配色）
├── theme-switcher.js   # 动态主题切换
├── readme_plots/       # 项目图片资源
└── profile.jpg         # 头像
```

## 页面关系

- `index.html` → 主入口，Projects 区域只显示精简预览卡片，链接到 `projects.html`
- `projects.html` → 所有项目的完整展示
- `blog.html` → 博客文章列表，链接到 `blog/*.html`
- 所有页面共享 sidebar 导航、`style.css`、`theme-switcher.js`

## 添加新博客文章

1. 在 `blog/` 文件夹创建新 HTML 文件（参考 `blog/my-llm-workflow.html` 模板）
2. 在 `blog.html` 中添加文章卡片（参考文件内的 TEMPLATE 注释）
3. 注意 `blog/` 下的文件用 `../` 引用根目录资源（style.css, profile.jpg 等）

## 部署

- 仓库：`https://github.com/JialiZhang1016/JialiZhang1016.github.io.git`
- 分支：`main`
- 推送到 main 即自动部署，无 CI/CD 配置

## 未来计划

- **博客整合**：与 OpenClaw 项目联动，用 Markdown 写作 → 脚本转换为 HTML（详见 `openclaw/PLAN_blog_integration.md`）
- **自动化发布**：Mac Mini 上通过 Discord 机器人触发 MD→HTML 转换 + git push
- **内容方向**：LLM 使用技巧、人机协作心得、AI 工具评测

## 注意事项

- 不要删除 `theme-switcher.js` 中的 localStorage 逻辑，主题选择依赖它跨页面保持
- 所有新页面都需要包含完整的 sidebar + theme modal（参考现有页面）
- 项目图片放在 `readme_plots/`，博客图片将来放在 `blog/images/`
