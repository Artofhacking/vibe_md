# 一条命令，把整个 AI 网关配好：openclaw onboard 完全参考

> **原文**：CLI Onboarding Reference
> **来源**：https://docs.openclaw.ai/start/wizard-cli-reference
> **转化日期**：2026-03-05

---

## 概览

上一章我们手动写 JSON、手动扫码、手动启动 Gateway——那是"理解原理"的方式。而在真实使用中，OpenClaw 提供了一条命令 `openclaw onboard`，用一个交互式向导把模型认证、工作区初始化、网关配置、渠道接入、守护进程安装、健康检查、技能安装全部走完。这篇是这个向导的完整参考手册：每一步做了什么、有哪些选项、文件写到了哪里。

---

## 正文

### 向导做了什么

`openclaw onboard` 有两种模式：**本地模式**（默认）和**远程模式**。

**本地模式**会依次引导你完成以下七个环节：

1. **模型与认证配置** —— 支持 OpenAI Code 订阅 OAuth、Anthropic API Key 或 Setup Token，以及 MiniMax、GLM、Moonshot、AI Gateway 等多种选项
2. **工作区位置与启动文件** —— 指定 Agent 的"大脑"放在哪里
3. **网关设置** —— 端口、绑定地址、认证方式、Tailscale 暴露
4. **渠道与提供商** —— Telegram、WhatsApp、Discord、Google Chat、Mattermost 插件、Signal
5. **守护进程安装** —— 让 OpenClaw 开机自启、后台常驻
6. **健康检查** —— 确认一切正常
7. **技能安装** —— 检查可用技能并安装依赖

**远程模式**则用于把当前机器配置为连接到别处运行的 Gateway。它不会在远程主机上安装或修改任何东西——你只是在本地配一个"遥控器"。

### 本地模式详解

#### 已有配置检测

如果你不是第一次运行向导，它会先检测 `~/.openclaw/openclaw.json` 是否存在。存在的话，会给你三个选择：

- **Keep** —— 保留现有配置，跳过已配置的步骤
- **Modify** —— 在现有配置基础上修改
- **Reset** —— 重置后从头来过

重要的是：**重新运行向导不会自动清除任何东西**，除非你明确选择 Reset 或传入 `--reset` 参数。这个设计很贴心——你不用担心手滑把已有配置搞丢。

如果配置文件存在但格式无效或包含过时的字段（legacy keys），向导会停下来要求你先运行 `openclaw doctor` 修复，再继续。这种"先治病再体检"的流程避免了在错误配置基础上叠加更多错误。

`--reset` 参数默认的重置范围是 `config+creds+sessions`（配置 + 凭证 + 会话），如果要连工作区也一起清掉，需要显式指定 `--reset-scope full`。

重置操作使用 `trash`（移到回收站而非直接删除），提供三个粒度：

| 重置范围 | 清除内容 |
|---------|---------|
| Config only | 仅配置文件 |
| Config + credentials + sessions | 配置 + 凭证 + 会话记录 |
| Full reset | 以上全部 + 工作区 |

#### 工作区

- 默认路径：`~/.openclaw/workspace`（可配置）
- 向导会自动创建工作区并播种（seed）首次启动所需的引导文件（bootstrap files）
- 工作区的完整布局参见 Agent workspace 文档

如果你在上一章已经手动搭建过工作区，向导会检测到并保留它。这里的关键概念是：工作区就是 Agent 的记忆和人格所在地，里面的 `AGENTS.md`、`SOUL.md`、`TOOLS.md` 等文件定义了 Agent 的行为边界。

#### 网关（Gateway）

向导会询问四个关键设置：

- **端口（Port）** —— Gateway 监听的端口号
- **绑定地址（Bind）** —— 监听哪个网络接口
- **认证模式（Auth）** —— Token 认证的开关和方式
- **Tailscale 暴露** —— 是否通过 Tailscale 对外暴露

