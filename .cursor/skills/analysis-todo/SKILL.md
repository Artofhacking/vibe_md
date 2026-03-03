---
name: analysis-todo
description: Scan 技能分析/ directory for skills missing REPORT.md or detail pages, and remind user to run skill-anatomist or report-to-page. Use when user says "检查待办", "查看待办", "todo", "待办事项", or asks about analysis progress.
---

# 分析待办检查

扫描 `技能分析/` 目录，按两级检查找出待办项。

## 两级检查

| 级别 | 缺失项 | 建议操作 |
|------|--------|---------|
| 1 级 | 无 REPORT.md | 用 **skill-anatomist** 剖析技能生成报告 |
| 2 级 | 有 REPORT 但无详情页 | 用 **report-to-page** 将报告转为页面 |

详情页路径：`skill-lab/src/pages/skills/{PascalCaseName}Page.tsx`

命名规则：`baoyu-cover-image` → `BaoyuCoverImagePage.tsx`

## 工作流

### Step 1: 扫描

1. 遍历 `技能分析/` 下所有子目录
2. 对每个子目录检查是否有 `REPORT.md`
3. 对有 REPORT.md 的，检查 `skill-lab/src/pages/skills/` 下是否有对应的 `{PascalCaseName}Page.tsx`

### Step 2: 分类汇报

```
## 技能分析待办

### 🔴 1 级：缺少分析报告（{count} 个）

| 技能 | 操作 |
|------|------|
| {name} | → skill-anatomist 剖析 |

### 🟡 2 级：缺少详情页（{count} 个）

| 技能 | 操作 |
|------|------|
| {name} | → report-to-page 生成页面 |

### ✅ 已完成（{count} 个）

{已有 REPORT + 详情页的技能列表}
```

### Step 3: 引导行动

优先处理 1 级（没有报告就无法生成页面）。

如果有 1 级待办：
> 有 {count} 个技能还没有分析报告，这是最高优先级。要现在用 skill-anatomist 剖析哪一个？

如果只有 2 级待办：
> 报告都写好了，还有 {count} 个技能没有详情页。要用 report-to-page 生成哪一个？

如果全部完成：
> 所有技能都已完成分析和页面生成，没有待办项。
