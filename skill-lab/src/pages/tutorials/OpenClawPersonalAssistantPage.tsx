import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'safety', label: '安全第一' },
  { id: 'prerequisites', label: '前提条件' },
  { id: 'two-phone', label: '双手机架构' },
  { id: 'quick-start', label: '5 分钟快速开始' },
  { id: 'workspace', label: '工作区配置' },
  { id: 'assistant-config', label: '助理配置' },
  { id: 'sessions', label: '会话与记忆' },
  { id: 'heartbeats', label: '心跳机制' },
  { id: 'media', label: '媒体收发' },
  { id: 'ops', label: '运维清单' },
  { id: 'next-steps', label: '下一步' },
];

export function OpenClawPersonalAssistantPage() {
  return (
    <ArticleLayout
      tocItems={tocItems}
      backTo="/tutorial/tut-openclaw"
      backLabel="返回教程大纲"
      footerRightTo="/tutorial/tut-openclaw/2"
      footerRightLabel="下一章：CLI 入门引导 →"
    >
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">Chapter 01</span>
          <span className="tag-pill">OpenClaw</span>
          <span className="tag-pill">WhatsApp</span>
          <span className="tag-pill">Agent</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">官方指南</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          私人助理：从零搭起来
        </h1>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl">
          让 WhatsApp（或 Telegram、Discord、iMessage）变成你的 Always-On AI Agent：一个专用号码、一部备用手机、你的 Mac，搭出一个 24/7 在线的私人秘书。
        </p>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border space-y-5">
        <p>
          OpenClaw 是一个自托管的多渠道网关，打通 WhatsApp、Telegram、Discord、iMessage，用于连接 Pi 等 AI 代理；插件还支持 Mattermost。
        </p>
        <p>
          本指南聚焦于 <strong>「个人助理」</strong> 模式：用一个专用 WhatsApp 号码，搭出一个 24/7 在线的私人 Agent，双手机架构、工作区记忆、心跳巡检、会话管理，一篇讲完。
        </p>
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <p>这篇教程将带你走完 OpenClaw 个人助理的完整搭建流程。最终效果：你用自己的手机给另一个 WhatsApp 号码发消息，背后的 Pi Agent 会读取、思考、回复——就像一个永远在线的私人秘书。</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>双手机架构</strong> — 一部个人手机 + 一部助理手机，隔离消息流</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>5 分钟启动</strong> — 扫码配对、启动网关、写一行配置即可开始</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>工作区即记忆</strong> — Agent 的操作指令和记忆存放在 Markdown 文件中</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>心跳机制</strong> — 可配置的主动模式，让 Agent 定期自检任务</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>多媒体支持</strong> — 收发图片、音频、文档，支持语音转录</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 安全第一 ───────────────────── */}
      <section id="safety">
        <h2>安全第一</h2>

        <div className="border border-amber-500/30 rounded-xl p-5 bg-amber-50/5 my-6">
          <p className="text-sm text-ink !mb-3"><strong>你正在把一个 Agent 放到一个有权限做以下事情的位置：</strong></p>
          <ul className="text-sm text-ink-muted space-y-1 !my-0">
            <li>在你的机器上执行命令（取决于 Pi 工具配置）</li>
            <li>读写你工作区中的文件</li>
            <li>通过 WhatsApp / Telegram / Discord / Mattermost 向外发送消息</li>
          </ul>
        </div>

        <p>起步阶段请保持保守：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>务必设置 <code>channels.whatsapp.allowFrom</code></strong> — 永远不要在你的个人 Mac 上运行一个对全世界开放的 Agent</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>使用专用 WhatsApp 号码</strong> — 为助理准备一个独立号码</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>先禁用心跳</strong> — 心跳默认每 30 分钟一次。在你信任整个配置之前，设置 <code>agents.defaults.heartbeat.every: "0m"</code> 关闭它</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 前提条件 ─────────────────── */}
      <section id="prerequisites">
        <h2>前提条件</h2>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>OpenClaw 已安装并完成初始化</strong> — 如果还没有，先去看 Getting Started</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>一个备用手机号</strong> — SIM / eSIM / 预付费卡均可，用于助理的 WhatsApp</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 双手机架构 ─────────────────── */}
      <section id="two-phone">
        <h2>双手机架构（推荐）</h2>

        <p>你希望的架构是这样的：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-mono">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-surface-0">
              <span className="text-ink font-bold">你的手机</span>
              <span className="text-ink-muted text-xs">你的 WhatsApp</span>
              <span className="text-ink-faint text-xs">+1-555-YOU</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-ink-faint text-xs">message →</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-surface-0">
              <span className="text-ink font-bold">备用手机</span>
              <span className="text-ink-muted text-xs">助理 WhatsApp</span>
              <span className="text-ink-faint text-xs">+1-555-ASSIST</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-ink-faint text-xs">← linked via QR</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-surface-0">
              <span className="text-ink font-bold">你的 Mac</span>
              <span className="text-ink-muted text-xs">OpenClaw</span>
              <span className="text-ink-faint text-xs">Pi Agent</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            <strong>为什么不用个人号？</strong>如果你把自己的 WhatsApp 连接到 OpenClaw，每一条发给你的消息都会变成 "agent input"。这几乎不可能是你想要的效果。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 5 分钟快速开始 ─────────────── */}
      <section id="quick-start">
        <h2>5 分钟快速开始</h2>

        <p><strong>第 1 步：配对 WhatsApp Web</strong>（会弹出二维码，用助理手机扫描）</p>
        <CodeBlock language="bash" code="openclaw channels login" />

        <p><strong>第 2 步：启动网关</strong>（保持运行）</p>
        <CodeBlock language="bash" code="openclaw gateway --port 18789" />

        <p><strong>第 3 步：写最小配置</strong>（放到 <code>~/.openclaw/openclaw.json</code>）</p>
        <CodeBlock language="json" code={`{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"]
    }
  }
}`} />

        <p>现在用你的白名单手机号给助理号码发一条消息。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            初始化完成后，OpenClaw 会自动打开 Dashboard 并打印一个干净的（未 token 化的）链接。如果提示认证，把 <code>gateway.auth.token</code> 粘贴到 Control UI 设置中。后续重新打开：<code>openclaw dashboard</code>
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 工作区配置 ─────────────────── */}
      <section id="workspace">
        <h2>给 Agent 一个工作区</h2>

        <p>OpenClaw 从工作区目录中读取操作指令和"记忆"。默认使用 <code>~/.openclaw/workspace</code>，首次运行时会自动创建以下文件：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">文件</th>
                  <th className="text-left py-2 font-medium text-ink-muted">用途</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">AGENTS.md</td>
                  <td className="py-2">Agent 操作指令</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">SOUL.md</td>
                  <td className="py-2">人格与身份定义</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">TOOLS.md</td>
                  <td className="py-2">可用工具说明</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">IDENTITY.md</td>
                  <td className="py-2">身份信息</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">USER.md</td>
                  <td className="py-2">用户偏好</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">HEARTBEAT.md</td>
                  <td className="py-2">心跳任务定义</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">BOOTSTRAP.md</td>
                  <td className="py-2">仅全新工作区创建，删除后不再生成</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">MEMORY.md</td>
                  <td className="py-2">可选。存在时会被注入到正常会话中</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <CodeBlock language="bash" code="openclaw setup" />

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            <strong>Pro tip:</strong> 把这个文件夹当作 OpenClaw 的"记忆"，用 git 管理起来（最好是私有仓库），这样你的 AGENTS.md 和记忆文件就有了备份。如果安装了 git，全新工作区会被自动初始化为 git 仓库。
          </p>
        </div>

        <p className="mt-6">可选：用 <code>agents.defaults.workspace</code> 指定不同的工作区路径（支持 <code>~</code>）：</p>
        <CodeBlock language="json" code={`{
  "agent": {
    "workspace": "~/.openclaw/workspace"
  }
}`} />

        <p>如果你已经从自己的 repo 部署了工作区文件，可以完全禁用 bootstrap 文件的生成：</p>
        <CodeBlock language="json" code={`{
  "agent": {
    "skipBootstrap": true
  }
}`} />
      </section>

      <div className="section-divider" />

      {/* ── 助理配置 ─────────────────── */}
      <section id="assistant-config">
        <h2>把它变成"助理"的配置</h2>

        <p>OpenClaw 默认就是一个不错的助理配置，但你通常会想微调以下几项：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>人格/指令</strong> — 在 <code>SOUL.md</code> 中定义</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>思考模式</strong> — 如需更深的推理，调整 <code>thinkingDefault</code></p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>心跳</strong> — 信任配置后再开启</p>
          </div>
        </div>

        <p>完整示例配置：</p>
        <CodeBlock language="json" code={`{
  "logging": { "level": "info" },
  "agent": {
    "model": "anthropic/claude-opus-4-6",
    "workspace": "~/.openclaw/workspace",
    "thinkingDefault": "high",
    "timeoutSeconds": 1800,
    "heartbeat": { "every": "0m" }
  },
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"],
      "groups": {
        "*": { "requireMention": true }
      }
    }
  },
  "routing": {
    "groupChat": {
      "mentionPatterns": ["@openclaw", "openclaw"]
    }
  },
  "session": {
    "scope": "per-sender",
    "resetTriggers": ["/new", "/reset"],
    "reset": {
      "mode": "daily",
      "atHour": 4,
      "idleMinutes": 10080
    }
  }
}`} />

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">关键配置项速查</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">配置项</th>
                  <th className="text-left py-2 font-medium text-ink-muted">说明</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">agent.model</td>
                  <td className="py-2">使用的模型，如 claude-opus-4-6</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">agent.thinkingDefault</td>
                  <td className="py-2">思考深度：low / medium / high</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">agent.timeoutSeconds</td>
                  <td className="py-2">单次会话超时（秒）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">channels.whatsapp.allowFrom</td>
                  <td className="py-2">白名单号码数组</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">session.scope</td>
                  <td className="py-2">会话隔离策略：per-sender</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">session.reset.idleMinutes</td>
                  <td className="py-2">空闲自动重置时间（10080 = 7 天）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 会话与记忆 ─────────────────── */}
      <section id="sessions">
        <h2>会话与记忆</h2>

        <p>会话文件和元数据存放在：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>会话文件</strong> — <code>~/.openclaw/agents/&lt;agentId&gt;/sessions/&#123;&#123;SessionId&#125;&#125;.jsonl</code></p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>元数据</strong>（token 用量、最后路由等）— <code>~/.openclaw/agents/&lt;agentId&gt;/sessions/sessions.json</code></p>
          </div>
        </div>

        <p>内置指令：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">指令</th>
                  <th className="text-left py-2 font-medium text-ink-muted">效果</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">/new 或 /reset</td>
                  <td className="py-2">为当前对话开启一个全新会话。单独发送时，Agent 会回复一条简短的问候以确认重置</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">/compact [instructions]</td>
                  <td className="py-2">压缩当前会话上下文，并报告剩余的 context 预算</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            重置触发词可通过 <code>resetTriggers</code> 自定义。这在多语言场景下很实用——你可以加上中文的 "/新对话" 作为重置命令。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 心跳机制 ─────────────────── */}
      <section id="heartbeats">
        <h2>心跳机制（主动模式）</h2>

        <p>心跳是 OpenClaw 最有意思的功能之一：默认每 30 分钟，Agent 会主动"醒来"检查是否有事要做。</p>

        <p>心跳的默认提示词是：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Read HEARTBEAT.md if it exists (workspace context).
