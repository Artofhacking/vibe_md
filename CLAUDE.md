# Skill Studio - AI 项目指南

## 项目概述

**Skill Studio** 是 AI Skills 的研究与可视化中心。用于收集、分析、可视化各种 AI Skills，并总结最佳实践。

## 核心身份

- **研究定位**：Skills 系统架构分析与设计
- **核心功能**：技能收集、结构分析、可视化展示、模板创建

## 目录结构

```
skill_studio/
├── skills收集/      # 从各处收集的 skills（.skill 文件或文件夹）
├── 技能分析/        # Skills 结构分析和解构
├── 可视化/          # 关系图、结构图
├── 模板/            # Skill 创建模板和最佳实践
└── 文档/            # 研究笔记和分析报告
```

## 工作流程

### 1. 收集 Skills
- 从 ClawHub、GitHub、OpenClaw 等来源下载 skills
- 存放到 `skills收集/`

### 2. 分析结构
- 解构 SKILL.md 结构
- 分析 references、scripts、assets
- 总结设计模式

### 3. 可视化
- 用 Canvas 绘制关系图
- 创建结构图展示 skill 架构
- 记录协作关系

### 4. 创建新 Skill
- 基于 `模板/` 中的最佳实践
- 遵循 Progressive Disclosure 原则

## 分析维度

### Skill 结构分析
- frontmatter（元数据）
- body（主体）
- references（参考资源）
- scripts（脚本）
- assets（资源）

### 设计模式识别
- 渐进式披露
- 协作矩阵
- 触发词设计
- 输出格式标准化

## 参考资源

- OpenClaw skill-creator：`~/.nvm/versions/node/v22.22.0/lib/node_modules/openclaw/skills/skill-creator/`
- game_book 技能系统：`~/Work/game_book/.claude/skills/`
- ClawHub：https://clawhub.com
