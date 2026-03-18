import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'observation-1', label: '01 最好的模型打样' },
  { id: 'observation-2', label: '02 打磨小模型' },
  { id: 'observation-3', label: '03 内置拼写检查' },
  { id: 'observation-4', label: '04 Agent 对手团' },
  { id: 'observation-5', label: '05 橡皮泥与闭环' },
  { id: 'observation-6', label: '06 iPhone 15 时代' },
  { id: 'observation-7', label: '07 文档万岁' },
  { id: 'observation-8', label: '08 提示词音乐椅' },
  { id: 'observation-9', label: '09 你为谁工作' },
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
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-03</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          构建 AI Agent 的九条实战心得
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        当模型的智商不再是瓶颈，Agent 的胜负手就藏在工程的闭环里。
      </div>

      <p>九条观察，三条暗线——<strong>模型选择</strong>、<strong>质量保障</strong>、<strong>闭环工程</strong>。表面是九个独立的工程决策点，读完会发现它们指向同一套方法论。</p>

      {/* ── 01 用最好的模型打样 ────────── */}
      <section id="observation-1">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
          用最好的模型打样
        </h3>

        <p>当输入不可预测时——邮件解析、语音转写、杂乱数据提取——先用最强的模型。搞清楚什么方案可行，然后再逐步用更专业化、更低成本的模型去替代。</p>

        <p>本质上就是软件工程中 <em>"Make it work, make it right, make it fast"</em> 的 Agent 版本。很多团队的误区恰恰相反——一上来就纠结用哪个便宜模型，结果在"这件事到底能不能做"这个基本问题上浪费了大量时间。先用 Claude、GPT 级别的模型跑通整个流程，确认可行之后再考虑成本优化，这是目前业界主流的落地路径。</p>
      </section>

      <div className="section-divider" />

      {/* ── 02 打磨小模型 ──────────────── */}
      <section id="observation-2">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
          打磨小模型这颗宝石
        </h3>

        <p>用 rLLM 对 Qwen 3 做微调<span className="text-ink-faint text-xs">（Fine-tuning）</span>，用于任务分类。一个 8B 参数的小模型，在特定任务上击败了 GPT 5.2 的零样本提示<span className="text-ink-faint text-xs">（Zero-shot Prompting）</span>，而且能直接跑在笔记本电脑上。结论很明确：微调的发力点是<strong>任务明确且输入分布稳定</strong>的场景。</p>

        <p>这和第 1 条形成了完美互补——合在一起就是一条完整的模型选择路径：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            最强模型验证可行性 → 微调小模型做特定任务 → 本地部署降成本降延迟
          </p>
        </div>

        <p>rLLM 是一个基于强化学习的微调框架，让小模型通过 reward signal 学习特定任务的决策模式。在实际的 Agent 系统中，并非每个环节都需要调用大模型 API——将明确的子任务（如意图分类、路由决策）卸载到本地微调模型，既降低成本又降低延迟。</p>
      </section>

      <div className="section-divider" />

      {/* ── 03 用内置的拼写检查 ──────── */}
      <section id="observation-3">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
          用内置的"拼写检查"
        </h3>

        <p>静态类型<span className="text-ink-faint text-xs">（Static Typing）</span>相当于给 AI 加了一个编译期的"拼写检查器"。来看一个直观的对比：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">动态语言 vs 静态语言——Agent 代码生成的表现差异</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-red-400/80">Ruby <span className="text-ink-faint text-xs">动态</span></th>
                  <th className="text-left py-2 font-medium text-green-500/80">Rust <span className="text-ink-faint text-xs">静态</span></th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">生成的代码</td>
                  <td className="py-2 pr-4">看起来正确</td>
                  <td className="py-2">编译器验证过正确</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">错误暴露时机</td>
                  <td className="py-2 pr-4 text-red-400">运行时才报错</td>
                  <td className="py-2 text-green-500">编译阶段就拦截</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">一次成功率</td>
                  <td className="py-2 pr-4">较低</td>
                  <td className="py-2">显著提升</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>Agent 生成的代码需要即时反馈机制。动态语言的宽容反而成了陷阱——代码"看起来对"但实际上错了。这个思路可以延伸到更广的范围：JSON Schema 验证、类型化的函数调用接口（如 OpenAI Function Calling 的严格模式）、结构化输出约束，本质上都是同一件事——<strong>通过形式化约束来收窄 Agent 的幻觉空间</strong>。</p>
      </section>

      <div className="section-divider" />

      {/* ── 04 哄着你的 Agent 对手团 ──── */}
      <section id="observation-4">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
          哄着你的 Agent 对手团
        </h3>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Build your agentic braintrust.`}</pre>
        </blockquote>

        <p>构建你的 Agent 智囊团。具体做法是一个计划—批评—实现—审查的循环：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">Claude 制定计划</li>
          <li className="leading-relaxed pl-1">Gemini 和 Codex 来挑刺</li>
          <li className="leading-relaxed pl-1">Claude 回应批评并实现代码</li>
          <li className="leading-relaxed pl-1">Gemini 和 Codex 对照计划审查实现</li>
          <li className="leading-relaxed pl-1">Claude 据此修订</li>
        </ol>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Agents are great micromanagers.`}</pre>
        </blockquote>

        <p>Agent 是出色的"微管理者"——人类讨厌微管理<span className="text-ink-faint text-xs">（Micromanagement）</span>，但 AI 不在乎。每个模型有不同的偏好和盲区：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Claude</strong> — 长文推理与谨慎思考</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Gemini</strong> — 多模态理解与知识广度</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Codex</strong> — 代码结构敏感度</p>
          </div>
        </div>

        <p>让它们互相 review，比单模型自我反思<span className="text-ink-faint text-xs">（Self-reflection）</span>更有效——不同模型的盲区不太可能完全重叠。本质上是用对抗来提升质量，和 GAN 的核心思路异曲同工。标题中的 "Cajole"（哄劝）选得好，你确实需要精心设计提示词来让模型各就其位。</p>
      </section>

      <div className="section-divider" />

      {/* ── 05 把所有橡皮泥放进一个罐子 ── */}
      <section id="observation-5">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
          把所有橡皮泥放进一个罐子
        </h3>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Building an agent is an exercise in Play-Doh.`}</pre>
        </blockquote>

        <p>构建 Agent 就像玩橡皮泥——黄色、红色、绿色，来自不同的罐子。理想状态是把所有工具集中到一处：管理记忆、管理提示词、捕获日志——因为这一切本质上是同一个闭环：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            Prompt → Output → Evaluation → Optimization → Prompt
          </p>
        </div>

        <p>这个闭环是整篇文章隐含的核心主线——后面的第 7 条（trace 即文档）和第 8 条（提示词热更新）都是它的不同切面。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            Agent 开发工具链太碎片化了。LangSmith 聚焦 trace 和评估，Braintrust 做 prompt 管理，PromptLayer、Humanloop 各有侧重——还没有一个产品真正把这个闭环做"闭"了。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 06 认清 AI 的 iPhone 15 时代 ── */}
      <section id="observation-6">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">06</span>
          认清 AI 的"iPhone 15 时代"
        </h3>

        <p>Qwen 3、GLM、DeepSeek V3、Kimi K2.5 以极低的成本提供了强劲的性能。这些模型在工具调用<span className="text-ink-faint text-xs">（Tool Calling）</span>方面已经足够强，"更聪明"未必能带来显著的实际收益。Tau2 基准测试表明，许多模型已经跨过了能力门槛，比较的维度已经从准确率变成了成本。</p>

        <p>"iPhone 15 时代"是一个绝妙的比喻——iPhone 15 和 iPhone 16 之间的差异，对绝大多数用户来说无感。AI 模型也进入了类似阶段。这意味着一个重要的战略转向：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">Agent 开发的竞争维度正在发生转移</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">模型红利期</th>
                  <th className="text-left py-2 font-medium text-ink-muted">工程红利期</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">核心竞争力</td>
                  <td className="py-2 pr-4">用了多强的模型</td>
                  <td className="py-2">工程做得多好</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">关键投入</td>
                  <td className="py-2 pr-4">模型选择、API 费用</td>
                  <td className="py-2">提示词设计、错误恢复、工具编排、评估体系</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 07 文档万岁 ──────────────── */}
      <section id="observation-7">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">07</span>
          文档万岁
        </h3>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`In software, the code documents the app;
