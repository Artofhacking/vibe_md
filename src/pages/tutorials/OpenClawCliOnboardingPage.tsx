import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'what-wizard-does', label: '向导做了什么' },
  { id: 'config-detection', label: '已有配置检测' },
  { id: 'workspace', label: '工作区' },
  { id: 'gateway', label: '网关设置' },
  { id: 'channels', label: '渠道接入' },
  { id: 'daemon', label: '守护进程' },
  { id: 'health', label: '健康检查与技能' },
  { id: 'remote', label: '远程模式' },
  { id: 'auth-models', label: '认证与模型' },
  { id: 'outputs', label: '输出与内部结构' },
  { id: 'takeaways', label: '要点提炼' },
];

export function OpenClawCliOnboardingPage() {
  return (
    <ArticleLayout
      tocItems={tocItems}
      backTo="/tutorial/tut-openclaw"
      backLabel="返回教程大纲"
      footerLeftTo="/tutorial/tut-openclaw/1"
      footerLeftLabel="← 上一章：私人助理"
      footerRightTo="/tutorial/tut-openclaw"
      footerRightLabel="返回教程大纲 →"
    >
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">Chapter 02</span>
          <span className="tag-pill">OpenClaw</span>
          <span className="tag-pill">CLI</span>
          <span className="tag-pill">Onboarding</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">官方参考</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          CLI 入门引导：一条命令配好一切
        </h1>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl">
          上一章手动写 JSON、扫码、启动 Gateway——是"理解原理"的方式。这一章用 <code>openclaw onboard</code> 一条命令，把模型认证、工作区、网关、渠道、守护进程全部配好。
        </p>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border space-y-5">
        <p>
          <code>openclaw onboard</code> 是 OpenClaw 的交互式配置向导。本地模式走七步，远程模式配两项。这篇是它的完整参考手册：每一步做了什么、有哪些选项、文件写到了哪里。
        </p>
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <p>如果上一章是"手搓版搭建"，这一章就是"向导一键配"。<code>openclaw onboard</code> 用一个交互式流程覆盖以下所有环节：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>模型与认证</strong> — Anthropic、OpenAI、国产模型、AI Gateway，一站选定</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>工作区初始化</strong> — 自动创建 Agent 的"大脑"目录和引导文件</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>网关配置</strong> — 端口、绑定地址、认证、Tailscale 暴露</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>渠道接入</strong> — WhatsApp、Telegram、Discord、Signal 等八大渠道</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>守护进程</strong> — 开机自启、后台常驻</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>健康检查 + 技能安装</strong> — 验证配置、安装依赖</p>
          </div>
        </div>

        <p>另有<strong>远程模式</strong>，用于把当前机器配置为连接到别处运行的 Gateway——你只是在本地配一个"遥控器"，不会在远程主机上安装或修改任何东西。</p>
      </section>

      <div className="section-divider" />

      {/* ── 向导做了什么 ───────────────── */}
      <section id="what-wizard-does">
        <h2>向导做了什么</h2>

        <p>本地模式（默认）依次引导你完成七个环节：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong className="text-ink">模型与认证配置</strong> — OpenAI Code 订阅 OAuth、Anthropic API Key / Setup Token，以及 MiniMax、GLM、Moonshot、AI Gateway 等</li>
          <li className="leading-relaxed pl-1"><strong className="text-ink">工作区位置与启动文件</strong> — 指定 Agent 的"大脑"放在哪里</li>
          <li className="leading-relaxed pl-1"><strong className="text-ink">网关设置</strong> — 端口、绑定地址、认证方式、Tailscale 暴露</li>
          <li className="leading-relaxed pl-1"><strong className="text-ink">渠道与提供商</strong> — Telegram、WhatsApp、Discord、Google Chat、Mattermost、Signal</li>
          <li className="leading-relaxed pl-1"><strong className="text-ink">守护进程安装</strong> — LaunchAgent 或 systemd user unit</li>
          <li className="leading-relaxed pl-1"><strong className="text-ink">健康检查</strong> — 确认一切正常运转</li>
          <li className="leading-relaxed pl-1"><strong className="text-ink">技能安装</strong> — 检查可用技能并安装依赖</li>
        </ol>

        <p>远程模式则是另一条路径：配置当前机器连接到别处的 Gateway，不安装、不修改远程主机上的任何东西。</p>
      </section>

      <div className="section-divider" />

      {/* ── 已有配置检测 ─────────────────── */}
      <section id="config-detection">
        <h2>已有配置检测</h2>

        <p>如果不是第一次运行向导，它会先检查 <code>~/.openclaw/openclaw.json</code> 是否存在。存在的话，给你三个选择：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Keep</strong> — 保留现有配置，跳过已配置的步骤</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Modify</strong> — 在现有配置基础上修改</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Reset</strong> — 重置后从头来过</p>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            重新运行向导<strong>不会自动清除任何东西</strong>，除非你明确选择 Reset 或传入 <code>--reset</code>。不用担心手滑把已有配置搞丢。
          </p>
        </div>

        <p className="mt-6">如果配置文件存在但格式无效或包含过时字段（legacy keys），向导会停下来要求你先运行 <code>openclaw doctor</code> 修复——"先治病再体检"，避免在错误配置基础上叠加更多错误。</p>

        <p><code>--reset</code> 默认的重置范围是 <code>config+creds+sessions</code>，如果要连工作区也清掉，需要显式指定 <code>--reset-scope full</code>。重置操作使用 <code>trash</code>（移到回收站而非直接删除）：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">三种重置粒度</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">范围</th>
                  <th className="text-left py-2 font-medium text-ink-muted">清除内容</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Config only</td>
                  <td className="py-2">仅配置文件</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Config + credentials + sessions</td>
                  <td className="py-2">配置 + 凭证 + 会话记录（<code>--reset</code> 默认）</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Full reset</td>
                  <td className="py-2">以上全部 + 工作区（<code>--reset-scope full</code>）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 工作区 ─────────────────── */}
      <section id="workspace">
        <h2>工作区</h2>

        <p>默认路径 <code>~/.openclaw/workspace</code>（可配置）。向导会自动创建工作区并播种首次启动所需的引导文件（bootstrap files）。</p>

        <p>如果你在上一章已经手动搭建过工作区，向导会检测到并保留它。工作区就是 Agent 的记忆和人格所在地——里面的 <code>AGENTS.md</code>、<code>SOUL.md</code>、<code>TOOLS.md</code> 等文件定义了 Agent 的行为边界。</p>

        <p>工作区的完整文件布局参见第一章的工作区配置章节。</p>
      </section>

      <div className="section-divider" />

      {/* ── 网关设置 ─────────────────── */}
      <section id="gateway">
        <h2>网关设置</h2>

        <p>向导会询问四个关键参数：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>端口（Port）</strong> — Gateway 监听的端口号</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>绑定地址（Bind）</strong> — 监听哪个网络接口</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>认证模式（Auth）</strong> — Token 认证的开关和方式</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Tailscale 暴露</strong> — 是否通过 Tailscale 对外暴露</p>
          </div>
        </div>

        <div className="border border-amber-500/30 rounded-xl p-5 bg-amber-50/5 my-6">
          <p className="text-sm text-ink !mb-0">
            <strong>⚠️ 安全提醒：</strong>即使绑定在 loopback（127.0.0.1）上，也建议保持 Token 认证开启。你的本机可能跑着各种进程，其中任何一个如果知道端口号就能直接和 Gateway 通信。只有在你<strong>完全信任</strong>本机上每一个进程时，才考虑关闭认证。非 loopback 绑定则强制要求认证，无法跳过。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 渠道接入 ─────────────────── */}
      <section id="channels">
        <h2>渠道接入</h2>

        <p>向导里最丰富的环节。支持的渠道覆盖了主流即时通讯平台：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">支持的渠道与接入方式</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">渠道</th>
                  <th className="text-left py-2 font-medium text-ink-muted">接入方式</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">WhatsApp</td>
                  <td className="py-2">可选 QR 码登录（扫码配对）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">Telegram</td>
                  <td className="py-2">Bot Token</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">Discord</td>
                  <td className="py-2">Bot Token</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">Google Chat</td>
                  <td className="py-2">Service Account JSON + Webhook Audience</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">Mattermost</td>
                  <td className="py-2">插件方式，Bot Token + Base URL</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">Signal</td>
                  <td className="py-2">可选安装 <code>signal-cli</code> + 账号配置</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium">BlueBubbles</td>
                  <td className="py-2"><span className="text-green-500">推荐</span> 的 iMessage 接入方式；Server URL + Password + Webhook</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">iMessage</td>
                  <td className="py-2">传统方式，<code>imsg</code> CLI 路径 + 数据库访问</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            关于 iMessage：BlueBubbles 通过一个 macOS 上运行的 Server 做中间层，比直接读取 iMessage 数据库的传统方式更稳定也更安全。传统的 <code>imsg</code> 方案需要直接访问 macOS 的 Chat.db，权限要求高且容易受系统更新影响。
          </p>
        </div>

        <h3 className="mt-8">DM 安全机制</h3>

        <p>默认采用配对模式（Pairing）：当 Agent 收到一个新联系人的第一条 DM 时，会发送一个验证码，你需要通过命令行批准：</p>

        <CodeBlock language="bash" code="openclaw pairing approve <channel> <code>" />

        <p>也可以使用白名单（allowlists）来跳过这个步骤——对于已知的、信任的号码直接放行。</p>
      </section>

      <div className="section-divider" />

      {/* ── 守护进程 ─────────────────── */}
      <section id="daemon">
        <h2>守护进程安装</h2>

        <p>让 OpenClaw 作为系统服务常驻后台：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>macOS</strong> — 安装为 LaunchAgent（用户级服务，登录后自动启动）</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Linux / Windows (WSL2)</strong> — 安装为 systemd 用户单元（user unit）</p>
          </div>
        </div>

        <div className="border border-amber-500/30 rounded-xl p-5 bg-amber-50/5 my-6">
          <p className="text-sm text-ink !mb-0">
            <strong>运行时选择：</strong>推荐 Node.js。WhatsApp 和 Telegram 渠道<strong>强制要求</strong> Node 运行时。Bun 目前不推荐——虽然启动更快，但在 WebSocket 长连接等场景下的兼容性还不够稳定。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 健康检查与技能 ─────────────── */}
      <section id="health">
        <h2>健康检查与技能安装</h2>

        <h3>健康检查</h3>

        <p>向导会自动启动 Gateway（如果尚未运行）并执行健康检测。日常运维中还可以用更深度的诊断命令：</p>

        <CodeBlock language="bash" code={`openclaw health          # 基础健康检查
openclaw status --deep   # 附加网关健康探针（各渠道连接状态）`} />

        <h3 className="mt-8">技能安装</h3>

        <p>最后一步：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">扫描可用技能并检查各技能的依赖要求</li>
          <li className="leading-relaxed pl-1">选择包管理器：<strong className="text-ink">npm</strong> 或 <strong className="text-ink">pnpm</strong>（Bun 不推荐）</li>
          <li className="leading-relaxed pl-1">安装可选依赖——部分技能在 macOS 上需要通过 Homebrew 安装额外组件</li>
        </ol>
      </section>

      <div className="section-divider" />

      {/* ── 远程模式 ─────────────────── */}
      <section id="remote">
        <h2>远程模式</h2>

        <p>远程模式的场景：Gateway 跑在另一台机器上（比如一台始终在线的 Linux 服务器），你想从当前机器连过去。配置只需两项：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>远程 Gateway URL</strong> — WebSocket 地址，格式为 <code>ws://host:port</code></p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Token</strong> — 如果远程 Gateway 启用了认证（推荐），需要提供 Token</p>
          </div>
        </div>

        <p>远程模式不会在远程主机上做任何修改，它只是在本地写入连接信息。</p>
      </section>

      <div className="section-divider" />

      {/* ── 认证与模型 ─────────────── */}
      <section id="auth-models">
        <h2>认证与模型选项</h2>

        <p>OpenClaw 支持的模型提供商覆盖面相当广：</p>

        <h3>一线大模型</h3>
        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Anthropic</strong> — API Key / OAuth / Setup Token 三种方式</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>OpenAI</strong> — Code 订阅（复用 Codex CLI 的 OAuth）或独立 API Key</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>xAI (Grok)</strong> — API Key</p>
          </div>
        </div>

        <h3>国产模型</h3>
        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>MiniMax M2.5</strong> / <strong>Moonshot & Kimi Coding</strong> / <strong>GLM（智谱）</strong></p>
          </div>
        </div>

        <h3>网关与兼容方案</h3>
        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Vercel AI Gateway</strong> / <strong>Cloudflare AI Gateway</strong> — 云端 AI 路由</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>OpenCode Zen</strong> / <strong>Synthetic</strong> / <strong>Generic API Key</strong></p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Custom Provider</strong> — 支持 OpenAI 兼容和 Anthropic 兼容两种协议</p>
          </div>
        </div>

        <h3>模型行为</h3>
        <p>向导会从已检测到的可用选项中列出默认模型供选择，也可以手动输入 <code>provider/model</code> 格式的模型标识。选定后会执行一次模型检查，如果模型未知或认证缺失会给出警告。</p>

        <h3>凭证路径</h3>
        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">文件</th>
                  <th className="text-left py-2 font-medium text-ink-muted">路径</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">OAuth 凭证</td>
                  <td className="py-2 font-mono text-xs">~/.openclaw/credentials/oauth.json</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">认证配置</td>
                  <td className="py-2 font-mono text-xs">{'~/.openclaw/agents/<agentId>/agent/auth-profiles.json'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 输出与内部结构 ─────────────── */}
      <section id="outputs">
        <h2>输出与内部结构</h2>

        <p>运行完 <code>openclaw onboard</code> 后，向导的成果主要体现在 <code>~/.openclaw/openclaw.json</code> 这个核心配置文件中：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">openclaw.json 典型字段</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">字段</th>
                  <th className="text-left py-2 font-medium text-ink-muted">用途</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">agents.defaults.workspace</td>
                  <td className="py-2">Agent 工作区路径</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">agents.defaults.model</td>
                  <td className="py-2">默认模型</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">models.providers</td>
                  <td className="py-2">提供商配置</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">tools.profile</td>
                  <td className="py-2">工具权限配置</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">gateway.*</td>
                  <td className="py-2">网关相关设置</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">session.dmScope</td>
                  <td className="py-2">DM 会话作用域</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">skills.install.nodeManager</td>
                  <td className="py-2">技能安装使用的包管理器</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">wizard.lastRun*</td>
                  <td className="py-2">向导运行元数据</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3>其他文件位置</h3>
        <div className="my-8 font-mono text-sm leading-loose text-ink-muted">
          <p className="!mb-0">~/.openclaw/</p>
          <p className="!mb-0 pl-5">├── <span className="text-ink">credentials/</span></p>
          <p className="!mb-0 pl-10">├── <span className="text-ink">oauth.json</span> <span className="text-ink-faint">— OAuth 凭证</span></p>
          <p className="!mb-0 pl-10">└── <span className="text-ink">whatsapp/&lt;accountId&gt;/</span> <span className="text-ink-faint">— WhatsApp 凭证</span></p>
          <p className="!mb-0 pl-5">└── <span className="text-ink">agents/&lt;agentId&gt;/</span></p>
          <p className="!mb-0 pl-10">├── <span className="text-ink">sessions/</span> <span className="text-ink-faint">— 会话记录</span></p>
          <p className="!mb-0 pl-10">└── <span className="text-ink">agent/auth-profiles.json</span> <span className="text-ink-faint">— 认证配置</span></p>
        </div>

        <h3>Gateway 向导 RPC</h3>
        <p>向导不仅可以通过 CLI 交互运行，它本质上是 Gateway 的一个 RPC 服务——CLI 只是前端之一。这意味着同样的配置流程可以被 Dashboard UI 或自动化脚本调用：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><code>wizard.start</code> — 启动向导流程</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><code>wizard.next</code> — 推进到下一步</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><code>wizard.cancel</code> — 取消向导</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><code>wizard.status</code> — 查询当前向导状态</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ─────────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-5 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <h3 className="flex items-baseline gap-3 !mt-0">
              <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
              一站式配置入口
            </h3>
            <p className="text-sm text-ink-muted !mb-0">七个环节走完，模型、工作区、网关、渠道、守护进程、健康检查、技能全部就位。第一章手动做的所有事情，这一条命令全能覆盖。</p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <h3 className="flex items-baseline gap-3 !mt-0">
              <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
              重复运行是安全的
            </h3>
            <p className="text-sm text-ink-muted !mb-0">向导会检测已有配置，提供 Keep / Modify / Reset 三种策略，且 Reset 用 trash 而非 delete。不用担心"再跑一次会不会把东西搞丢"。</p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <h3 className="flex items-baseline gap-3 !mt-0">
              <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
              认证体系覆盖面极广
            </h3>
            <p className="text-sm text-ink-muted !mb-0">从 Anthropic、OpenAI 到国产的 MiniMax、Moonshot、GLM，再到 Vercel/Cloudflare AI Gateway 和自定义兼容协议——几乎不存在"我用的模型接不上"的情况。</p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <h3 className="flex items-baseline gap-3 !mt-0">
              <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
              安全设计贯穿始终
            </h3>
            <p className="text-sm text-ink-muted !mb-0">DM 配对机制、loopback 也建议开认证、Reset 用回收站、非 loopback 强制认证——每一处细节都在防止"一时手快酿大祸"。</p>
          </div>

          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <h3 className="flex items-baseline gap-3 !mt-0">
              <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
              向导本质是 Gateway RPC 服务
            </h3>
            <p className="text-sm text-ink-muted !mb-0">CLI 只是前端之一，同样的配置流程可以被 Dashboard 或自动化脚本调用——对 CI/CD 部署场景尤其有价值。</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
