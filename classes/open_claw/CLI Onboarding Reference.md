# CLI Onboarding Reference

This page is the full reference for `openclaw onboard`.
For the short guide, see [Onboarding Wizard (CLI)](/start/wizard).

## What the wizard does

Local mode (default) walks you through:

* Model and auth setup (OpenAI Code subscription OAuth, Anthropic API key or setup token, plus MiniMax, GLM, Moonshot, and AI Gateway options)
* Workspace location and bootstrap files
* Gateway settings (port, bind, auth, tailscale)
* Channels and providers (Telegram, WhatsApp, Discord, Google Chat, Mattermost plugin, Signal)
* Daemon install (LaunchAgent or systemd user unit)
* Health check
* Skills setup

Remote mode configures this machine to connect to a gateway elsewhere.
It does not install or modify anything on the remote host.

## Local flow details

### Existing config detection

* If `~/.openclaw/openclaw.json` exists, choose Keep, Modify, or Reset.
* Re-running the wizard does not wipe anything unless you explicitly choose Reset (or pass `--reset`).
* CLI `--reset` defaults to `config+creds+sessions`; use `--reset-scope full` to also remove workspace.
* If config is invalid or contains legacy keys, the wizard stops and asks you to run `openclaw doctor` before continuing.
* Reset uses `trash` and offers scopes:
  * Config only
  * Config + credentials + sessions
  * Full reset (also removes workspace)

### Workspace

* Default `~/.openclaw/workspace` (configurable).
* Seeds workspace files needed for first-run bootstrap ritual.
* Workspace layout: [Agent workspace](/concepts/agent-workspace).

### Gateway

* Prompts for port, bind, auth mode, and tailscale exposure.
* Recommended: keep token auth enabled even for loopback so local WS clients must authenticate.
* Disable auth only if you fully trust every local process.
* Non-loopback binds still require auth.

### Channels

* [WhatsApp](/channels/whatsapp): optional QR login
* [Telegram](/channels/telegram): bot token
* [Discord](/channels/discord): bot token
* [Google Chat](/channels/googlechat): service account JSON + webhook audience
* [Mattermost](/channels/mattermost) plugin: bot token + base URL
* [Signal](/channels/signal): optional `signal-cli` install + account config
* [BlueBubbles](/channels/bluebubbles): recommended for iMessage; server URL + password + webhook
* [iMessage](/channels/imessage): legacy `imsg` CLI path + DB access
* DM security: default is pairing. First DM sends a code; approve via
  `openclaw pairing approve <channel> <code>` or use allowlists.

### Daemon install

* macOS: LaunchAgent
* Linux and Windows via WSL2: systemd user unit
* Runtime selection: Node (recommended; required for WhatsApp and Telegram). Bun is not recommended.

### Health check

* Starts gateway (if needed) and runs `openclaw health`.
* `openclaw status --deep` adds gateway health probes to status output.

### Skills

* Reads available skills and checks requirements.
* Lets you choose node manager: npm or pnpm (bun not recommended).
* Installs optional dependencies (some use Homebrew on macOS).

## Remote mode details

Remote mode configures this machine to connect to a gateway elsewhere.

What you set:

* Remote gateway URL (`ws://...`)
* Token if remote gateway auth is required (recommended)

## Auth and model options (highlights)

* Anthropic API key / OAuth / setup-token
* OpenAI Code subscription (Codex CLI reuse or OAuth)
* OpenAI API key
* xAI (Grok) API key
* OpenCode Zen
* Generic API key
* Vercel AI Gateway
* Cloudflare AI Gateway
* MiniMax M2.5
* Synthetic
* Moonshot and Kimi Coding
* Custom provider (OpenAI-compatible / Anthropic-compatible)

Model behavior:

* Pick default model from detected options, or enter provider/model manually.
* Wizard runs a model check and warns if model is unknown or missing auth.

Credential/profile paths:

* OAuth credentials: `~/.openclaw/credentials/oauth.json`
* Auth profiles: `~/.openclaw/agents/<agentId>/agent/auth-profiles.json`

## Outputs and internals

Typical fields in `~/.openclaw/openclaw.json` include:

* `agents.defaults.workspace`
* `agents.defaults.model` / `models.providers`
* `tools.profile`
* `gateway.*`
* `session.dmScope`
* channel tokens/configs
* `skills.install.nodeManager`
* `wizard.lastRun*` metadata

Other locations:

* WhatsApp credentials: `~/.openclaw/credentials/whatsapp/<accountId>/`
* Sessions: `~/.openclaw/agents/<agentId>/sessions/`

Gateway wizard RPC:

* `wizard.start`
* `wizard.next`
* `wizard.cancel`
* `wizard.status`

## Related docs

* [Onboarding Wizard (CLI)](/start/wizard)
* [CLI Automation](/start/wizard-cli-automation)
* [`openclaw onboard`](/cli/onboard)

---
Source: https://docs.openclaw.ai/start/wizard-cli-reference
Saved by assistant at 2026-03-05
