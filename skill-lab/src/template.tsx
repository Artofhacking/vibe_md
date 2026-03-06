import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Github, Twitter, Mail, Menu, X, Search } from 'lucide-react';

// --- 模拟数据 (Mock Data) ---
const SKILLS = [
  { id: 'cover-gen', title: 'Cover_Image_Gen.md', desc: '定义 5 维定制的文章封面生成标准的系统提示词。', type: 'Prompt' },
  { id: 'article-ill', title: 'Article_Illustrator.md', desc: 'Type × Style 双维度文章配图系统的上下文蓝图。', type: 'Blueprint' },
  { id: 'claude-code', title: 'Claude_Code_Rules.md', desc: '基于终端的智能代码演进代理的自定义验证规则。', type: 'Rules' },
  { id: 'openclaw', title: 'OpenClaw_Schema.json', desc: '大龙虾：下一代语义化网页抓取框架的数据提取结构。', type: 'Schema' },
  { id: 'vibe-system', title: 'Vibe_Coding_System.md', desc: '高上下文编程的系统级提示词规范与防幻觉约束。', type: 'System' },
];

// --- 新增: 教程数据 (Tutorials) ---
const TUTORIALS = [
  {
    id: 'tut-claude',
    tool: 'Claude Code',
    title: '终端智能体实战：从 0 构建自动化代码重构流',
    desc: '系统学习如何利用 Claude Code 接管你的本地代码库，包含 Prompt 编写、上下文控制与错误回溯。',
    level: 'Advanced',
    chapters: 5,
  },
  {
    id: 'tut-openclaw',
    tool: 'OpenClaw',
    title: '大龙虾网页解析权威指南',
    desc: '彻底告别 CSS 选择器，使用大模型结合 Schema 实现 100% 结构化数据提取的完整工作流。',
    level: 'Intermediate',
    chapters: 4,
  },
  {
    id: 'tut-obsidian',
    tool: 'Obsidian',
    title: '构建第二大脑：基于 AI 的网状笔记法',
    desc: '如何将 Obsidian 与本地大模型结合，实现自动打标签、双链推荐与每日总结。',
    level: 'Beginner',
    chapters: 3,
  },
  {
    id: 'tut-codex',
    tool: 'Codex / Copilot',
    title: 'AI 辅助编程：超越自动补全的 10 个进阶技巧',
    desc: '重新理解内联补全，学习如何通过注释驱动开发（CDD）让 AI 准确理解你的业务逻辑。',
    level: 'Intermediate',
    chapters: 6,
  },
];

// --- 更新: 审美与 UI 设计规范数据 (Aesthetics) ---
// 拆分了 shortDesc (首页克制) 和 desc (详情页幽默)，并加入了具体的规范列表 tokens
const AESTHETICS = [
  {
    id: 'aes-color',
    title: 'Minimal_Palette.css',
    shortDesc: '解构 Claude 风格的低对比度暖色调空间，探讨护眼与沉浸感的平衡。',
    desc: '只要你不用纯黑 #000 闪瞎用户的眼睛，我们就还是朋友。退火、降噪、加一点高级的暖灰色，懂？',
    type: 'Color',
    preview: ['#FAF9F7', '#EAE8E4', '#A3A09A', '#1C1B1A'],
    tokens: [
      { name: 'Background (画布白)', value: '#FAF9F7', usage: '全局页面的底层画布，带有极弱的纸张暖意，缓解视疲劳。' },
      { name: 'Border (分割灰)', value: '#EAE8E4', usage: '极弱的边界分割，完全替代沉重的盒阴影（Box-shadow）。' },
      { name: 'Muted Text (静音灰)', value: '#6B6A68', usage: '用于次要信息与元数据，主动降低非核心信息的视觉噪音。' },
      { name: 'Main Text (柔和黑)', value: '#1C1B1A', usage: '主标题与正文。拒绝刺眼的绝对黑，保持文本的温润感。' }
    ]
  },
  {
    id: 'aes-typo',
    title: 'Typography_Scale.config',
    shortDesc: '为什么 AI 阅读界面都在回归衬线体？探讨排版比例与行距的数学之美。',
    desc: '为什么现在的 AI 界面都在疯狂回归衬线体？因为这能让它一本正经胡说八道（产生幻觉）时，看起来像一篇严谨的学术论文。',
    type: 'Typography',
    preview: 'Aa',
    tokens: [
      { name: 'Serif (衬线体)', value: 'Noto Serif / Georgia', usage: '用于大标题与深度阅读正文，赋予内容极强的学术权威感。' },
      { name: 'Sans-serif (无衬线)', value: 'Inter / System UI', usage: '用于按钮、导航与 UI 交互组件，保持纯粹的功能性。' },
      { name: 'Monospace (等宽)', value: 'Fira Code / Menlo', usage: '用于代码片段、文件路径与时间戳，强调机器上下文的 Vibe。' },
      { name: 'Line Height (行距)', value: 'leading-relaxed (1.625)', usage: '慷慨的正文行距，确保长篇文字的阅读呼吸感。' }
    ]
  },
  {
    id: 'aes-icon',
    title: 'Semantic_Icons.svg',
    shortDesc: '克制即是高级：探索如何使用 16px 极简语义化图标体系构建视觉降噪法则。',
    desc: '能用 16x16 像素的 SVG 说清楚的事，就别逼 AI 写废话。给你的裸奔按钮穿上一件得体且克制的衣服。',
    type: 'Iconography',
    preview: '⌘',
    tokens: [
      { name: 'Stroke Width (描边)', value: '1.5px', usage: '摒弃粗壮的图标，保持纤细，使其与正文的字重融为一体。' },
      { name: 'Size (尺寸)', value: '16px / 20px', usage: '极度克制的尺寸。图标永远只是文字的辅助，绝不喧宾夺主。' },
      { name: 'Corner (圆角)', value: '2px / 4px', usage: '微小的圆角处理，中和纯几何线条带来的工业冷酷感。' },
      { name: 'Hover State (悬停)', value: 'opacity-60 -> 100', usage: '不改变颜色，仅通过透明度的微妙变化来暗示可交互性。' }
    ]
  },
  {
    id: 'aes-layout',
    title: 'Whitespace_Grid.json',
    shortDesc: '留白本身也是一种 Context。基于内容的网格系统与不对称布局法则。',
    desc: '留白本身就是最昂贵的 Context。把几百个组件挤成一坨并不会显得功能强大，只会让读取这个页面的 AI 感到窒息。',
    type: 'Layout',
    preview: '◰',
    tokens: [
      { name: 'Container (容器宽度)', value: 'max-w-5xl', usage: '严格限制最大阅读宽度，确保视线从行首到行尾的移动始终舒适。' },
      { name: 'Rhythm (纵向节奏)', value: 'gap-6 / py-16', usage: '使用超大号的纵向间距，彻底切断不同逻辑模块之间的视觉粘连。' },
      { name: 'Asymmetry (不对称)', value: 'grid-cols-12 (5:7)', usage: '放弃死板的绝对居中，利用不对称比例构建类似社论杂志的高级排版。' },
      { name: 'Borders (边界)', value: 'border-b / border-t', usage: '尽量只用单向的线条来划分区域，绝不用完整的方框把内容锁死。' }
    ]
  }
];

