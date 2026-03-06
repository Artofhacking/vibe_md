# Skill Studio — 项目结构参考

## 顶层目录

```
skill_studio/
├── .agents/skills/         # 跨编辑器共享的 Agent 技能（symlink 来源）
├── .claude/skills/         # Claude Code 的技能目录
├── .cursor/skills/         # Cursor 的技能目录（主要工作区）
├── CLAUDE.md               # 项目指南（Claude Code 自动加载）
├── README.md
│
├── classes/                # 官方教程和课程材料
│   └── open_claw/          # OpenClaw 教程
│       └── Personal Assistant Setup.md
│
├── skill-lab/              # React 前端应用
│   ├── src/                # 源代码
│   ├── dist/               # 构建产物
│   ├── package.json
│   └── tsconfig.json
│
├── skills收集/             # 从各处收集的原始 skills
├── 技能分析/               # 技能结构拆解（SKILL.md + REPORT.md）
├── 文章分析/               # 技术文章转化（ORIGINAL.md + REPORT.md）
├── 可视化/                 # 关系图、结构图（Canvas）
├── 模板/                   # Skill 创建模板和最佳实践
└── 文档/                   # 研究笔记和分析报告
```

## 技能目录对照

`.cursor/skills/` 和 `.claude/skills/` 是两个独立的技能目录，分别服务于 Cursor 和 Claude Code。部分技能通过 `.agents/skills/` 的符号链接在两者间共享。

### .cursor/skills/ — 项目自有技能

| 技能 | 文件结构 |
|-----|---------|
| analysis-todo | `SKILL.md` |
| article-anatomist | `SKILL.md` |
| deploy-pack | `SKILL.md` |
| project-steward | `SKILL.md`, `references/`（本技能） |
| report-to-page | `SKILL.md`, `references/component-library.md` |
| skill-anatomist | `SKILL.md`, `references/analysis-framework.md`, `references/pattern-library.md` |
| skill-creator | `SKILL.md`, `LICENSE.txt`, `agents/`, `scripts/`, `eval-viewer/`, `references/`, `assets/` |

### .agents/skills/ — 跨编辑器共享技能（通过 symlink）

这些技能通常是从外部安装的，通过符号链接同时出现在 `.claude/skills/` 中：

- baoyu-article-illustrator
- baoyu-cover-image
- find-skills
- frontend-design
- ui-ux-pro-max
- web-design-guidelines

## 内容目录详情

### 技能分析/

每个子目录对应一个被分析的技能：

| 子目录 | 有 REPORT.md | 有详情页 |
|-------|-------------|---------|
| baoyu-article-illustrator | ❌ | ❌ |
| baoyu-cover-image | ✅ | ✅ |
| frontend-design | ✅ | ✅ |
| skill-creator | ✅ | ✅ |
| ui-ux-pro-max | ✅ | ✅ |
| web-design-guidelines | ✅ | ✅ |

### 文章分析/

| 子目录 (slug) | 有 REPORT.md | 有详情页 |
|-------------|-------------|---------|
| 9-observations-building-ai-agents | ✅ | ✅ |
| dan-koe-one-person-business-2026 | ✅ | ✅ |
| mcp-is-dead-long-live-cli | ✅ | ✅ |
| scarce-humanity-in-ai-era | ✅ | ✅ |
| skill-creator-eval-benchmark-upgrade | ✅ | ✅ |

### classes/

存放官方教程的原始文档，按工具名分目录。处理后会进入教程工作流（而非普通文章流）。

| 子目录 | 文件 |
|-------|------|
| open_claw/ | Personal Assistant Setup.md |
