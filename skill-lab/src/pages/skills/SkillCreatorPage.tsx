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

export function SkillCreatorPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">meta-skill</span>
          <span className="tag-pill">evaluation</span>
          <span className="tag-pill">methodology</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm tabular-nums text-ink-muted">481 行</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">anthropic</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          Skill Creator：教 AI 造 AI 技能的元技能，以及它背后的方法论野心
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        481 行 SKILL.md、7 个脚本、3 个专职 agent、一个完整的 eval viewer——这不是一个技能，这是一套技能工厂的操作系统。它最精彩的地方不是教你怎么写 skill，而是把"创建 skill"这件事变成了一个可量化、可迭代、有对照组的实验过程。
      </div>

      {/* ── 它是什么 ──────────────────── */}
      <section id="intro">
        <h2>它是什么</h2>

        <p>Skill Creator 是 Anthropic 为 Claude Code 打造的官方元技能（meta-skill）。它的目标是帮助用户从零开始创建一个 AI 技能，然后通过反复测试和迭代把它打磨到好用。</p>

        <p>它解决的核心问题是：<strong>写一个 skill 容易，写一个好 skill 难</strong>。大多数人写完第一版就停了，因为不知道怎么评估"好不好"，也不知道怎么系统性地改进。Skill Creator 把这个模糊的"改进"过程工程化了——它引入了测试用例、对照实验、量化评分、用户反馈循环、描述优化，让"创建 skill"从手艺活变成了可复现的流程。</p>

        <div className="my-8 rounded-xl bg-surface-1 px-6 py-5 font-mono text-sm leading-loose text-ink-muted">
          <p className="!mb-0">skill-creator/</p>
          <p className="!mb-0 pl-5">├── <span className="text-ink">SKILL.md</span> <span className="text-ink-faint">— 481 行主体指令</span></p>
          <p className="!mb-0 pl-5">├── scripts/ <span className="text-ink-faint">— 7 个 Python 脚本（评估、聚合、优化、打包）</span></p>
          <p className="!mb-0 pl-5">├── agents/ <span className="text-ink-faint">— 评分器 · 盲评器 · 分析器</span></p>
          <p className="!mb-0 pl-5">├── eval-viewer/ <span className="text-ink-faint">— HTML 评审界面</span></p>
          <p className="!mb-0 pl-5">├── references/ <span className="text-ink-faint">— JSON schema 文档</span></p>
          <p className="!mb-0 pl-5">└── assets/ <span className="text-ink-faint">— 评审模板</span></p>
        </div>

        <p>这是我们分析过的资源最丰富、工程化程度最高的技能。</p>
      </section>

      <div className="section-divider" />

      {/* ── 精彩之处 ──────────────────── */}
      <section id="highlights">
        <h2>它的精彩之处</h2>

        {/* ── 01 ── */}
        <div className="mt-10">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
            迭代循环作为第一性原理
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Decide what you want the skill to do → Write a draft →
Create test prompts and run claude-with-access-to-the-skill on them →
Help the user evaluate the results →
Rewrite the skill based on feedback →
Repeat until you're satisfied →
Expand the test set and try again at larger scale`}</pre>
          </blockquote>

          <p>整个技能围绕一个核心循环构建：<strong>草稿 → 测试 → 评估 → 改进 → 重复</strong>。这不是某个章节里提到的建议，而是整个技能的骨架——所有其他内容（脚本、agent、viewer）都是为了让这个循环跑得更快、更可靠。</p>

          <p>大多数"教你做 X"的技能会写一份线性清单。Skill Creator 认识到创建技能是一个<strong>收敛问题</strong>，不是一个执行问题——你不可能一次写对，你需要反复逼近。所以它的结构不是一条线，而是一个环。</p>

          <p>更聪明的是，它在循环中嵌入了科学方法：有实验组（with-skill），有对照组（baseline），有量化指标（pass rate），有定性评估（用户反馈）。这让"改进 skill"从"感觉好了一点"变成了"pass rate 从 0.65 提升到 0.85"。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              当最终产出不可能一次做对时，不要写线性步骤，要写迭代循环。循环结构承认不完美，并提供系统性改进的路径。
            </p>
          </div>
        </div>

        {/* ── 02 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
            "Cool? Cool." —— 技术文档里罕见的人味
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Cool? Cool.`}</pre>
          </blockquote>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`This task is pretty important (we are trying to create
billions a year in economic value here!) and your thinking
time is not the blocker; take your time and really mull
things over.`}</pre>
          </blockquote>

          <p>整个 SKILL.md 的语气像一个经验丰富的同事在跟你聊天，不像一份技术规范。"Cool? Cool." 出现在核心循环介绍之后，用两个词确认了共识。"we are trying to create billions a year in economic value here!" 则用一种半开玩笑的方式传达了任务的重要性。</p>

          <p>这种语气不是随意的——它是刻意的设计选择。当一个 skill 有 481 行时，保持读者（包括 AI）的注意力本身就是挑战。对话式语气降低了认知疲劳，让模型更倾向于"理解意图"而不是"机械执行指令"。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              对话式语气在长文档中是功能性需求，不是风格偏好。它让 AI 倾向于理解意图，而非机械执行。
            </p>
          </div>
        </div>

        {/* ── 03 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
            预见了"人人都是开发者"的时代
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`There's a trend now where the power of Claude is inspiring
plumbers to open up their terminals, parents and grandparents
to google "how to install npm".`}</pre>
          </blockquote>

          <p>它给出了具体的术语校准标准：</p>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-sm text-ink-muted"><strong>"evaluation"</strong> and <strong>"benchmark"</strong> are borderline, but OK</p>
            <p className="text-sm text-ink-muted !mb-0">for <strong>"JSON"</strong> and <strong>"assertion"</strong> you want to see serious cues from the user that they know what those things are</p>
          </div>

          <p>这不是空泛的"注意用户水平"，而是精确到了具体术语级别。它告诉 AI："evaluation 可以直接说，但 JSON 要先确认用户懂不懂"。这种颗粒度的沟通指导，在其他技能中几乎看不到。</p>

          <p>技术工具的说明文档几乎都假设读者是技术人员。当受众扩大时，Skill Creator 没有选择"写两个版本"，而是让 AI 实时检测并适应。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              不要假设用户的技术水平。给出术语级别的校准标准，让 AI 自行判断何时需要解释。
            </p>
          </div>
        </div>

        {/* ── 04 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
            "Explain the why" —— 反 MUST 的写作哲学
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Try hard to explain the **why** behind everything you're
asking the model to do. Today's LLMs are *smart*. If you
find yourself writing ALWAYS or NEVER in all caps, or using
super rigid structures, that's a yellow flag — if possible,
reframe and explain the reasoning so that the model
understands why the thing you're asking for is important.`}</pre>
          </blockquote>

          <p>这可能是整个 skill 中最深刻的一段。它不是在说"怎么改进技能"，它是在说<strong>"怎么跟 AI 沟通"</strong>。</p>

          <p>它的观点是：与其用大写的 MUST 和 NEVER 来约束 AI，不如解释原因让 AI 自己判断。这是一种尊重智能体自主性的写法——你给它理由，它自己得出结论，比你给它命令但它不理解为什么要这样做效果更好。</p>

          <p>而且这个观点是自洽的——Skill Creator 自己就几乎不用 MUST/NEVER。它用 "please"、"I'd suggest"、"if possible" 这类柔性表达，但传达的信息一点也不模糊。它用自己的写法证明了自己的理论。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              AI 理解了原因后会在新场景中自行推理正确做法。MUST 只在它见过的场景中有效，遇到新情况就失灵。
            </p>
          </div>
        </div>

        {/* ── 05 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
            并行对照实验——把 A/B 测试引入技能开发
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`For each test case, spawn two subagents in the same turn —
one with the skill, one without. This is important: don't
spawn the with-skill runs first and then come back for
baselines later. Launch everything at once so it all
finishes around the same time.`}</pre>
          </blockquote>

          <p>每个测试用例同时跑两个版本：带技能的和不带技能的（或旧版本的），然后对比结果。强调"在同一轮次同时启动"不是性能优化——它是为了<strong>控制变量</strong>。</p>

          <p>更进一步，它还有盲评机制（Blind Comparator）：让一个独立的 agent 看两份输出，但不告诉它哪个是实验组哪个是对照组，纯粹基于质量判断。这直接对标了学术研究中的双盲实验。虽然标注为 "advanced" 和 "optional"，但它的存在本身就拉高了这个技能的方法论层次。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              对照实验、量化指标、盲评机制——这些不是锦上添花，它们是把"感觉变好了"变成"确实变好了"的基础设施。
            </p>
          </div>
        </div>

        {/* ── 06 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">06</span>
            把描述优化当成机器学习问题
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`It splits the eval set into 60% train and 40% held-out test,
evaluates the current description (running each query 3 times
to get a reliable trigger rate), then calls Claude with
extended thinking to propose improvements based on what failed.`}</pre>
          </blockquote>

          <p>Description Optimization 把"让 skill 被正确触发"这个问题，完全用机器学习的方法论来处理：</p>

          <ul>
            <li><strong>训练集/测试集划分</strong>（60/40），防止过拟合</li>
            <li><strong>每个 query 跑 3 次</strong>，用统计方法得到可靠的触发率</li>
            <li><strong>迭代优化</strong>，最多 5 轮</li>
            <li><strong>用测试集分数选最佳描述</strong>，而不是训练集分数</li>
          </ul>

          <p>大多数人写 skill 描述靠直觉——"这样写应该能触发吧"。Skill Creator 把它变成了可测量、可优化的工程问题。</p>

          <p>而且它还教了一个关键洞察：AI 只有在觉得自己搞不定时才会去查技能。简单任务即使描述完美匹配也不会触发——不是描述写得不好，而是任务太简单。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              触发率是可以工程化优化的。train/test 划分 + 多次运行 + 迭代改进——用实验数据替代直觉猜测。
            </p>
          </div>
        </div>

        {/* ── 07 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">07</span>
            三套环境适配——真正面向部署的工程思维
          </h3>

          <p>技能的最后 60 行专门为不同运行环境做了适配：<strong>Claude Code</strong>（完整版）、<strong>Claude.ai</strong>（无子 agent、无浏览器）、<strong>Cowork</strong>（有子 agent、无浏览器）。</p>

          <p>每套环境说明都具体到了哪些功能可用、哪些要跳过、怎么替代。比如 Claude.ai 没有子 agent，就把并行执行改成串行执行，跳过基准对比，聚焦定性反馈。</p>

          <p>这种对部署环境的严肃考虑，在大多数 skill 中完全缺失。它背后的思维是：<strong>技能不是在真空中运行的，它必须适配真实的约束条件</strong>。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
              环境适配决定了技能的实际覆盖面。花 60 行处理差异，换来的是所有平台的可用性。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 结构逻辑 ──────────────────── */}
      <section id="structure-logic">
        <h2>它的结构逻辑</h2>

        <p>Skill Creator 的结构是<strong>螺旋上升式</strong>的，不是线性的。</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>第一层：概览</strong> — 用自然语言描述整个迭代循环，建立全局心智模型</li>
          <li className="leading-relaxed pl-1"><strong>第二层：细节</strong> — 创建技能、运行评估、改进技能，每个阶段有自己的步骤</li>
          <li className="leading-relaxed pl-1"><strong>第三层：高级功能</strong> — 盲评、描述优化、打包</li>
          <li className="leading-relaxed pl-1"><strong>第四层：环境适配</strong> — 不同平台的差异处理</li>
        </ol>

        <p>一个独特之处：<strong>核心循环被重复了三次</strong>。开头一次（概览），中间一次（详细步骤），结尾一次（强调）。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Repeating one more time the core loop here for emphasis`}</pre>
        </blockquote>

        <p>这种刻意的重复在大多数技能写作指南中会被归为"冗余"。但在一个 481 行的技能中，重复核心循环是必要的——它确保无论 AI 从哪个位置开始读，都能找到这个环的入口。</p>

        <p>子资源的组织也值得关注。agents/ 目录下的三个 agent（grader、comparator、analyzer）形成了一个完整的评估体系：评分 → 盲评 → 分析原因。它们不是独立工具，而是一条评估流水线的三个站点。</p>
      </section>

      <div className="section-divider" />

      {/* ── 写作模式 ──────────────────── */}
      <section id="pattern">
        <h2>它的写作模式</h2>

        <h3>结构公式</h3>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            [情境感知入口] + [迭代循环框架] + [并行对照实验] + [定量+定性双轨评估] + [反馈驱动改进] + [描述优化] + [环境适配]
          </p>
        </div>

        <p>这个公式的核心是"迭代循环"——其他所有要素都是为了让这个循环跑起来。情境感知入口让 AI 判断用户在哪个阶段然后直接切入，并行对照实验和双轨评估提供改进的依据，反馈驱动改进执行改进，描述优化和环境适配是最后的打磨。</p>

        <h3>匹配的已知模式</h3>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>步骤化工作流</strong>（5/6 skills 使用）— 创新质量：步骤形成循环而非直线，且步骤间有明确依赖</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>渐进式披露</strong>（4/6 skills 使用）— 优秀质量：三层加载在这个 skill 中既是教学内容也是自身实践</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>自动默认 + 手动覆盖</strong>（4/6 skills 使用）— 创新质量：根据用户当前阶段动态调整起点</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>焦虑→确定性管道</strong>（5/6 skills 使用）— 优秀质量："不知道怎么写好 skill" → 可量化的迭代改进过程</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>赋能叙事</strong>（4/6 skills 使用）— 优秀质量：用户学到的不只是这个 skill，而是一整套方法论</p>
          </div>
        </div>

        <p>模式组合完美匹配<strong>元技能型</strong>（步骤化 + 迭代循环 + 评估体系 + 赋能叙事）。</p>
      </section>

      <div className="section-divider" />

      {/* ── 同类构建 ──────────────────── */}
      <section id="reverse">
        <h2>如果我们要写一个同类 skill</h2>

        <p>元技能（教 AI 创建某类产出的技能）的构建步骤：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>定义迭代循环</strong>：先想清楚"草稿 → 评估 → 改进"这个环怎么转</li>
          <li className="leading-relaxed pl-1"><strong>设计评估机制</strong>：可量化的指标 + 需要人类判断的定性部分，两条轨道都需要</li>
          <li className="leading-relaxed pl-1"><strong>构建对照实验</strong>：新版本 vs 旧版本，对比才能判断改进是否真的有效</li>
          <li className="leading-relaxed pl-1"><strong>写情境感知入口</strong>：用户可能在任何阶段进来，技能要能判断起点</li>
          <li className="leading-relaxed pl-1"><strong>解释 why，不要堆 MUST</strong>：元技能的用户需要理解原理才能举一反三</li>
          <li className="leading-relaxed pl-1"><strong>提供工具链</strong>：评估脚本、评审界面、聚合统计——减少每次迭代的人工成本</li>
          <li className="leading-relaxed pl-1"><strong>处理环境差异</strong>：不同运行环境有不同的能力约束，技能要优雅降级</li>
          <li className="leading-relaxed pl-1"><strong>重复核心循环</strong>：在开头、中间、结尾各说一次，确保不丢失主线</li>
        </ol>

        <h3>可复制模板</h3>

        <CodeBlock language="markdown" code={`---
