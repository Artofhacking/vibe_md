---
name: report-to-page
description: "Transform analysis reports (REPORT.md) or high-quality raw articles into custom detail pages for skill-lab. Supports both skill analysis reports (技能分析/) and article analysis reports (文章分析/). Also supports a fast path: directly convert a high-quality article to a page without going through article-anatomist first. Generates hand-crafted TSX page components with ArticleLayout, preserving each report's unique voice and structure. Use when the user asks to create a detail page, generate a page, add a skill to skill-lab, convert a report to a page, 生成详情页, 转换报告, 创建页面, 文章直接上页面, 跳过分析直接生成页面, 直接转页面."
---

# Report to Page

将分析报告（REPORT.md）或高质量原始文章转化为 skill-lab 的自定义详情页。支持两种内容类型：**技能分析**和**文章分析**。每篇内容不同、结构可能不同，不做标准化模块渲染——直接生成手工打磨的 TSX 页面。

两条路径：
- **标准路径**：REPORT.md → TSX 页面（经过 article-anatomist 处理的内容）
- **直达路径**：原始 .md 文件 → TSX 页面（高质量文章跳过 article-anatomist）

## 输入

接受以下任一形式：

- **REPORT.md 路径**（标准路径），支持两种来源：
  - `技能分析/{skill-name}/REPORT.md` → 内容类型为 **skill**
  - `文章分析/{slug}/REPORT.md` → 内容类型为 **article**
- **原始 .md 文件路径**（直达路径）：任意 .md 文件，跳过 article-anatomist 的内容转化，直接生成 TSX 页面。适用于已经是高质量中文、结构清晰、不需要翻译或再创作的文章。

## 工作流

### Step 0: 判断输入类型

根据输入路径判断走哪条路径：

| 输入路径 | 输入类型 | 处理方式 |
|---------|---------|---------|
| `技能分析/{name}/REPORT.md` | 标准报告 | 内容类型 = skill，直接进入 Step 1 |
| `文章分析/{slug}/REPORT.md` | 标准报告 | 内容类型 = article，直接进入 Step 1 |
| 其他 `.md` 文件 | 原始文章（直达模式） | 执行 Step 0a 预处理，再进入 Step 1 |

如果无法从路径判断内容类型，询问用户。

#### Step 0a: 直达模式预处理

当输入是原始 .md 文件时（非 REPORT.md），执行以下预处理：

1. **确定 slug**：从文章标题或文件名生成英文 slug（kebab-case）。向用户确认 slug。
2. **创建目录**：`文章分析/{slug}/`
3. **保存原始文件**：复制为 `文章分析/{slug}/ORIGINAL.md`
4. **生成 REPORT.md**：在原始内容前加上元信息头，保存为 `文章分析/{slug}/REPORT.md`

元信息头模板：

```markdown
# {从文章第一个 # 标题提取，或从文件名推断}

> **来源**：{如可获取，否则省略此行}
> **转化日期**：{YYYY-MM-DD}

---
```

5. 内容类型自动设为 **article**，进入 Step 1。

**直达模式的前提**：文章已经是高质量中文，结构清晰，不需要翻译或"以我为主"的再创作。如果文章是英文、质量需要提升、或希望注入特定风格，应该先走 article-anatomist。

### Step 1: 读取报告与检测已有页面

1. 读取 REPORT.md 完整内容。理解文章的结构、节奏、重点。
2. **检查目标页面是否已存在**：根据内容类型和名称，检查对应目录下是否已有同名 `{Name}Page.tsx`。如果已存在，告知用户并询问：覆盖（用新报告重新生成）还是跳过。

### Step 2: 设计页面结构

根据报告的实际章节确定：

1. **TOC 条目**：从报告的 `## ` 标题中提取，每个标题对应一个 `{ id, label }` 。`id` 用 kebab-case，`label` 用简短中文。
2. **Header**：提取标题、标签、行数、来源等元信息。
3. **各 section 的内容**：逐章节将 Markdown 转为 JSX。

