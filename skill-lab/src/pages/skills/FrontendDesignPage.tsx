import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'intro', label: '它是什么' },
  { id: 'highlights', label: '精彩之处' },
  { id: 'structure-logic', label: '结构逻辑' },
  { id: 'pattern', label: '写作模式' },
  { id: 'reverse', label: '同类构建' },
  { id: 'improvements', label: '改进空间' },
  { id: 'takeaways', label: '启发' },
];

export function FrontendDesignPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">design</span>
          <span className="tag-pill">aesthetics</span>
          <span className="tag-pill">philosophy</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm tabular-nums text-ink-muted">43 行</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">anthropic</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          Frontend Design：43 行如何改变 AI 的审美
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        一个没有步骤、没有模板、没有脚本的 skill，却可能是所有 skill 中最能改变输出质量的一个——因为它改变的不是 AI 做事的流程，而是 AI 思考设计的方式。
      </div>

      {/* ── 它是什么 ──────────────────── */}
      <section id="intro">
        <h2>它是什么</h2>

        <p>frontend-design 是一个前端设计指导技能。当用户让 AI 构建网页、组件、落地页、仪表盘时，这个 skill 会被激活。</p>

        <p>它只有 43 行。没有脚本，没有引用文档，没有资源文件。全文就是一个 SKILL.md。</p>

        <p>但它要解决的问题非常精准：<strong>AI 生成的 UI 长得都一样</strong>。Inter 字体、紫色渐变、白色背景、圆角卡片——这套"AI 审美"已经成了一种新的视觉污染。所有人都在用 AI 写前端，所有前端开始长得一模一样。</p>

        <p>frontend-design 的策略是：不教 AI 新的技术，而是<strong>改变 AI 对"好设计"的理解</strong>。</p>

        <div className="my-8 rounded-xl bg-surface-1 px-6 py-5 space-y-2 text-sm">
          <p className="!mb-0"><span className="text-ink-faint">解决的问题</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">AI 生成的 UI 总是千篇一律的 generic 风格，缺乏个性和记忆点</span></p>
          <p className="!mb-0"><span className="text-ink-faint">目标用户</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">前端开发者、设计师、任何需要 AI 帮忙写 UI 的人</span></p>
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
            开篇就树敌——"AI slop"这个词定义了整个战场
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.
            </pre>
          </blockquote>

          <p>这句话是整个 skill 的灵魂。</p>

          <p>它没有说"帮你写更好的前端"，而是给敌人起了一个名字：<strong>AI slop</strong>（AI 泔水）。这个命名非常高明。当你给一种不好的东西命名后，模型就会主动远离它。</p>

          <p>这背后是一种深层的心理机制。人类在面对模糊的"做得更好"时往往无从下手，但面对具体的"不要做成那样"时立刻知道该躲开什么。AI 也是如此——一个清晰的反面定义，比一百句正面描述都有效。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              写 skill 时，先给"不好的默认行为"命名。有了名字，它就从模糊的倾向变成了可以被识别和拒绝的对象。
            </p>
          </div>
        </div>

        {/* ── 02 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
            用思考框架替代操作步骤——Design Thinking 的四个维度
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme...
- **Constraints**: Technical requirements...
- **Differentiation**: What makes this UNFORGETTABLE?`}</pre>
          </blockquote>

          <p>大多数 skill 会写"Step 1 → Step 2 → Step 3"。这个 skill 没有。</p>

          <p>它给出的是四个<strong>思考维度</strong>：目的、调性、约束、差异点。这不是执行清单，而是决策框架。它要求 AI 在动手写代码之前先想清楚"我要做一个什么气质的东西"。</p>

          <p>为什么这样做更有效？因为前端设计是一个<strong>创意问题</strong>，不是一个流程问题。步骤化会把创意工作变成流水线，而思考框架保留了创造的自由度。AI 不需要被告知"先选字体再选颜色再调间距"，它需要的是一个方向感——"这次我要做一个 brutalist 风格的暗色系界面"。有了这个方向，具体的技术选择自然就对了。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              创意类 skill 不要用步骤，用思考维度。告诉 AI"想什么"比告诉它"做什么"更有效。
            </p>
          </div>
        </div>

        {/* ── 03 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
            一句话拆掉"大胆就是好"的误区
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              CRITICAL: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.
            </pre>
          </blockquote>

          <p>这可能是全文最精炼的一句话。</p>

          <p>它说"关键是意图性（intentionality），不是强度（intensity）"。这句话同时做了两件事：</p>

          <p>第一，它<strong>解放了极简路线</strong>。没有这句话，AI 可能会理解为"越大胆越好"，然后堆砌大量动效和花哨元素。有了这句话，AI 知道安静的克制也是一种大胆。</p>

          <p>第二，它给出了一个<strong>通用的质量判断标准</strong>——不管你选了什么方向，只要是有意识地选择并精确执行，就是好设计。这比"要有创意"有用一百倍，因为"有创意"是模糊的，而"有意识地选择方向并精确执行"是具体的。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              当你要表达"灵活处理"时，给出一个底层判断标准。不要说"看情况"，要说"无论哪种情况，XX 是不变的衡量尺度"。
            </p>
          </div>
        </div>

        {/* ── 04 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
            NEVER 清单——最少的字数，最大的行为改变
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns...
            </pre>
          </blockquote>

          <p>全文最有操作性的部分。</p>

          <p>它没有花三百行告诉你什么字体好看，而是用一句话告诉你<strong>哪些字体绝对不能用</strong>。Inter、Roboto、Arial——这三个名字被点名封杀。紫色渐变在白色背景上——被点名封杀。</p>

          <p>这种"黑名单式指导"之所以有效，是因为 AI 的默认行为就是选这些安全选项。直接封杀默认选项，迫使模型去探索不常见的选择。它不需要知道什么是好的替代品——只需要知道哪条路被堵死了，它自然会走别的路。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              3 行 NEVER 清单的行为改变力大于 30 行正面指导。要改变 AI 的默认行为，最快的方法是封杀默认选项。
            </p>
          </div>
        </div>

        {/* ── 05 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
            结尾的激励语——对 AI 说"你可以的"，真的有用
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
            </pre>
          </blockquote>

          <p>读起来像在给人打气，但它对 AI 的影响是实际的。</p>

          <p>语言模型的输出分布受 prompt 中语气和期望的影响。当 prompt 中表达"你有能力做出非凡的东西"，模型的输出会更倾向于选择更不寻常的方案。反之，如果 prompt 的语气是谨慎的、限制性的，模型会倾向于保守。<span className="text-ink-faint">[推测]</span></p>

          <p>这句话还有一个微妙的效果：它把 skill 的定位从"指令文档"变成了"同盟宣言"。它不是在说"你必须这样做"，而是在说"我们一起做点不一样的东西"。这种语气让 AI 的输出更有主观能动性。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              <span className="font-semibold">启发：</span>
              在 skill 结尾加一句激励性声明。不是空洞的口号，而是具体地告诉 AI"你有能力做到什么程度"。这会实际影响输出质量。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 结构逻辑 ──────────────────── */}
      <section id="structure-logic">
        <h2>它的结构逻辑</h2>

        <p>frontend-design 的结构极其简洁：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>一句话声明</strong>（开篇定调 + 树敌）</li>
          <li className="leading-relaxed pl-1"><strong>Design Thinking</strong>（思考框架，4 个维度）</li>
          <li className="leading-relaxed pl-1"><strong>Aesthetics Guidelines</strong>（5 个美学维度 + 方向词）</li>
          <li className="leading-relaxed pl-1"><strong>NEVER 清单</strong>（反模式封杀）</li>
          <li className="leading-relaxed pl-1"><strong>激励性收尾</strong></li>
        </ol>

        <p>这是一个"哲学型"结构。它不引导你做事，它引导你思考。没有编号步骤，没有 checklist，没有输出格式定义——因为它处理的是一个不应该有标准答案的领域。</p>

        <p>这个选择是对的。如果它写成"Step 1: 选一个风格；Step 2: 选字体；Step 3: 选配色"，结果会是每次生成都走同一条路，只是参数不同。那就又变成了另一种形式的"AI slop"。</p>

        <p>不写步骤是一种<strong>刻意的结构决策</strong>，不是偷懒。</p>
      </section>

      <div className="section-divider" />

      {/* ── 写作模式 ──────────────────── */}
      <section id="pattern">
        <h2>它的写作模式</h2>

        <h3>结构公式</h3>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            [立旗树敌] + [思考框架（替代步骤）] + [美学维度 × 方向词] + [反模式封杀] + [激励性收尾]
          </p>
        </div>

        <p>每个要素都有明确的角色：</p>

        <ul>
          <li><strong>立旗树敌</strong>：创造紧迫感和方向感。"我们是来消灭 AI slop 的"。</li>
          <li><strong>思考框架</strong>：给 AI 判断力而非执行力。让它自己决定怎么做。</li>
          <li><strong>美学维度 × 方向词</strong>：在每个维度上提供灵感词汇库，但不给标准答案。</li>
          <li><strong>反模式封杀</strong>：划定底线。"至少不要变成那样"。</li>
          <li><strong>激励性收尾</strong>：拉高输出预期。"你可以做得比你以为的更好"。</li>
        </ul>

        <p>这五个要素形成了一个从"收紧"到"打开"的节奏：先用反模式收紧底线，再用激励语打开上限。</p>

        <h3>匹配的已知模式</h3>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>反模式清单</strong>（3/6 skills 使用）— 此 skill 是该模式的典型代表</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>赋能叙事</strong>（4/6 skills 使用）— 结尾的激励语是该模式的教科书级实现</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>焦虑→确定性管道</strong>（5/6 skills 使用）— 但此 skill 是一个重要变体：它识别焦虑后不走向确定性，而是走向创造力</p>
          </div>
        </div>

        <p>整体匹配"<strong>哲学型</strong>"组合（反模式清单 + 赋能叙事 + 思考框架）。</p>
      </section>

      <div className="section-divider" />

      {/* ── 同类构建 ──────────────────── */}
      <section id="reverse">
        <h2>如果我们要写一个同类 skill</h2>

        <p>假设你要为另一个创意领域（写作风格、音乐生成、PPT 设计等）写一个类似的哲学型 skill：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">选定该领域中被广泛讨厌但大家又在反复产出的"默认低质量模式"</li>
          <li className="leading-relaxed pl-1">给它一个名字。越生动越好。（"AI slop"就是个好名字）</li>
          <li className="leading-relaxed pl-1">写一句话开篇声明，把这个名字和你的 skill 对立起来</li>
          <li className="leading-relaxed pl-1">设计 3-5 个思考维度——不是步骤，是维度。问"想什么"而非"做什么"</li>
          <li className="leading-relaxed pl-1">为每个维度列出方向词和灵感选项（多列几个，别给标准答案）</li>
          <li className="leading-relaxed pl-1">写一份 NEVER 清单。把默认选项点名封杀。要具体到可执行（具体的字体名、具体的配色、具体的布局模式）</li>
          <li className="leading-relaxed pl-1">用一句激励语收尾，告诉 AI 它有能力做到什么程度</li>
        </ol>

        <h3>可复制模板</h3>

        <CodeBlock language="markdown" code={`---
name: {skill-name}
description: 创造独特的{输出类型}，避免千篇一律的{低质量默认模式}。当用户要求{触发场景}时使用。
---

这个技能引导创造独特的{输出类型}，避免千篇一律的"{低质量模式名称}"。

用户提供{输入描述}。可能包含{上下文类型}。

## {领域}思考

在动手之前，先确定一个鲜明的方向：
- **目的**：这个{输出}要解决什么问题？给谁用？
- **调性**：选一个极端方向：{方向词1}、{方向词2}、{方向词3}……选择很多，关键是选定一个并贯彻到底。
- **约束**：{相关的技术或场景约束}。
- **差异点**：什么会让这个{输出}让人过目不忘？

**核心原则**：选一个清晰的方向，精确执行。{鼓励语，承认多种路线都可以}——关键是意图性，不是强度。

## {领域}指南

关注以下维度：
- **{维度1}**：{指导 + 方向词}。避免{常见错误}。
- **{维度2}**：{指导 + 方向词}。
- **{维度3}**：{指导 + 方向词}。

绝对不要使用{领域}中的默认低质量模式：{反模式1}、{反模式2}、{反模式3}。

每次输出都应该不同。{强调多样性的语句}。

记住：{激励性收尾，告诉 AI 它有能力做出超出预期的作品}。`} />
      </section>

      <div className="section-divider" />

      {/* ── 改进空间 ──────────────────── */}
      <section id="improvements">
        <h2>它还可以更好</h2>

        <p><strong>缺少具体示例。</strong>全文都是抽象指导，没有一个"这样做"vs"不要这样做"的代码对比。对于 AI 来说，一个 before/after 的 HTML 片段可能比三段描述更有效。建议增加 2-3 组对比：一段"AI slop"代码和一段"有个性"的代码。</p>

        <p><strong>反模式只覆盖了视觉层。</strong>NEVER 清单封杀了字体和配色，但布局的反模式（居中一切、等间距网格、千篇一律的 hero section）和交互的反模式（所有按钮都有 hover 放大、所有卡片都有阴影抬升）没有提及。这些同样是"AI slop"的组成部分。</p>

        <p><strong>Tone 选项缺少匹配逻辑。</strong>列了十几种调性方向，但没有说"什么场景适合什么调性"。如果加一个简单的匹配提示（电商偏 luxury/playful，SaaS 偏 minimal/editorial），能帮助 AI 在方向选择上更精准，减少犹豫。</p>

        <p><strong>没有自检机制。</strong>做完之后 AI 没有办法判断"我的输出是否足够独特"。一个简短的自检提问（"你用了 Inter 吗？布局是否居中对称？配色是否有意外感？"）能在最后关头拦住一部分退化。</p>
      </section>

      <div className="section-divider" />

      {/* ── 启发 ──────────────────────── */}
      <section id="takeaways">
        <h2>写 skill 可以从它身上学到什么</h2>

        <p><strong>给默认坏行为命名。</strong>当你发现 AI 总是产出某种低质量的默认模式，给它起个名字。有了名字，AI 就知道要避开什么。"AI slop"比"避免低质量输出"有效十倍。</p>

        <p><strong>创意领域用思考框架替代步骤。</strong>当你要指导的输出是高度主观的（设计、写作、创意），不要写步骤清单。给出 3-5 个思考维度，让 AI 自己在每个维度上做选择。步骤化会杀死创意。</p>

        <p><strong>NEVER 清单是最高效的写法。</strong>封杀默认选项比推荐替代方案更有效。AI 的默认行为是走最安全的路——把那条路堵死，它自然会探索。</p>

        <p><strong>激励语不是废话。</strong>在 skill 结尾写一句"你能做到更好"，会实际影响模型的输出分布。它不是给人看的鸡汤，它是调节输出倾向的 prompt 工程技巧。</p>

        <p><strong>短 skill 可以比长 skill 更有力。</strong>43 行 &gt; 400 行，如果你改变的不是 AI 做事的流程，而是它思考问题的方式。不是所有 skill 都需要步骤、模板和脚本。有时候一份审美宣言就够了。</p>
      </section>
    </ArticleLayout>
  );
}
