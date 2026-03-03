# baoyu-cover-image：把「我不会做封面」变成「选 5 个维度就行」

> 一个将封面图设计拆解为 6 个独立维度（Type × Palette × Rendering × Text × Mood × Font）的生成技能，用兼容性矩阵和自动推荐消灭了用户的决策焦虑。

---

## 它是什么

baoyu-cover-image 是一个文章封面图生成技能。用户给它一篇文章（路径或粘贴内容），它会分析内容、推荐视觉参数、生成 prompt、调用图像生成工具，最终输出一张封面图。

它面向的是内容创作者——写博客、发公众号、做技术文章的人。这些人有个共同痛点：写完文章后需要一张封面图，但不会设计，也不知道该怎么描述自己想要的视觉风格。

这个技能的规模相当惊人。SKILL.md 主体 234 行，背后挂载了 **31 个 reference 文件**，覆盖 9 个调色板定义、6 种渲染风格定义、3 个维度详解、3 个工作流步骤、3 个配置文件、兼容性矩阵、自动选择规则、视觉元素库、风格预设表、base prompt 模板。这不是一个「提示词」，这是一个完整的设计系统。

## 它的精彩之处

### 把「设计」变成「选择」的维度拆解

> **Five Dimensions**
> | Dimension | Values | Default |
> |-----------|--------|---------|
> | **Type** | hero, conceptual, typography, metaphor, scene, minimal | auto |
> | **Palette** | warm, elegant, cool, dark, earth, vivid, pastel, mono, retro | auto |
> | **Rendering** | flat-vector, hand-drawn, painterly, digital, pixel, chalk | auto |
> | **Text** | none, title-only, title-subtitle, text-rich | title-only |
> | **Mood** | subtle, balanced, bold | balanced |

这是整个技能最核心的设计选择。它没有问用户「你想要什么样的封面」——这是一个开放性问题，会让不会设计的人陷入焦虑。它做了一件聪明的事：**把视觉设计的无限可能性，压缩成 6 个独立维度，每个维度 3-9 个选项**。

用户不需要懂设计。他只需要知道：我想要暖色调还是冷色调？手绘感还是扁平风？这些是人人能回答的问题。

维度之间是**正交的**——选调色板不影响选渲染风格，选类型不影响选情绪。这意味着用户每次只需要做一个简单决策，而不是在一个巨大的组合空间里迷失。9 × 6 × 6 × 4 × 3 × 4 = 15,552 种组合，但用户最多只需要回答 6 个单选题。

### 兼容性矩阵——隐形的设计护栏

> | | flat-vector | hand-drawn | painterly | digital | pixel | chalk |
> |---|:---:|:---:|:---:|:---:|:---:|:---:|
> | warm | ✓✓ | ✓✓ | ✓ | ✓ | ✓ | ✓ |
> | elegant | ✓ | ✓✓ | ✓ | ✓✓ | ✗ | ✗ |

大多数参数化技能停留在「给你选项」。baoyu-cover-image 更进一步：**它告诉你哪些组合好、哪些组合差**。

`compatibility.md` 里有 5 张兼容性矩阵表（Palette × Rendering、Type × Rendering、Type × Text、Type × Mood、Font × Rendering），用 ✓✓ / ✓ / ✗ 三级标注。这不是随意标的——elegant 配 pixel 标了 ✗，因为像素风和优雅感确实矛盾；minimal 配 bold 标了 ✗，因为极简主义和高冲击力天然冲突。

这些矩阵实际上是**设计知识的编码**。不会设计的用户不可能知道 `earth` 配 `painterly` 是 ✓✓ 而配 `pixel` 是 ✗。但这个矩阵替他做了判断。更巧妙的是，这些矩阵不是给用户看的（用户可能永远不会翻到这个 reference），而是给 AI 用的——AI 在推荐组合时会参照这些矩阵，用户感受到的只是「推荐的选项总是很协调」。

### 基于内容信号的自动推荐

> | Signals | Type |
> |---------|------|
> | Product, launch, announcement, release, reveal | `hero` |
> | Architecture, framework, system, API, technical, model | `conceptual` |
> | Quote, opinion, insight, thought, headline, statement | `typography` |

`auto-selection.md` 为每个维度定义了内容信号到参数值的映射。这是一个精心设计的**语义分析 → 视觉决策**管道。