const POSTS = [
  {
    id: 1,
    title: 'AI Vibe Coding：如何用自然语言「演奏」代码',
    englishTitle: 'The Art of Vibe Coding with LLMs',
    excerpt: '不再拘泥于具体的语法，而是通过构建高阶的上下文和架构意图，让 AI 代理自动补全实现细节。本文探讨了 Vibe Coding 的核心直觉与日常实践。',
    date: '2026-03-04',
    readTime: '8 min read',
    tags: ['Vibe Coding', '工程实践'],
    category: '开发范式',
    content: `
      在过去的一年里，我们见证了从简单的指令微调到复杂的思维链推理的演变。如今，“Vibe Coding” 正在成为高阶开发者的日常。
      
      Vibe Coding 的本质，是**将程序员的精力从“编写实现”转移到“定义约束与意图”上**。我们不再逐行敲击代码，而是像一位指挥家，通过构建清晰的上下文环境（Context）、定义核心数据结构、并给出明确的系统提示（System Prompts），让 LLM 来完成繁重的编码工作。
      
      本文将分享我们在使用 Cursor 和 Claude 3.5 Sonnet 时，总结出的几条“感觉编程”心法：
      1. 永远先设计数据结构和接口，让 AI 填空。
      2. 像写小说一样写 Prompt：交代背景、动机和限制条件。
      3. 拥抱微迭代：每次只让 AI 前进一小步，随时纠偏。
    `,
  },
  {
    id: 2,
    title: '解构 Claude Code：如何让 AI 接管你的代码库',
    englishTitle: 'Deconstructing Claude Code for Repository Management',
    excerpt: 'Anthropic 推出的 Claude Code 打破了传统 IDE 的边界。它是如何理解整个 Repo 的上下文，并执行跨文件的重构任务的？',
    date: '2026-02-28',
    readTime: '12 min read',
    tags: ['Claude Code', '工具链'],
    category: 'AI 工具',
    content: `
      传统的 AI 编码助手往往局限于当前文件的补全（如 Copilot），或者在侧边栏中提供问答。而 Claude Code 作为一款 CLI 工具，其最强大的地方在于它拥有**系统级的读写权限和完整的 Repo 视野**。
      
      当你输入 \`claude "重构这个组件以使用 Tailwind，并更新所有引用它的文件"\` 时，它不仅在思考，还在主动进行 grep 搜索、语法树分析，并最终提交一组 diff。
      
      本文将拆解 Claude Code 背后的 Agent 循环机制，并教你如何利用它的配置文件（.clauderc）来定制符合你团队规范的代码审查和生成工作流。
    `,
  },
  {
    id: 3,
    title: '使用 OpenClaw 构建高可用的语义化抓取通道',
    englishTitle: 'Building Resilient Scrapers with OpenClaw',
    excerpt: '在 DOM 结构千变万化的今天，基于 CSS 选择器的传统爬虫变得无比脆弱。大龙虾（OpenClaw）带来了一种全新的语义提取范式。',
    date: '2026-02-15',
    readTime: '10 min read',
    tags: ['OpenClaw', '数据工程'],
    category: '开源项目',
    content: `
      数据是 AI 时代的石油，但获取高质量数据的过程却充满了泥泞。传统的网页抓取高度依赖 DOM 树结构，一旦目标网站改版，爬虫就会立刻崩溃。
      
      OpenClaw（大龙虾）框架提出了一种绝佳的解决思路：它将网页渲染为一种视觉/语义图谱，利用多模态大模型直接“看”懂网页上的结构化信息。你只需要定义一个 JSON Schema（例如：“提取商品名称、价格和评论数”），OpenClaw 就会帮你搞定一切复杂的交互和提取。
      
      这不仅大大降低了维护成本，也让抓取那些高度混淆的动态网页变得轻而易举。
    `,
  }
];

