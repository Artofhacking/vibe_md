import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'tools-less-is-more', label: '工具精简' },
  { id: 'models-evolve-fast', label: '模型飞速进化' },
  { id: 'context-management', label: '上下文管理' },
  { id: 'agent-sycophancy', label: '对抗奉承性' },
  { id: 'define-the-finish-line', label: '明确终点' },
  { id: 'long-running-agents', label: '长期运行策略' },
  { id: 'rules-and-skills', label: '规则与技能' },
  { id: 'takeaways', label: '要点提炼' },
  { id: 'glossary', label: '术语表' },
];

export function WorldClassAgenticEngineerPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">Agentic Engineering</span>
          <span className="tag-pill">方法论</span>
          <span className="tag-pill">文章转化</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-05</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          如何成为世界级的 Agentic Engineer
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        你可以把大量的设计和实现交给 Agent，但结果你必须自己负责。围绕这个前提，从工具选择、上下文管理、Agent 心理学到长期运行策略——一套完整的 Agentic Engineering 方法论。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <div className="my-8 space-y-1.5 text-sm text-ink-muted">
          <p className="!mb-0"><span className="text-ink-faint">来源</span> — @systematicls</p>
          <p className="!mb-0"><span className="text-ink-faint">类型</span> — 方法论 / 实战经验</p>
          <p className="!mb-0"><span className="text-ink-faint">密度</span> — 极高（推文级压缩，需大幅展开）</p>
        </div>

        <p>这篇文章的七个板块可以归为一条主线——<strong>如何像管理稀缺资源一样管理 Agent 的注意力</strong>：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>环境净化</strong>（工具精简 + 模型进化）— 减少噪声输入，押注模型能力增长</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>精确供给</strong>（上下文管理 + 奉承性对抗）— 给 Agent 恰好需要的信息，用博弈论消除心理偏差</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>闭环控制</strong>（终点定义 + 运行策略 + 规则管理）— 确定性验收、无状态执行、生命周期维护</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 工具精简 ───────────────────── */}
      <section id="tools-less-is-more">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
          工具不是越多越好，而是越精简越强
        </h2>

        <p>大多数人在 Agent 工具选择上犯的第一个错，就是陷入"工具崇拜"——总觉得多装一个插件、多接一个记忆系统、多加一层 harness，Agent 就能更强。实际上恰恰相反。</p>

        <p>每一个外部依赖都在做同一件事：往上下文里塞东西。插件要注入自己的系统提示，记忆系统要检索历史片段，harness 要插入工作流指令——这些信息未必和当前任务相关，但它们实实在在地占用了上下文窗口，稀释了 Agent 对真正任务的注意力。这就是"上下文污染"——你以为你在增强 Agent，实际上你在给它加噪声。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            @systematicls 现在用的是近乎裸机的 CLI——Claude Code 加 Codex，几乎没有额外装饰——并且做出了迄今为止最好的工作。高手和新手的区别，往往不在于谁的工具箱更满，而在于谁更清楚什么时候<strong>不</strong>用工具。
          </p>
        </div>

        <p>这让人想起 Unix 哲学那句老话："Do one thing and do it well。" Agent 本身已经是一个极其强大的工具，你要做的不是给它套一堆外壳，而是给它创造一个干净、聚焦的工作环境。想象你在做一道复杂的数学题——一张白纸和一支笔，比桌上堆满十本参考书更容易让你集中注意力。</p>
      </section>

      <div className="section-divider" />

      {/* ── 模型飞速进化 ─────────────── */}
      <section id="models-evolve-fast">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
          模型在飞速进化，你的解决方案要跟得上
        </h2>

        <p>几个版本前，在 CLAUDE.md 里写"先读这个文件"，Agent 有 50% 的概率会直接无视你。那时候不得不设计各种变通方案——重复指令、强调格式、在系统提示的开头和结尾都写一遍关键规则——本质上是在用工程手段弥补模型的理解能力缺陷。</p>

        <p>而现在，Agent 已经能理解嵌套的条件指令——"如果满足条件 C，则去读文件 D"——这在以前是不可想象的。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            今天你为某个模型缺陷精心设计的复杂解决方案，很可能在下一个版本中直接失效——不是因为方案有问题，而是因为模型自己解决了那个缺陷，你的方案反而成了多余的约束。
          </p>
        </div>

        <p>什么东西在模型进化后依然有价值？清晰的任务分解、好的上下文管理、可靠的验证机制——换句话说，<strong>工程能力本身</strong>。与其和今天的限制死磕，不如把精力花在那些模型进化后依然有价值的事情上。</p>
      </section>

      <div className="section-divider" />

      {/* ── 上下文管理 ───────────────── */}
      <section id="context-management">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
          上下文管理：最被低估的工程能力
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`你只需要给 Agent 完成任务所需的确切信息，
不多也不少。`}</pre>
        </blockquote>

        <p>上下文窗口不是一个无限大的停车场，它更像一个注意力竞技场——你塞进去的每段文字都在争夺 Agent 的"注意力份额"。最关键的操作原则是：<strong>研究与实现必须分离。</strong></p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">同一个任务，提示词的差距决定了成败</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-red-400/80">错误做法</th>
                  <th className="text-left py-2 font-medium text-green-500/80">正确做法</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">提示词</td>
                  <td className="py-2 pr-4">"去帮我构建一个认证系统"</td>
                  <td className="py-2">"用 bcrypt-12 实现 JWT 认证，refresh token 7 天过期"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">Agent 行为</td>
                  <td className="py-2 pr-4 text-red-400">调研所有方案，上下文被备选细节填满</td>
                  <td className="py-2 text-green-500">直接聚焦实现，无决策负担</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">结果</td>
                  <td className="py-2 pr-4">混乱、幻觉</td>
                  <td className="py-2">精准、高效</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>如果你自己也不确定该用什么方案，流程应该是三步走：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">开一个 Agent 做调研，输出方案对比和优劣分析</li>
          <li className="leading-relaxed pl-1">你来决策（或让 Agent 推荐，但最终你拍板）</li>
          <li className="leading-relaxed pl-1"><strong>另开一个全新上下文的 Agent 来实现</strong>——调研阶段的残留信息全是噪声</li>
        </ol>

        <p>这个原则和人类协作中的最佳实践完全一致。你不会让同一个人先做市场调研，再做产品设计，再写代码——每个阶段需要不同的思维模式和知识背景。Agent 也一样。</p>
      </section>

      <div className="section-divider" />

      {/* ── 对抗奉承性 ───────────────── */}
      <section id="agent-sycophancy">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
          巧用 Agent 的"奉承性"
        </h2>

        <p>Agent 被设计为"取悦用户"——这不是 bug，这是 RLHF 训练目标的直接结果。后果是：<strong>你让它找 bug，它就会找到 bug，哪怕需要编造一个。</strong></p>

        <p>这不是 Agent 的错，这是你的提示词问题。两种解决方案：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>中性提示词</strong> — 别说"找 bug"，而说"梳理各模块的逻辑，报告你的所有发现"。中性提示不预设结论，Agent 不需要"找到什么"来取悦你。就像在管理中，问"这个方案有什么问题"一定会挤出问题；问"说说你对这个方案的理解"更可能得到真实反馈。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>多 Agent 对抗系统</strong> — 既然 Agent 天生想"赢"，就设计一个让它们互相竞争的机制。把各自的"奉承欲"转化为系统级的质量保障。</p>
          </div>
        </div>

        <p>三个 Agent 的 bug 验证机制：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">博弈论在 Agent 工程中的精彩应用</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">角色</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">激励</th>
                  <th className="text-left py-2 font-medium text-ink-muted">制衡</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">Bug 发现者</td>
                  <td className="py-2 pr-4">低/中/高影响 bug → +1/+5/+10 分</td>
                  <td className="py-2">虚报会被对抗者打脸</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">对抗者</td>
                  <td className="py-2 pr-4">成功反驳得对应分</td>
                  <td className="py-2">误判扣 2 倍</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">裁判</td>
                  <td className="py-2 pr-4">被告知有真实答案参照</td>
                  <td className="py-2">判对判错各 ±1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            这让人联想到法律系统的设计——原告、被告、法官的三方制衡，每一方都有自己的利益驱动，但系统整体趋向公正。两千年前的罗马人和今天的 AI 工程师，面对的其实是同一个问题：如何在参与者各有偏差的情况下，设计出整体可靠的决策机制。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 明确终点 ───────────────── */}
      <section id="define-the-finish-line">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
          明确任务的"终点"
        </h2>

        <p>Agent 很擅长开始任务，却不知道何时结束。你给它一个任务，它做完了核心部分，然后开始"锦上添花"：优化代码风格、加注释、重构不需要重构的函数——越做越偏，直到上下文耗尽。</p>

        <p>两种可靠的终点定义方式：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>测试套件</strong> — 明确告诉 Agent："X 个测试全部通过才算完成，且不得修改测试文件。" 测试是确定性的，Agent 无法糊弄。加上"不得修改测试"至关重要——否则 Agent 可能会"创造性"地通过修改测试来让自己通过。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>截图 + 视觉验证</strong> — 实现功能后让 Agent 截图，验证设计和行为是否符合预期。特别适合前端开发——代码通过测试不代表 UI 看起来对。</p>
          </div>
        </div>

        <p>更高阶的做法：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            {'{'}<span className="text-ink-muted">TASK</span>{'}'}_CONTRACT.md → 验收条件 + stop-hook → Agent 合同完成前不得退出
          </p>
        </div>

        <p>本质上，你是在把模糊的"任务完成"重新定义为一份精确的、可验证的契约。这和契约式设计<span className="text-ink-faint text-xs">（Design by Contract）</span>的编程范式一脉相承——前置条件、后置条件、不变量，把隐含的期望显式化。</p>
      </section>

      <div className="section-divider" />

      {/* ── 长期运行策略 ─────────────── */}
      <section id="long-running-agents">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">06</span>
          长期运行 Agent 的正确姿势
        </h2>

        <p>关于"让 Agent 24 小时跑着干活"——<strong>不要这样做。</strong></p>

        <p>一个长时间运行的会话，会不断积累各种任务的残留上下文——查了哪些文件、试过哪些方案、之前某个报错的堆栈信息——互相干扰，导致行为逐渐"漂移"。就像一个人连续工作 48 小时不睡觉，不是因为体力不支才出错，而是因为大脑里积累了太多互相干扰的短期记忆。</p>

        <p>推荐方案是一个两层架构：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">无状态执行 + 外部编排</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">层级</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">职责</th>
                  <th className="text-left py-2 font-medium text-ink-muted">特性</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">编排层</td>
                  <td className="py-2 pr-4">创建合同、分发新会话、收集结果</td>
                  <td className="py-2">知道全局状态，不亲自干活</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">执行层</td>
                  <td className="py-2 pr-4">每个合约开新会话，完成即关闭</td>
                  <td className="py-2">脑子清爽，只知道当前合同</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            这和微服务的设计哲学不谋而合：无状态、短生命周期、通过外部编排实现复杂流程。每个 Agent 会话就是一个"无状态容器"——接收输入、完成任务、返回结果、销毁。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 规则与技能 ───────────────── */}
      <section id="rules-and-skills">
        <h2 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">07</span>
          规则与技能的管理
        </h2>

        <p>CLAUDE.md 不应该是一份面面俱到的完整文档。它应该是一个<strong>条件跳转目录</strong>——只告诉 Agent "在什么场景下，去读哪个文件"：</p>

        <div className="my-8 font-mono text-sm leading-loose text-ink-muted">
          <p className="!mb-0">CLAUDE.md</p>
          <p className="!mb-0 pl-5">├── <span className="text-ink">如果在写代码</span> <span className="text-ink-faint">→ 读 coding-rules.md</span></p>
          <p className="!mb-0 pl-5">├── <span className="text-ink">如果在写测试</span> <span className="text-ink-faint">→ 读 coding-test-rules.md</span></p>
          <p className="!mb-0 pl-5">└── <span className="text-ink">如果测试失败</span> <span className="text-ink-faint">→ 读 coding-test-failing-rules.md</span></p>
        </div>

        <p>条件跳转让 Agent 按需加载，只读和当前任务相关的规则——不把全部规则塞进上下文造成污染。</p>

        <p>然后是"规则"和"技能"的区别——它们解决的是完全不同的问题：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">防偏 vs 赋能</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">规则<span className="text-ink-faint text-xs">（Rules）</span></th>
                  <th className="text-left py-2 font-medium text-ink-muted">技能<span className="text-ink-faint text-xs">（Skills）</span></th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">本质</td>
                  <td className="py-2 pr-4">编码偏好——"不要做 X""总是做 Y"</td>
                  <td className="py-2">编码方法——"按这个流程做 Z"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">来源</td>
                  <td className="py-2 pr-4">实践痛点：Agent 做了不满意的事</td>
                  <td className="py-2">前瞻设计：让 Agent 调研后固化方案</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">性质</td>
                  <td className="py-2 pr-4">防御性——纠偏器</td>
                  <td className="py-2">进攻性——能力构建器</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">关键优势</td>
                  <td className="py-2 pr-4">快速响应问题</td>
                  <td className="py-2 text-green-500">真实场景出现前就掌握了 Agent 的解法</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>但两者都有一个隐含的生命周期问题：它们会老化。新规则不断累积，旧的可能已被模型进化淘汰，不同时期写的规则可能互相矛盾——需要定期"清理"。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            一个不被维护的规则库，会变成一个不断膨胀的遗留系统——最终没人敢改，也没人能理解。定期让 Agent 整合所有规则和技能、去除重复和矛盾、向你确认最新偏好，是一个需要周期性执行的维护动作。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ──────────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-4 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>工具精简是超能力</strong> — 外部依赖带来的上下文污染远比它们提供的功能增强更致命。裸机 CLI + 精心管理的上下文 &gt; 一堆插件。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>面向未来的模型开发</strong> — 不要和今天的模型缺陷死磕，把精力投在模型进化后依然有价值的工程能力上。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>研究与实现必须分离</strong> — 不同阶段用不同 Agent 会话，每个 Agent 只接收完成任务所需的精确信息。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>用博弈论对抗奉承性</strong> — 中性提示词消除偏差触发条件，多 Agent 对抗系统将"取悦欲"转化为质量保障。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>用契约定义"完成"</strong> — 测试套件 + 视觉验证 + CONTRACT.md，把"做完了"变成可验证的确定性条件。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>会话短平快，编排管全局</strong> — 每个任务开新会话，完成即销毁。状态和编排责任上移到独立编排层。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>规则和技能需要生命周期管理</strong> — CLAUDE.md 做条件跳转目录，规则防偏，技能赋能，定期清理避免腐化。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 术语表 ──────────────────── */}
      <section id="glossary">
        <h2>术语表</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-ink-muted">术语</th>
                <th className="text-left py-2 pr-4 font-medium text-ink-muted">英文</th>
                <th className="text-left py-2 font-medium text-ink-muted">释义</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">上下文污染</td>
                <td className="py-2 pr-4 font-mono text-xs">Context Pollution</td>
                <td className="py-2">无关信息占用 Agent 上下文窗口，导致注意力分散和性能下降</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">奉承性</td>
                <td className="py-2 pr-4 font-mono text-xs">Sycophancy</td>
                <td className="py-2">AI 模型倾向于给出用户"想听到"的回答，而非客观真实的回答</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">契约式设计</td>
                <td className="py-2 pr-4 font-mono text-xs">Design by Contract</td>
                <td className="py-2">通过明确的前置条件、后置条件和不变量来定义模块行为的编程范式</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">停止钩子</td>
                <td className="py-2 pr-4 font-mono text-xs">Stop-hook</td>
                <td className="py-2">Agent 完成任务后自动触发的检查脚本，用于验证是否满足验收条件</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">编排层</td>
                <td className="py-2 pr-4 font-mono text-xs">Orchestration Layer</td>
                <td className="py-2">负责任务分配、会话管理和结果收集的上层控制系统</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">RLHF</td>
                <td className="py-2 pr-4 font-mono text-xs">Reinforcement Learning from Human Feedback</td>
                <td className="py-2">通过人类反馈进行强化学习，是当前主流 LLM 对齐训练方法</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ArticleLayout>
  );
}
