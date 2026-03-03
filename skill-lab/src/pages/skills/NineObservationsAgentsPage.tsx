import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'observation-1', label: '1. 最好的模型打样' },
  { id: 'observation-2', label: '2. 打磨小模型' },
  { id: 'observation-3', label: '3. 内置拼写检查' },
  { id: 'observation-4', label: '4. Agent 对手团' },
  { id: 'observation-5', label: '5. 橡皮泥与闭环' },
  { id: 'observation-6', label: '6. iPhone 15 时代' },
  { id: 'observation-7', label: '7. 文档万岁' },
  { id: 'observation-8', label: '8. 提示词音乐椅' },
  { id: 'observation-9', label: '9. 你为谁工作' },
  { id: 'takeaways', label: '要点提炼' },
  { id: 'glossary', label: '术语表' },
];

export function NineObservationsAgentsPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">AI Agent</span>
          <span className="tag-pill">工程实践</span>
          <span className="tag-pill">文章转化</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          构建 AI Agent 的九条实战心得
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        一位深耕 AI Agent 开发一年的工程师，将实战经验浓缩为九条观察——从模型选择到多模型对抗，从提示词热更新到闭环自动优化，每条都直指一个真实的工程决策点。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <div className="my-8 space-y-1.5 text-sm text-ink-muted">
          <p className="!mb-0"><span className="text-ink-faint">原文</span> — 9 Observations from Building with AI Agents</p>
          <p className="!mb-0"><span className="text-ink-faint">转化日期</span> — 2026-03-03</p>
        </div>

        <p>文章很短，但信息密度极高。九条观察涵盖了模型选择策略、多模型协作、提示词热更新、闭环自动优化等 Agent 工程的关键议题。每条都直指一个真实的工程痛点，适合逐条细读。</p>
      </section>

      <div className="section-divider" />

      {/* ── 1. 用最好的模型打样 ──────── */}
      <section id="observation-1">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">01</span>
          用最好的模型打样
        </h2>

        <p>当输入不可预测时——邮件解析、语音转写、杂乱数据提取——先用最强的模型。搞清楚什么方案可行，然后再逐步用更专业化、更低成本的模型去替代。</p>

        <p>这是一条非常务实的策略，本质上就是软件工程中 "Make it work, make it right, make it fast" 的 Agent 版本。很多团队的误区恰恰相反——一上来就纠结用哪个便宜模型，结果在"这件事到底能不能做"这个基本问题上浪费了大量时间。先用 Claude、GPT 级别的模型跑通整个流程，确认可行之后再考虑成本优化，这是目前业界主流的落地路径。</p>
      </section>

      <div className="section-divider" />

      {/* ── 2. 打磨小模型 ──────────── */}
      <section id="observation-2">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">02</span>
          打磨小模型这颗宝石
        </h2>

        <p>作者用 rLLM 对 Qwen 3 做了微调（Fine-tuning），用于任务分类。一个 8B 参数的小模型，在这个特定任务上击败了 GPT 5.2 的零样本提示（Zero-shot Prompting），而且能直接跑在笔记本电脑上。他的结论很明确：微调的发力点是任务明确且输入分布稳定的场景。</p>

        <p>这和第 1 条形成了完美互补。第 1 条说"先用最好的"，第 2 条说"然后精炼成小的"——合在一起就是一条完整的模型选择路径。rLLM 是一个基于强化学习的微调框架，让小模型通过 reward signal 学习特定任务的决策模式。在实际的 Agent 系统中，并非每个环节都需要调用大模型 API，将明确的子任务（如意图分类、路由决策）卸载到本地微调模型，既降低成本又降低延迟。</p>
      </section>

      <div className="section-divider" />

      {/* ── 3. 用内置的拼写检查 ──────── */}
      <section id="observation-3">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">03</span>
          用内置的"拼写检查"
        </h2>

        <p>静态类型（Static Typing）相当于给 AI 加了一个编译期的"拼写检查器"。作者举了一个很直观的对比：Ruby 让 Agent 生成看起来正确、但运行时才报错的代码；Rust 则在编译阶段就检查代码的"语法"。对于中等复杂度的任务，使用静态类型语言后一次成功率有显著提升。</p>

        <p>这揭示了一个深层问题：Agent 生成的代码需要即时反馈机制。动态语言的宽容反而成了 Agent 的陷阱——代码"看起来对"但实际上错了，要到运行时才暴露。而这个思路可以延伸到更广的范围：不只是编程语言的选择，JSON Schema 验证、类型化的函数调用接口（如 OpenAI Function Calling 的严格模式）、结构化输出约束，本质上都是同一件事——通过形式化约束来收窄 Agent 的幻觉空间。</p>
      </section>

      <div className="section-divider" />

      {/* ── 4. 哄着你的 Agent 对手团 ──── */}
      <section id="observation-4">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">04</span>
          哄着你的 Agent 对手团
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">Build your agentic braintrust.</pre>
        </blockquote>

        <p>构建你的 Agent 智囊团。具体做法是：让 Claude 制定计划，然后让 Gemini 和 Codex 来挑刺；Claude 回应批评并实现代码。实现完成后，再让 Gemini 和 Codex 对照计划审查实现，Claude 据此修订。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">Agents are great micromanagers.</pre>
        </blockquote>

        <p>Agent 是出色的"微管理者"——这句话很精辟。人类讨厌微管理（Micromanagement），但 AI 不在乎。让不同模型互相审查、互相挑战，本质上是用对抗来提升质量，和 GAN 的核心思路有异曲同工之处。每个模型有不同的偏好和盲区——Claude 擅长长文推理和谨慎思考，Gemini 擅长多模态和广度，Codex 对代码结构敏感——让它们互相 review，比单模型自我反思（Self-reflection）更有效，因为不同模型的盲区不太可能完全重叠。标题中的 "Cajole"（哄劝）这个词选得好，你确实需要精心设计提示词来让模型各就其位。</p>
      </section>

      <div className="section-divider" />

      {/* ── 5. 把所有橡皮泥放进一个罐子 ── */}
      <section id="observation-5">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">05</span>
          把所有橡皮泥放进一个罐子
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">Building an agent is an exercise in Play-Doh.</pre>
        </blockquote>

        <p>构建 Agent 就像玩橡皮泥。黄色、红色、绿色，来自不同的罐子。作者希望把所有工具集中到一处：管理记忆、管理提示词、捕获日志——因为这一切本质上是同一个闭环：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            Prompt → Output → Evaluation → Optimization → Prompt
          </p>
        </div>

        <p>这个闭环是整篇文章隐含的核心主线。不只这一条在讲它——后面的第 7 条（trace 即文档）、第 8 条（提示词热更新）都是这个闭环的不同切面。作者的诉求很明确：Agent 开发工具链太碎片化了。目前市面上 LangSmith 聚焦 trace 和评估，Braintrust 做 prompt 管理，PromptLayer、Humanloop 各有侧重，但坦白说还没有一个产品真正把这个闭环做"闭"了。</p>
      </section>

      <div className="section-divider" />

      {/* ── 6. 认清 AI 的 iPhone 15 时代 ── */}
      <section id="observation-6">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">06</span>
          认清 AI 的"iPhone 15 时代"
        </h2>

        <p>Qwen 3、GLM、DeepSeek V3、Kimi K2.5 以极低的成本提供了强劲的性能。这些模型在工作流工具调用（Tool Calling）方面已经足够强，"更聪明"未必能带来显著的实际收益。Tau2 基准测试表明，许多模型已经跨过了能力门槛，比较的维度已经从准确率变成了成本。</p>

        <p>"iPhone 15 时代"是一个绝妙的比喻。iPhone 15 和 iPhone 16 之间的差异，对绝大多数用户来说无感。AI 模型也进入了类似阶段——对于大部分 Agent 工作流任务，模型之间的能力差距已经不是瓶颈，成本和速度才是。这意味着一个重要的战略转向：Agent 系统的核心竞争力正在从"用了多强的模型"转移到"工程做得多好"。提示词设计、错误恢复、工具编排、评估体系——这些工程层面的功夫开始比底层模型选择更重要。Agent 开发正在从"模型红利期"进入"工程红利期"。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            模型红利期 → 工程红利期：竞争维度从"谁用的模型更强"变成"谁的工程做得更好"。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 7. 文档万岁 ──────────────── */}
      <section id="observation-7">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">07</span>
          文档万岁
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">In software, the code documents the app; in AI, the traces do.{'\n'}— Harrison Chase</pre>
        </blockquote>

        <p>正如 LangChain 创始人 Harrison Chase 所说："在软件中，代码就是文档；在 AI 中，trace 才是文档。"一针见血。传统软件可以通过阅读代码理解行为，但 Agent 的行为由提示词、模型、上下文共同决定，只看代码根本看不出它实际会做什么。trace（运行轨迹）才是真正的"源代码"。</p>

        <p>作者的团队基于这个认知建立了一套夜间自动优化系统：每晚收集最近 100 条 Agent 对话，提取失败案例——任务超时、错误输出、用户纠正——然后用 LLM-as-Judge 生成改进后的提示词。这个闭环每周都能小幅提升任务成功率，无需人工干预。这套系统的核心逻辑是把失败案例当作训练信号，用 LLM 自己来改进提示词，和 Stanford 的 DSPy 框架理念一脉相承——将 prompt engineering 从手工艺变成自动化工程。实际落地时需要注意可靠的失败检测机制、LLM-as-Judge 本身的校准，以及防止"改坏了"的回滚能力。</p>
      </section>

      <div className="section-divider" />

      {/* ── 8. 提示词的音乐椅游戏 ────── */}
      <section id="observation-8">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">08</span>
          提示词的"音乐椅"游戏
        </h2>

        <p>有了自动优化提示词的系统，你就需要一种不停机的方式来应用这些优化。作者的方案是：Agent 监听提示词文件，文件一变就自动重载。这把部署和实验彻底分离开了，让 DSPy 风格的自动优化得以无缝运行。再加上提示词文件的版本管理，就有了完整的回滚能力。</p>

        <p>这个设计模式在传统后端开发中其实很常见——配置热更新、Feature Flag 都是类似思路。核心思想是把提示词视为"配置"而非"代码"：配置可以热更新，代码需要部署。再配合 Git 做版本管理，你就拥有了一套完整的 prompt-as-config 基础设施——版本追踪、A/B 测试、自动回滚，一应俱全。</p>
      </section>

      <div className="section-divider" />

      {/* ── 9. 你到底为谁工作 ──────── */}
      <section id="observation-9">
        <h2>
          <span className="font-mono text-sm text-ink-faint mr-3">09</span>
          你到底为谁工作？
        </h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">Skills are for interactive conversations. Code is for agents.</pre>
        </blockquote>

        <p>Skills 用于交互式对话，代码用于 Agent。Skills 更容易调试——当 Skill 失败时，你能精确定位问题出在哪。而当一个 Agent 串联了十个函数调用，输出错了，你就只能在日志里大海捞针。</p>

        <p>这触及了一个根本性的架构选择。Skill 的本质是结构化的能力单元——它有明确的输入输出契约、可预期的行为边界，是声明式的、可审查的。Agent 的代码调用链则是命令式的，灵活但不透明。在实际系统设计中，一个好的策略是：用 Skills 处理核心的、高频的、需要可靠性的任务，用 Agent 代码处理探索性的、低频的、需要灵活性的任务。两者不是替代关系，而是互补关系。</p>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ──────────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>先验证再优化</strong> — 用最强模型确认可行性，再用微调小模型做成本替换。第 1、2 条合在一起就是完整的模型选择策略。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>给 Agent 加护栏</strong> — 静态类型、编译检查、结构化输出——形式化约束是减少幻觉的最有效手段之一。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>多模型对抗出质量</strong> — 让不同 LLM 互相审查比单模型自我反思更可靠，因为盲区不重叠。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>闭环是核心架构</strong> — Prompt → Output → Evaluation → Optimization → Prompt，文章的第 5、7、8 条都在讲这个闭环的不同层面。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>模型已进入"够用"时代</strong> — 竞争维度从智能转向成本和工程质量，Agent 开发进入工程红利期。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>提示词是配置不是代码</strong> — 热更新、版本管理、自动优化——把 prompt 当 config 管理是生产环境的关键基础设施。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>Skills 和 Agent 代码互补共存</strong> — 交互式场景用 Skills（可审查、可调试），自动化场景用 Agent 代码（灵活、可组合）。</p>
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
                <td className="py-2 pr-4">微调</td>
                <td className="py-2 pr-4 font-mono text-xs">Fine-tuning</td>
                <td className="py-2">在预训练模型基础上，用特定任务数据进一步训练</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">零样本提示</td>
                <td className="py-2 pr-4 font-mono text-xs">Zero-shot Prompting</td>
                <td className="py-2">不提供示例，直接用自然语言描述任务让模型执行</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">静态类型</td>
                <td className="py-2 pr-4 font-mono text-xs">Static Typing</td>
                <td className="py-2">编译时检查类型的编程语言特性，如 Rust、TypeScript</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">闭环优化</td>
                <td className="py-2 pr-4 font-mono text-xs">Closed-loop Optimization</td>
                <td className="py-2">输出反馈回输入端形成循环，持续自动改进</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">LLM-as-Judge</td>
                <td className="py-2 pr-4 font-mono text-xs">—</td>
                <td className="py-2">用大语言模型本身来评估其他模型或系统的输出质量</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">DSPy</td>
                <td className="py-2 pr-4 font-mono text-xs">—</td>
                <td className="py-2">Stanford 开发的框架，将 prompt 优化从手工调整变为自动化编程</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">热更新</td>
                <td className="py-2 pr-4 font-mono text-xs">Hot-reload</td>
                <td className="py-2">不停机、不重启地动态加载新配置或代码</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Trace</td>
                <td className="py-2 pr-4 font-mono text-xs">—</td>
                <td className="py-2">Agent 运行时的完整轨迹记录，包括每步调用、输入输出、耗时等</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ArticleLayout>
  );
}