// --- 样式常量 (Tailwind 极简配色) ---
const THEME = {
  bg: 'bg-[#FAF9F7]', // 暖米白背景 (Claude 风格)
  textMain: 'text-[#1C1B1A]', // 柔和的深黑色
  textMuted: 'text-[#6B6A68]', // 辅助文本灰色
  border: 'border-[#EAE8E4]', // 极淡的暖灰色边框
  hover: 'hover:bg-[#F0EFEA]', // 浅灰色悬停
};

// --- 组件 ---

// 1. 导航栏 Header
const Header = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = () => {
    setShowToast(true);
    // 6秒后自动关闭
    setTimeout(() => setShowToast(false), 6000);
  };

  return (
    <header className={`sticky top-0 z-50 ${THEME.bg} border-b ${THEME.border} bg-opacity-90 backdrop-blur-sm transition-all`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-5 h-5 bg-[#1C1B1A] rounded-[4px] group-hover:bg-[#4A4948] transition-colors" />
          <span className={`font-serif text-xl tracking-tight font-medium ${THEME.textMain}`}>
            Vibe.md
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['文章 Research', '项目 Projects', '关于 About'].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => onNavigate('home')}
              className={`text-sm tracking-wide ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
            >
              {item.split(' ')[0]}
            </button>
          ))}
          <button 
            onClick={handleSubscribe}
            className={`text-sm px-4 py-1.5 rounded-full border ${THEME.border} ${THEME.textMain} hover:bg-[#1C1B1A] hover:text-[#FAF9F7] transition-all`}
          >
            订阅更新
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} className={THEME.textMain} /> : <Menu size={20} className={THEME.textMain} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-16 left-0 w-full ${THEME.bg} border-b ${THEME.border} shadow-lg py-4 px-6 flex flex-col gap-4`}>
          {['文章', '项目', '关于'].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
              className={`text-left text-lg font-serif ${THEME.textMain}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => { handleSubscribe(); setIsMenuOpen(false); }}
            className={`text-left text-lg font-serif text-[#A3A09A] hover:text-[#1C1B1A]`}
          >
            订阅更新
          </button>
        </div>
      )}

      {/* 新增：幽默的订阅成功 Toast 弹窗 */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-[#1C1B1A] text-[#FAF9F7] p-5 rounded-xl shadow-2xl z-50 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex items-start gap-3">
            <span className="text-xl">🧠</span>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-sm tracking-wide">脑机接口同步成功</h4>
              <p className="text-xs leading-relaxed opacity-90 text-[#D0CDC7]">
                你的海马体表示已经死记硬背下了这个极其优雅、简短且朗朗上口的域名：
              </p>
              {/* 动态获取当前网址 */}
              <code className="text-[10px] bg-[#4A4948] p-2 rounded text-[#EAE8E4] break-all font-mono shadow-inner border border-[#6B6A68]">
                {window.location.href}
              </code>
              <p className="text-xs opacity-80 italic mt-1 text-[#A3A09A]">
                它说下次绝不会忘（大概）。
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-auto text-[#A3A09A] hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// 2. 页脚 Footer
const Footer = () => (
  <footer className={`border-t ${THEME.border} mt-24 py-12`}>
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className={`font-serif text-lg ${THEME.textMain}`}>Vibe.md</span>
        <span className={`text-sm ${THEME.textMuted}`}>为人类阅读而写，为 AI 解析而生。</span>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className={`${THEME.textMuted} hover:${THEME.textMain} transition-colors`}><Twitter size={18} /></a>
        <a href="#" className={`${THEME.textMuted} hover:${THEME.textMain} transition-colors`}><Github size={18} /></a>
        <a href="#" className={`${THEME.textMuted} hover:${THEME.textMain} transition-colors`}><Mail size={18} /></a>
      </div>
    </div>
    <div className={`max-w-5xl mx-auto px-6 mt-12 text-xs ${THEME.textMuted}`}>
      &copy; {new Date().getFullYear()} Vibe.md. All rights reserved. Designed for the Vibe Coding era.
    </div>
  </footer>
);

// 3. 首页视图 (Home View) - 采用上下流式的单列布局
const HomeView = ({ onReadPost, onViewAll, onReadTutorial }) => {
  return (
    <div className="animate-in fade-in duration-700">
      
      {/* 英雄区域保持极简，作为网站的精神定调 */}
      <section className={`py-16 md:py-24 border-b ${THEME.border} mb-16`}>
        <div className="max-w-3xl">
          <h1 className={`text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.15] tracking-tight ${THEME.textMain} mb-6`}>
            Written for <span className="italic text-[#8B8985]">human intuition</span>. <br className="hidden md:block"/>
            Structured for <span className="italic text-[#8B8985]">machine context</span>.
          </h1>
          <p className={`text-lg md:text-xl ${THEME.textMuted} leading-relaxed max-w-2xl font-light`}>
            在 Vibe Coding 时代，Markdown 是人类与 AI 共享的底层协议。这里的每一份工作流、工具链指南和开发随笔，既为你提供灵感，也随时准备好作为高优上下文被你的 Agent 读取。
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-24 pb-20">
        
        {/* 第一层：CONTEXT PATTERNS (原 SKILL LAB) */}
        <section>
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-2`}>
              CONTEXT PATTERNS
            </h2>
            <p className={`text-sm ${THEME.textMuted}`}>高维度的 Prompt 蓝图、系统提示词与架构切片</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((skill) => (
              <div 
                key={skill.id} 
                className={`group flex flex-col justify-between p-6 rounded-xl border ${THEME.border} bg-white/40 hover:bg-[#F5F4F0] hover:border-[#D0CDC7] transition-all duration-300 cursor-pointer shadow-sm shadow-black/[0.01] h-full`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-base font-mono font-semibold ${THEME.textMain} pr-4`}>
                    {skill.title}
                  </h3>
                  <span className={`shrink-0 text-[10px] px-2 py-1 rounded-[4px] border ${THEME.border} text-[#6B6A68] bg-[#FAF9F7]`}>
                    {skill.type}
                  </span>
                </div>
                <p className={`text-sm ${THEME.textMuted} leading-relaxed mt-auto`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
          {/* 新增：查看全部按钮 */}
          <div className="mt-8 flex justify-start">
            <button 
              onClick={() => onViewAll('skills')}
              className={`group inline-flex items-center gap-2 text-sm font-medium ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
            >
              View all context patterns 
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 第二层：AGENT WORKFLOWS (原 TUTORIALS) */}
        <section>
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-2`}>
              AGENT WORKFLOWS
            </h2>
            <p className={`text-sm ${THEME.textMuted}`}>人类直觉与 AI 代理协作的硬核实战指南</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TUTORIALS.map((tut) => (
              <div 
                key={tut.id} 
                onClick={() => onReadTutorial(tut)}
                className={`group flex flex-col p-6 md:p-8 rounded-xl border ${THEME.border} bg-transparent hover:bg-white hover:border-[#D0CDC7] hover:shadow-md hover:shadow-black/[0.03] transition-all duration-300 cursor-pointer`}
              >
                {/* 顶部：工具名称与难度 */}
                <div className="flex items-center justify-between mb-4 border-b border-dashed border-[#EAE8E4] pb-4">
                  <span className={`font-mono text-sm font-semibold text-[#1C1B1A]`}>
                    {tut.tool}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${tut.level === 'Advanced' ? 'bg-[#1C1B1A]' : tut.level === 'Intermediate' ? 'bg-[#8B8985]' : 'bg-[#D0CDC7]'}`}></span>
                    <span className={`text-[11px] uppercase tracking-wider ${THEME.textMuted}`}>
                      {tut.level}
                    </span>
                  </div>
                </div>
                
                {/* 内容 */}
                <h3 className={`text-xl font-bold ${THEME.textMain} group-hover:text-[#4A4948] transition-colors mb-3`}>
                  {tut.title}
                </h3>
                <p className={`text-sm ${THEME.textMuted} leading-relaxed mb-6`}>
                  {tut.desc}
                </p>

                {/* 底部：章节信息 */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#F0EFEA] text-[#1C1B1A] text-xs font-bold">
                    {tut.chapters}
                  </span>
                  <span className={`text-xs font-medium ${THEME.textMuted}`}>
                    章节 (Chapters)
                  </span>
                  <ArrowRight size={14} className={`ml-auto ${THEME.textMuted} opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300`} />
                </div>
              </div>
            ))}
          </div>
          {/* 查看全部按钮 */}
          <div className="mt-8 flex justify-start">
            <button 
              onClick={() => onViewAll('tutorials')}
              className={`group inline-flex items-center gap-2 text-sm font-medium ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
            >
              View all workflows 
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 第三层：AESTHETIC PROTOCOLS (新增 UI/审美规范) */}
        <section>
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-2`}>
              AESTHETIC PROTOCOLS
            </h2>
            <p className={`text-sm ${THEME.textMuted}`}>Vibe Coding 时代的极简美学、色彩空间与排版规范</p>
          </div>

          {/* 采用 4 列网格展示轻量级设计令牌 (Design Tokens) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AESTHETICS.map((item) => (
              <div 
                key={item.id} 
                onClick={() => onReadTutorial(item)} // 复用 onReadTutorial 逻辑，我们将针对它分配 AestheticView
                className={`group flex flex-col p-5 rounded-xl border ${THEME.border} bg-white/40 hover:bg-[#F5F4F0] hover:border-[#D0CDC7] transition-all duration-300 cursor-pointer shadow-sm shadow-black/[0.01] h-full`}
              >
                {/* 迷你视觉预览区 */}
                <div className="h-24 mb-5 rounded-lg border border-[#EAE8E4] flex items-center justify-center overflow-hidden bg-white/50 relative">
                  {item.type === 'Color' && (
                    <div className="flex w-full h-full">
                      {item.preview.map((c, i) => (
                        <div key={i} className="flex-1" style={{backgroundColor: c}}></div>
                      ))}
                    </div>
                  )}
                  {item.type !== 'Color' && (
                    <span className={`text-4xl ${item.type === 'Typography' ? 'font-serif text-[#1C1B1A]' : 'font-mono text-[#A3A09A]'}`}>
                      {item.preview}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-sm font-mono font-bold ${THEME.textMain} truncate pr-2`}>
                    {item.title}
                  </h3>
                </div>
                {/* 首页卡片使用短文案 shortDesc，保持克制 */}
                <p className={`text-xs ${THEME.textMuted} leading-relaxed mt-auto`}>
                  {item.shortDesc}
                </p>
              </div>
            ))}
          </div>
          {/* 查看全部按钮 */}
          <div className="mt-8 flex justify-start">
            <button 
              onClick={() => onViewAll('aesthetics')}
              className={`group inline-flex items-center gap-2 text-sm font-medium ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
            >
              View all design tokens 
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 第四层：RESEARCH LOGS (原 READ LAB) */}
        <section>
          {/* 标题区 */}
          <div className="mb-8">
            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-2`}>
              RESEARCH LOGS
            </h2>
            <p className={`text-sm ${THEME.textMuted}`}>关于开发范式、设计哲学与人机交互的深度长文</p>
          </div>

          {/* 文章卡片列表 (上下堆叠的宽卡片) */}
          <div className="flex flex-col gap-6">
            {POSTS.map((post) => (
              <article 
                key={post.id} 
                className={`group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border ${THEME.border} bg-white/40 hover:bg-[#F5F4F0] hover:border-[#D0CDC7] transition-all duration-300 cursor-pointer shadow-sm shadow-black/[0.01]`}
                onClick={() => onReadPost(post)}
              >
                {/* 左侧：文章核心信息 */}
                <div className="flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold ${THEME.textMain} group-hover:text-[#4A4948] transition-colors mb-2`}>
                    {post.title}
                  </h3>
                  <h4 className={`font-mono text-xs text-[#8B8985] mb-4`}>
                    {post.englishTitle}
                  </h4>
                  <p className={`text-base leading-relaxed ${THEME.textMuted} mb-6 max-w-3xl`}>
                    {post.excerpt}
                  </p>
                  
                  {/* 底部标签和阅读按钮 */}
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-dashed border-[#EAE8E4]">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className={`text-[11px] px-2.5 py-1 rounded-[6px] border ${THEME.border} text-[#6B6A68] bg-[#FAF9F7]`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`hidden md:flex items-center gap-2 text-sm ${THEME.textMain} font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300`}>
                      阅读全文 <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                {/* 右侧/移动端下方：元数据信息 (日期、分类等) */}
                <div className={`md:w-48 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-3 md:pl-6 md:border-l ${THEME.border} mt-4 md:mt-0`}>
                  <div className="flex flex-col gap-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider text-[#A3A09A]`}>Date</span>
                    <span className={`font-mono text-sm ${THEME.textMuted}`}>{post.date}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider text-[#A3A09A]`}>Category</span>
                    <span className={`text-sm ${THEME.textMuted}`}>{post.category}</span>
                  </div>
                  <div className="flex flex-col gap-1 hidden md:flex">
                    <span className={`text-[10px] font-bold uppercase tracking-wider text-[#A3A09A]`}>Read Time</span>
                    <span className={`text-sm ${THEME.textMuted}`}>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* 新增：查看全部文章按钮 (使用带边框的药丸按钮，作为底部的视觉锚点) */}
          <div className="mt-12 flex justify-center border-t border-dashed border-[#EAE8E4] pt-12">
            <button 
              onClick={() => onViewAll('posts')}
              className={`group flex items-center gap-2 text-sm px-6 py-2.5 rounded-full border ${THEME.border} ${THEME.textMain} hover:border-[#1C1B1A] transition-all`}
            >
              Read full archive 
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

// --- 新增: 列表归档视图 (ListView) ---
// 用于展示点击“查看更多”后的所有项目列表
const ListView = ({ type, onBack, onReadPost, onReadTutorial }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4; // 为了演示分页效果，这里设为 4。实际项目中建议设为 10 或 20。

  useEffect(() => {
    // 切换到列表页或类型改变时，自动滚动到顶部并重置状态
    window.scrollTo(0, 0);
    setSearchQuery('');
    setCurrentPage(1);
  }, [type]);

  // 当搜索词改变时，自动重置回第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // 根据传入的 type 动态匹配标题和数据 (文案同步更新)
  const config = {
    skills: { title: 'Context Patterns', desc: '可直接喂给 Agent 的高密度上下文切片与提示词蓝图。', data: SKILLS },
    tutorials: { title: 'Agent Workflows', desc: '深入学习人机协同的硬核工作流指南。', data: TUTORIALS },
    aesthetics: { title: 'Aesthetic Protocols', desc: 'Vibe Coding 时代的界面美学、排版规范与视觉上下文。', data: AESTHETICS },
    posts: { title: 'Research Logs', desc: '所有的深度阅读、研究笔记与随笔归档。', data: POSTS }
  }[type] || { title: 'Archive', desc: '', data: [] };

  // 1. 过滤逻辑 (搜索)
  const filteredData = config.data.filter(item => {
    const query = searchQuery.toLowerCase();
    const titleMatch = item.title?.toLowerCase().includes(query);
    const descMatch = (item.desc || item.excerpt || '').toLowerCase().includes(query);
    const typeMatch = (item.type || item.level || item.category || '').toLowerCase().includes(query);
    return titleMatch || descMatch || typeMatch;
  });

  // 2. 分页逻辑
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="animate-in slide-in-from-bottom-4 fade-in duration-700 py-12 md:py-16 max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className={`mb-12 flex items-center gap-2 text-sm ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
      >
        <ArrowLeft size={16} />
        返回首页
      </button>

      <header className="mb-8 md:mb-12">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight ${THEME.textMain} mb-4 md:mb-6`}>
          {config.title}
        </h1>
        <p className={`text-lg md:text-xl font-serif text-[#6B6A68]`}>
          {config.desc}
        </p>
      </header>

      {/* 极简大字号搜索栏 */}
      <div className="mb-10 relative group">
        <Search size={20} className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${searchQuery ? THEME.textMain : THEME.textMuted} transition-colors`} />
        <input 
          type="text"
          placeholder={`Search in ${config.title.toLowerCase()}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full bg-transparent border-b border-[#EAE8E4] py-4 pl-10 pr-4 text-lg font-serif ${THEME.textMain} placeholder:text-[#A3A09A] focus:outline-none focus:border-[#1C1B1A] transition-colors`}
        />
      </div>

      {/* 极简归档列表设计：剥离卡片，只保留横线、标题、摘要和元数据 */}
      <div className="flex flex-col min-h-[400px]">
        {currentData.length === 0 ? (
          <div className="py-20 text-center text-[#6B6A68] font-serif text-lg">
            没有找到匹配的内容。
          </div>
        ) : (
          currentData.map((item, idx) => (
            <div 
              key={idx}
              // 路由分发：文章去 PostView，教程去 TutorialView，审美去 AestheticView (这里统一用 onReadTutorial 触发视图路由)
              onClick={() => type === 'posts' ? onReadPost(item) : (type === 'tutorials' || type === 'aesthetics') ? onReadTutorial(item) : null}
              className={`group flex flex-col md:flex-row md:items-baseline justify-between py-8 border-b ${THEME.border} last:border-0 ${(type === 'posts' || type === 'tutorials' || type === 'aesthetics') ? 'cursor-pointer hover:bg-[#F5F4F0] -mx-4 px-4 rounded-md transition-colors' : ''}`}
            >
              <div className="flex flex-col gap-3 max-w-2xl">
                <h3 className={`text-xl md:text-2xl font-serif ${THEME.textMain} ${(type === 'posts' || type === 'tutorials' || type === 'aesthetics') ? 'group-hover:text-[#4A4948]' : ''}`}>
                  {item.title}
                </h3>
                {/* 列表页也使用短文案，避免过于臃肿 */}
                <p className={`text-base leading-relaxed ${THEME.textMuted}`}>
                  {item.shortDesc || item.desc || item.excerpt}
                </p>
              </div>
              
              <div className="flex shrink-0 items-center gap-3 mt-4 md:mt-0 font-mono text-sm text-[#8B8985]">
                {/* 统一展示类型/难度标签 */}
                <span className={`px-2.5 py-1 rounded-[6px] border ${THEME.border} bg-[#FAF9F7] text-[11px]`}>
                  {item.type || item.level || item.category || 'Item'}
                </span>
                {/* 如果是文章，展示日期 */}
                {item.date && <span>{item.date}</span>}
                
                {/* 如果是可阅读的文章或教程，悬停时出现箭头 */}
                {(type === 'posts' || type === 'tutorials' || type === 'aesthetics') && (
                  <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-[#1C1B1A]" />
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* 底部分页控制 */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-between border-t border-[#EAE8E4] pt-8">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 text-sm font-medium ${currentPage === 1 ? 'text-[#D0CDC7] cursor-not-allowed' : `${THEME.textMuted} hover:${THEME.textMain} transition-colors`}`}
          >
            <ArrowLeft size={16} /> Previous
          </button>
          
          <div className="flex gap-2 font-mono text-sm">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${currentPage === i + 1 ? 'bg-[#1C1B1A] text-[#FAF9F7]' : `text-[#6B6A68] hover:bg-[#EAE8E4]`}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 text-sm font-medium ${currentPage === totalPages ? 'text-[#D0CDC7] cursor-not-allowed' : `${THEME.textMuted} hover:${THEME.textMain} transition-colors`}`}
          >
            Next <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

// 5. 教程详情视图 (Tutorial View - 大纲与目录风格)
const TutorialView = ({ tutorial, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tutorial]);

  if (!tutorial) return null;

  // 模拟生成具体的章节列表 (根据配置的 chapters 数量)
  const chaptersList = Array.from({ length: tutorial.chapters }, (_, i) => ({
    num: i + 1,
    title: `第 ${i + 1} 章：${['核心概念与心智模型', '环境配置与初始化', '核心 API 深度解析', '高阶工作流与进阶技巧', '真实项目重构演练', '部署、监控与自动化'][i % 6]}`,
    duration: `${10 + (i * 5)} min`
  }));

  return (
    <article className="animate-in slide-in-from-bottom-4 fade-in duration-700 py-12 md:py-20 max-w-3xl mx-auto">
      {/* 返回按钮 */}
      <button 
        onClick={onBack}
        className={`mb-12 flex items-center gap-2 text-sm ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
      >
        <ArrowLeft size={16} />
        返回上一页
      </button>

      {/* 教程头部 */}
      <header className="mb-12 border-b border-[#EAE8E4] pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-sm font-mono font-semibold ${THEME.textMain}`}>{tutorial.tool}</span>
          <span className={`text-[#D0CDC7]`}>|</span>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${tutorial.level === 'Advanced' ? 'bg-[#1C1B1A]' : tutorial.level === 'Intermediate' ? 'bg-[#8B8985]' : 'bg-[#D0CDC7]'}`}></span>
            <span className={`text-xs uppercase tracking-wider ${THEME.textMuted}`}>{tutorial.level}</span>
          </div>
        </div>
        <h1 className={`text-4xl md:text-5xl font-serif leading-[1.1] tracking-tight ${THEME.textMain} mb-6`}>
          {tutorial.title}
        </h1>
        <p className={`text-xl leading-relaxed ${THEME.textMuted}`}>
          {tutorial.desc}
        </p>
        
        {/* 操作按钮区 */}
        <div className="mt-8 flex gap-4">
          <button className={`px-6 py-2.5 rounded-md bg-[#1C1B1A] text-[#FAF9F7] text-sm font-medium hover:bg-[#4A4948] transition-colors shadow-sm`}>
            开始学习
          </button>
          <button className={`px-6 py-2.5 rounded-md border ${THEME.border} ${THEME.textMain} text-sm font-medium hover:bg-[#F5F4F0] transition-colors`}>
            收藏教程
          </button>
        </div>
      </header>

      {/* 教程大纲 (Syllabus) */}
      <div>
        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-6`}>
          Syllabus / 课程大纲
        </h2>
        <div className="flex flex-col gap-3">
          {chaptersList.map((ch) => (
            <div 
              key={ch.num} 
              className={`group flex items-center justify-between p-5 rounded-lg border ${THEME.border} bg-white/40 hover:border-[#D0CDC7] hover:bg-white transition-all cursor-pointer shadow-sm shadow-black/[0.01]`}
            >
              <div className="flex items-center gap-4">
                <span className={`flex items-center justify-center w-8 h-8 rounded bg-[#F5F4F0] text-[#6B6A68] font-mono text-xs font-bold group-hover:text-[#1C1B1A] transition-colors`}>
                  {ch.num < 10 ? `0${ch.num}` : ch.num}
                </span>
                <span className={`font-medium ${THEME.textMain}`}>{ch.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-mono text-[#8B8985]`}>{ch.duration}</span>
                <ArrowRight size={16} className={`text-[#D0CDC7] group-hover:text-[#1C1B1A] transform group-hover:translate-x-1 transition-all`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

// --- 新增: 6. 审美设计规范视图 (Aesthetic View - 规范列表风格) ---
const AestheticView = ({ item, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [item]);

  if (!item) return null;

  return (
    <article className="animate-in slide-in-from-bottom-4 fade-in duration-700 py-12 md:py-20 max-w-3xl mx-auto">
      {/* 返回按钮 */}
      <button 
        onClick={onBack}
        className={`mb-12 flex items-center gap-2 text-sm ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
      >
        <ArrowLeft size={16} />
        返回上一级
      </button>

      {/* 规范头部 */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-sm font-mono font-semibold ${THEME.textMain}`}>{item.title}</span>
          <span className={`text-[#D0CDC7]`}>|</span>
          <span className={`text-xs uppercase tracking-wider ${THEME.textMuted}`}>{item.type} Protocol</span>
        </div>
        
        {/* 这里展示幽默/犀利的长文案 */}
        <h1 className={`text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed ${THEME.textMain} mb-12`}>
          "{item.desc}"
        </h1>
      </header>

      {/* Tokens 规范列表展示 */}
      <div className="mt-12 border-t border-[#EAE8E4] pt-12">
        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-8`}>
          Design Tokens / 核心设计令牌
        </h2>
        
        <div className="flex flex-col gap-6">
          {item.tokens && item.tokens.map((token, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 rounded-xl border ${THEME.border} bg-white/40`}
            >
              {/* 左侧：Token 名称与值 */}
              <div className="md:w-1/3 flex flex-col gap-2 shrink-0">
                <span className={`text-sm font-semibold ${THEME.textMain}`}>
                  {token.name}
                </span>
                
                {/* 针对颜色和非颜色的视觉区分 */}
                <div className="flex items-center gap-3">
                  {item.type === 'Color' && (
                    <div className="w-5 h-5 rounded-full border border-[#EAE8E4] shadow-sm" style={{backgroundColor: token.value}}></div>
                  )}
                  <span className={`font-mono text-xs px-2 py-1 bg-[#F5F4F0] text-[#6B6A68] rounded border ${THEME.border}`}>
                    {token.value}
                  </span>
                </div>
              </div>
              
              {/* 右侧：用法解释 */}
              <div className="md:w-2/3">
                <p className={`text-sm leading-relaxed ${THEME.textMuted}`}>
                  {token.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

// 7. 文章详情视图 (Post View)
const PostView = ({ post, onBack }) => {
  // 回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return null;

  // 新增：安全的降级处理 (Fallbacks)，防止传入的卡片没有对应的属性引发报错
  const content = post.content || `${post.desc || ''}\n\n详细的规范文档与上下文蓝图正在整理中，稍后将作为完整版发布。`;
  const category = post.category || post.type || 'Context Pattern';
  const date = post.date || new Date().toISOString().split('T')[0];
  const readTime = post.readTime || '3 min read';
  const excerpt = post.excerpt || post.desc;

  return (
    <article className="animate-in slide-in-from-bottom-4 fade-in duration-700 py-12 md:py-20 max-w-3xl mx-auto">
      {/* 返回按钮 */}
      <button 
        onClick={onBack}
        className={`mb-12 flex items-center gap-2 text-sm ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
      >
        <ArrowLeft size={16} />
        返回上一级
      </button>

      {/* 文章头部 */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-sm ${THEME.textMuted}`}>{category}</span>
          <span className={`text-[#D0CDC7]`}>|</span>
          <span className={`text-sm tabular-nums ${THEME.textMuted}`}>{date}</span>
          <span className={`text-[#D0CDC7]`}>|</span>
          <span className={`text-sm ${THEME.textMuted}`}>{readTime}</span>
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] tracking-tight ${THEME.textMain}`}>
          {post.title}
        </h1>
      </header>

      {/* 摘要/引言 */}
      {excerpt && (
        <div className={`text-xl md:text-2xl leading-relaxed font-serif text-[#4A4948] mb-12 pb-12 border-b ${THEME.border}`}>
          {excerpt}
        </div>
      )}

      {/* 文章正文 (带有安全降级解析) */}
      <div className={`prose prose-lg max-w-none font-serif ${THEME.textMain}`}>
        {content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-8 leading-[1.8] text-lg text-[#2D2C2B]">
            {paragraph.trim()}
          </p>
        ))}
        
        {/* 如果是正式文章则渲染名言结构 */}
        {post.content && (
          <>
            <blockquote className="border-l-2 border-[#1C1B1A] pl-6 my-12 italic text-[#6B6A68]">
              "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it." 
              <br/>
              <span className="text-sm not-italic mt-4 block">— Mark Weiser</span>
            </blockquote>
            <p className="mb-8 leading-[1.8] text-lg text-[#2D2C2B]">
              总结来说，无论是技术架构的演进还是设计哲学的回归，其核心都在于剥离复杂性，追求系统的本质与纯粹。这不仅是我们构建 Vibe.md 的初衷，也是我们在每一个工程实践中应当坚守的准则。
            </p>
          </>
        )}
      </div>

      {/* 底部互动区 */}
      <div className={`mt-20 pt-8 border-t ${THEME.border} flex justify-between items-center`}>
        <div className="flex items-center gap-4">
          <span className={`text-sm font-medium ${THEME.textMain}`}>Share Context</span>
          <button className={`p-2 rounded-full hover:bg-[#EAE8E4] text-[#6B6A68] transition-colors`}><Twitter size={18} /></button>
          <button className={`p-2 rounded-full hover:bg-[#EAE8E4] text-[#6B6A68] transition-colors`}><Mail size={18} /></button>
        </div>
      </div>
    </article>
  );
};

// --- 主应用组件 ---
export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'post' | 'list' | 'tutorial' | 'aesthetic'
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [selectedAesthetic, setSelectedAesthetic] = useState(null);
  const [listType, setListType] = useState(null);

  const handleReadPost = (post) => {
    setSelectedPost(post);
    setCurrentView('post');
  };

  const handleReadTutorial = (item) => {
    // 简单的路由分发判断：如果有 tokens，说明是审美规范；如果有 chapters，说明是教程
    if (item.tokens) {
      setSelectedAesthetic(item);
      setCurrentView('aesthetic');
    } else {
      setSelectedTutorial(item);
      setCurrentView('tutorial');
    }
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedPost(null);
    setSelectedTutorial(null);
    setSelectedAesthetic(null);
    setListType(null);
  };

  const handleViewAll = (type) => {
    setListType(type);
    setCurrentView('list');
  };

  return (
    // 最外层容器：应用整体的背景色、默认文本颜色和防锯齿优化
    <div className={`min-h-screen ${THEME.bg} ${THEME.textMain} antialiased selection:bg-[#EAE8E4] selection:text-[#1C1B1A]`}>
      
      <Header 
        onNavigate={handleNavigateHome} 
        currentView={currentView} 
      />
      
      <main className="max-w-5xl mx-auto px-6">
        {currentView === 'home' && <HomeView onReadPost={handleReadPost} onViewAll={handleViewAll} onReadTutorial={handleReadTutorial} />}
        {currentView === 'post' && <PostView post={selectedPost} onBack={handleNavigateHome} />}
        {currentView === 'tutorial' && <TutorialView tutorial={selectedTutorial} onBack={handleNavigateHome} />}
        {currentView === 'aesthetic' && <AestheticView item={selectedAesthetic} onBack={handleNavigateHome} />}
        {currentView === 'list' && <ListView type={listType} onBack={handleNavigateHome} onReadPost={handleReadPost} onReadTutorial={handleReadTutorial} />}
      </main>

      <Footer />
      
    </div>
  );
}