name: {domain}-creator
description: Create and iteratively improve {output-type}. Use when users want to create {output-type} from scratch, improve existing {output-type}, or evaluate {output-type} quality.
---

# {Domain} Creator

A skill for creating and iteratively improving {output-type}.

The core loop:
- Understand what the user wants
- Draft the {output}
- Test it with realistic cases
- Evaluate results (quantitative + qualitative)
- Improve based on feedback
- Repeat until satisfied

## Understanding the user

Figure out where the user is in the process and jump in accordingly.
{Possible entry points and how to detect them}

## Creating the {output}

### Capture Intent
{Questions to ask / information to gather}

### Write the draft
{Key components and patterns}

## Testing and evaluating

### Run test cases
{How to set up and run tests, with baseline comparison}

### Evaluate results
{Quantitative metrics + qualitative review process}

## Improving the {output}

{How to think about improvements: generalize, keep lean, explain why}

### The iteration loop
{Improve → Rerun → Review → Repeat}

## Reference files
- {List of agents, scripts, schemas}`} />
      </section>

      <div className="section-divider" />

      {/* ── 改进空间 ──────────────────── */}
      <section id="improvements">
        <h2>它还可以更好</h2>

        <p><strong>信息密度不均。</strong>481 行中有些段落信息密度极高（比如描述优化的 ML 方法论），有些则偏松散。"Communicating with the user" 虽然洞察精彩，但它和"创建技能"的主流程在结构上是割裂的——可以考虑提取到 <code>references/communication-guide.md</code> 中。</p>

        <p><strong>环境适配放在了主文件末尾。</strong>Claude.ai 和 Cowork 的 60 行适配说明每次加载都会进入上下文，即使用户在 Claude Code 中也要付出 token 成本。更好的做法是放到 <code>references/</code> 中，主体只保留一句指针。</p>

        <p><strong>没有 Quick Start。</strong>一个 481 行的技能，用户打开后面对的是一段自然语言概述。如果在开头加一个 5 行的"最小可用流程"，能极大降低首次使用的认知门槛。</p>

        <p><strong>eval viewer 的依赖没有说明。</strong><code>generate_review.py</code> 需要 Python 环境，但没有 <code>requirements.txt</code> 或依赖包说明。在"plumbers opening terminals"的时代，这个遗漏会直接卡住非技术用户。</p>
      </section>

      <div className="section-divider" />

      {/* ── 启发 ──────────────────────── */}
      <section id="takeaways">
        <h2>写 skill 可以从它身上学到什么</h2>

        <p><strong>迭代循环比线性步骤更适合创造性任务。</strong>当最终产出不可能一次做对时，不要写"第一步→第二步→完成"，要写"草稿→测试→改进→重复"。循环结构承认不完美，并提供系统性改进的路径。</p>

        <p><strong>对话式语气在长文档中是功能性需求，不是风格偏好。</strong>481 行的技术文档如果用正式语气写，AI 会倾向于机械执行。对话式语气让 AI 更倾向于理解意图，在模糊地带自主判断。</p>

        <p><strong>"Explain the why" 是比 MUST/NEVER 更强大的指令方式。</strong>AI 理解了原因后会在新场景中自行推理正确做法。MUST 只在它见过的场景中有效，遇到新情况就失灵。</p>

        <p><strong>把评估工程化是元技能的核心竞争力。</strong>对照实验、量化指标、盲评机制——这些不是锦上添花，它们是把"感觉变好了"变成"确实变好了"的基础设施。</p>

        <p><strong>环境适配决定了技能的实际覆盖面。</strong>一个只在理想环境下能用的技能，实际用户群会缩小一半以上。花 60 行处理环境差异，换来的是所有平台的可用性。</p>
      </section>
    </ArticleLayout>
  );
}
