import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'using-ai-backwards', label: '倒着用 AI' },
  { id: 'perfect-memory', label: '完美记忆' },
  { id: 'idea-factory', label: '想法工厂' },
  { id: 'manage-vault-not-agent', label: '管理 Vault' },
  { id: 'writing-meta-skill', label: '写作元技能' },
  { id: 'privacy-tradeoff', label: '隐私权衡' },
  { id: 'getting-started', label: '怎么开始' },
  { id: 'takeaways', label: '要点提炼' },
];

export function ObsidianClaudeCodeVaultPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">Obsidian</span>
          <span className="tag-pill">Claude Code</span>
          <span className="tag-pill">知识管理</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-05</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          你的笔记库就是你最强大的 AI 上下文
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        大多数人用 AI 的方式是反的——每次从零开始喂上下文，聊完即弃，像跟一个永远失忆的同事协作。这篇文章揭示了一个更深层的范式转换：别再管理 AI，开始管理你的笔记库。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <div className="my-8 space-y-1.5 text-sm text-ink-muted">
          <p className="!mb-0"><span className="text-ink-faint">来源</span> — Greg Isenberg 播客（嘉宾 Internet Vin）</p>
          <p className="!mb-0"><span className="text-ink-faint">类型</span> — 观点文 / 实践案例</p>
          <p className="!mb-0"><span className="text-ink-faint">核心工具</span> — Obsidian + Claude Code + OpenClaw</p>
        </div>

        <p>Greg Isenberg 请了 Internet Vin 上播客，聊了一个多小时 Obsidian + Claude Code 的组合拳。听完后最强烈的感受不是「又一个效率工具教程」，而是：这个人把笔记库变成了 AI 的氧气。Greg 本人听到一半就当场下载了 Obsidian，然后说了一句分量很重的话：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`如果你认真地想构建个人操作系统，
而你没有使用以 Markdown 为基础的集中式笔记工具，
那你就没有正确地使用 LLM。`}</pre>
        </blockquote>
      </section>

      <div className="section-divider" />

      {/* ── 倒着用 AI ───────────────────── */}
      <section id="using-ai-backwards">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
          一个反直觉的起点：你一直在倒着用 AI
        </h2>

        <p>绝大多数人用 AI 的习惯是这样的：打开 ChatGPT 或 Claude，从零开始解释「我是谁、我在做什么、我需要什么」，聊完关掉，下次重新来。你反复解释同一个项目，反复描述同一个偏好，反复校正同一个错误。像极了一个永远不记得你说过什么的新同事——每周一入职一次。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            你每次给 AI 的上下文越薄，它能为你做的事就越浅。这不是模型不够聪明，是你喂给它的上下文太薄了——就像给一个天才顾问开会，但每次只给他一张 A4 纸的背景资料。
          </p>
        </div>

        <p>而 Obsidian 解决的恰恰是这个问题。它不是一个普通的笔记软件，是一个由 Markdown 文件组成的、带有双向链接的知识网络。每一篇笔记不是孤岛，而是通过 <code>[[链接]]</code> 与其他笔记形成关系。当你把 Claude Code 接入这个网络，整个交互的基底就变了。</p>
      </section>

      <div className="section-divider" />

      {/* ── 完美记忆 ───────────────────── */}
      <section id="perfect-memory">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
          笔记库 = AI 的「完美记忆」
        </h2>

        <p>播客里有一个让 Greg 目瞪口呆的场景。Vin 输入了一个自定义命令 <code>/trace</code>，让 Claude Code 追踪他与 Obsidian 这个工具的「关系演化史」。Claude Code 扫描了他整个笔记库，读了几十个文件，跟踪链接关系，输出了一份完整的时间线：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">2024 年 12 月，笔记系统里根本没有 Obsidian</li>
          <li className="leading-relaxed pl-1">2025 年 1 月，开始用 Obsidian，但对双向链接持怀疑态度</li>
          <li className="leading-relaxed pl-1">2025 年中，意识到应该为「模式」和「理论」创建独立笔记，而非反向链接到泛化标签</li>
          <li className="leading-relaxed pl-1">2026 年 1 月，进入爆发式构建期，瓶颈不再是 Obsidian 本身，而是 vault 和 agent 之间的执行边界</li>
        </ol>

        <p>Vin 自己看完都说：这件事我一个人做不到。阅读所有这些文件，理解它们之间的关联，作为一个人类来说根本不可能。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`文件本质上是完美的记忆。
人类的记忆研究反复证明，我们记住的东西跟现实完全是两回事。
但一个 Markdown 文件不会说谎。`}</pre>
        </blockquote>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            你的笔记库里存的不是「笔记」，而是你思维的快照。当 AI 能读到这些快照，它比你自己更清楚你在想什么——因为你的记忆会美化、遗忘、扭曲，而文件不会。Markdown 文件就是那个不说谎的证人。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 想法工厂 ───────────────────── */}
      <section id="idea-factory">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
          从反思到行动：笔记库如何变成「想法工厂」
        </h2>

        <p>Vin 给 Claude Code 创建了一系列自定义命令，每个命令都在做一件事：从笔记库里挖出你自己都没意识到的东西。</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>/connect 跨域连接</strong> — 给它两个看起来毫无关系的关键词，比如「电影制作」和「世界构建」，它会遍历整个笔记库的链接图谱，找到隐藏的桥梁。AI 从 Vin 的笔记中发现：电影采访是「打开一个人内心世界的门户」，而他的博客愿景是「像古埃及陵墓一样被后人挖掘和审视」。两者的共同模式：构建一个持久的、可被探索的世界。他自己都没意识到这层联系。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>/challenge 压力测试</strong> — 用你笔记库自己的历史来质疑你当前的观点。找矛盾、反证、思维转变。如果你说你相信 X，但过去六个月的笔记里你其实在不断否定 X，它会直接指出来。一种非常稀缺的认知能力——用自己的历史来审视自己的现在。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>/ideas 创意生成</strong> — 深度的 30 天笔记库扫描，跨领域模式检测加图谱分析，产出一份完整的创意报告。不只是「你应该做什么项目」，还包括「你应该看什么电影」「你应该跟谁聊聊」「你一直在回避什么」。</p>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            这几个命令背后的共同逻辑：AI 不是在替你思考，而是在你的思考基础上做你做不到的事——跨越时间、跨越领域、跨越遗忘的全局扫描。Steve Jobs 说的「connecting the dots」，一直以来只能靠灵感和运气，现在有了一个可以系统性做这件事的工具。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 管理 Vault ──────────────────── */}
      <section id="manage-vault-not-agent">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
          范式转换：管理 Vault，而非管理 Agent
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`我不再管理 agent。我管理我的 vault。
如果它决策不对，我改的是 vault，不是 agent。`}</pre>
        </blockquote>

        <p>大多数人用 AI 的思路是「怎么跟 AI 说话」——研究 prompt engineering，学各种技巧来「驯服」模型。Vin 的思路完全反过来：「怎么写好我的笔记库，让 AI 自己去找答案」。</p>

        <p>你的笔记库不是给你看的备忘录，而是 AI 理解你的唯一接口。你写得越深、越结构化、越持续更新，AI 就越能代表「此刻的你」来做决策。</p>

        <p>他举了个例子：输入 <code>/schedule</code>，问「我今天下午 2 点能跟 Greg Isenberg 开会吗」。Claude Code 不只看了日历，还翻了每日笔记，然后回复：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`你的一天已经排满了。今天早上你在录 Greg 的播客，
接着团队午餐，然后跟 Peter 和 Vince 开会。
而且你 2 月 17 日的笔记显示 Greg 那期一直是你最关注的事。
建议：你可能根本不需要单独的会议。`}</pre>
        </blockquote>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            一个「知道你在想什么」的 AI 日程助手，和一个「只看日历」的助手，给出的建议是完全不同的维度。前者在帮你做决策，后者只在帮你查时间。Prompt 是叶子，笔记库是根——根深了，叶子自然茂盛。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 写作元技能 ──────────────────── */}
      <section id="writing-meta-skill">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
          写作：AI 时代最被低估的「元技能」
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`写作现在还是你委派任务给 agent 的最主要方式。
你能写下越多关于自己项目、偏好、思考的文字，
你能委托给 agent 的事情就越多，你能构建的东西也越多。`}</pre>
        </blockquote>

        <p>写作不只是整理思路，不只是输出内容，它还是在给 AI 构建你的数字镜像。你每天写的每一条笔记，都在让 AI 更懂你。</p>

        <p>以前说「写作是最好的思考工具」，在 AI 时代需要升级：<strong>写作是最好的人机接口。</strong>你写下的文字既帮你自己想清楚，又同时在训练一个越来越懂你的数字搭档。一石二鸟，而且两只鸟都在持续长大。</p>
      </section>

      <div className="section-divider" />

      {/* ── 隐私权衡 ──────────────────── */}
      <section id="privacy-tradeoff">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">06</span>
          隐私：一个无法回避的真实权衡
        </h2>

        <p>Greg 问了一个尖锐的问题：如果 Obsidian 是你的第二个大脑，那让一个自主 Agent 完全访问你的第二个大脑，不可怕吗？</p>

        <p>Vin 很坦诚：可怕。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`你必须认真思考你与这些 agent 分享了多少信息，
以及这是否是正确的决定。`}</pre>
        </blockquote>

        <p>笔记库越丰富，AI 越强大；但笔记库越丰富，你暴露给 AI 的也越多。</p>

        <p>Vin 的策略是<strong>严格的读写分离：只让 AI 读笔记库，不让 AI 写入</strong>。理由很深刻——一旦 AI 开始在笔记库里创建自己的文件，那些「模式发现」就不再纯粹基于你的思考了，可能混入了 AI 自己的推理。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            当你无法区分哪些数据是你的原始思考、哪些是 AI 的产物时，整个系统的「可信度基底」就塌了。保持笔记库的纯净性，本质上是在维护你作为人类思考者的主权。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 怎么开始 ──────────────────── */}
      <section id="getting-started">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">07</span>
          怎么开始
        </h2>

        <p>如果你现在还没用 Obsidian，三步就可以开始：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>下载 Obsidian</strong>（免费），创建你的第一个 Vault</li>
          <li className="leading-relaxed pl-1"><strong>开始写</strong>，每天一条笔记就够了。反思、想法、学到的东西，什么都行。关键是持续写</li>
          <li className="leading-relaxed pl-1"><strong>用 <code>[[双向链接]]</code> 把相关的笔记连起来</strong>。不用追求完美的结构，先连起来再说</li>
        </ol>

        <p>如果你已经在用 Obsidian，想接入 Claude Code，核心就是一件事：写一个 <code>CLAUDE.md</code> 文件，告诉 AI 你是谁、你怎么工作、你要什么标准。哪怕只有 10 行，它就能让 AI 从「通用助手」变成「懂你的搭档」。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`99.99% 的人不会花时间真正去设置类似的东西。
这恰恰意味着，那些愿意花时间的人，会获得巨大的优势。`}</pre>
        </blockquote>

        <p>在 AI 时代，最值得投资的不是学会用哪个工具，而是把你自己的思考持续地、结构化地写下来。工具会换，笔记库会一直跟着你。</p>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ──────────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-4 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>上下文厚度决定 AI 上限</strong> — 与其每次从零开始喂 prompt，不如用持续积累的笔记库给 AI 一个「完美记忆」。你喂给 AI 的上下文越厚，它能做的事越深。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>管理 Vault 而非管理 Agent</strong> — 当 AI 做出不好的决策时，修正的对象不是 prompt，而是笔记库。笔记库是根，prompt 是叶。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>写作是 AI 时代的元技能</strong> — 写作既帮你思考，又同时在构建 AI 理解你的接口。你写得越多越结构化，能委托给 AI 的事情就越多。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>AI 可以帮你发现你自己</strong> — 通过跨时间、跨领域的全局扫描，AI 能看见你思维中的模式、盲区和演变轨迹——不只是干活工具，更是认知镜子。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>读写分离是关键安全边界</strong> — 让 AI 读笔记库但不写入，保持笔记库作为纯粹人类思考快照的纯净性，维护你作为思考者的主权。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>先行动，不求完美</strong> — 每天一条笔记 + 双向链接，持续积累比精心设计更重要。工具会换，笔记库跟你一辈子。
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
