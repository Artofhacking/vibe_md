export interface ArticleData {
  id: number;
  slug: string;
  componentPath: string;
  title: string;
  originalTitle: string;
  tags: string[];
  date: string;
  summary: string;
  englishTitle?: string;
  readTime?: string;
  category?: string;
}

export const articles: ArticleData[] = [
  {
    id: 1001,
    slug: '9-observations-building-ai-agents',
    componentPath: 'NineObservationsAgentsPage',
    title: '构建 AI Agent 的九条实战心得',
    originalTitle: '9 Observations from Building with AI Agents',
    englishTitle: '9 Observations from Building with AI Agents',
    tags: ['AI Agent', '工程实践'],
    date: '2026-03-03',
    readTime: '8 min read',
    category: 'AI 工具',
    summary:
      '从模型选择策略到多模型对抗协作，从提示词热更新到闭环自动优化——一位深耕一年的工程师浓缩出的九条 Agent 开发实战观察。',
  },
  {
    id: 1002,
    slug: 'what-ai-cannot-do',
    componentPath: 'WhatAiCannotDoPage',
    title: '知道 AI 不能做什么，比知道它能做什么重要一万倍',
    originalTitle: '知道 AI 不能做什么比知道 AI 能做什么要重要得多',
    tags: ['AI', '认知', '个人成长'],
    date: '2026-03-02',
    readTime: '8 min read',
    category: '认知',
    summary:
      'AI 有三件事不能替代：「渴望」、「主体性」和「前 0.01%」。用 Transformer 的 Q/K/V 机制做精妙类比——你的 Query 即渴望，掌控 Attention 就是掌控人生。',
  },
  {
    id: 1003,
    slug: 'scarce-humanity-in-ai-era',
    componentPath: 'ScarceHumanityInAiEraPage',
    title: '在 AI 时代，人类真正稀缺的不是智力',
    originalTitle: '在 AI 时代，人类真正越来越稀缺的，不是智力，而是这些东西',
    tags: ['AI', '个人思考', '好奇心', '稀缺性'],
    date: '2026-03-02',
    readTime: '10 min read',
    category: '认知',
    summary:
      'AI 擅长"怎么做得更好"，但从不问"为什么要做"。从 Chegg 溃败到乔布斯、黄仁勋的洞察，推导出 AI 时代人类的四条护城河：好奇心、探索欲、热爱与想象力。',
  },
  {
    id: 1004,
    slug: 'dan-koe-one-person-business',
    componentPath: 'DanKoeOnePersonBusinessPage',
    title: '如果在 2026 年重新开始做一人公司',
    originalTitle: "How I'd Build a One-Person Business If I Started Over in 2026",
    englishTitle: "How I'd Build a One-Person Business If I Started Over in 2026",
    tags: ['创业', '一人公司', 'AI 时代', '商业模式'],
    date: '2026-03-02',
    readTime: '10 min read',
    category: '商业洞察',
    summary:
      'Dan Koe 对创作者经济的系统性复盘：卖课逻辑的时代正在结束，AI 让学徒制第一次可以规模化——你卖的不再是信息，而是你的第二大脑。',
  },
  {
    id: 1005,
    slug: 'skill-creator-eval-benchmark-upgrade',
    componentPath: 'SkillCreatorEvalBenchmarkUpgradePage',
    title: 'Skill-Creator 重磅升级：让 Agent Skills 可测试、可度量、可迭代',
    originalTitle: 'Improving skill-creator: Test, measure, and refine Agent Skills',
    englishTitle: 'Improving skill-creator: Test, measure, and refine Agent Skills',
    tags: ['Agent Skills', '测试', '工程实践'],
    date: '2026-03-05',
    readTime: '6 min read',
    category: 'AI 工具',
    summary:
      'Anthropic 把软件工程的三板斧——测试、基准测试、迭代优化——搬进了 skill-creator。Evals 做单元测试，Benchmark 跑性能仪表盘，比较智能体做双盲 A/B 对比，全程零代码。',
  },
  {
    id: 1006,
    slug: 'world-class-agentic-engineer',
    componentPath: 'WorldClassAgenticEngineerPage',
    title: '如何成为世界级的 Agentic Engineer',
    originalTitle: '如何成为世界级的「Agentic Engineer」',
    tags: ['Agentic Engineering', '方法论', 'AI Agent'],
    date: '2026-03-05',
    readTime: '12 min read',
    category: 'AI 工具',
    summary:
      '你可以把设计和实现都交给 Agent，但结果必须由你负责。从工具精简、上下文管理、Agent 奉承性对抗到契约式任务终点——一套完整的 Agentic Engineering 方法论。',
  },
  {
    id: 1007,
    slug: 'obsidian-claude-code-vault-as-ai-context',
    componentPath: 'ObsidianClaudeCodeVaultPage',
    title: '你的笔记库就是你最强大的 AI 上下文',
    originalTitle: 'Obsidian + Claude Code：你的笔记库就是你最强大的 AI 上下文',
    tags: ['Obsidian', 'Claude Code', '知识管理', '人机协作'],
    date: '2026-03-05',
    readTime: '8 min read',
    category: '认知',
    summary:
      '别再管理 AI，开始管理你的笔记库。从自定义命令 /trace、/connect、/ideas 到「管理 Vault 而非管理 Agent」的范式转换——Obsidian + Claude Code 如何把持续写作变成你最强大的 AI 上下文。',
  },
  {
    id: 1008,
    slug: 'modularize-habits-with-skills',
    componentPath: 'ModularizeHabitsWithSkillsPage',
    title: 'Skills：把你自己编译成可复用的模块',
    originalTitle: '用 skills 把自己做的事习惯模块化、自动化',
    tags: ['Agent Skills', '方法论', '认知'],
    date: '2026-03-06',
    readTime: '6 min read',
    category: '认知',
    summary:
      'Skills 的四层递进逻辑：把习惯显性化、像乐高一样组合与递归、吸收别人的 SOP 内化为己用——最后拉远看，人类正在不自觉地帮 AI 完成一场碳基到硅基的知识大迁移。',
  },
  {
    id: 1009,
    slug: 'cli-native-language-of-ai-agents',
    componentPath: 'CliNativeLanguageOfAiAgentsPage',
    title: 'CLI 不是复古，是进化——当 AI 选择了自己的母语',
    originalTitle: 'CLI：AI Agent 的母语',
    tags: ['CLI', 'AI Agent', '交互范式'],
    date: '2026-03-06',
    readTime: '6 min read',
    category: 'AI 工具',
    summary:
      'GUI 是人类感官的拐杖，AI 不需要。从双重翻译的信息损耗到管道哲学的无限组合，从系统改造三层进化到操作员→架构师的角色跃迁——CLI 是 AI 时代交互方式的螺旋式上升。',
  },
  {
    id: 1010,
    slug: 'mcp-is-dead-long-live-cli',
    componentPath: 'McpIsDeadLongLiveCliPage',
    title: 'MCP 已死，CLI 当立',
    originalTitle: 'MCP 已死，CLI 当立',
    tags: ['技术', 'AI 工具', 'CLI', 'MCP'],
    date: '2026-03-02',
    readTime: '6 min read',
    category: 'AI 工具',
    summary:
      'LLM 天生就会用命令行工具，干嘛还要多此一举发明一套新协议？从调试透明性、可组合性、认证兼容到运维简洁，CLI 对 MCP 形成全面碾压。',
  },
];