### Step 3: 生成 TSX 页面

生成一个完整的 React 组件文件。组件库和可用的 JSX 模式见 [component-library.md](references/component-library.md)。

**核心原则**：
- 忠实还原报告内容，不丢信息、不改观点
- 用 JSX 的表达力增强阅读体验（信息卡片、引用块、启发卡片等）
- 保持文章的叙事节奏，不做机械的逐段翻译
- **Hook 金句**：标题下方的副标题区域，用一句硅基视角的金句点出文章核心张力。不要写成一大段叙事——一句话，精准，有力

**文件位置**（根据 Step 0 的内容类型）：
- skill → `skill-lab/src/pages/skills/{PascalCaseName}Page.tsx`
- article → `skill-lab/src/pages/articles/{PascalCaseName}Page.tsx`

### Step 4: 注册路由与数据

#### 4a. 注册路由

在 `skill-lab/src/App.tsx` 中：

1. 导入新页面组件
2. 在对应的 `/:id` 通配路由**之前**添加具名路由

```tsx
// skill 类型
import { NewSkillPage } from './pages/skills/NewSkillPage';
<Route path="/skill/skill-name" element={<NewSkillPage />} />

// article 类型
import { NewArticlePage } from './pages/articles/NewArticlePage';
<Route path="/article/article-slug" element={<NewArticlePage />} />
```

如果路由已存在（覆盖场景），无需重复添加。

#### 4b. 注册数据

检查对应的数据文件中是否已有该条目：

- skill → `skill-lab/src/data/skills.ts`，添加 `SkillData` 条目
- article → `skill-lab/src/data/articles.ts`，添加 `ArticleData` 条目

数据条目的字段从 REPORT.md 的元信息中提取（标题、标签、日期、摘要等）。如果条目已存在，检查是否需要更新。

### Step 5: 验证

- 检查 linter 无报错
- 确认 TOC 的 id 与 section id 一一对应
- 确认所有引用块、代码块、列表渲染正确
- 确认路由和数据注册完整

## Markdown → JSX 转换指南

不是逐行翻译，而是选择最适合内容的 JSX 表达。以下是常见内容类型的处理方式：

### 段落

```tsx
<p>普通段落文字。</p>
<p>带有<strong>加粗强调</strong>的段落。</p>
```

prose-lab 的 `p` 样式已有合适的字号、行高、最大宽度。无需额外 className。

### 引用 Skill 原文（纯文字）

纯文字引用用 blockquote + pre：

```tsx
<blockquote className="!my-5">
  <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
    {`原文内容，保留换行`}
  </pre>
</blockquote>
```

### 引用 Skill 原文（含表格）⚠️

**绝对不要把表格放进 `<pre>` 里**——管道符和对齐在渲染后完全不可读。必须转为真正的 HTML `<table>`，放在带左边线的引用容器中：

```tsx
<div className="border-l-2 border-ink-faint/30 pl-5 my-5">
  <p className="text-xs text-ink-faint mb-3">表格的中文说明</p>
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left py-2 pr-4 font-medium text-ink-muted">列标题</th>
        </tr>
      </thead>
      <tbody className="text-ink-muted">
        <tr className="border-b border-border/50">
          <td className="py-2 pr-4">内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

兼容性矩阵等特殊表格，可以给 ✓✓ 加 `text-green-500`、✗ 加 `text-red-400` 来增强可读性。

### 英文内容的中文注解 ⚠️

报告引用的原文通常是英文。**中文读者看到满屏英文会失去耐心**。必须加中文辅助：

1. **表头翻译**：列标题用中文（Signals → 内容信号，Type → 推荐类型）
2. **行内注释**：英文术语后加括号中文（`hero`<span class="text-ink-faint text-xs">（主视觉）</span>）
3. **表格标题**：在表格上方加一句中文说明，概括这张表在讲什么
4. **双语格式**：中文为主、英文灰色辅助（`暖色 <span class="text-ink-faint text-xs">warm</span>`）

格式模式：

```tsx
{/* 术语 + 中文注释 */}
<span className="font-mono text-xs">conceptual</span>
<span className="text-ink-faint text-xs">（概念可视化）</span>

