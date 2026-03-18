import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'intro', label: '它是什么' },
  { id: 'highlights', label: '精彩之处' },
  { id: 'structure', label: '结构逻辑' },
  { id: 'pattern', label: '写作模式' },
  { id: 'build-guide', label: '同类构建' },
  { id: 'improvements', label: '改进空间' },
  { id: 'takeaways', label: '启发' },
];

export function UiUxProMaxPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">design</span>
          <span className="tag-pill">search-engine</span>
          <span className="tag-pill">knowledge-base</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm tabular-nums text-ink-muted">387 行</span>
          <span className="text-ink-faint">·</span>
          <span className="text-sm tabular-nums text-ink-muted">28 文件</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">community</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          UI/UX Pro Max：用搜索引擎思维重新定义设计知识库
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        一个把 50 种设计风格、97 套色板、57 组字体搭配、99 条 UX 准则装进 BM25 搜索引擎的 skill，核心设计巧思是：<strong>不要把知识倒给 AI，让 AI 自己查</strong>。
      </div>

      {/* ── 它是什么 ──────────────────── */}
      <section id="intro">
        <h2>它是什么</h2>

        <p>UI/UX Pro Max 是一个面向前端开发者和设计师的设计决策辅助系统。它解决的核心问题是：当你需要构建一个新页面时，你不知道该选哪种风格、配什么颜色、用什么字体、遵循哪些 UX 规范——而 Google 搜索给你的是碎片化信息，设计系统文档又太庞大。</p>

        <p>这个 skill 的做法是：把大量设计知识结构化为 11 个 CSV 数据库（styles、colors、typography、charts、landing、products、ux-guidelines、icons、react-performance、web-interface、ui-reasoning），再加上 12 个框架特定的指南文件。然后用一个纯 Python 实现的 BM25 搜索引擎，按需检索最相关的几条推荐，而不是一次性把所有内容塞进上下文。</p>

        <p>它的子资源结构相当完整：3 个 Python 脚本（core.py 搜索引擎、search.py CLI 入口、design_system.py 聚合生成器），23 个 CSV 数据文件，总计 28 个文件。这不是一个 SKILL.md 文件能承载的知识量——它是一个微型应用。</p>

        <div className="my-8 rounded-xl bg-surface-1 px-6 py-5 space-y-2 text-sm">
          <p className="!mb-0"><span className="text-ink-faint">解决的问题</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">设计决策碎片化：不知道选什么风格、配什么色、用什么字体</span></p>
          <p className="!mb-0"><span className="text-ink-faint">目标用户</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">前端开发者、UI 设计师、全栈工程师</span></p>
          <p className="!mb-0"><span className="text-ink-faint">子资源</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">3 脚本 · 23 CSV · 12 框架指南</span></p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 精彩之处 ──────────────────── */}
      <section id="highlights">
        <h2>它的精彩之处</h2>

        {/* ── 01 ── */}
        <div className="mt-10">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
            BM25 搜索引擎：把"知识倾倒"变成"按需检索"
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              Comprehensive design guide for web and mobile applications. Contains 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 9 technology stacks. Searchable database with priority-based recommendations.
            </pre>
          </blockquote>

          <p>这是整个 skill 最根本的设计选择。大多数知识库型 skill 的做法是"把所有规则写进 SKILL.md，让 AI 读完再干活"。这个 skill 反过来了：知识存在 CSV 里，AI 调用 Python 脚本去搜索，只拿到最相关的 3 条结果。</p>

          <p>这为什么有效？因为它解决了知识库 skill 的核心矛盾：<strong>知识越全，上下文越长，AI 越容易忽略关键信息</strong>。BM25 是信息检索领域的经典算法，用 TF-IDF 加权的方式对文档打分，天然适合"从大量条目中找到最相关的几条"这个场景。</p>

          <p>纯 Python 实现（约 60 行）、零外部依赖——这意味着在任何有 Python 的环境里都能跑。这个选择的工程品味极好：没有用向量数据库、没有用 embedding、没有引入任何需要安装的包。BM25 够用，就用 BM25。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              如果你的 skill 需要承载超过 50 条规则，考虑把规则存进结构化文件（CSV/JSON），用脚本检索替代全量加载。这不是在做"减法"，而是在做"精准投放"。
            </p>
          </div>
        </div>

        {/* ── 02 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
            --design-system 一键聚合：从搜索到决策的飞跃
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              Always start with --design-system to get comprehensive recommendations with reasoning.
            </pre>
          </blockquote>

          <p>单次搜索只能回答一个维度的问题。但做设计决策时，你需要同时知道风格、颜色、字体、页面结构、反模式——这些信息分布在 5 个不同的 domain 里。--design-system 把这 5 个搜索编排成一个管道：</p>

          <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
            <li className="leading-relaxed pl-1">先搜 product 识别产品类型</li>
            <li className="leading-relaxed pl-1">用产品类型匹配 ui-reasoning.csv 中的推理规则</li>
            <li className="leading-relaxed pl-1">用推理规则的 style_priority 指导 style 搜索方向</li>
            <li className="leading-relaxed pl-1">并行搜索 color、typography、landing</li>
            <li className="leading-relaxed pl-1">用推理规则的优先级从结果中选出最佳匹配</li>
            <li className="leading-relaxed pl-1">组装成完整的设计系统输出</li>
          </ol>

          <p>这不是简单的"搜五次然后拼起来"。它有推理层（reasoning layer）——ui-reasoning.csv 里记录了每种产品类型应该优先什么风格、避免什么反模式、在不同条件下如何调整策略。比如电商类产品的规则是：</p>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              {`"if_luxury": "switch-to-liquid-glass", "if_conversion_focused": "add-urgency-colors"`}
            </pre>
          </blockquote>

          <p>这让输出不只是"最相关"，而是"最合适"。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              当你的 skill 需要多步搜索时，不要让用户自己组合。提供一个"一键出结果"的入口，在内部编排搜索顺序和推理逻辑。用户要的是答案，不是搜索工具。
            </p>
          </div>
        </div>

        {/* ── 03 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
            Master + Overrides 持久化：跨会话的设计一致性
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              {`This creates:
- design-system/MASTER.md — Global Source of Truth with all design rules
- design-system/pages/ — Folder for page-specific overrides`}
            </pre>
          </blockquote>

          <p>这个模式击中了一个被大多数 skill 忽略的痛点：<strong>AI 对话是无状态的</strong>。你在第一个对话中生成了完美的设计系统，第二个对话里 AI 一无所知。</p>

          <p>--persist 把生成的设计系统写入文件系统，形成 MASTER.md（全局规则）+ pages/（页面级覆盖）的层级结构。后续对话只需要读取这些文件就能恢复上下文。这本质上是在 AI 对话之外建立了一个"设计系统的持久层"。</p>

          <p>更精彩的是 Override 的设计：页面文件只记录"偏差"，不重复 Master 的内容。这让维护成本极低——改 Master 就改了全局，页面文件只管自己的特殊需求。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              如果你的 skill 产出需要跨会话复用，考虑把产出持久化到文件系统。Master + Override 模式适合任何有"全局 + 局部"层级关系的场景。
            </p>
          </div>
        </div>

        {/* ── 04 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
            优先级分级体系：告诉用户"先做什么"
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              {`| Priority | Category            | Impact   |
|----------|---------------------|----------|
| 1        | Accessibility       | CRITICAL |
| 2        | Touch & Interaction | CRITICAL |
| 3        | Performance         | HIGH     |`}
            </pre>
          </blockquote>

          <p>这张优先级表只有 8 行，但它解决了知识库 skill 最致命的问题：<strong>给了 99 条规则，用户不知道先遵循哪一条</strong>。</p>

          <p>通过 CRITICAL → HIGH → MEDIUM → LOW 四级分层，它告诉用户（也告诉 AI）：先确保无障碍合规，再处理交互反馈，然后优化性能，最后才考虑视觉风格和图表。这不只是信息分类，而是<strong>决策排序</strong>。</p>

          <p>在 ui-reasoning.csv 中，每条推理规则还带有 Severity 字段（HIGH/MEDIUM），进一步在推荐层面做了优先级标注。这种"处处有优先级"的设计让 AI 在信息冲突时有明确的取舍标准。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              知识库 skill 不能只堆信息，要给信息标权重。用户的注意力是有限的——帮他们决定"先看什么"比"给他们看全部"更有价值。
            </p>
          </div>
        </div>

        {/* ── 05 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
            关键词核弹式 frontmatter：为发现率而设计
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              {`description: "UI/UX design intelligence. 50 styles, 21 palettes...
Actions: plan, build, create, design, implement, review, fix...
Projects: website, landing page, dashboard, admin panel...
Elements: button, modal, navbar, sidebar, card, table, form...
Styles: glassmorphism, claymorphism, minimalism, brutalism..."`}
            </pre>
          </blockquote>

          <p>这段 description 长得令人窒息——但它是故意的。</p>

          <p>Skill 的 description 字段是 AI 判断"是否激活这个 skill"的主要依据。这段 description 用了一种极端但有效的策略：<strong>穷举所有可能触发此 skill 的关键词</strong>。Actions 列了 12 个动词，Projects 列了 10 种项目类型，Elements 列了 8 种组件，Styles 列了 10 种风格……</p>

          <p>这让任何包含 "landing page"、"glassmorphism"、"dark mode"、"button"、".tsx" 的用户请求都会命中这个 skill。它牺牲了 description 的"可读性"，换来了"可发现性"。</p>

          <p>在 skill 生态中，一个 skill 再好，如果不被激活就没有意义。这种关键词策略本质上是在做 <strong>SEO for AI</strong>。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              description 不是写给人看的——它是写给 skill 路由系统看的。像做 SEO 一样设计你的 description：覆盖所有可能的触发词，包括同义词、文件扩展名、动作动词。
            </p>
          </div>
        </div>

        {/* ── 06 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">06</span>
            Pre-Delivery Checklist：质量的最后一道门
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              {`Before delivering UI code, verify these items:
- [ ] No emojis used as icons (use SVG instead)
- [ ] All clickable elements have cursor-pointer
- [ ] Hover states provide clear visual feedback
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Responsive at 375px, 768px, 1024px, 1440px`}
            </pre>
          </blockquote>

          <p>Checklist 出现在 SKILL.md 的最后，也出现在 design_system.py 生成的每一份设计系统输出中。这种"双重植入"确保了无论 AI 是直接读 SKILL.md 还是通过脚本生成设计系统，都会在最后一步看到这份检查清单。</p>

          <p>每一条都极具实操性——不是"注意无障碍性"这种空话，而是"4.5:1 对比度"、"cursor-pointer"、"375px/768px/1024px/1440px"这种可以直接检查的数值标准。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              在 skill 的输出中植入质量检查清单。它既是给 AI 的"别忘了"提醒，也是给用户的验收标准。具体的数值比抽象的原则更有约束力。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 结构逻辑 ──────────────────── */}
      <section id="structure">
        <h2>它的结构逻辑</h2>

        <p>UI/UX Pro Max 选择了一种<strong>三层嵌套架构</strong>：</p>

        <p><strong>第一层：SKILL.md（路由层）</strong>。387 行的 SKILL.md 并不承载具体的设计知识——它的角色是"使用说明书"。告诉 AI 什么时候用这个 skill、怎么调用脚本、搜索结果怎么解读。真正的知识在第二层。</p>

        <p><strong>第二层：CSV 数据库（知识层）</strong>。11 + 12 = 23 个 CSV 文件，每个文件是一个领域的结构化知识。CSV 的选择非常聪明——它是最通用的结构化数据格式，Python 标准库原生支持，不需要任何依赖。</p>

        <p><strong>第三层：Python 脚本（逻辑层）</strong>。BM25 搜索、推理引擎、聚合生成器、持久化——这些是知识层之上的"智能"。它们决定了"给什么"和"怎么给"。</p>

        <p>这种架构的优势在于<strong>关注点分离</strong>：要增加新风格，只需编辑 CSV；要改变推荐逻辑，只需调整推理规则；要支持新的输出格式，只需加一个 formatter。SKILL.md 本身几乎不需要动。</p>

        <p>这与大多数 skill 把"知识 + 流程 + 格式"全部写进一个 SKILL.md 的做法形成了鲜明对比。当知识量超过临界点时，分层是必然选择。</p>
      </section>

      <div className="section-divider" />

      {/* ── 写作模式 ──────────────────── */}
      <section id="pattern">
        <h2>它的写作模式</h2>

        <h3>结构公式</h3>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            [关键词密集型 frontmatter] + [优先级分级概览] + [快速参考卡片] + [分步工作流] + [CLI 搜索引擎] + [推理引擎] + [聚合生成器] + [持久化层] + [反模式清单] + [质量检查清单]
          </p>
        </div>

        <p>这个公式的核心逻辑是<strong>由浅入深的使用路径</strong>。用户可以只看 Quick Reference 就开始干活，也可以深入到 --design-system 获得完整推荐，还可以用 --persist 建立跨会话的设计系统。三个深度级别，对应三种不同的使用场景。</p>

        <h3>匹配的已知模式</h3>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>渐进式披露</strong>（Progressive Disclosure）— 优秀级。三层架构天然实现了信息的按需加载，深度级别设计精彩：Quick Reference → 单域搜索 → 设计系统聚合 → 持久化。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>自动默认 + 手动覆盖</strong>（Auto-Defaults with Override）— 创新级。domain 自动检测、产品类型自动推理、风格优先级自动匹配，同时用户可以在任何层面手动覆盖。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>反模式清单</strong>（Anti-Pattern Listing）— 优秀级。"Common Rules for Professional UI" 部分用 Do/Don't 表格呈现，ui-reasoning.csv 中的 Anti_Patterns 字段在生成设计系统时自动输出，形成"双保险"。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>完成报告</strong>（Completion Report）— 标准级。--persist 的输出确认信息和设计系统的格式化输出算是完成报告，但缺少"前后对比"式的增强。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>焦虑→确定性管道</strong>（Anxiety → Certainty Pipeline）— 优秀级。精准命中"我不知道该选什么风格"的决策焦虑，通过推理引擎把"无数种可能"收敛为"一个推荐方案"。</p>
          </div>
        </div>

        <p>匹配的模式组合类型：<strong>知识库型</strong>（渐进披露 + 反模式清单 + 多维参数 + 赋能叙事），但带有工作流型的特征（--design-system 的管道式编排）。可以说是知识库型的进化版——<strong>可查询知识库型</strong>。</p>
      </section>

      <div className="section-divider" />

      {/* ── 同类构建 ──────────────────── */}
      <section id="build-guide">
        <h2>如果我们要写一个同类 skill</h2>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>确定知识领域和数据规模</strong>。如果你的规则超过 50 条，走"CSV + 搜索引擎"路线；如果不到 50 条，直接写进 SKILL.md。（必须，工作量：轻）</li>
          <li className="leading-relaxed pl-1"><strong>设计 CSV 结构</strong>。每个 domain 一个文件，列名包含 search_cols（用于检索）和 output_cols（用于输出）。搜索列要包含足够的关键词。（必须，工作量：重）</li>
          <li className="leading-relaxed pl-1"><strong>实现 BM25 搜索引擎</strong>。直接复用 core.py 的 BM25 实现（约 60 行），只需修改 CSV_CONFIG 映射。（必须，工作量：轻）</li>
          <li className="leading-relaxed pl-1"><strong>设计推理规则</strong>。创建一个 reasoning CSV，把"什么场景推荐什么"的逻辑结构化。（可选但推荐，工作量：中）</li>
          <li className="leading-relaxed pl-1"><strong>实现聚合生成器</strong>。把多次搜索的结果编排成一个"一键出结果"的函数。（可选但推荐，工作量：中）</li>
          <li className="leading-relaxed pl-1"><strong>编写 SKILL.md</strong>。作为路由层和使用说明，不承载具体知识。包含：frontmatter（关键词密集）、When to Apply、Quick Reference（优先级分级）、Step-by-step 工作流、搜索参考表、Pre-Delivery Checklist。（必须，工作量：中）</li>
          <li className="leading-relaxed pl-1"><strong>添加持久化层</strong>。如果产出需要跨会话复用，实现 --persist + Master/Override 模式。（可选，工作量：中）</li>
        </ol>

        <h3>可复制模板</h3>

        <CodeBlock language="markdown" code={`---
name: {skill-name}
description: "{领域} intelligence. {数据规模概述}. Actions: {触发动词列表}. Projects: {适用项目类型}. Elements: {适用元素}. Topics: {相关话题关键词}."
---

# {Skill Name} - {领域} Intelligence

{一句话概述}。Contains {X} {类型}, {Y} {类型}. Searchable database with priority-based recommendations.

## When to Apply

Reference these guidelines when:
- {场景 1}
- {场景 2}
- {场景 3}

## Rule Categories by Priority

| Priority | Category | Impact |
|----------|----------|--------|
| 1 | {最关键的类别} | CRITICAL |
| 2 | {次关键的类别} | HIGH |
| 3 | {中等重要的类别} | MEDIUM |

## Quick Reference

### 1. {Critical Category}

- \`{rule-id}\` - {规则简述}
- \`{rule-id}\` - {规则简述}

## How to Use This Skill

### Step 1: Analyze Requirements

Extract: {需要从用户请求中提取的信息}

### Step 2: Generate {Output} (REQUIRED)

\`\`\`bash
python3 skills/{skill-name}/scripts/search.py "<query>" --{主命令}
\`\`\`

### Step 3: Supplement with Detailed Searches

\`\`\`bash
python3 skills/{skill-name}/scripts/search.py "<keyword>" --domain <domain>
\`\`\`

## Search Reference

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| \`{domain}\` | {用途} | {关键词示例} |

## Pre-Delivery Checklist

- [ ] {可量化的检查项 1}
- [ ] {可量化的检查项 2}
- [ ] {可量化的检查项 3}`} />
      </section>

      <div className="section-divider" />

      {/* ── 改进空间 ──────────────────── */}
      <section id="improvements">
        <h2>它还可以更好</h2>

        <p><strong>SKILL.md 路由层偏重。</strong> 387 行对于一个"使用说明书"来说偏长。Quick Reference 部分列出了 30+ 条具体规则，但这些规则同时存在于 CSV 数据库中，更新时可能不同步。可以精简为"每个优先级只列最重要的 1-2 条"，其余通过搜索获取。</p>

        <p><strong>domain 自动检测偶有误判。</strong> detect_domain 函数使用简单的关键词计数。搜索 "dashboard color scheme" 可能命中 product domain（因为 "dashboard" 是 product 关键词）而不是 color domain。可以改用加权匹配或允许多 domain 同时搜索。</p>

        <p><strong>缺少极简模式。</strong> --design-system 的输出虽然有 ASCII Box 和 Markdown 两种格式，但没有提供"极简模式"。对于只需要"告诉我用什么颜色和字体"的快速场景，一个 --quick 参数可以只输出风格名 + 主色 + 标题字体。</p>

        <p><strong>赋能感偏弱。</strong> 这个 skill 是一个强大的查询工具，但用户用完之后对"为什么这个风格适合这个产品"的理解不会加深。如果在推理结果中加入简短的 reasoning explanation，不仅让 AI 输出更有说服力，也帮用户建立设计直觉。</p>
      </section>

      <div className="section-divider" />

      {/* ── 启发 ──────────────────────── */}
      <section id="takeaways">
        <h2>写 skill 可以从它身上学到什么</h2>

        <p><strong>知识规模决定架构选择。</strong> 50 条以下的规则可以写进 SKILL.md；50 条以上，必须分层——数据层、搜索层、表现层。UI/UX Pro Max 的三层架构是知识库型 skill 的标杆实现。</p>

        <p><strong>搜索优于倾倒。</strong> 与其把 500 行规则全部加载进上下文指望 AI 记住每一条，不如只给 AI 最相关的 3 条。BM25 搜索引擎用 60 行 Python 实现、零外部依赖，是性价比极高的方案。</p>

        <p><strong>推理引擎让推荐有逻辑。</strong> 从"最相关"到"最合适"的跨越需要一层推理。ui-reasoning.csv 的做法——把决策规则也结构化——让推荐可追溯、可调试、可迭代。</p>

        <p><strong>frontmatter 是 skill 的 SEO。</strong> description 字段不是写给人看的，是写给路由系统看的。穷举触发词、覆盖同义词和文件扩展名，才能确保 skill 在该激活时被激活。</p>

        <p><strong>持久化解决无状态问题。</strong> AI 对话是无状态的，但设计决策需要跨会话一致。Master + Override 模式用极低的成本在文件系统中建立了"设计系统的持久层"，这个思路适用于任何需要跨会话复用的 skill 产出。</p>
      </section>
    </ArticleLayout>
  );
}
