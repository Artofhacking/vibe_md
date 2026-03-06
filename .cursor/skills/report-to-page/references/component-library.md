# skill-lab 组件库与设计系统

生成详情页时可用的组件和样式。

## 页面骨架

每个详情页使用 `ArticleLayout` 包裹：

```tsx
import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'section-id', label: '显示文字' },
  // ...根据文章实际章节确定
];

export function SkillNamePage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      <header className="mb-16">
        {/* 标签 + 标题 */}
      </header>

      {/* Hook 金句——一句话，硅基视角，不要写成一段叙事 */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        一句从技术/硅基视角切入的金句，点出文章最核心的张力。
      </div>

      {/* 各章节 */}
      <section id="section-id">
        <h2>章节标题</h2>
        {/* 内容 */}
      </section>

      <div className="section-divider" />

      {/* 下一章节... */}
    </ArticleLayout>
  );
}
```

## 组件

### ArticleLayout

包裹整个文章。提供返回链接、TOC 侧边栏、底部导航。

```typescript
interface ArticleLayoutProps {
  children: ReactNode;
  tocItems: TocItem[];  // { id: string; label: string }[]
}
```

TOC 的 `id` 必须与 `<section id="...">` 一一对应，滚动定位依赖 IntersectionObserver。

### CodeBlock

带复制按钮的代码块。

```typescript
interface CodeBlockProps {
  code: string;          // 代码内容
  language?: string;     // 默认 'markdown'，显示在头部
}
```

用法：`<CodeBlock language="markdown" code={templateString} />`

长字符串用 `{`` ` ``}` 模板字面量传入。

### TableOfContents

由 ArticleLayout 内部使用，不需要手动引入。只需传 `tocItems` 给 ArticleLayout。

## 设计 Token

### 颜色（通过 Tailwind class 使用）

| Class | 用途 |
|-------|------|
| `text-ink` | 主文字色（标题、strong） |
| `text-ink-muted` | 正文色 |
| `text-ink-faint` | 辅助信息（标签、编号、英文注释） |
| `text-green-500` | 正面标注（✓✓ 推荐、Good） |
| `text-red-400` | 负面标注（✗ 不推荐、Bad） |
| `bg-surface-0` | 页面底色 |
| `bg-surface-1` | 卡片/代码块背景 |
| `bg-surface-2` | 代码块头部 |
| `border-border` | 默认边框 |
| `border-border-strong` | 强调边框（hover） |

### 字体

| Class | 用途 |
|-------|------|
| `font-display` | 大标题（h1） |
| `font-serif` | 引言、h2、h3 |
| `font-sans` | 正文默认 |
| `font-mono` | 代码、编号、公式 |

### 已定义的组件 class

| Class | 效果 |
|-------|------|
| `prose-lab` | 文章排版（ArticleLayout 已加） |
| `tag-pill` | 标签胶囊 |
| `section-divider` | 章节分隔线（`border-t my-14`） |
| `card` | 通用卡片 |
| `fade-in` | 渐入动画 |

## 元信息展示原则

⚠️ **绝对不要用 `grid` 卡片网格展示元信息**。卡片边框 + padding + 间距让信息显得笨重，破坏叙事节奏。无论内容多少都不要用。

替代方案：

**键值对 → 文字行**

```tsx
<div className="my-8 space-y-1.5 text-sm text-ink-muted">
  <p className="!mb-0"><span className="text-ink-faint">标签</span> — 内容</p>
</div>
```

**资源清单 → 目录树**

```tsx
<div className="my-8 font-mono text-sm leading-loose text-ink-muted">
  <p className="!mb-0">skill-name/</p>
  <p className="!mb-0 pl-5">├── <span className="text-ink">SKILL.md</span> <span className="text-ink-faint">— 说明</span></p>
  <p className="!mb-0 pl-5">└── scripts/ <span className="text-ink-faint">— 说明</span></p>
</div>
```

**并列概念块 → 带左边线的分组**

```tsx
<div className="space-y-3 my-6">
  <div className="pl-5 border-l-2 border-ink-faint/30">
    <p><strong>概念 A</strong> — 解释内容</p>
  </div>
</div>
```

## Header 模式

```tsx
<header className="mb-16">
  <div className="flex items-center gap-3 mb-6">
    <span className="tag-pill">标签1</span>
    <span className="tag-pill">标签2</span>
    <span className="text-ink-faint">|</span>
    <span className="text-sm tabular-nums text-ink-muted">387 行</span>
    <span className="text-ink-faint">|</span>
    <span className="text-sm text-ink-muted">来源</span>
  </div>
  <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
    文章标题
  </h1>
</header>
```

## 路由与数据注册

文件：`skill-lab/src/App.tsx`

```tsx
// skill 类型
import { NewPage } from './pages/skills/NewPage';
<Route path="/skill/new-page" element={<NewPage />} />

// article 类型
import { NewArticlePage } from './pages/articles/NewArticlePage';
<Route path="/article/article-slug" element={<NewArticlePage />} />
```

具名路由必须在 `:id` 通配路由之前，否则会被通配匹配拦截。

数据注册：
- skill → `skill-lab/src/data/skills.ts`
- article → `skill-lab/src/data/articles.ts`