写了一篇关于 API 架构的文章？Type 自动选 `conceptual`，Palette 自动选 `cool`，Rendering 自动选 `flat-vector`，Font 自动选 `clean`。整套推荐一气呵成，而且确实是一个合理的技术文章封面配置。

这个设计的深层价值在于：它让 `--quick` 模式真正可用。很多技能的「快速模式」只是跳过确认，实际效果靠运气。baoyu-cover-image 的快速模式背后有一整套推理规则，auto 不是 random，是 smart default。

### Style Presets——组合的快捷方式

> | --style | Palette | Rendering |
> |---------|---------|-----------|
> | `blueprint` | `cool` | `digital` |
> | `chalkboard` | `dark` | `chalk` |
> | `sketch-notes` | `warm` | `hand-drawn` |

在 6 维度之上，技能又提供了一层抽象：style presets。一个 `--style blueprint` 就等于 `--palette cool --rendering digital`。而且用户还可以局部覆盖：`--style blueprint --rendering hand-drawn`。

这是**渐进式复杂度**的教科书写法。新手用 preset 一步到位，老手拆开来逐个调。同一个系统服务两类人，不增加任何结构冗余。

### ⛔ BLOCKING 的首次配置设计

> **Step 0: Load Preferences ⛔ BLOCKING**
>
> | Result | Action |
> |--------|--------|
> | Found | Load, display summary → Continue |
> | Not found | ⛔ Run first-time setup → Save → Continue |
>
> **CRITICAL**: If not found, complete setup BEFORE any other steps or questions.

Step 0 的设计值得单独拿出来说。技能在正式工作之前，先检查有没有 EXTEND.md 偏好配置。如果没有，它会**强制**走一遍首次配置流程——收集水印偏好、默认类型/调色板/渲染风格、宽高比、输出目录、快速模式。

这个 ⛔ BLOCKING 标记是关键。它不是建议，是命令。`first-time-setup.md` 甚至专门列出了「Do NOT: Ask about reference images / Ask about content / Ask about dimensions / Proceed to content analysis」。这种**防御性设计**确保了：

1. 用户的偏好只需设置一次，之后所有生成自动应用
2. 永远不会出现「生成完了才发现没设水印」的情况
3. 偏好文件同时支持项目级（`.baoyu-skills/`）和用户级（`~/.baoyu-skills/`），覆盖不同粒度的需求

### 参考图像的「强制描述」策略

> **Passing `--ref` alone is NOT enough.** Image generation models often ignore reference images unless the prompt text explicitly describes what to reproduce. Always combine `--ref` with detailed textual instructions.

这是实战经验的结晶。技能作者显然踩过坑：给图像模型丢一张参考图，它经常视而不见。所以 baoyu-cover-image 做了一个激进的决定——**不仅传参考图，还必须用文字把参考图的每个关键元素写出来**，而且每个元素都要加 "MUST" 或 "REQUIRED" 前缀。

`prompt-template.md` 里的 Reference Analysis Template 更是把「什么叫具体描述」掰开讲了：

> | Bad Example | Good Example |
> |-------------|--------------|
> | "Has a logo" | "Logo 'm' formed by 3 vertical lines" |
> | "Has patterns" | "Woven intersecting curves forming diamond grid" |
> | "Dark and light" | "#2D4A3E dark teal, #F5F0E0 cream" |

这种 Good/Bad 对照是**消灭模糊的利器**。AI 最容易犯的错就是写出「clean style」这种空洞描述，这个表格把标准卡得死死的。

## 它的结构逻辑

baoyu-cover-image 采用的是**分层知识库 + 线性工作流**的混合结构。

工作流是线性的：Step 0 → Step 1 → Step 2 → Step 3 → Step 4 → Step 5，有明确的依赖关系和阻塞标记。但支撑这个工作流的知识不是线性的——它被拆散成 31 个 reference 文件，按需加载。

这种结构的选择背后有清晰的逻辑：

1. **SKILL.md 是控制流**，它告诉 AI「做什么、什么顺序」。234 行主体涵盖了完整的执行逻辑。
2. **references/ 是知识库**，它告诉 AI「怎么做、具体规则是什么」。9 个调色板定义不需要写在主体里——AI 只在选中 `warm` 时才需要读 `palettes/warm.md`。
3. **config/ 是状态管理**，它处理持久化偏好、首次配置、schema 迁移。

