import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'herd-mentality', label: '集体失智' },
  { id: 'fish-on-bicycle', label: '给鱼装自行车' },
  { id: 'debugging', label: '调试 vs 考古' },
  { id: 'composability', label: '管道哲学' },
  { id: 'authentication', label: '认证' },
  { id: 'no-moving-parts', label: '不存在的组件' },
  { id: 'pain-points', label: '体感的痛' },
  { id: 'fair-point', label: '话说回来' },
  { id: 'priority', label: '一条优先级' },
  { id: 'takeaways', label: '要点提炼' },
];

export function McpIsDeadLongLiveCliPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">技术</span>
          <span className="tag-pill">AI 工具</span>
          <span className="tag-pill">CLI</span>
          <span className="tag-pill">MCP</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-02</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          MCP 已死，CLI 当立
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        MCP 可能是 AI 工具领域最经典的一次"集体跟风"——所有人都在为一个 LLM 本来就不需要的问题构建解决方案。如果你正在纠结要不要给自己的产品接 MCP，先花五分钟读完这篇再说。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <p>CLI 对 MCP 的优势可以浓缩成五个词：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>天然契合</strong> — LLM 在数百万 man pages 和 shell 脚本上训练过，CLI 是它们的母语</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>调试透明</strong> — 人和 AI 用同一个接口，出问题直接复现，不用翻 JSON 日志</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>可组合</strong> — Unix 管道让能力是开放的排列组合，不被工具作者的想象力锁死</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>认证现成</strong> — 搭便车用 SSO / kubeconfig，不用重新发明认证</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>零活动部件</strong> — 磁盘上的二进制文件，没有后台进程、没有初始化仪式</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 一场集体失智 ─────────────── */}
      <section id="herd-mentality">
        <h2>一场集体失智</h2>

        <p>Anthropic 发布 MCP<span className="text-ink-faint text-xs">（Model Context Protocol，模型上下文协议）</span>的时候，整个行业的反应就像看到邻居装了新款智能门锁——不管自己家门结不结实，先买一个再说。每家公司都争先恐后地推出 MCP 服务器，新端点、新传输格式、新授权方案，资源哗哗往里砸。</p>

        <p>结果呢？所有这一切，只是为了让 LLM 能够与它们<strong>本来就能对话</strong>的服务进行对话。</p>

        <p>这个模式在技术史上反复出现：一项新技术火了，行业的第一反应不是"我们需要它吗？"，而是"别人都上了，我们不能落后"。CORBA 是这样，SOAP 是这样，微服务是这样，现在轮到 MCP 了。OpenClaw 不支持它，Pi 也不支持它——这不是巧合，这是信号。</p>
      </section>

      <div className="section-divider" />

      {/* ── 给鱼装自行车 ─────────────── */}
      <section id="fish-on-bicycle">
        <h2>给鱼装自行车</h2>

        <p>LLM 擅长什么？自己琢磨明白。</p>

        <p>这不是夸张。想想训练数据里有什么：数百万个 man pages、Stack Overflow 上所有那些 "how do I grep recursively" 的回答、GitHub 上无穷无尽的 shell 脚本。CLI 是 LLM 的母语，就像水是鱼的母语。你告诉 Claude 去跑 <code>gh pr view 123</code>，它不需要查手册、不需要特殊接口，直接就能干活。</p>

        <p>MCP 承诺的是"更简洁的接口"。但实践中该写的文档一点没少——每个工具做什么、接受什么参数、什么时候该用。这些工作在 CLI 方案里一模一样要做。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            给 LLM 发明一套专属协议来调用工具，就像给鱼装自行车——技术上是可以做到的，但鱼在水里本来就游得挺好。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 调试 vs 考古 ──────────────── */}
      <section id="debugging">
        <h2>调试不应该需要考古学学位</h2>

        <p>当 Claude 在 Jira 上做了什么意想不到的操作，你怎么排查？如果用 CLI 方案，简单得令人感动——跑同样的 <code>jira issue view</code> 命令，看到它看到的内容。同样的输入，同样的输出，零神秘感。</p>

        <p>而在 MCP 的世界里，工具调用只存在于 LLM 对话内部。出了问题你得翻 JSON 传输日志，像考古学家刷土一样小心翼翼。这不叫调试，这叫考古。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`调试不应该需要协议解码器。`}</pre>
        </blockquote>

        <p>背后有一条更深的设计哲学：<strong>最好的开发者工具链，人和自动化用的是同一套接口。</strong> Docker CLI、Git、kubectl 莫不如此——你可以先手动跑一遍确认效果，再放心交给自动化。MCP 打破了这个惯例，在人类和 AI 之间硬插了一层。仿佛我们的调试能力还不够差似的。</p>
      </section>

      <div className="section-divider" />

      {/* ── 管道哲学 ─────────────────── */}
      <section id="composability">
        <h2>管道哲学 vs 封闭接口</h2>

        <p>这是差距从"不太方便"拉到"根本不可行"的地方。</p>

        <p>CLI 天然支持 Unix 哲学<span className="text-ink-faint text-xs">（Unix Philosophy）</span>的管道组合。<code>jq</code> 过滤、<code>grep</code> 筛选、管道串联、重定向到文件——不只是方便，很多时候是<strong>唯一可行的做法</strong>。比如分析一个大型 Terraform 计划：</p>

        <CodeBlock language="bash" code={`terraform show -json plan.out | jq '[.resource_changes[] | select(.change.actions[0] == "no-op" | not)] | length'`} />

        <p>一条管道，精准定位。换成 MCP？两条路都是死胡同：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><span className="text-red-400">方案 A</span> — 把整个计划塞进上下文窗口<span className="text-ink-faint text-xs">（Context Window）</span>。昂贵，且经常撞 token 天花板</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><span className="text-red-400">方案 B</span> — 在 MCP 服务器里写自定义过滤。恭喜，你刚为一行管道能解决的问题写了一个后端接口</p>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            <strong>MCP 是封闭的，CLI 是开放的。</strong>管道组合让你用现有工具的排列组合解决新问题，不需要等谁给你写接口。MCP 的能力天花板，由服务器作者的想象力决定。Unix 管道哲学活了五十年还在壮大，因为它解决了一个永恒的问题：怎么用有限的组件应对无限的需求。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 认证 ─────────────────────── */}
      <section id="authentication">
        <h2>认证：别重新发明轮子</h2>

        <p>MCP 对认证这件事过于自作主张了。一个给 LLM 提供工具的协议，为什么要关心用户怎么登录？</p>

        <p>CLI 工具的认证方式久经沙场：<code>aws</code> 用配置文件和 SSO，<code>gh</code> 用 <code>gh auth login</code>，<code>kubectl</code> 用 kubeconfig。无论是人还是 Claude 在驾驶，一视同仁。出了问题？<code>aws sso login</code>、<code>gh auth refresh</code>——老办法，不需要 MCP 专属的排错指南。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            不要为新系统发明新的认证方案，除非你有极其充分的理由。认证是安全领域中最容易出错、最难调试的部分。每多一种认证流程，就多一个攻击面。CLI 方案的优雅在于"搭便车"——站在几十年认证工程的肩膀上。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 不存在的组件 ─────────────── */}
      <section id="no-moving-parts">
        <h2>最好的组件是不存在的组件</h2>

        <p>本地 MCP 服务器是进程——需要启动、保持运行、不能无声无息地挂掉。在 Claude Code 里，它们作为子进程启动。"能工作直到不能工作为止"——运维老兵听到这句话大概会条件反射地摸鼠标准备写事故报告。</p>

        <p>CLI 工具是磁盘上的二进制文件。没有后台进程，没有状态，没有初始化仪式。需要时即在，不需要时隐身。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            软件工程有个反直觉的真理：<strong>最可靠的组件是不存在的组件。</strong>你删不掉的代码不会出 bug，你不启动的进程不会挂。MCP 多加了一个活动部件，CLI 的活动部件数量是零。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 体感的痛 ─────────────── */}
      <section id="pain-points">
        <h2>从纸面到体感的痛</h2>

        <div className="space-y-4 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>初始化不稳定</strong></p>
            <p className="text-ink-muted !mb-0">因为 MCP 服务器启动不起来而重启 Claude Code——这种事发生的频率已经多到不值得单独记录了。每次都是"等了 30 秒发现白等了"的无奈。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>重复认证没完没了</strong></p>
            <p className="text-ink-muted !mb-0">多个 MCP 工具？每个都要单独认证。SSO 或长期凭证的 CLI 认证一次搞定全部。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>权限非黑即白</strong></p>
            <p className="text-ink-muted !mb-0">Claude Code 允许按名称把 MCP 工具加入白名单<span className="text-ink-faint text-xs">（Allowlist）</span>，但粒度到此为止。而 CLI 方案中，<code>gh pr view</code>（只读）自动通过，<code>gh pr merge</code>（破坏性操作）需要审批。这种细粒度权限控制在生产环境中是刚需。</p>
          </div>
        </div>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">CLI vs MCP 体感对比</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">维度</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">CLI</th>
                  <th className="text-left py-2 font-medium text-ink-muted">MCP</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">权限</td>
                  <td className="py-2 pr-4 text-green-500">命令 + 参数级别</td>
                  <td className="py-2 text-red-400">工具名称，全有或全无</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">认证</td>
                  <td className="py-2 pr-4 text-green-500">一次 SSO，全局生效</td>
                  <td className="py-2 text-red-400">每个工具单独认证</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">启动</td>
                  <td className="py-2 pr-4 text-green-500">无需启动</td>
                  <td className="py-2 text-red-400">进程启动，可能失败</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 话说回来 ─────────────── */}
      <section id="fair-point">
        <h2>话说回来</h2>

        <p>公平地讲，MCP 不是一无是处。如果一个工具确实没有对应的 CLI，MCP 可能是目前最好的选择。标准化接口本身也有价值——至少它让不同 LLM 可以用同一种方式调用工具。</p>

        <p>但关键词是<strong>"绝大多数"</strong>：对于绝大多数工作，CLI 更简单、调试更快、更可靠。MCP 的合理定位是补充，不是替代——更不是"AI 优先"的通行证。</p>
      </section>

      <div className="section-divider" />

      {/* ── 一条优先级 ─────────────── */}
      <section id="priority">
        <h2>一条简单的优先级</h2>

        <p>MCP 试图构建一个更好的抽象。结果发现我们已经有了一个相当不错的抽象——它叫 CLI，已经迭代了五十年。</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            好的 API → 好的 CLI → 智能体自己搞明白
          </p>
        </div>

        <p>如果你是一家正在投资 MCP 服务器但还没有官方 CLI 的公司——停下来。先发布一个好的 API，再发布一个好的 CLI。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`能让人用好的东西，AI 用起来只会更顺手。
这或许是整个 AI 工具领域最被低估的一条真理。`}</pre>
        </blockquote>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ──────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-4 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>LLM 天然擅长 CLI</strong> — 训练数据中的 man pages、shell 脚本、Stack Overflow 答案让 CLI 成为 LLM 的母语，额外协议是多此一举。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>调试透明性是杀手锏</strong> — 人和 AI 用同一个接口，出问题直接复现，不用翻 JSON 日志搞逆向工程。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>可组合性决定能力天花板</strong> — CLI 管道组合用现有工具解决新问题，MCP 封闭接口把你锁在工具作者的想象力范围内。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>最可靠的组件是不存在的组件</strong> — CLI 是无状态的二进制文件，MCP 是需要管理生命周期的进程。少一个活动部件就少一类故障。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>MCP 的合理定位是补充</strong> — 没有 CLI 替代品时它有价值，但对于绝大多数场景，先把 CLI 做好才是正道。
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