{/* 中文为主 + 英文灰色 */}
暖色 <span className="text-ink-faint text-xs">warm</span>

{/* 表格上方的中文说明 */}
<p className="text-xs text-ink-faint mb-3">当文章包含以下关键词时，自动推荐对应的封面类型：</p>
```

### 不要给中文词贴英文括号 ⚠️

上面的规则是"给英文加中文"，**反过来不成立**。中文已经说清楚的概念，不要加英文括号注释——那是视觉噪音，不是信息增量。

❌ `<strong>渴望</strong><span className="text-ink-faint text-xs">（Query）</span>` — "渴望"不需要解释
❌ `<strong>主体性</strong><span className="text-ink-faint text-xs">（Agency）</span>` — 读者看得懂
❌ `自注意力<span className="text-ink-faint text-xs">（Self-Attention）</span>` — 上下文已经在讲 Transformer

✅ 直接写中文：`<strong>渴望</strong> — 你想要什么，决定了……`
✅ 英文本身是行业通用名时保留：Transformer、Agent、API、RAG
✅ 中文翻译确实有歧义时才标注：`对齐问题（Alignment Problem）`

**判断标准**：去掉括号里的英文，读者理解是否受影响？如果不受影响，就去掉。

### 启发/洞察卡片

卡片的圆角边框 + 背景色已经标识了它是特殊内容，**不要加「启发：」前缀**——多余。

```tsx
<div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
  <p className="text-sm text-ink !mb-0">
    启发内容，直接写。
  </p>
</div>
```

### 元信息展示 ⚠️

**绝对不要用 `grid` 卡片网格**。卡片边框 + padding + 间距会让信息显得笨重，破坏文章的叙事节奏。无论内容多少都不要用。

**简单键值对** — 用文字行：

```tsx
<div className="my-8 space-y-1.5 text-sm text-ink-muted">
  <p className="!mb-0"><span className="text-ink-faint">类型</span> — 审查型 / 代理型</p>
  <p className="!mb-0"><span className="text-ink-faint">问题</span> — UI 代码是否符合最佳实践</p>
</div>
```

**目录结构** — 用树形图：

```tsx
<div className="my-8 font-mono text-sm leading-loose text-ink-muted">
  <p className="!mb-0">skill-name/</p>
  <p className="!mb-0 pl-5">├── <span className="text-ink">SKILL.md</span> <span className="text-ink-faint">— 主体指令</span></p>
  <p className="!mb-0 pl-5">├── scripts/ <span className="text-ink-faint">— 脚本说明</span></p>
  <p className="!mb-0 pl-5">└── references/ <span className="text-ink-faint">— 参考文档</span></p>
</div>
```

**并列概念块** — 用带左边线的分组：

```tsx
<div className="space-y-3 my-6">
  <div className="pl-5 border-l-2 border-ink-faint/30">
    <p><strong>概念 A</strong> — 解释内容</p>
  </div>
  <div className="pl-5 border-l-2 border-ink-faint/30">
    <p><strong>概念 B</strong> — 解释内容</p>
  </div>
</div>
```

### 编号精彩点

```tsx
<h2 className="flex items-baseline gap-3">
  <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
  标题文字
</h2>
```

### 结构公式

```tsx
<div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
  <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
    [要素A] + [要素B] + [要素C]
  </p>
</div>
```

### 模式匹配（带左边线）

```tsx
<div className="pl-5 border-l-2 border-ink-faint/30">
  <p><strong>模式名</strong>（频率）— 说明</p>
</div>
```

### 有序/无序列表

```tsx
<ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
  <li className="leading-relaxed pl-1">内容</li>
</ol>
```

### 代码块

```tsx
<CodeBlock language="markdown" code={`代码内容`} />
```

### 章节分隔

```tsx
<div className="section-divider" />
```

## 参考

- 组件库和设计系统详情：[references/component-library.md](references/component-library.md)