这种分离的好处是**注意力经济**。一个 1000+ 行的单文件技能会让 AI 的注意力分散在大量无关细节上。baoyu-cover-image 让 AI 在每个步骤只看需要的信息——Step 2 确认选项时读 `confirm-options.md`，Step 3 写 prompt 时读 `prompt-template.md`。

reference 文件的内部组织也有规律：

```
references/
├── palettes/        # 9 个调色板定义，结构统一
├── renderings/      # 6 种渲染风格定义，结构统一
├── dimensions/      # 3 个维度详解（text, mood, font）
├── workflow/        # 3 个工作流步骤详解
├── config/          # 3 个配置相关文件
├── auto-selection.md    # 自动推荐规则
├── compatibility.md     # 兼容性矩阵
├── style-presets.md     # 风格预设
├── visual-elements.md   # 视觉元素库
└── base-prompt.md       # 基础 prompt 模板
```

每个调色板文件的结构完全一致：标题 → Color Palette 表 → Decorative Hints → Best For。每个渲染风格文件的结构也完全一致：Core Characteristics → Lines → Texture → Depth → Element Vocabulary → Typography Approach。**结构统一意味着可预测**，AI 读过一个就知道所有同类文件的结构，加载效率极高。

## 它的写作模式

**结构公式**

> [多维参数矩阵] + [自动推荐规则] + [兼容性矩阵] + [快捷预设] + [阻塞式工作流] + [持久化偏好系统] + [结构化 Prompt 模板] + [完成报告]

这个公式的核心逻辑是一条**决策辅助链**：

- 多维参数矩阵**定义选择空间**
- 自动推荐规则**缩小选择空间**
- 兼容性矩阵**约束选择空间**
- 快捷预设**跳过选择空间**
- 工作流**串联选择到执行**
- 偏好系统**记忆选择**
- Prompt 模板**转译选择为输出**
- 完成报告**确认选择的结果**

每个要素都在降低用户的认知负担，层层递进，从「无限可能」压缩到「一个确定的输出」。

**匹配的已知模式**

| 模式 | 实现质量 | 说明 |
|------|---------|------|
| 步骤化工作流 | 创新 | 6 步 + ⛔ BLOCKING + ASCII 流程图 |
| 多维参数矩阵 | 创新 | 6 维正交 + 兼容性矩阵约束 |
| 渐进式披露 | 优秀 | 234 行主体 → 31 个按需加载的 reference |
| 自动默认 + 手动覆盖 | 创新 | 基于内容信号的动态推荐 + style presets + --quick |
| 输出文件结构规范 | 优秀 | slug 命名 + 时间戳冲突处理 + 多种输出目录模式 |
| 完成报告 | 优秀 | 全参数摘要 + 文件列表 |
| 焦虑→确定性管道 | 创新 | 从开放设计问题到 6 个单选题 |
| 反模式清单 | 标准 | "Do NOT invent titles"、Good/Bad 对照表 |

**模式组合类型**：工作流型。以步骤化流程为骨架，以多维参数为核心机制，以自动默认和完成报告为用户体验保障。

## 如果我们要写一个同类 skill

1. **确定生成物的维度**。找到你要生成的东西可以被哪些独立维度描述。封面图是 Type × Palette × Rendering × Text × Mood × Font，演示文稿可能是 Layout × Theme × Animation × Density。维度之间应正交。
2. **为每个维度定义有限选项**。每个维度 3-9 个选项，每个选项用 1 行描述说清楚差异。选项命名要直觉化（`warm` 比 `palette-01` 好）。
3. **建立兼容性矩阵**。标注哪些维度组合好用（✓✓）、可用（✓）、不推荐（✗）。这是设计知识的编码。
4. **写自动推荐规则**。定义内容信号到维度值的映射，让 `auto` 模式有据可依。
5. **设计快捷预设**。把常见的好用组合命名为 preset，允许局部覆盖。
6. **设计工作流**。线性步骤 + checklist，关键步骤标 ⛔ BLOCKING。
7. **设计偏好系统**。EXTEND.md + 首次配置流程，一次设置反复使用。
8. **设计 Prompt 模板**。把所有维度选择转化为结构化的生成指令。
9. **设计完成报告**。列出所有参数 + 输出文件路径。

**骨架模板**：