Follow it strictly.
Do not infer or repeat old tasks from prior chats.
If nothing needs attention, reply HEARTBEAT_OK.`}</pre>
        </blockquote>

        <p>行为规则：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">如果 <code>HEARTBEAT.md</code> 存在但实际为空（只有空行和标题），OpenClaw 会跳过心跳以节省 API 调用</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">如果文件不存在，心跳仍然会运行——模型自己决定做什么</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">如果 Agent 回复 <code>HEARTBEAT_OK</code>，OpenClaw 会抑制该次心跳的外发消息</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">默认允许心跳向 DM 式的 <code>user:&lt;id&gt;</code> 目标发送。设置 <code>directPolicy: "block"</code> 可抑制直接推送</p>
          </div>
        </div>

        <CodeBlock language="json" code={`{
  "agent": {
    "heartbeat": { "every": "30m" }
  }
}`} />

        <div className="border border-amber-500/30 rounded-xl p-5 bg-amber-50/5 mt-5">
          <p className="text-sm text-ink !mb-0">
            <strong>注意 token 消耗：</strong>心跳运行的是完整的 Agent 回合——间隔越短，token 烧得越快。建议从 <code>"0m"</code>（禁用）开始，观察稳定后再逐步调低间隔。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 媒体收发 ─────────────────── */}
      <section id="media">
        <h2>媒体收发</h2>

        <p><strong>入站附件</strong>（图片/音频/文档）可以通过模板变量传递给你的命令：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">模板变量</th>
                  <th className="text-left py-2 font-medium text-ink-muted">说明</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">{'{{MediaPath}}'}</td>
                  <td className="py-2">本地临时文件路径</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">{'{{MediaUrl}}'}</td>
                  <td className="py-2">伪 URL</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">{'{{Transcript}}'}</td>
                  <td className="py-2">音频转录文本（需启用音频转录）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p><strong>出站附件：</strong>Agent 在回复中用 <code>MEDIA:&lt;path-or-url&gt;</code> 单独一行（前后无空格）来发送媒体文件：</p>

        <CodeBlock language="text" code={`Here's the screenshot.
