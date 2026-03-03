# Skill 创建模板

## 标准 Skill 结构

```
skill-name/
├── SKILL.md              # 必需：技能主体
├── references/           # 可选：参考文档
│   ├── guide.md         # 详细指南
│   └── examples.md      # 示例
├── scripts/             # 可选：脚本
│   └── script.py
└── assets/              # 可选：资源
    └── template.png
```

## SKILL.md 模板

```markdown
---
name: skill-name
description: 技能描述 - 说明做什么以及何时触发。包含所有触发场景。
metadata:
  {
    "openclaw":
      {
        "emoji": "🎯",
        "requires": { "bins": ["命令"] },
        "install": [],
      },
  }
---

# Skill Name

## 核心定位
简短的技能定位说明

## 触发场景
- 场景 1
- 场景 2
- 场景 3

## 使用方法

### 基本用法
步骤说明

### 示例
```bash
命令示例
```

## 参考
- [详细指南](references/guide.md)
- [示例](references/examples.md)
```

## Progressive Disclosure 原则

1. **Metadata**：name + description（始终在上下文）
2. **SKILL.md**：核心逻辑（触发后加载，< 500 行）
3. **references/**：详细文档（按需加载）

## 核心原则

- **Concise is Key**：只添加 AI 真正需要的信息
- **Avoid Duplication**：信息只在一处存储
- **Set Appropriate Freedom**：根据任务复杂度设置自由度
