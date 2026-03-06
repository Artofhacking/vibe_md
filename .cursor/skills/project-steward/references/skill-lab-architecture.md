# Skill Studio — skill-lab 前端架构参考

技术栈：React + TypeScript + Vite + Tailwind CSS

## 路由表

```
/                                    → HomePage         首页（五层内容区）
/skill/:id                           → SkillPage        技能详情（通用）
/skill/frontend-design               → FrontendDesignPage     ┐
/skill/ui-ux-pro-max                 → UiUxProMaxPage         │ 手工技能
/skill/baoyu-cover-image             → BaoyuCoverImagePage    │ 详情页
/skill/web-design-guidelines         → WebDesignGuidelinesPage│
/skill/skill-creator                 → SkillCreatorPage       ┘
/article/9-observations-building-ai-agents → NineObservationsAgentsPage    ┐
/article/what-ai-cannot-do                 → WhatAiCannotDoPage            │
/article/dan-koe-one-person-business       → DanKoeOnePersonBusinessPage   │ 手工文章
/article/scarce-humanity-in-ai-era         → ScarceHumanityInAiEraPage     │ 详情页
/article/mcp-is-dead-long-live-cli         → McpIsDeadLongLiveCliPage      │
/article/skill-creator-eval-benchmark-upgrade → SkillCreatorEvalBenchmarkUpgradePage ┘
/tutorial/:id                        → TutorialPage      教程骨架页（章节大纲）
/tutorial/tut-openclaw/1             → OpenClawPersonalAssistantPage  教程章节页
/patterns                            → PatternsPage      Context Patterns 列表
/aesthetic/:id                       → AestheticPage     美学规范详情
```

路由优先级：具名路由在动态路由 `:id` 之前定义，确保精确匹配优先。

## 数据模型

### SkillData（src/types/index.ts）

技能分析的核心数据结构，包含：
- `id`, `name`, `source` — 基本信息
- `surface` — 表面信息（tagline, impact scores）
- `narrative` — 叙事结构（hook, highlights, takeaways）
- `structure`, `valueDensity`, `psychology` — 三维评分
- `pattern` — 可复用模式
- `reverseEngineering` — 逆向工程模板
- `meta` — 标签、分类等元数据

数据文件：`src/data/skills.ts`

### ArticleData（src/data/articles.ts）

```ts
interface ArticleData {
  id: string;           // URL slug，如 "mcp-is-dead-long-live-cli"
  title: string;        // 中文标题
  originalTitle: string;
  tags: string[];
  date: string;         // YYYY-MM-DD
  summary: string;
  englishTitle?: string;
  readTime?: string;
  category?: string;
}
```

### TutorialData（src/data/tutorials.ts）

```ts
interface ChapterMeta {
  title: string;
  duration?: string;
  hasPage?: boolean;    // true = 有手工详情页
}

interface TutorialData {
  id: string;           // 如 "tut-openclaw"
  tool: string;         // 工具名
  title: string;
  desc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  chapters: number;
  chapterList?: ChapterMeta[];  // 有此字段时显示真实章节标题
}
```

### AestheticData（src/data/aesthetics.ts）

```ts
interface AestheticData {
  id: string;
  title: string;
  shortDesc: string;    // 首页卡片用（克制）
  desc: string;         // 详情页用（展开）
  type: 'Color' | 'Typography' | 'Iconography' | 'Layout';
  preview: string | string[];
  tokens?: Token[];
}
```

## 组件库

### 布局组件

| 组件 | 路径 | 用途 |
|-----|------|------|
| ArticleLayout | `components/article/ArticleLayout.tsx` | 文章/教程详情页通用布局。支持 `backTo`、`backLabel`、`footerRightTo`、`footerRightLabel` 自定义导航 |
| Header | `components/Header.tsx` | 全局导航栏 |
| TableOfContents | `components/TableOfContents.tsx` | 侧边目录导航 |

### 展示组件

| 组件 | 路径 | 用途 |
|-----|------|------|
| SkillCard | `components/SkillCard.tsx` | 技能卡片（首页 SKILL DEEP DIVES） |
| CodeBlock | `components/CodeBlock.tsx` | 代码块（带复制按钮） |
| ScoreBar | `components/ScoreBar.tsx` | 评分条 |
| BooleanIndicator | `components/BooleanIndicator.tsx` | 布尔指示器 |

## 首页五层结构

HomePage.tsx 自上而下分为五个内容区：

1. **CONTEXT PATTERNS** — 技能分析卡片网格（3 列，取前 6 个）
2. **AGENT WORKFLOWS** — 教程卡片（2 列，全部展示）
3. **AESTHETIC PROTOCOLS** — 美学规范卡片（4 列）
4. **RESEARCH LOGS** — 文章列表（上下堆叠宽卡片）
5. **SKILL DEEP DIVES** — 技能详细列表（支持排序和标签筛选）

## 添加新内容的标准流程

### 添加新文章详情页

1. 在 `src/data/articles.ts` 中添加 `ArticleData` 条目
2. 在 `src/pages/articles/` 下创建 TSX 组件（使用 `ArticleLayout`）
3. 在 `App.tsx` 中注册具名路由（放在 `/skill/:id` 之前）

### 添加新教程章节页

1. 确认 `src/data/tutorials.ts` 中对应教程已存在
2. 在 `chapterList` 中将对应章节的 `hasPage` 设为 `true`
3. 在 `src/pages/tutorials/` 下创建 TSX 组件（使用 `ArticleLayout`，`backTo` 指向教程大纲）
4. 在 `App.tsx` 中注册路由 `/tutorial/{tutId}/{chapterNum}`

### 添加新技能详情页

1. 在 `src/data/skills.ts` 中添加完整的 `SkillData` 条目
2. 在 `src/pages/skills/` 下创建 TSX 组件
3. 在 `App.tsx` 中注册具名路由

## 构建与部署

```bash
cd skill-lab && npx vite build    # 产物输出到 dist/
```

使用 deploy-pack 技能可自动构建并打包为 zip。