in AI, the traces do.
— Harrison Chase`}</pre>
        </blockquote>

        <p>LangChain 创始人一针见血。传统软件可以通过阅读代码理解行为，但 Agent 的行为由提示词、模型、上下文共同决定——只看代码根本看不出它实际会做什么。Trace<span className="text-ink-faint text-xs">（运行轨迹）</span>才是真正的"源代码"。</p>

        <p>有团队基于这个认知建立了一套<strong>夜间自动优化系统</strong>：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">每晚收集最近 100 条 Agent 对话</li>
          <li className="leading-relaxed pl-1">提取失败案例——任务超时、错误输出、用户纠正</li>
          <li className="leading-relaxed pl-1">用 LLM-as-Judge 生成改进后的提示词</li>
          <li className="leading-relaxed pl-1">闭环每周小幅提升任务成功率，无需人工干预</li>
        </ol>

        <p>核心逻辑是把失败案例当作训练信号，用 LLM 自己来改进提示词，和 Stanford 的 DSPy 框架理念一脉相承——将 prompt engineering 从手工艺变成自动化工程。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            实际落地时需要注意三件事：可靠的失败检测机制、LLM-as-Judge 本身的校准，以及防止"改坏了"的回滚能力。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 08 提示词的音乐椅游戏 ────── */}
      <section id="observation-8">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">08</span>
          提示词的"音乐椅"游戏
        </h3>

        <p>有了自动优化提示词的系统，你就需要一种不停机的方式来应用这些优化。方案很直接：Agent 监听提示词文件，文件一变就自动重载。这把部署和实验彻底分离开了，让 DSPy 风格的自动优化得以无缝运行。</p>

        <p>这个设计模式在传统后端开发中其实很常见——配置热更新、Feature Flag 都是类似思路。核心思想是：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            提示词是配置，不是代码
          </p>
        </div>

        <p>配置可以热更新<span className="text-ink-faint text-xs">（Hot-reload）</span>，代码需要部署。再配合 Git 做版本管理，你就拥有了一套完整的 prompt-as-config 基础设施——版本追踪、A/B 测试、自动回滚，一应俱全。</p>
      </section>

      <div className="section-divider" />

      {/* ── 09 你到底为谁工作 ──────── */}
      <section id="observation-9">
        <h3 className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-ink-faint shrink-0">09</span>
          你到底为谁工作？
        </h3>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Skills are for interactive conversations.
Code is for agents.`}</pre>
        </blockquote>

        <p>Skills 用于交互式对话，代码用于 Agent。Skills 更容易调试——当 Skill 失败时，你能精确定位问题出在哪。而当一个 Agent 串联了十个函数调用，输出错了，你就只能在日志里大海捞针。</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">两者不是替代关系，而是互补关系</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">Skills</th>
                  <th className="text-left py-2 font-medium text-ink-muted">Agent 代码</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">本质</td>
                  <td className="py-2 pr-4">结构化的能力单元</td>
                  <td className="py-2">命令式的调用链</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">特性</td>
                  <td className="py-2 pr-4">声明式、可审查</td>
                  <td className="py-2">灵活、可组合</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">适用场景</td>
                  <td className="py-2 pr-4">核心、高频、需要可靠性</td>
                  <td className="py-2">探索性、低频、需要灵活性</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">调试体验</td>
                  <td className="py-2 pr-4 text-green-500">精确定位</td>
                  <td className="py-2 text-red-400">大海捞针</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </ArticleLayout>
  );
}