```markdown
---
name: {skill-name}
description: {一句话}. Use when user asks to "{triggers}".
---

# {Skill Title}

{一句话描述}

## Usage

{CLI 示例，包含 --quick 和维度指定}

## Options

| Option | Description |
|--------|-------------|
| `--{dim1} <name>` | {维度1选项列表} |
| `--{dim2} <name>` | {维度2选项列表} |
| `--style <name>` | Preset shorthand (see [Style Presets](references/style-presets.md)) |
| `--quick` | Skip confirmation, use auto-selection |

## Dimensions

| Dimension | Values | Default |
|-----------|--------|---------|
| **{Dim1}** | {options} | auto |
| **{Dim2}** | {options} | auto |

Auto-selection rules: [references/auto-selection.md](references/auto-selection.md)

## File Structure

{输出目录规范，包含 slug 命名和冲突处理}

## Workflow

### Progress Checklist

- [ ] Step 0: Check preferences (EXTEND.md) ⛔ BLOCKING
- [ ] Step 1: Analyze content
- [ ] Step 2: Confirm options ⚠️ unless --quick
- [ ] Step 3: Create prompt
- [ ] Step 4: Generate {output}
- [ ] Step 5: Completion report

### Step 0: Load Preferences ⛔ BLOCKING

{检查 EXTEND.md → 首次配置流程}

### Step 1-5: {各步骤}

## Extension Support

{EXTEND.md 配置说明}

## References

{按类别列出所有 reference 文件链接}
```

## 它还可以更好

**31 个 reference 文件对维护者来说是沉重的负担。** 这个量级的子资源意味着每次修改一个概念（比如增加一种渲染风格），需要同时更新 `renderings/` 新文件 + `auto-selection.md` + `compatibility.md` + `style-presets.md` + `base-prompt.md` 至少 5 个地方。如果有一个「维度注册表」，新增维度值只需在一处定义，其他文件自动引用，维护成本会大幅降低。

**没有任何视觉示例。** 对于一个生成图像的技能，所有 reference 都是纯文字描述。`warm` 调色板只列了色号和文字描述，但用户（甚至 AI 自身）看不到一张 warm 调色板的实际封面效果。如果每个调色板和渲染风格配一张示例图，用户在确认阶段的选择质量会显著提升。

**完全依赖外部图像生成技能。** Step 4 写道 "Check image generation skills; if multiple, ask preference"，但没有内联任何 fallback。如果用户环境中没有安装图像生成技能，整个工作流在最后一步断裂。至少应该在 Step 0 增加图像生成能力的检测，提前告知用户需要什么前置条件。

**Schema 迁移增加了认知重量。** `preferences-schema.md` 用了 60+ 行来处理 v1 → v2 → v3 的迁移逻辑。这对首次用户毫无价值，对老用户也只在升级时有用。可以把迁移逻辑抽到一个独立的 `references/config/migration.md`，让 schema 文件专注于当前版本的定义。

**Reference Image 处理流程过于复杂。** `reference-images.md` + `prompt-template.md` 中关于参考图的处理逻辑涉及 file saving、verbal extraction、frontmatter references、MUST INCORPORATE 模板等多个子流程。虽然每个子流程都有其必要性，但合在一起对 AI 的指令跟随能力是个考验。可以考虑用一张决策流程图来简化。

## 总结：写 skill 可以从它身上学到什么

**把开放问题变成选择题。** 如果用户面对的是「你想要什么」这种开放问题，就把它拆成几个独立维度，每个维度给有限选项。这是消灭决策焦虑的最有效方式。

**兼容性矩阵是沉默的专家。** 当你的参数有多个维度时，不要只列选项——告诉用户（和 AI）哪些组合好用。✓✓ / ✓ / ✗ 三级标注简单有效，比长篇解释更容易被遵守。

**auto 不是 random，是 smart default。** 如果你提供了自动模式，就要让它真的智能。基于内容信号的推荐规则让 `--quick` 模式从「碰运气」变成「懂内容」。

**用 reference 文件做知识分层。** 主体控制执行逻辑，reference 存储领域知识。AI 按需加载，注意力不浪费。但要注意子资源数量的维护成本——31 个文件是上限而非标杆。

**首次配置是投资，不是打扰。** 用 ⛔ BLOCKING 确保偏好在第一次就收集完毕，之后所有执行都自动应用。一次性摩擦换来永久性便利，这笔账值得算。
