---
name: report-to-page
description: "Transform skill analysis reports (REPORT.md) into custom detail pages for skill-lab. Generates hand-crafted TSX page components with ArticleLayout, preserving each report's unique voice and structure. Use when the user asks to create a detail page, generate a page, add a skill to skill-lab, convert a report to a page, 生成详情页, 转换报告, 创建页面."
---

# Report to Page

将技能分析报告（REPORT.md）转化为 skill-lab 的自定义详情页。每篇文章内容不同、结构可能不同，不做标准化模块渲染——直接生成手工打磨的 TSX 页面。

## 输入

- REPORT.md 文件路径（通常在 `技能分析/{skill-name}/REPORT.md`）

## 工作流

### Step 1: 读取报告

读取 REPORT.md 完整内容。理解文章的结构、节奏、重点。

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

**文件位置**：`skill-lab/src/pages/skills/{PascalCaseName}Page.tsx`

### Step 4: 注册路由

在 `skill-lab/src/App.tsx` 中：

1. 导入新页面组件
2. 在 `/skill/:id` 路由**之前**添加具名路由

```tsx
import { NewSkillPage } from './pages/skills/NewSkillPage';

// Routes 内部，放在 /skill/:id 之前
<Route path="/skill/skill-name" element={<NewSkillPage />} />
```

### Step 5: 验证

- 检查 linter 无报错
- 确认 TOC 的 id 与 section id 一一对应
- 确认所有引用块、代码块、列表渲染正确

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

### 启发/洞察卡片

卡片的圆角边框 + 背景色已经标识了它是特殊内容，**不要加「启发：」前缀**——多余。

```tsx
<div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
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
<h3 className="flex items-baseline gap-3">
  <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
  标题文字
</h3>
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