⚠️ **安全提醒**：即使绑定在 loopback（127.0.0.1）上，也建议保持 Token 认证开启。原因是你的本机可能跑着各种进程，其中任何一个如果知道端口号就能直接和 Gateway 通信。只有在你完全信任本机上每一个进程时，才考虑关闭认证。非 loopback 绑定则强制要求认证，无法跳过。

#### 渠道（Channels）

这是向导里最丰富的环节，支持的渠道覆盖了主流即时通讯平台：

| 渠道 | 接入方式 |
|------|---------|
| **WhatsApp** | 可选 QR 码登录（扫码配对） |
| **Telegram** | Bot Token |
| **Discord** | Bot Token |
| **Google Chat** | Service Account JSON + Webhook Audience |
| **Mattermost** | 插件方式，需要 Bot Token + Base URL |
| **Signal** | 可选安装 `signal-cli` + 账号配置 |
| **BlueBubbles** | 推荐的 iMessage 接入方式；需要 Server URL + Password + Webhook |
| **iMessage** | 传统方式，通过 `imsg` CLI 路径 + 数据库访问 |

关于 iMessage 值得多说一句：BlueBubbles 是目前推荐的方案，它通过一个 macOS 上运行的 BlueBubbles Server 做中间层，比直接读取 iMessage 数据库的传统方式更稳定也更安全。传统的 `imsg` 方案需要直接访问 macOS 的 Chat.db，权限要求高且容易受系统更新影响。

**DM 安全机制**：默认采用配对模式（pairing）。当 Agent 收到一个新联系人的第一条 DM 时，会发送一个验证码（code），你需要通过命令行批准：

```bash
openclaw pairing approve <channel> <code>
```

也可以使用白名单（allowlists）来跳过这个步骤——对于已知的、信任的号码直接放行。

#### 守护进程安装

让 OpenClaw 作为系统服务常驻后台：

- **macOS**：安装为 LaunchAgent（用户级服务，登录后自动启动）
- **Linux / Windows (WSL2)**：安装为 systemd 用户单元（user unit）

运行时选择方面，推荐使用 **Node.js**。WhatsApp 和 Telegram 渠道强制要求 Node 运行时。Bun 目前不推荐使用——虽然它启动更快，但在 WebSocket 长连接等场景下的兼容性还不够稳定。

#### 健康检查

向导的倒数第二步会自动启动 Gateway（如果尚未运行）并执行 `openclaw health` 命令，验证所有配置是否生效。

日常运维中还可以用 `openclaw status --deep` 做更深度的诊断，它会在基础状态信息之上追加 Gateway 的健康探针结果（包括各渠道的连接状态）。

#### 技能安装

最后一步：

1. 扫描可用技能并检查各技能的依赖要求
2. 让你选择包管理器：**npm** 或 **pnpm**（Bun 不推荐）
3. 安装可选依赖——部分技能在 macOS 上需要通过 Homebrew 安装额外组件

### 远程模式详解

远程模式的场景是：Gateway 跑在另一台机器上（比如一台始终在线的 Linux 服务器），而你想从当前机器（比如笔记本）连过去。

配置只需要两项：

- **远程 Gateway URL** —— WebSocket 地址，格式为 `ws://host:port`
- **Token** —— 如果远程 Gateway 启用了认证（推荐），需要提供 Token

远程模式不会在远程主机上做任何修改，它只是在本地写入连接信息。

### 认证与模型选项

OpenClaw 支持的模型提供商相当丰富，向导中可以选择：

**一线大模型**：
- Anthropic —— API Key / OAuth / Setup Token 三种方式
- OpenAI —— Code 订阅（复用 Codex CLI 的 OAuth）或独立 API Key
- xAI (Grok) —— API Key

**国产模型**：
- MiniMax M2.5
- Moonshot / Kimi Coding
- GLM（智谱）

**网关与兼容方案**：
- Vercel AI Gateway
- Cloudflare AI Gateway
- OpenCode Zen
- Synthetic
- Generic API Key（通用 Key）
- Custom Provider —— 支持 OpenAI 兼容和 Anthropic 兼容两种协议