MEDIA:https://example.com/screenshot.png`} />

        <p>OpenClaw 会自动提取这些标记，将媒体文件随文本一起发送。</p>
      </section>

      <div className="section-divider" />

      {/* ── 运维清单 ─────────────────── */}
      <section id="ops">
        <h2>运维清单</h2>

        <CodeBlock language="bash" code={`openclaw status          # 本地状态（凭证、会话、排队事件）
openclaw status --all    # 完整诊断（只读，可直接粘贴分享）
openclaw status --deep   # 附加网关健康探测（Telegram + Discord）
openclaw health --json   # 网关健康快照（WebSocket）`} />

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            日志默认存放在 <code>/tmp/openclaw/</code> 下（格式：<code>openclaw-YYYY-MM-DD.log</code>）。出了问题先翻日志，比 debug 快十倍。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 下一步 ─────────────────── */}
      <section id="next-steps">
        <h2>下一步</h2>

        <p>搭建完成后，你可以继续探索以下方向：</p>

        <div className="space-y-4 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>WebChat</strong> — 浏览器端直接与 Agent 对话
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>Gateway 运维手册</strong> — 生产环境下的网关管理最佳实践
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>Cron + 定时唤醒</strong> — 让 Agent 在特定时间自动执行任务
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>macOS 菜单栏伴侣</strong> — 在状态栏快速查看 Agent 状态
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>移动端 App</strong> — iOS / Android 节点应用
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>安全指南</strong> — 权限最小化与凭证管理策略
            </p>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            <strong>核心心法：</strong>OpenClaw 的设计哲学是"文件即配置，Markdown 即记忆"。你的 Agent 有多聪明，很大程度上取决于你在工作区里写了什么。把 <code>AGENTS.md</code> 当作一份给 AI 的岗位说明书来写，你会发现效果远超预期。
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
}
