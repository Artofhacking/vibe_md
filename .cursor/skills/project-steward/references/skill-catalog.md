# Skill Studio — 技能与内容目录

## 项目自有技能（.cursor/skills/）

### article-anatomist — 文章解剖师

将技术文章转化为中文知识库资料。支持三种内容类型：观点文、教程、推文。

- **触发词**：分析文章、拆解文章、文章入库、分析教程、教程入库
- **输入**：文件路径 / 粘贴内容 / URL
- **输出**：`文章分析/{slug}/REPORT.md` + `ORIGINAL.md`
- **下一步**：report-to-page（观点文）或 手工创建教程章节页（教程）

### skill-anatomist — 技能解剖师

拆解 AI 技能的设计逻辑，输出分析文章。

- **触发词**：分析技能、拆解技能、评估技能、skill 好在哪
- **输入**：技能文件路径或目录
- **输出**：`技能分析/{name}/REPORT.md`
- **下一步**：report-to-page

### report-to-page — 报告转页面

将 REPORT.md 转化为 skill-lab 的 TSX 详情页组件。

- **触发词**：生成详情页、转换报告、创建页面
- **输入**：REPORT.md 路径（技能分析/ 或 文章分析/）
- **输出**：`skill-lab/src/pages/{type}/{PageName}.tsx` + 路由注册 + 数据注册
- **参考**：`references/component-library.md` 定义了可用组件

### skill-creator — 技能创造者

创建新技能、改进现有技能、运行评估。

- **触发词**：创建技能、新建技能、优化技能、评估技能
- **流程**：意图捕获 → 草稿 → 测试用例 → 评估 → 迭代
- **子资源**：agents/（评分、对比、分析）、scripts/（评估脚本）、eval-viewer/

### analysis-todo — 分析待办

扫描技能分析/和文章分析/，找出缺少 REPORT 或详情页的条目。

- **触发词**：检查待办、查看待办、todo、待办事项

### deploy-pack — 构建部署

构建 skill-lab 并打包为 zip。

- **触发词**：部署、打包、build

### project-steward — 项目管家（本技能）

项目结构、工作流、技能体系的知识中枢。

- **触发词**：管家、项目概况、帮我理一下、现在有哪些技能

---

## 外部共享技能（.agents/skills/）

| 技能 | 用途 |
|-----|------|
| baoyu-article-illustrator | 文章配图生成（Type × Style 双维度） |
| baoyu-cover-image | 文章封面图生成（5 维度定制） |
| frontend-design | 高质量前端界面设计与构建 |
| ui-ux-pro-max | UI/UX 设计智能（50 风格 × 21 配色 × 9 技术栈） |
| web-design-guidelines | Web 界面规范审查 |
| find-skills | 帮用户发现和安装 Agent 技能 |

---

## skill-lab 已展示内容

### CONTEXT PATTERNS（技能分析详情页）

| skill-lab id | 名称 | 路由 |
|-------------|------|------|
| baoyu-cover-image | Cover Image Generator | /skill/baoyu-cover-image |
| baoyu-article-illustrator | Article Illustrator | /skill/:id (通用) |
| ui-ux-pro-max | UI/UX Pro Max | /skill/ui-ux-pro-max |
| frontend-design | Frontend Design | /skill/frontend-design |
| web-design-guidelines | Web Design Guidelines | /skill/web-design-guidelines |
| skill-creator | Skill Creator | /skill/skill-creator |

### RESEARCH LOGS（文章详情页）

| id | 标题 | 路由 |
|----|------|------|
| 9-observations-building-ai-agents | 构建 AI Agent 的九条实战心得 | /article/9-observations-building-ai-agents |
| what-ai-cannot-do | 知道 AI 不能做什么比知道 AI 能做什么要重要得多 | /article/what-ai-cannot-do |
| scarce-humanity-in-ai-era | 在 AI 时代，人类真正稀缺的不是智力 | /article/scarce-humanity-in-ai-era |
| dan-koe-one-person-business | 如果在 2026 年重新开始做一人公司 | /article/dan-koe-one-person-business |
| skill-creator-eval-benchmark-upgrade | Skill-Creator 重磅升级 | /article/skill-creator-eval-benchmark-upgrade |
| mcp-is-dead-long-live-cli | MCP 已死，CLI 当立 | /article/mcp-is-dead-long-live-cli |

### AGENT WORKFLOWS（教程）

| id | 工具 | 标题 | 有章节页 |
|----|------|------|---------|
| tut-claude | Claude Code | 终端里的全栈 Agent | 暂无 |
| tut-openclaw | OpenClaw | AI 不该只活在浏览器标签页里 | Ch.1 ✅ |
| tut-obsidian | Obsidian | 让知识库自己长出结构 | 暂无 |
| tut-codex | Cursor / Copilot | 从补全到协作 | 暂无 |

### AESTHETIC PROTOCOLS（美学规范）

| id | 标题 |
|----|------|
| aes-color | Minimal_Palette.css |
| aes-typo | Typography_Scale.config |
| aes-icon | Semantic_Icons.svg |
| aes-layout | Whitespace_Grid.json |