**模型行为**：向导会从已检测到的可用选项中列出默认模型供选择，也可以手动输入 `provider/model` 格式的模型标识。选定后会执行一次模型检查，如果模型未知或认证缺失会给出警告。

**凭证与配置文件路径**：

| 文件 | 路径 |
|-----|------|
| OAuth 凭证 | `~/.openclaw/credentials/oauth.json` |
| 认证配置 | `~/.openclaw/agents/<agentId>/agent/auth-profiles.json` |

### 输出与内部结构

运行完 `openclaw onboard` 后，向导的成果主要体现在 `~/.openclaw/openclaw.json` 这个核心配置文件中。典型字段包括：

| 配置字段 | 用途 |
|---------|------|
| `agents.defaults.workspace` | Agent 工作区路径 |
| `agents.defaults.model` / `models.providers` | 默认模型与提供商配置 |
| `tools.profile` | 工具权限配置 |
| `gateway.*` | 网关相关设置 |
| `session.dmScope` | DM 会话作用域 |
| 各渠道 tokens/configs | 渠道认证信息 |
| `skills.install.nodeManager` | 技能安装使用的包管理器 |
| `wizard.lastRun*` | 向导运行元数据（上次运行时间等） |

**其他文件位置**：

- WhatsApp 凭证：`~/.openclaw/credentials/whatsapp/<accountId>/`
- 会话记录：`~/.openclaw/agents/<agentId>/sessions/`

**Gateway 向导 RPC 接口**（供内部和高级用户参考）：

- `wizard.start` —— 启动向导流程
- `wizard.next` —— 推进到下一步
- `wizard.cancel` —— 取消向导
- `wizard.status` —— 查询当前向导状态

这组 RPC 接口意味着向导不仅可以通过 CLI 交互运行，理论上也可以被 Dashboard UI 或其他程序化方式调用——这是一个值得注意的架构设计：向导本身是 Gateway 的一个 RPC 服务，CLI 只是它的一种前端。

---

## 要点提炼

1. **`openclaw onboard` 是一站式配置入口**。七个环节走完，模型、工作区、网关、渠道、守护进程、健康检查、技能全部就位。第一章手动做的所有事情，这一条命令全能覆盖。

2. **重复运行是安全的**。向导会检测已有配置，提供 Keep/Modify/Reset 三种策略，且 Reset 用 trash 而非 delete。不用担心"再跑一次会不会把东西搞丢"。

3. **认证体系覆盖面极广**。从 Anthropic、OpenAI 到国产的 MiniMax、Moonshot、GLM，再到 Vercel/Cloudflare AI Gateway 和自定义兼容协议——几乎不存在"我用的模型接不上"的情况。

4. **安全设计贯穿始终**。DM 配对机制、loopback 也建议开认证、Reset 用回收站、非 loopback 强制认证——每一处细节都在防止"一时手快酿大祸"。

5. **向导本质是 Gateway RPC 服务**。CLI 只是前端之一，这意味着同样的配置流程可以被 Dashboard 或自动化脚本调用——对 CI/CD 部署场景尤其有价值。

## 术语表

| 术语 | 英文 | 释义 |
|-----|------|------|
| 入门引导向导 | Onboarding Wizard | `openclaw onboard` 启动的交互式配置流程 |
| 工作区 | Workspace | Agent 的记忆和人格文件所在目录，默认 `~/.openclaw/workspace` |
| 网关 | Gateway | OpenClaw 的核心进程，负责消息收发和 Agent 调度 |
| 守护进程 | Daemon | 后台常驻的系统服务（macOS 用 LaunchAgent，Linux 用 systemd） |
| 配对模式 | Pairing | DM 安全机制，新联系人首次消息需通过验证码批准 |
| 引导文件 | Bootstrap Files | 工作区首次创建时自动生成的 AGENTS.md、SOUL.md 等文件 |
| 健康探针 | Health Probes | `openclaw status --deep` 执行的深度连接状态检查 |
