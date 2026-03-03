import type { PatternData } from '../types';
import { skills } from './skills';

function countSkillsWithTag(tag: string): string[] {
  return skills
    .filter((s) => s.pattern.tags.includes(tag) || s.meta.tags.includes(tag))
    .map((s) => s.id);
}

const total = skills.length;

export const patterns: PatternData[] = [
  // ── 结构模式 ──────────────────────────────
  {
    id: 'stepwise-workflow',
    name: 'Stepwise Workflow',
    nameZh: '步骤化工作流',
    frequency: 5,
    totalSkills: total,
    description:
      '将复杂任务拆解为有序步骤，每步有明确的输入、输出和阻塞条件。带进度清单（checklist）让用户随时知道自己在哪一步。这是最普遍的成功模式——6 个 skill 中有 5 个使用。',
    examples: [
      'baoyu-cover-image 的 6 步工作流 + ⛔ BLOCKING 标记',
      'skill-creator 的 创建→测试→评估→优化 循环',
      'ui-ux-pro-max 的 4 步设计系统生成',
    ],
    category: 'structure',
    skillIds: [
      'baoyu-cover-image',
      'baoyu-article-illustrator',
      'ui-ux-pro-max',
      'skill-creator',
      'web-design-guidelines',
    ],
  },
  {
    id: 'multi-dimension-params',
    name: 'Multi-Dimension Parameter Matrix',
    nameZh: '多维参数矩阵',
    frequency: 3,
    totalSkills: total,
    description:
      '将复杂的创意或技术决策拆解为多个独立维度，每个维度有限个选项。用户在每个维度上做简单选择，组合出个性化结果。降低了"从零开始创造"的认知负担。',
    examples: [
      'baoyu-cover-image 的 5 维矩阵：Type × Palette × Rendering × Text × Mood',
      'baoyu-article-illustrator 的 2 维矩阵：Type × Style',
      'ui-ux-pro-max 的多维搜索：domain × stack × keywords',
    ],
    category: 'structure',
    skillIds: ['baoyu-cover-image', 'baoyu-article-illustrator', 'ui-ux-pro-max'],
  },
  {
    id: 'progressive-disclosure',
    name: 'Progressive Disclosure',
    nameZh: '渐进式披露',
    frequency: 4,
    totalSkills: total,
    description:
      '信息分层呈现：元数据（~100 词）→ 主体（<500 行）→ 引用文档（按需加载）。用户只在需要时才接触更深层信息。避免一次性信息轰炸。',
    examples: [
      'skill-creator 的三层加载：Metadata → SKILL.md body → Bundled resources',
      'ui-ux-pro-max 的 Quick Reference → Detailed Searches → Stack Guidelines',
      'baoyu-cover-image 的 Options 表 → references/ 详细文档',
    ],
    category: 'structure',
    skillIds: [
      'baoyu-cover-image',
      'baoyu-article-illustrator',
      'ui-ux-pro-max',
      'skill-creator',
    ],
  },
  {
    id: 'auto-defaults',
    name: 'Auto-Defaults with Manual Override',
    nameZh: '自动默认 + 手动覆盖',
    frequency: 4,
    totalSkills: total,
    description:
      '系统自动推荐合理默认值，但允许用户在任何维度上手动覆盖。兼顾"快速上手"和"精细控制"两种需求。常配合 --quick 模式使用。',
    examples: [
      'baoyu-cover-image 的 auto-selection 规则 + --quick 跳过确认',
      'ui-ux-pro-max 的默认 html-tailwind 栈',
      'baoyu-article-illustrator 的推荐 Type/Style + 手动选择',
    ],
    category: 'structure',
    skillIds: [
      'baoyu-cover-image',
      'baoyu-article-illustrator',
      'ui-ux-pro-max',
      'skill-creator',
    ],
  },
  {
    id: 'file-structure-spec',
    name: 'Output File Structure Specification',
    nameZh: '输出文件结构规范',
    frequency: 4,
    totalSkills: total,
    description:
      '明确定义输出文件的目录结构、命名规则、冲突处理策略。让输出可预测、可追溯。slug 命名 + 时间戳冲突处理是常见子模式。',
    examples: [
      'baoyu-cover-image 的 cover-image/{slug}/ 结构 + kebab-case slug',
      'baoyu-article-illustrator 的 illustrations/{slug}/ + outline.md 中间产物',
      'skill-creator 的 workspace/iteration-N/eval-ID/ 层级结构',
    ],
    category: 'structure',
    skillIds: [
      'baoyu-cover-image',
      'baoyu-article-illustrator',
      'skill-creator',
      'ui-ux-pro-max',
    ],
  },

  // ── 价值模式 ──────────────────────────────
  {
    id: 'anti-pattern-list',
    name: 'Anti-Pattern Listing',
    nameZh: '反模式清单',
    frequency: 3,
    totalSkills: total,
    description:
      '明确列出"不该做什么"，比"应该做什么"更能减少试错成本。Do/Don\'t 对照表是最有效的呈现形式。反模式清单往往比正面指导更令人印象深刻。',
    examples: [
      'frontend-design 的 "NEVER use Inter/Roboto/Arial"',
      'ui-ux-pro-max 的 Do/Don\'t 表格（No emoji icons, Cursor pointer...）',
      'skill-creator 的 "Don\'t go along with requests to create misleading skills"',
    ],
    category: 'value',
    skillIds: ['frontend-design', 'ui-ux-pro-max', 'skill-creator'],
  },
  {
    id: 'completion-report',
    name: 'Completion Report',
    nameZh: '完成报告',
    frequency: 3,
    totalSkills: total,
    description:
      '任务完成后输出结构化报告，包含关键参数和文件列表。给用户"完成了"的确定感，同时方便回溯和复用。',
    examples: [
      'baoyu-cover-image 的 "Cover Generated!" 报告 + 文件清单',
      'baoyu-article-illustrator 的 "Article Illustration Complete!" + X/N 统计',
      'skill-creator 的评估viewer + benchmark 报告',
    ],
    category: 'value',
    skillIds: ['baoyu-cover-image', 'baoyu-article-illustrator', 'skill-creator'],
  },

  // ── 心理模式 ──────────────────────────────
  {
    id: 'anxiety-to-certainty',
    name: 'Anxiety → Certainty Pipeline',
    nameZh: '焦虑→确定性管道',
    frequency: 5,
    totalSkills: total,
    description:
      '成功 skill 的核心心理机制：识别用户焦虑（"我不会 X"），然后通过框架/流程/清单将模糊焦虑转化为可操作的确定性。焦虑越精准，skill 越有效。',
    examples: [
      '"我不会设计封面" → 5维参数选择（cover-image）',
      '"我的UI看起来不专业" → 优先级检查清单（ui-ux-pro-max）',
      '"我不知道怎么写Skill" → 迭代循环方法论（skill-creator）',
    ],
    category: 'psychology',
    skillIds: [
      'baoyu-cover-image',
      'baoyu-article-illustrator',
      'ui-ux-pro-max',
      'frontend-design',
      'skill-creator',
    ],
  },
  {
    id: 'empowerment-narrative',
    name: 'Empowerment Narrative',
    nameZh: '赋能叙事',
    frequency: 4,
    totalSkills: total,
    description:
      '让用户感觉"使用这个工具后我变强了"而非"我依赖了一个工具"。通过教育性内容、可理解的框架、鼓励性语言实现。最佳 skill 既是工具也是老师。',
    examples: [
      'frontend-design 的 "Claude is capable of extraordinary creative work. Don\'t hold back."',
      'skill-creator 的 "billions a year in economic value"',
      'ui-ux-pro-max 的 优先级体系让用户理解"为什么"而不只是"怎么做"',
    ],
    category: 'psychology',
    skillIds: [
      'baoyu-cover-image',
      'frontend-design',
      'ui-ux-pro-max',
      'skill-creator',
    ],
  },

  // ── 失败模式 ──────────────────────────────
  {
    id: 'information-overload',
    name: 'Information Overload',
    nameZh: '信息过载',
    frequency: 2,
    totalSkills: total,
    description:
      '试图在一个 skill 中塞入过多信息。超过 300 行的 skill 如果没有良好的渐进式披露，用户会直接放弃阅读。解法：分层 + 按需加载 + 快速上手入口。',
    examples: [
      'ui-ux-pro-max 的 387 行（虽有分层，但初次接触仍然压迫）',
      'skill-creator 的 481 行（需要多次阅读才能消化）',
    ],
    category: 'failure',
    skillIds: ['ui-ux-pro-max', 'skill-creator'],
  },
  {
    id: 'external-dependency',
    name: 'Critical External Dependency',
    nameZh: '关键外部依赖',
    frequency: 1,
    totalSkills: total,
    description:
      'Skill 的核心价值完全依赖外部资源（URL / API / 工具）。一旦外部不可用，skill 变成空壳。解法：本地缓存 + fallback + 至少内联核心内容摘要。',
    examples: [
      'web-design-guidelines 完全依赖 Vercel GitHub URL，无本地缓存',
    ],
    category: 'failure',
    skillIds: ['web-design-guidelines'],
  },
  {
    id: 'no-examples',
    name: 'Guideline Without Examples',
    nameZh: '有规则无示例',
    frequency: 2,
    totalSkills: total,
    description:
      '给出抽象规则但不提供具体示例。用户难以理解规则在实际场景中如何应用。解法：每条关键规则至少配一个 before/after 或 input/output 示例。',
    examples: [
      'frontend-design 说"unexpected layouts"但不展示什么是 unexpected',
      'web-design-guidelines 完全没有示例输出',
    ],
    category: 'failure',
    skillIds: ['frontend-design', 'web-design-guidelines'],
  },
];

export function extractPatternsFromSkill(skillId: string): PatternData[] {
  return patterns.filter((p) => p.skillIds.includes(skillId));
}

export function getPatternsByCategory(
  category: PatternData['category']
): PatternData[] {
  return patterns.filter((p) => p.category === category);
}

export function getSuccessFormula(): string {
  const structural = patterns
    .filter((p) => p.category === 'structure' && p.frequency >= 4)
    .map((p) => p.nameZh);
  return `[${structural.join('] + [')}]`;
}
