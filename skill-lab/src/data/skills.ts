import type { SkillData } from '../types';

export const skills: SkillData[] = [
  // ─────────────────────────────────────────────
  // 1. baoyu-cover-image
  // ─────────────────────────────────────────────
  {
    id: 'baoyu-cover-image',
    name: 'Cover Image Generator',
    source: 'baoyu-skills',

    surface: {
      tagline: '5 维定制的文章封面图生成器',
      problem: '为文章生成高质量封面图需要设计技能和大量时间，多数创作者无法独立完成',
      targetUser: '内容创作者、博客作者、技术写作者',
      impact: {
        overall: 9,
        isEstimated: true,
      },
    },

    narrative: {
      hook: '用 5 个维度把"做封面"从创意问题变成选择问题——这是参数化设计的教科书。',
      intro: 'Cover Image Generator 是一个封面图生成技能，面向博客作者和内容创作者。它要解决的问题很明确：为文章做一张好看的封面图，需要设计功底，大多数写作者不具备。\n\n这个 skill 的策略不是"教你设计"，而是把设计决策拆解为 5 个独立维度（类型、色盘、渲染风格、文字、情绪），每个维度只需要从有限选项中选择。选完组合，封面就出来了。234 行，配有完整的 references 文档体系。',
      highlights: [
        {
          title: '把创意决策变成参数选择',
          quote: 'Type: hero, conceptual, typography, metaphor, scene, minimal\nPalette: warm, elegant, cool, dark, earth, vivid, pastel, mono, retro',
          explanation: '5 个维度、每个维度 4-9 个选项——这不是限制，而是解放。用户不需要从白纸开始想"我要什么风格的封面"，只需要在每个维度上选一个词。这把"从零创造"变成了"选择组合"，认知负担直接降了一个数量级。',
          insight: '写 skill 时，如果你的任务涉及创意决策，考虑把决策空间拆成正交维度。每个维度给有限选项。让用户做选择题而非填空题。',
        },
        {
          title: 'auto-selection 规则——有默认值才叫工具',
          quote: 'Auto-selection rules: references/auto-selection.md',
          explanation: '5 个维度听起来已经很多了，但 auto-selection 让这一切变得不可怕。不选也行，系统会根据文章内容自动推荐。再加上 --quick 模式跳过所有确认——最极端情况下，用户只需要提供文章路径，其他全部自动。',
          insight: '给每个参数一个合理默认值。最佳体验是：零配置也能用、全配置也能精调。--quick 快捷路径是对"我赶时间"用户的尊重。',
        },
        {
          title: '⛔ BLOCKING 标记——步骤间的安全绳',
          quote: 'Step 0: Check preferences (EXTEND.md) ⛔ BLOCKING',
          explanation: '在 6 步工作流中，某些步骤被标记为 ⛔ BLOCKING，意味着"没完成这步就不能往下走"。这个设计让 AI 不会跳步——在自动化流程中，跳步往往是最大的出错来源。',
          insight: '如果你的 skill 有多步流程，标出哪些步骤是阻塞性的。AI 有跳步的倾向，明确的阻塞标记是最好的防护。',
        },
        {
          title: '完成报告——给用户一个"结束"的感觉',
          quote: 'Cover Generated!\n\nTopic: [topic]\nType: [type] | Palette: [palette] | Rendering: [rendering]\nLocation: [directory path]\n\nFiles:\n✓ source-{slug}.{ext}\n✓ prompts/cover.md\n✓ cover.png',
          explanation: '任务结束后输出一份结构化报告：用了什么参数、生成了什么文件、存在哪里。这不只是信息展示，它给用户一种"完成了、一切就绪"的确定感。比起 AI 默默生成完就停在那里，这种显式的收尾仪式感让整个体验完整了。',
          insight: '给你的 skill 加一个完成报告。不需要复杂，列出关键参数和输出文件即可。它是成就感的来源。',
        },
      ],
      structureLogic: '这个 skill 选择了"工作流型"结构，这对于它要解决的问题是正确的。封面生成是一个线性流程：分析内容 → 确定参数 → 生成 prompt → 生成图片 → 输出报告。每一步的输入来自上一步的输出，天然适合步骤化。\n\n更精妙的是它的"双层结构"——SKILL.md 只放核心流程和参数表（234 行），所有细节（auto-selection 规则、风格预设、prompt 模板）都放在 references/ 里按需加载。这让主文件保持简洁，同时不丧失深度。',
      takeaways: [
        '**把创意决策参数化**。找到任务中可以独立选择的维度，每个维度给有限选项。让用户做选择题，不做填空题。',
        '**永远提供默认值**。最好的 skill 是"零配置可用、全配置可调"。--quick 模式和 auto-selection 是这个理念的具体实现。',
        '**标记阻塞步骤**。AI 爱跳步。在关键检查点加 ⛔ BLOCKING 标记，确保流程完整性。',
        '**给任务一个仪式感的结尾**。完成报告不只是信息，它是"你做到了"的信号。',
      ],
    },

    structure: {
      hasClearGoal: true,
      hasStepByStep: true,
      hasIODefinition: true,
      lowersBarrier: true,
      hasReusableTemplate: true,
      score: 5,
      details:
        '极度结构化。6 步工作流带进度清单，5 个维度（Type / Palette / Rendering / Text / Mood）形成完整的参数矩阵。每一步都有明确的输入输出和阻塞标记（⛔ BLOCKING）。文件结构、slug 命名、冲突处理均有规范。',
    },

    valueDensity: {
      informationCompression: 5,
      reducesDecisionCost: true,
      reducesTrialError: true,
      readyToUse: true,
      score: 5,
      details:
        '表格形式压缩了 9 种色盘、6 种渲染风格、6 种类型的全部组合。auto-selection 规则让用户无需理解所有维度即可使用。--quick 模式跳过确认，--style 预设更是把多维选择压缩为一个参数。',
    },

    psychology: {
      solvesAnxiety: true,
      createsCertainty: true,
      empowers: true,
      hasAchievementMechanism: true,
      score: 5,
      details:
        '解决"我不会做封面设计"的焦虑。5 维框架把模糊的"设计感"变成可选择的参数，极大降低认知负担。完成报告（Cover Generated! + 文件列表）给用户明确的成就感反馈。EXTEND.md 配置让用户感觉"系统记住了我的偏好"。',
    },

    pattern: {
      formula:
        '[多维参数矩阵] + [自动推荐] + [步骤化工作流] + [进度清单] + [可扩展配置]',
      abstractFramework:
        '将复杂的创意决策拆解为独立维度，每个维度有限选项。提供自动推荐降低选择焦虑，保留手动覆盖满足高级用户。步骤间有明确的依赖关系和阻塞标记。',
      tags: [
        'multi-dimension',
        'auto-select',
        'workflow',
        'progress-tracking',
        'extensible-config',
        'completion-report',
      ],
    },

    reverseEngineering: {
      blueprint:
        '1. 定义参数维度（3-6 个独立维度，每个有 4-10 个选项）\n2. 为每个维度编写 auto-selection 规则\n3. 设计步骤化工作流（5-7 步），标记阻塞点\n4. 定义输出文件结构和命名规范\n5. 提供 --quick 快捷路径\n6. 设计 EXTEND.md 偏好系统\n7. 编写完成报告模板',
      templateCode: `---
name: my-generator
description: Generate [X] with [N]-dimensional customization.
---

# [X] Generator

Generate [output] with [N]-dimensional customization.

## Usage
\`\`\`bash
/my-generator input.md
/my-generator input.md --quick
/my-generator input.md --dim1 value --dim2 value
\`\`\`

## Dimensions
| Dimension | Values | Default |
|-----------|--------|---------|
| **Dim 1** | a, b, c | auto |
| **Dim 2** | x, y, z | auto |

## Workflow
\`\`\`
- [ ] Step 0: Load preferences ⛔ BLOCKING
- [ ] Step 1: Analyze input
- [ ] Step 2: Confirm options ⚠️ (skip if --quick)
- [ ] Step 3: Generate
- [ ] Step 4: Completion report
\`\`\``,
    },

    improvements: [
      {
        gap: '5 个维度对新用户可能过于复杂',
        suggestion: '增加"极简模式"：只暴露 1-2 个核心维度，其余全部 auto',
      },
      {
        gap: 'EXTEND.md 首次设置是阻塞式的，中断主流程',
        suggestion: '改为渐进式：首次使用全部 auto，使用后询问是否保存偏好',
      },
      {
        gap: '缺少生成结果的预览/对比机制',
        suggestion: '增加 --preview 模式，生成 2-3 个方案供选择',
      },
    ],

    meta: {
      category: 'generation',
      archetype: 'workflow',
      tags: ['image', 'cover', 'design', 'multi-dimension', 'automation'],
      lineCount: 234,
      hasScripts: false,
      hasReferences: true,
      hasAssets: false,
    },
  },

  // ─────────────────────────────────────────────
  // 2. baoyu-article-illustrator
  // ─────────────────────────────────────────────
  {
    id: 'baoyu-article-illustrator',
    name: 'Article Illustrator',
    source: 'baoyu-skills',

    surface: {
      tagline: 'Type × Style 双维度文章配图系统',
      problem: '为长文章制作一致性配图需要设计技能、耗时且难以保持风格统一',
      targetUser: '长文创作者、技术博主、内容运营',
      impact: {
        overall: 8,
        isEstimated: true,
      },
    },

    narrative: {
      hook: '用"先理解再动手"的思路做批量配图——中间产物 outline.md 是这个 skill 的秘密武器。',
      intro: 'Article Illustrator 为长文章批量生成配图。它面向的痛点是：文章写完了想配图，但手动做太费时间，而且很难保持整篇文章的视觉风格一致。\n\n这个 skill 的核心设计是 Type × Style 双维度矩阵。Type 控制信息结构（信息图、场景、流程图），Style 控制视觉美学（极简、手绘、科幻）。两者正交组合，覆盖了大多数配图需求。',
      highlights: [
        {
          title: '中间产物 outline.md——让批量操作可审查',
          quote: 'Step 4: Generate Outline\nSave outline.md with frontmatter and entries:\n**Position**: [section/paragraph]\n**Purpose**: [why]\n**Visual Content**: [what]',
          explanation: '在 AI 开始生成图片之前，先输出一份 outline：哪些段落需要配图、每张图的目的是什么、视觉内容是什么。这个中间产物让用户可以在批量生成前就审查计划。修改一条 outline 比重新生成一张图片便宜得多。',
          insight: '当 skill 涉及批量操作时，插入一个"中间产物"环节。让用户在大量资源投入前有机会审查和调整。',
        },
        {
          title: 'AskUserQuestion 限制为 4 个问题',
          quote: 'ONE AskUserQuestion, max 4 Qs. Q1-Q3 REQUIRED.',
          explanation: '在确认设置时，强制限制为一次交互、最多 4 个问题。这个约束看似武断，实际上是对用户注意力的尊重。无限制的确认流程会让用户疲劳，4 个问题是一个经过权衡的甜蜜点。',
          insight: '限制交互次数。给 AI 一个明确的上限，否则它会无止境地"确认""真的确定吗？"。',
        },
        {
          title: '自动插入原文——形成完整闭环',
          quote: 'Insert ![description](path/NN-{type}-{slug}.png) after paragraphs.',
          explanation: '配图生成后自动插入到原文对应位置。用户不需要手动复制图片路径、不需要手动写 Markdown 引用。从分析文章到插入配图，整个流程是闭环的。',
          insight: '如果你的 skill 生成了某种资源，考虑自动将它集成回原始内容。闭环体验 > 分步手动操作。',
        },
      ],
      structureLogic: 'Article Illustrator 和 Cover Image Generator 出自同一作者，共享很多模式（EXTEND.md、首次设置、文件结构）。但配图是批量操作，这要求多一层控制——outline 中间层就是为此设计的。\n\n双维度比五维度更克制。配图不需要那么多选择维度，Type × Style 两个维度已经足够覆盖，多了反而增加选择疲劳。这种"够用就好"的克制值得学习。',
      takeaways: [
        '**批量操作前加中间产物**。让用户在资源大量投入前有审查机会。outline 比成品便宜。',
        '**限制交互次数**。4 个问题是一个好的上限。不要让 AI 无休止地确认。',
        '**追求闭环**。生成的资源自动集成回原始内容，而非让用户手动粘贴。',
      ],
    },

    structure: {
      hasClearGoal: true,
      hasStepByStep: true,
      hasIODefinition: true,
      lowersBarrier: true,
      hasReusableTemplate: true,
      score: 5,
      details:
        '6 步工作流。Type × Style 双维度矩阵简洁有力。内容分析步骤（Step 2）将文章理解系统化。outline.md 作为中间产物，让生成过程可审查。prompt 文件必须先保存再生成，确保可追溯。',
    },

    valueDensity: {
      informationCompression: 4,
      reducesDecisionCost: true,
      reducesTrialError: true,
      readyToUse: true,
      score: 4,
      details:
        '双维度比 cover-image 的五维度更克制，降低了选择负担。Step 3 限制为 max 4 个问题，避免交互疲劳。outline.md 中间层让用户在生成前就能预览配图计划。自动插入 Markdown 引用到原文。',
    },

    psychology: {
      solvesAnxiety: true,
      createsCertainty: true,
      empowers: true,
      hasAchievementMechanism: true,
      score: 4,
      details:
        '解决"文章配图好麻烦"的焦虑。内容分析→配图计划→批量生成的流程让用户感觉系统"理解了我的文章"。完成报告（X/N generated）给出明确进度。最终配图自动插入原文，形成完整闭环。',
    },

    pattern: {
      formula:
        '[双维度矩阵] + [内容分析] + [中间产物审查] + [批量生成] + [自动插入]',
      abstractFramework:
        '用两个正交维度（结构 × 美学）覆盖组合空间。先分析再确认再执行的三段式流程。中间产物（outline）让批量操作可控。最终结果自动集成回原始内容。',
      tags: [
        'matrix',
        'content-analysis',
        'batch-generation',
        'auto-insert',
        'intermediate-artifact',
        'completion-report',
      ],
    },

    reverseEngineering: {
      blueprint:
        '1. 定义两个正交维度（内容结构 × 视觉风格）\n2. 内容分析步骤：提取主题、论点、适合配图的位置\n3. 生成 outline（中间产物），供用户审查\n4. 逐个生成，保存 prompt 文件确保可追溯\n5. 自动将结果集成回原始内容\n6. 完成报告 + 进度统计',
      templateCode: `---
name: my-batch-enhancer
description: Analyze [content-type] and batch-generate [enhancements] with Type × Style consistency.
---

# [Content] Enhancer

## Two Dimensions
| Dimension | Controls | Examples |
|-----------|----------|----------|
| **Type**  | Structure | option-a, option-b, option-c |
| **Style** | Aesthetics | style-x, style-y, style-z |

## Workflow
\`\`\`
- [ ] Step 1: Pre-check (config, references)
- [ ] Step 2: Analyze content
- [ ] Step 3: Confirm settings (max 4 questions)
- [ ] Step 4: Generate outline (intermediate artifact)
- [ ] Step 5: Batch generate
- [ ] Step 6: Integrate results + report
\`\`\``,
    },

    improvements: [
      {
        gap: '与 cover-image 共享大量模式（EXTEND.md、首次设置、文件结构）但没有抽象为共享框架',
        suggestion: '提取 baoyu-skills-core 作为共享基础层',
      },
      {
        gap: 'Step 3 的 max 4 问题限制缺乏灵活性',
        suggestion: '根据文章复杂度动态调整问题数量',
      },
      {
        gap: '缺少配图质量评估和自动重试机制',
        suggestion: '增加质量检查步骤，低质量自动用不同 prompt 重试',
      },
    ],

    meta: {
      category: 'generation',
      archetype: 'workflow',
      tags: ['illustration', 'article', 'batch', 'content-analysis', 'automation'],
      lineCount: 156,
      hasScripts: false,
      hasReferences: true,
      hasAssets: false,
    },
  },

  // ─────────────────────────────────────────────
  // 3. ui-ux-pro-max
  // ─────────────────────────────────────────────
  {
    id: 'ui-ux-pro-max',
    name: 'UI/UX Pro Max',
    source: 'community',

    surface: {
      tagline: '全栈 UI/UX 设计知识库与推理引擎',
      problem: 'UI/UX 设计需要大量经验积累，开发者缺乏系统化的设计决策支撑',
      targetUser: '前端开发者、全栈工程师、独立开发者',
      impact: {
        overall: 9,
        isEstimated: true,
      },
    },

    narrative: {
      hook: '把整个 UI/UX 知识体系压缩成一个可搜索的数据库——这是"用数据替代经验"的极致。',
      intro: 'UI/UX Pro Max 是一个设计知识库技能。387 行主文件，配有 Python 搜索脚本和 CSV 数据库，收录了 50+ 种设计风格、97 种色盘、57 种字体搭配、99 条 UX 准则、25 种图表类型。\n\n它面向的用户是"会写代码但不太懂设计"的开发者。这类人的核心焦虑是：我做出来的东西能跑但不好看，我不知道该选什么字体、什么颜色、什么布局。',
      highlights: [
        {
          title: '优先级体系——信息过载的解药',
          quote: '| Priority | Category | Impact |\n| 1 | Accessibility | CRITICAL |\n| 2 | Touch & Interaction | CRITICAL |\n| 3 | Performance | HIGH |',
          explanation: '97 种色盘、57 种字体——信息量巨大。如果一股脑扔给用户，谁都会崩溃。这个 skill 的解法是优先级排序：先处理 CRITICAL（可访问性、触控），再处理 HIGH（性能、布局），最后是 MEDIUM 和 LOW。用户不需要一次消化全部，先解决最重要的就好。',
          insight: '知识库型 skill 必须有信息分层。优先级排序是最直观的分层方式——让用户知道"先做什么"。',
        },
        {
          title: '--design-system 一键生成——复杂系统的简单入口',
          quote: 'python3 scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"',
          explanation: '一条命令，输入关键词，输出完整的设计系统（配色、字体、风格、反模式）。用户不需要理解搜索语法、不需要知道数据库里有什么。一个入口覆盖 80% 的使用场景。',
          insight: '复杂系统需要一个"傻瓜入口"。把最常用的操作封装为一条命令或一个模式。',
        },
        {
          title: 'Do/Don\'t 对照表——零思考成本的设计规则',
          quote: '| **No emoji icons** | Use SVG icons (Heroicons, Lucide) | Use emojis like 🎨 🚀 as UI icons |\n| **Cursor pointer** | Add cursor-pointer to all clickable cards | Leave default cursor |',
          explanation: 'Common Rules 部分用 Do/Don\'t 表格直接给出设计规则。不需要理解"为什么"，照着 Do 列做就不会太差。这种格式的信息密度极高，一张表抵十段文字。',
          insight: 'Do/Don\'t 对照表是知识传递效率最高的格式之一。每条规则只需要两列，读者扫一眼就知道该做什么。',
        },
      ],
      structureLogic: '这是一个典型的"知识库型"结构：先给概览和优先级排序，再提供搜索工具进行深度查询，最后用 checklist 收尾确保质量底线。\n\n它选择把知识存储在外部 CSV 文件中，通过 Python 脚本搜索，而非全部内联到 SKILL.md。这是正确的——387 行已经是上限了，如果把全部数据内联进来可能要上千行。但这也带来了依赖 Python 环境的代价。',
      takeaways: [
        '**信息过载时用优先级分层**。给每条信息标记重要度，让用户先处理最关键的。',
        '**复杂系统要有傻瓜入口**。一条命令覆盖 80% 场景，细粒度操作留给高级用户。',
        '**Do/Don\'t 表格是知识传递的利器**。每条规则两列，扫读即可掌握。',
        '**大量数据放外部存储，主文件只放索引和指南**。保持 SKILL.md 在 500 行以内。',
      ],
    },

    structure: {
      hasClearGoal: true,
      hasStepByStep: true,
      hasIODefinition: true,
      lowersBarrier: true,
      hasReusableTemplate: true,
      score: 4,
      details:
        '4 步工作流（分析→设计系统→补充搜索→栈指南）。核心是 Python 搜索脚本，通过 CSV 数据库提供 50+ 风格、97 色盘、57 字体搭配。优先级体系（CRITICAL → HIGH → MEDIUM → LOW）让信息有序。Pre-Delivery Checklist 确保质量底线。',
    },

    valueDensity: {
      informationCompression: 5,
      reducesDecisionCost: true,
      reducesTrialError: true,
      readyToUse: true,
      score: 5,
      details:
        '信息密度极高。将整个 UI/UX 领域的知识压缩为可搜索的数据库。--design-system 一键输出完整设计系统。优先级排序让用户先解决最重要的问题。Common Rules 表格直接给出 Do/Don\'t 对照，零思考成本。',
    },

    psychology: {
      solvesAnxiety: true,
      createsCertainty: true,
      empowers: true,
      hasAchievementMechanism: true,
      score: 5,
      details:
        '解决"我的 UI 看起来不专业"的焦虑。优先级体系把"好设计"从主观感觉变成可检查的清单。9 种技术栈覆盖让用户无论用什么框架都能找到指导。Pre-Delivery Checklist 给出"可以交付了"的确定感。',
    },

    pattern: {
      formula:
        '[分层知识库] + [搜索引擎] + [优先级体系] + [检查清单] + [多栈适配]',
      abstractFramework:
        '将领域知识结构化为可搜索的数据库。用优先级排序解决信息过载。提供"一键生成"入口降低使用门槛，保留细粒度搜索满足深度需求。跨平台/框架适配扩大受众。交付检查清单确保质量底线。',
      tags: [
        'knowledge-base',
        'search-engine',
        'priority-system',
        'checklist',
        'multi-stack',
        'design-system',
      ],
    },

    reverseEngineering: {
      blueprint:
        '1. 整理领域知识为结构化数据（CSV / JSON）\n2. 按优先级分层（CRITICAL → LOW）\n3. 编写搜索脚本，支持关键词和领域筛选\n4. 提供"一键生成"命令（如 --design-system）\n5. 为每个技术栈编写适配指南\n6. 编写 Do/Don\'t 快速参考表\n7. 编写 Pre-Delivery Checklist',
      templateCode: `---
name: my-knowledge-skill
description: [Domain] intelligence. [N] categories, [M] items. Search and apply [domain] best practices.
---

# [Domain] Intelligence

## When to Apply
Reference these guidelines when:
- [scenario 1]
- [scenario 2]

## Rule Categories by Priority
| Priority | Category | Impact |
|----------|----------|--------|
| 1 | [Critical] | CRITICAL |
| 2 | [Important] | HIGH |
| 3 | [Nice-to-have] | MEDIUM |

## How to Use
\`\`\`bash
python3 scripts/search.py "<keywords>" --design-system
python3 scripts/search.py "<keywords>" --domain <domain>
\`\`\`

## Pre-Delivery Checklist
- [ ] [Critical item 1]
- [ ] [Critical item 2]`,
    },

    improvements: [
      {
        gap: '信息量巨大（387 行），新用户容易被压垮',
        suggestion: '增加"5 分钟快速上手"部分，只覆盖最常用的 20% 功能',
      },
      {
        gap: '依赖 Python 脚本和 CSV 数据，增加使用门槛',
        suggestion: '提供纯文本 fallback 或内联关键数据',
      },
      {
        gap: '搜索结果的相关性依赖关键词匹配，可能不够智能',
        suggestion: '增加语义搜索或推荐系统',
      },
      {
        gap: '缺少可视化预览，用户无法直观感受风格差异',
        suggestion: '增加 HTML 预览生成功能或截图参考',
      },
    ],

    meta: {
      category: 'knowledge-base',
      archetype: 'database',
      tags: ['ui', 'ux', 'design', 'knowledge-base', 'search', 'multi-stack'],
      lineCount: 387,
      hasScripts: true,
      hasReferences: true,
      hasAssets: false,
    },
  },

  // ─────────────────────────────────────────────
  // 4. frontend-design
  // ─────────────────────────────────────────────
  {
    id: 'frontend-design',
    name: 'Frontend Design',
    reportTitle: 'Frontend Design：43 行如何改变 AI 的审美',
    source: 'anthropic',

    surface: {
      tagline: '反 AI 审美的前端设计哲学',
      problem: 'AI 生成的 UI 总是千篇一律的 generic 风格，缺乏个性和记忆点',
      targetUser: '前端开发者、设计师、任何需要 AI 帮忙写 UI 的人',
      impact: {
        overall: 8,
        isEstimated: true,
      },
    },

    narrative: {
      hook: '一个没有步骤、没有模板、没有脚本的 skill，却可能是所有 skill 中最能改变输出质量的一个——因为它改变的不是 AI 做事的流程，而是 AI 思考设计的方式。',
      intro: 'frontend-design 是一个前端设计指导技能。当用户让 AI 构建网页、组件、落地页、仪表盘时，这个 skill 会被激活。\n\n它只有 43 行。没有脚本，没有引用文档，没有资源文件。全文就是一个 SKILL.md。\n\n但它要解决的问题非常精准：**AI 生成的 UI 长得都一样**。Inter 字体、紫色渐变、白色背景、圆角卡片——这套"AI 审美"已经成了一种新的视觉污染。所有人都在用 AI 写前端，所有前端开始长得一模一样。\n\nfrontend-design 的策略是：不教 AI 新的技术，而是**改变 AI 对"好设计"的理解**。',
      highlights: [
        {
          title: '开篇就树敌——"AI slop"这个词定义了整个战场',
          quote: 'This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.',
          explanation: '这句话是整个 skill 的灵魂。\n\n它没有说"帮你写更好的前端"，而是给敌人起了一个名字：**AI slop**（AI 泔水）。这个命名非常高明。当你给一种不好的东西命名后，模型就会主动远离它。\n\n这背后是一种深层的心理机制。人类在面对模糊的"做得更好"时往往无从下手，但面对具体的"不要做成那样"时立刻知道该躲开什么。AI 也是如此——一个清晰的反面定义，比一百句正面描述都有效。',
          insight: '写 skill 时，先给"不好的默认行为"命名。有了名字，它就从模糊的倾向变成了可以被识别和拒绝的对象。',
        },
        {
          title: '用思考框架替代操作步骤——Design Thinking 的四个维度',
          quote: 'Before coding, understand the context and commit to a BOLD aesthetic direction:\n- **Purpose**: What problem does this interface solve? Who uses it?\n- **Tone**: Pick an extreme...\n- **Constraints**: Technical requirements...\n- **Differentiation**: What makes this UNFORGETTABLE?',
          explanation: '大多数 skill 会写"Step 1 → Step 2 → Step 3"。这个 skill 没有。\n\n它给出的是四个**思考维度**：目的、调性、约束、差异点。这不是执行清单，而是决策框架。它要求 AI 在动手写代码之前先想清楚"我要做一个什么气质的东西"。\n\n为什么这样做更有效？因为前端设计是一个**创意问题**，不是一个流程问题。步骤化会把创意工作变成流水线，而思考框架保留了创造的自由度。AI 不需要被告知"先选字体再选颜色再调间距"，它需要的是一个方向感——"这次我要做一个 brutalist 风格的暗色系界面"。有了这个方向，具体的技术选择自然就对了。',
          insight: '创意类 skill 不要用步骤，用思考维度。告诉 AI"想什么"比告诉它"做什么"更有效。',
        },
        {
          title: '一句话拆掉"大胆就是好"的误区',
          quote: '**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.',
          explanation: '这可能是全文最精炼的一句话。\n\n它说"关键是意图性（intentionality），不是强度（intensity）"。这句话同时做了两件事：\n\n第一，它**解放了极简路线**。没有这句话，AI 可能会理解为"越大胆越好"，然后堆砌大量动效和花哨元素。有了这句话，AI 知道安静的克制也是一种大胆。\n\n第二，它给出了一个**通用的质量判断标准**——不管你选了什么方向，只要是有意识地选择并精确执行，就是好设计。这比"要有创意"有用一百倍，因为"有创意"是模糊的，而"有意识地选择方向并精确执行"是具体的。',
          insight: '当你要表达"灵活处理"时，给出一个底层判断标准。不要说"看情况"，要说"无论哪种情况，XX 是不变的衡量尺度"。',
        },
        {
          title: 'NEVER 清单——最少的字数，最大的行为改变',
          quote: 'NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns...',
          explanation: '全文最有操作性的部分。\n\n它没有花三百行告诉你什么字体好看，而是用一句话告诉你**哪些字体绝对不能用**。Inter、Roboto、Arial——这三个名字被点名封杀。紫色渐变在白色背景上——被点名封杀。\n\n这种"黑名单式指导"之所以有效，是因为 AI 的默认行为就是选这些安全选项。直接封杀默认选项，迫使模型去探索不常见的选择。它不需要知道什么是好的替代品——只需要知道哪条路被堵死了，它自然会走别的路。',
          insight: '3 行 NEVER 清单的行为改变力大于 30 行正面指导。要改变 AI 的默认行为，最快的方法是封杀默认选项。',
        },
        {
          title: '结尾的激励语——对 AI 说"你可以的"，真的有用',
          quote: 'Remember: Claude is capable of extraordinary creative work. Don\'t hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.',
          explanation: '读起来像在给人打气，但它对 AI 的影响是实际的。\n\n语言模型的输出分布受 prompt 中语气和期望的影响。当 prompt 中表达"你有能力做出非凡的东西"，模型的输出会更倾向于选择更不寻常的方案。反之，如果 prompt 的语气是谨慎的、限制性的，模型会倾向于保守。[推测]\n\n这句话还有一个微妙的效果：它把 skill 的定位从"指令文档"变成了"同盟宣言"。它不是在说"你必须这样做"，而是在说"我们一起做点不一样的东西"。这种语气让 AI 的输出更有主观能动性。',
          insight: '在 skill 结尾加一句激励性声明。不是空洞的口号，而是具体地告诉 AI"你有能力做到什么程度"。这会实际影响输出质量。',
        },
      ],
      structureLogic: 'frontend-design 的结构极其简洁：\n\n1. **一句话声明**（开篇定调 + 树敌）\n2. **Design Thinking**（思考框架，4 个维度）\n3. **Aesthetics Guidelines**（5 个美学维度 + 方向词）\n4. **NEVER 清单**（反模式封杀）\n5. **激励性收尾**\n\n这是一个"哲学型"结构。它不引导你做事，它引导你思考。没有编号步骤，没有 checklist，没有输出格式定义——因为它处理的是一个不应该有标准答案的领域。\n\n这个选择是对的。如果它写成"Step 1: 选一个风格；Step 2: 选字体；Step 3: 选配色"，结果会是每次生成都走同一条路，只是参数不同。那就又变成了另一种形式的"AI slop"。\n\n不写步骤是一种**刻意的结构决策**，不是偷懒。',
      patternMatches: [
        '**反模式清单**（3/6 skills 使用）— 此 skill 是该模式的典型代表',
        '**赋能叙事**（4/6 skills 使用）— 结尾的激励语是该模式的教科书级实现',
        '**焦虑→确定性管道**（5/6 skills 使用）— 但此 skill 是一个重要变体：它识别焦虑后不走向确定性，而是走向创造力',
      ],
      takeaways: [
        '**给默认坏行为命名。** 当你发现 AI 总是产出某种低质量的默认模式，给它起个名字。有了名字，AI 就知道要避开什么。"AI slop"比"避免低质量输出"有效十倍。',
        '**创意领域用思考框架替代步骤。** 当你要指导的输出是高度主观的（设计、写作、创意），不要写步骤清单。给出 3-5 个思考维度，让 AI 自己在每个维度上做选择。步骤化会杀死创意。',
        '**NEVER 清单是最高效的写法。** 封杀默认选项比推荐替代方案更有效。AI 的默认行为是走最安全的路——把那条路堵死，它自然会探索。',
        '**激励语不是废话。** 在 skill 结尾写一句"你能做到更好"，会实际影响模型的输出分布。它不是给人看的鸡汤，它是调节输出倾向的 prompt 工程技巧。',
        '**短 skill 可以比长 skill 更有力。** 43 行 > 400 行，如果你改变的不是 AI 做事的流程，而是它思考问题的方式。不是所有 skill 都需要步骤、模板和脚本。有时候一份审美宣言就够了。',
      ],
    },

    structure: {
      hasClearGoal: true,
      hasStepByStep: false,
      hasIODefinition: false,
      lowersBarrier: true,
      hasReusableTemplate: false,
      score: 2,
      details:
        '没有严格的步骤或流程定义。核心是"设计思考"框架：Purpose → Tone → Constraints → Differentiation。然后是美学指南：Typography、Color、Motion、Spatial Composition、Backgrounds。结构极简但每句话都有高信息密度。',
    },

    valueDensity: {
      informationCompression: 4,
      reducesDecisionCost: false,
      reducesTrialError: true,
      readyToUse: false,
      score: 3,
      details:
        '短文本（43 行）但信息密度极高。不给具体答案，而是提供思考维度。反模式清单（NEVER use Inter/Roboto/Arial）直接有效。不是"拿来就用"的工具，而是"改变你思考方式"的框架。',
    },

    psychology: {
      solvesAnxiety: true,
      createsCertainty: false,
      empowers: true,
      hasAchievementMechanism: false,
      score: 3,
      details:
        '精准击中"我的 AI 生成的 UI 看起来太 AI 了"的焦虑。不制造确定性，反而鼓励冒险："Bold maximalism and refined minimalism both work"。核心心理驱动是赋能和激发："Claude is capable of extraordinary creative work. Don\'t hold back."',
    },

    pattern: {
      formula: '[立旗树敌] + [思考框架（替代步骤）] + [美学维度 × 方向词] + [反模式封杀] + [激励性收尾]',
      formulaElements: [
        { name: '立旗树敌', role: '创造紧迫感和方向感。"我们是来消灭 AI slop 的"。' },
        { name: '思考框架', role: '给 AI 判断力而非执行力。让它自己决定怎么做。' },
        { name: '美学维度 × 方向词', role: '在每个维度上提供灵感词汇库，但不给标准答案。' },
        { name: '反模式封杀', role: '划定底线。"至少不要变成那样"。' },
        { name: '激励性收尾', role: '拉高输出预期。"你可以做得比你以为的更好"。' },
      ],
      abstractFramework:
        '这五个要素形成了一个从"收紧"到"打开"的节奏：先用反模式收紧底线，再用激励语打开上限。\n\n整体匹配"**哲学型**"组合（反模式清单 + 赋能叙事 + 思考框架）。',
      tags: [
        'philosophy',
        'anti-pattern',
        'creative-freedom',
        'design-thinking',
        'aesthetic',
      ],
    },

    reverseEngineering: {
      intro: '假设你要为另一个创意领域（写作风格、音乐生成、PPT 设计等）写一个类似的哲学型 skill：',
      blueprint:
        '1. 选定该领域中被广泛讨厌但大家又在反复产出的"默认低质量模式"\n2. 给它一个名字。越生动越好。（"AI slop"就是个好名字）\n3. 写一句话开篇声明，把这个名字和你的 skill 对立起来\n4. 设计 3-5 个思考维度——不是步骤，是维度。问"想什么"而非"做什么"\n5. 为每个维度列出方向词和灵感选项（多列几个，别给标准答案）\n6. 写一份 NEVER 清单。把默认选项点名封杀。要具体到可执行（具体的字体名、具体的配色、具体的布局模式）\n7. 用一句激励语收尾，告诉 AI 它有能力做到什么程度',
      templateCode: `---
name: {skill-name}
description: 创造独特的{输出类型}，避免千篇一律的{低质量默认模式}。当用户要求{触发场景}时使用。
---

这个技能引导创造独特的{输出类型}，避免千篇一律的"{低质量模式名称}"。

用户提供{输入描述}。可能包含{上下文类型}。

## {领域}思考

在动手之前，先确定一个鲜明的方向：
- **目的**：这个{输出}要解决什么问题？给谁用？
- **调性**：选一个极端方向：{方向词1}、{方向词2}、{方向词3}……选择很多，关键是选定一个并贯彻到底。
- **约束**：{相关的技术或场景约束}。
- **差异点**：什么会让这个{输出}让人过目不忘？

**核心原则**：选一个清晰的方向，精确执行。{鼓励语，承认多种路线都可以}——关键是意图性，不是强度。

## {领域}指南

关注以下维度：
- **{维度1}**：{指导 + 方向词}。避免{常见错误}。
- **{维度2}**：{指导 + 方向词}。
- **{维度3}**：{指导 + 方向词}。

绝对不要使用{领域}中的默认低质量模式：{反模式1}、{反模式2}、{反模式3}。

每次输出都应该不同。{强调多样性的语句}。

记住：{激励性收尾，告诉 AI 它有能力做出超出预期的作品}。`,
    },

    improvements: [
      {
        gap: '缺少具体示例',
        suggestion: '全文都是抽象指导，没有一个"这样做"vs"不要这样做"的代码对比。对于 AI 来说，一个 before/after 的 HTML 片段可能比三段描述更有效。建议增加 2-3 组对比：一段"AI slop"代码和一段"有个性"的代码。',
      },
      {
        gap: '反模式只覆盖了视觉层',
        suggestion: 'NEVER 清单封杀了字体和配色，但布局的反模式（居中一切、等间距网格、千篇一律的 hero section）和交互的反模式（所有按钮都有 hover 放大、所有卡片都有阴影抬升）没有提及。这些同样是"AI slop"的组成部分。',
      },
      {
        gap: 'Tone 选项缺少匹配逻辑',
        suggestion: '列了十几种调性方向，但没有说"什么场景适合什么调性"。如果加一个简单的匹配提示（电商偏 luxury/playful，SaaS 偏 minimal/editorial），能帮助 AI 在方向选择上更精准，减少犹豫。',
      },
      {
        gap: '没有自检机制',
        suggestion: '做完之后 AI 没有办法判断"我的输出是否足够独特"。一个简短的自检提问（"你用了 Inter 吗？布局是否居中对称？配色是否有意外感？"）能在最后关头拦住一部分退化。',
      },
    ],

    meta: {
      category: 'philosophy',
      archetype: 'guideline',
      tags: ['design', 'aesthetics', 'anti-pattern', 'creative', 'philosophy'],
      lineCount: 43,
      hasScripts: false,
      hasReferences: false,
      hasAssets: false,
    },
  },

  // ─────────────────────────────────────────────
  // 5. web-design-guidelines
  // ─────────────────────────────────────────────
  {
    id: 'web-design-guidelines',
    name: 'Web Design Guidelines',
    source: 'vercel',

    surface: {
      tagline: '基于 Vercel 标准的 Web 界面合规审查',
      problem: 'Web 界面是否符合最佳实践难以系统检查，容易遗漏关键问题',
      targetUser: '前端开发者',
      impact: {
        overall: 5,
        isEstimated: true,
      },
    },

    narrative: {
      hook: '40 行、零知识——一个"什么都不懂但什么都能查"的代理型 skill，以及它为什么危险。',
      intro: 'Web Design Guidelines 是一个 UI 合规审查技能，来自 Vercel。它的工作方式是：从 GitHub URL 实时拉取 Vercel 的 Web 界面最佳实践规则，然后用这些规则审查用户的代码。\n\n只有 40 行，是所有被分析 skill 中最短的。它自身不存储任何知识——所有价值来自外部 URL。这既是它的优势（规则始终最新），也是它最大的风险。',
      highlights: [
        {
          title: '"代理"而非"知识库"——一种极简设计哲学',
          quote: 'Fetch fresh guidelines before each review:\nhttps://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md',
          explanation: '这个 skill 把自己定位为"代理"。它不存储知识，而是在运行时从权威源获取最新规则。这意味着规则更新时 skill 不需要同步修改。但代价是：URL 失效 → skill 失效。',
          insight: '如果你的领域有频繁更新的权威规则源，可以考虑代理模式。但一定要有 fallback 机制。',
        },
        {
          title: '借用外部权威——Vercel 三个字值千行代码',
          explanation: '这个 skill 的可信度不来自自身内容（它几乎没有内容），而来自"Vercel"这个品牌背书。用户信任的是 Vercel 的规则，不是这个 skill 的写法。这是一种巧妙的"借势"策略。',
          insight: '如果你的 skill 涉及标准合规，引用权威来源比自己编写规则更有说服力。但要确保来源可靠且持续可用。',
        },
      ],
      structureLogic: '4 步流程（获取 → 读取 → 检查 → 输出）简洁到不能再简洁。这种极简结构对于"代理型"任务是合适的——因为复杂性在外部数据源里，不在 skill 里。\n\n但过度简化也带来了问题：审查输出的格式完全取决于外部内容，skill 自身无法保证一致性。40 行的代价是"什么都不可控"。',
      takeaways: [
        '**代理模式适合频繁更新的规则领域**。但必须有 fallback——至少缓存上次获取的规则。',
        '**品牌背书可以替代大量自有内容**。引用权威来源的一个 URL，可能比自己写三百行规则更有说服力。',
        '**极简不等于极好**。40 行的 skill 如果没有本地兜底，就是一个脆弱的空壳。',
      ],
    },

    structure: {
      hasClearGoal: true,
      hasStepByStep: true,
      hasIODefinition: true,
      lowersBarrier: true,
      hasReusableTemplate: false,
      score: 3,
      details:
        '4 步流程：获取规则→读取文件→检查→输出。极度精简（40 行）。核心内容全部外包给外部 URL。结构清晰但过于依赖运行时数据获取。',
    },

    valueDensity: {
      informationCompression: 2,
      reducesDecisionCost: true,
      reducesTrialError: true,
      readyToUse: true,
      score: 3,
      details:
        'Skill 本身信息密度低——真正的价值在外部 URL 返回的规则里。但"输入文件路径即可审查"的使用方式确实是零决策成本。问题是：一旦外部数据源不可用，整个 skill 失效。',
    },

    psychology: {
      solvesAnxiety: true,
      createsCertainty: true,
      empowers: false,
      hasAchievementMechanism: false,
      score: 2,
      details:
        '解决"我的代码是否符合标准"的焦虑。外部权威（Vercel）背书增加可信度。但缺乏赋能感——用户不会因为用了这个 skill 而"变强"，只是得到了一份检查报告。没有成就感机制。',
    },

    pattern: {
      formula: '[外部权威数据源] + [极简流程] + [格式化输出]',
      abstractFramework:
        '将自身定位为"代理"而非"知识库"。不存储知识，而是在运行时从权威源获取最新规则。优势：始终最新。劣势：完全依赖外部可用性。',
      tags: ['external-source', 'compliance', 'lightweight', 'proxy', 'review'],
    },

    reverseEngineering: {
      blueprint:
        '1. 找到领域内的权威规则源（URL / API）\n2. 设计极简的使用流程\n3. 运行时获取最新规则\n4. 应用规则到用户输入\n5. 格式化输出结果',
      templateCode: `---
name: my-compliance-checker
description: Review [target] for [standard] compliance.
---

# [Standard] Compliance Checker

## How It Works
1. Fetch latest rules from [source URL]
2. Read the specified files
3. Check against all rules
4. Output findings in [format]

## Source
\`\`\`
[URL to authoritative rules]
\`\`\`

## Usage
Provide a file or pattern to review.
If no files specified, ask which files to review.`,
    },

    improvements: [
      {
        gap: '过度依赖外部 URL，链接失效则完全失效',
        suggestion: '本地缓存上次获取的规则作为 fallback',
      },
      {
        gap: '没有本地知识，自身价值几乎为零',
        suggestion: '至少内联核心规则摘要',
      },
      {
        gap: '审查结果格式不确定（取决于外部内容）',
        suggestion: '定义标准化的输出格式',
      },
      {
        gap: '缺乏"修复建议"——只告诉你哪里不对，不帮你修',
        suggestion: '增加自动修复或修复建议模式',
      },
    ],

    meta: {
      category: 'review',
      archetype: 'agent',
      tags: ['review', 'compliance', 'web', 'vercel', 'lightweight'],
      lineCount: 40,
      hasScripts: false,
      hasReferences: false,
      hasAssets: false,
    },
  },

  // ─────────────────────────────────────────────
  // 6. skill-creator
  // ─────────────────────────────────────────────
  {
    id: 'skill-creator',
    name: 'Skill Creator',
    source: 'anthropic',

    surface: {
      tagline: '技能创建与迭代优化的元技能',
      problem: '创建高质量的 Skill 需要方法论和评估体系，没有系统指导容易写出低质量 skill',
      targetUser: 'Skill 开发者、AI 工具链构建者、Prompt 工程师',
      impact: {
        overall: 10,
        isEstimated: true,
      },
    },

    narrative: {
      hook: '教 AI 如何写 skill 的 skill——481 行里藏着一套完整的"技能工程学"。',
      intro: 'Skill Creator 是一个元技能：它的功能是帮你创建其他技能。481 行，是所有被分析 skill 中最长的。配有脚本（评估工具链）、引用文档（grading 指南、schema 定义）和资源文件（HTML viewer 模板）。\n\n它面向的是 Skill 开发者。核心洞察是：写 skill 不应该靠灵感，应该是一个有方法论的工程实践——有输入、有测试、有评估、有迭代。',
      highlights: [
        {
          title: '迭代循环而非线性流程——这是工程方法论',
          quote: 'Draft or edit the skill → Run claude-with-access-to-the-skill on test prompts → Evaluate the outputs → Repeat until you\'re satisfied',
          explanation: '多数 skill 描述的是线性流程：从 A 到 B 到 C。Skill Creator 描述的是循环：写 → 测 → 评 → 改 → 再测。这才是真正的工程实践。一版写好就完美的 skill 不存在，所有好 skill 都是改出来的。',
          insight: '如果你的 skill 教用户创建某种东西，把流程设计成循环而非直线。强调"迭代"而非"一步到位"。',
        },
        {
          title: '解释"为什么"而非堆砌"必须"',
          quote: 'Try hard to explain the why behind everything you\'re asking the model to do... If you find yourself writing ALWAYS or NEVER in all caps, that\'s a yellow flag.',
          explanation: '这条写作建议本身就是一个精彩的设计。它没有说"不准用 MUST"，而是解释了为什么解释比命令更有效——因为 LLM 有理解力，理解了原因后它能举一反三，而死板的命令只能覆盖你想到的情况。',
          insight: '在 skill 中解释"为什么"而非只写"怎么做"。AI 不是脚本执行器，它能理解意图。给它理由，它会做得更好。',
        },
        {
          title: '口语化语气——"Cool? Cool."',
          quote: 'Cool? Cool.',
          explanation: '一个教你写 skill 的 skill，用的是聊天口吻而非技术文档口吻。这大幅降低了心理门槛。它暗示"写 skill 不是什么严肃的工程活，就是我们一起琢磨一下"。对于可能对"prompt engineering"感到畏惧的新用户，这种语气是一种善意。',
          insight: '如果你的 skill 面向新手，考虑用口语化语气。降低心理距离比增加技术内容更能帮助新用户上手。',
        },
        {
          title: '描述优化器——把主观变客观',
          quote: 'Create 20 eval queries — a mix of should-trigger and should-not-trigger... splits into 60% train and 40% held-out test',
          explanation: '"这个 skill 的 description 写得好不好"是一个主观问题。Skill Creator 把它变成了客观问题：用 20 条测试查询跑触发率，训练集 60%、测试集 40%，避免过拟合。这是把机器学习的评估方法论用到了 prompt 优化上。',
          insight: '如果你的 skill 涉及质量评估，想办法把主观判断转化为可测量的指标。哪怕指标不完美，有数据总比纯靠感觉好。',
        },
      ],
      structureLogic: '481 行的长度本身就是一个挑战。Skill Creator 的解法是"渐进式披露"：主文件放核心循环和指南，详细的评估 schema 放在 references/ 里，专用工具放在 scripts/ 里。\n\n更值得注意的是它的"环境适配"设计——同一个 skill 为 Claude Code、Claude.ai 和 Cowork 三种环境提供了不同的操作指南。虽然这增加了篇幅，但确保了 skill 在不同上下文中都能工作。',
      takeaways: [
        '**用迭代循环替代线性流程**。好的 skill 是改出来的，不是写出来的。教用户循环而非一步到位。',
        '**解释"为什么"比堆砌"必须"更有效**。AI 理解意图后能举一反三，死板命令只覆盖你想到的情况。',
        '**口语化语气降低心理门槛**。面向新手时，"Cool? Cool."比"MUST follow these steps"更有效。',
        '**把主观评估变成可测量指标**。训练集/测试集分割、触发率统计——用工程方法论做 prompt 优化。',
      ],
    },

    structure: {
      hasClearGoal: true,
      hasStepByStep: true,
      hasIODefinition: true,
      lowersBarrier: true,
      hasReusableTemplate: true,
      score: 5,
      details:
        '完整的创建→测试→评估→优化闭环。分为：意图捕获、采访研究、编写 SKILL.md、测试用例、运行评估、迭代改进六大阶段。文件结构模板、评估 JSON schema、grading 流程一应俱全。还有描述优化（triggering accuracy）的独立子系统。',
    },

    valueDensity: {
      informationCompression: 4,
      reducesDecisionCost: true,
      reducesTrialError: true,
      readyToUse: true,
      score: 4,
      details:
        '481 行的长文本，信息密度中高。将 skill 创建从"凭感觉写"变成有方法论的工程实践。评估系统（定量 + 定性）显著减少试错。描述优化器使用训练/测试集分割，避免过拟合。但信息量较大，需要时间消化。',
    },

    psychology: {
      solvesAnxiety: true,
      createsCertainty: true,
      empowers: true,
      hasAchievementMechanism: true,
      score: 5,
      details:
        '解决"我不知道怎么写好 Skill"的焦虑。迭代循环给出明确的改进路径。评估viewer让进步可视化。"billions a year in economic value"这句话激发使命感。口语化语气（"Cool? Cool."）降低心理距离。',
    },

    pattern: {
      formula:
        '[意图捕获] + [迭代循环（写→测→评→改）] + [定量+定性评估] + [描述优化] + [打包分发]',
      abstractFramework:
        '元技能模式：教你如何创建其他技能。核心是迭代循环而非线性流程。将主观判断系统化为可测量的指标（triggering accuracy）。提供完整工具链（脚本、viewer、grader）。语气刻意保持亲和力以降低使用门槛。',
      tags: [
        'meta-skill',
        'iteration-loop',
        'evaluation',
        'optimization',
        'distribution',
        'toolchain',
      ],
    },

    reverseEngineering: {
      blueprint:
        '1. 定义"创建 X 的完整生命周期"（捕获→编写→测试→评估→优化→分发）\n2. 为每个阶段编写详细指南\n3. 设计评估体系（定量指标 + 定性反馈）\n4. 提供评估工具链（脚本 + viewer）\n5. 设计迭代机制（每轮对比前一轮）\n6. 增加子系统（如描述优化器）处理特定优化目标\n7. 适配多种运行环境（CLI / Web / Cowork）',
      templateCode: `---
name: my-meta-skill
description: Create and iteratively improve [X]. Use when users want to create, update, evaluate, or optimize [X].
---

# [X] Creator

## Process Overview
1. Capture intent
2. Draft
3. Test with real prompts
4. Evaluate (qualitative + quantitative)
5. Iterate based on feedback
6. Package and distribute

## Creating [X]
### Capture Intent
[Questions to understand what the user wants]

### Write Draft
[Structure and patterns to follow]

### Test Cases
[How to create and run test cases]

## Evaluation
[How to measure quality and improve]

## Iteration Loop
[How to systematically improve based on feedback]`,
    },

    improvements: [
      {
        gap: '481 行，信息过载，新用户难以快速上手',
        suggestion: '增加 TL;DR 版本或"快速模式"只做 draft→test→improve',
      },
      {
        gap: '评估系统复杂度高，依赖子代理和 Python 脚本',
        suggestion: '提供轻量级评估替代方案（如内联对比）',
      },
      {
        gap: '语气不一致——有时专业，有时过于口语化',
        suggestion: '统一语气为"专业但友好"',
      },
      {
        gap: '环境适配部分（Claude.ai / Cowork / Claude Code）增加了认知负担',
        suggestion: '自动检测环境，隐藏不相关的指南',
      },
    ],

    meta: {
      category: 'meta',
      archetype: 'methodology',
      tags: ['meta', 'creation', 'evaluation', 'optimization', 'methodology'],
      lineCount: 481,
      hasScripts: true,
      hasReferences: true,
      hasAssets: true,
    },
  },
];
