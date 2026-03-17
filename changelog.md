# Changelog

## 2026-03-16 — LLM 亮点更新 + 博客系统 + 视觉美化

### 内容更新
- **iFlytek 工作经历**：更新为 Summer 2024 & Summer 2025，新增 LLM 推荐系统、LLM 评估、垂直领域报告等亮点
- **Trip.com 工作经历**：补充量化数据（100K+ 记录、95% 准确率、7 层用户分层模型）
- **新增两个 LLM 项目**：LLM-Powered Content Recommendation Pipeline、LLM-based Retrieval-Ranking Pipeline
- **技术技能扩充**：新增 PyTorch, Scikit-learn, Gym, A/B Testing, Causal Inference, Embedding Models, Ranking & Retrieval, AI Agents
- **Publications**：新增 "Sequential Decision-Making under Constraints"（已注释，待发表后启用）
- **项目图片本地化**：MS-YOLO 和 SIM-I 图片从 GitHub 远程链接改为本地 `readme_plots/`

### 结构调整
- **Projects 独立页面**：`index.html` 的项目区改为精简预览卡片，完整内容移至 `projects.html`
- **博客系统搭建**：新建 `blog.html`（列表页）+ `blog/my-llm-workflow.html`（示例文章）
- **全站导航**：所有页面 sidebar 新增 Blog 入口

### 视觉美化
- 各 section 滚动淡入动画（fade-in-up）
- 项目预览卡片增加彩色域标签（LLM, CV, RL, NLP 等）
- Skills 区域改为圆角 pill 标签样式
- Sidebar 导航增加滚动跟随高亮
- 头像 hover 放大 + 光晕效果
- Footer 增加 tagline："Co-evolving with LLMs — exploring the frontier of human-AI collaboration."
- 页面时间更新为 March 2026

---

## 待办 / 未来计划

### 短期
- [ ] 提交当前改动并推送到 GitHub Pages
- [ ] 撰写第一篇正式博客文章（替换示例文章内容）

### 中期（博客整合）
- [ ] 在 OpenClaw 项目中建立 `blog/` 文件夹 + Markdown 写作规范
- [ ] 编写 `build_blog.py` 脚本（Markdown → HTML 自动转换）
- [ ] 打通写作流程：OpenClaw 写 Markdown → 脚本生成 HTML → 推送到 Profile 站点

### 长期（自动化）
- [ ] Mac Mini 上部署转换脚本
- [ ] Discord 机器人集成发布指令（`/publish`, `/draft`, `/sync`）
- [ ] 博客图片资源管理（`blog/images/` 文件夹）

---

## 历史记录

### 2025-10 — 初始版本
- 搭建学术主页（About, News, Research, Experience, Projects, Publications, Awards, Skills）
- 主题切换系统（13+ 配色方案）
- 响应式布局
- 部署到 GitHub Pages
