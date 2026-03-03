// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Github, Twitter, Mail, Menu, X } from 'lucide-react';

// --- 模拟数据 (Mock Data) ---
const SKILLS = [
  { id: 'find-skills', name: 'find-skills', path: 'vercel-labs/skills' },
  { id: 'vercel-react-best-practices', name: 'vercel-react-best-practices', path: 'vercel-labs/agent-skills' },
  { id: 'web-design-guidelines', name: 'web-design-guidelines', path: 'vercel-labs/agent-skills' },
  { id: 'remotion-best-practices', name: 'remotion-best-practices', path: 'remotion-dev/skills' },
  { id: 'frontend-design', name: 'frontend-design', path: 'anthropics/skills' },
];

const POSTS = [
  {
    id: 1,
    title: '提示词工程的解剖学与演进',
    excerpt: '探讨大型语言模型中上下文学习的本质，以及如何通过结构化的系统提示词构建更稳定、可靠的 AI 代理系统。',
    content: `
      在过去的一年里，我们见证了从简单的指令微调到复杂的思维链（Chain of Thought）推理的演变。提示词工程不再仅仅是一门“玄学”，而是逐渐演变成一门严谨的工程学科。
      
      本文将深入探讨系统级提示词的架构设计。首先，我们需要理解模型是如何将自然语言映射到其潜在的知识表示空间中的。与传统的编程语言不同，自然语言充满了歧义，这要求我们在设计交互框架时，引入冗余和明确的边界约束。
      
      其次，上下文窗口的扩展带来了新的挑战和机遇。当我们拥有 100K 甚至更大的上下文时，如何有效地组织输入信息，避免“中间迷失”（Lost in the Middle）现象，成为了优化系统性能的关键所在。
      
      最后，我们将分享几个在生产环境中被证明有效的提示词架构模式，包括：角色扮演模式、逐步推理约束、以及基于验证的自我修正机制。
    `,
    date: '2026年3月2日',
    readTime: '8 min read',
    category: '人工智能',
  },
  {
    id: 2,
    title: '分布式系统中的状态管理架构',
    excerpt: '现代云原生应用在面对高并发和网络分区时，如何优雅地处理数据一致性与可用性之间的权衡。',
    content: `
      在构建大规模分布式系统时，状态管理始终是最核心也是最困难的部分。微服务架构虽然解耦了业务逻辑，但也使得状态的维护变得异常复杂。
      
      CAP 定理告诉我们，在网络分区发生时，我们必须在一致性和可用性之间做出选择。但在实际的工程实践中，我们往往通过引入最终一致性（Eventual Consistency）和补偿机制（Saga Pattern）来寻找两者之间的平衡点。
      
      这篇文章记录了我们在重构核心交易链路时的一些经验教训，特别是如何利用事件驱动架构（EDA）和 CQRS 模式来分离读写负载，从而实现系统的线性扩展。
    `,
    date: '2026年2月15日',
    readTime: '12 min read',
    category: '系统架构',
  },
  {
    id: 3,
    title: '极简主义在现代 Web 设计中的复兴',
    excerpt: '剥离多余的视觉噪音，回归内容本身。为什么越来越多的科技公司开始采用“拟物化”与“极简主义”结合的新形态。',
    content: `
      当我们审视最近的数字产品设计趋势时，会发现一种明显的“返璞归真”倾向。过去几年流行的复杂渐变、厚重的阴影和过度的微交互，正在被清晰的排版、克制的色彩和纯粹的内容展示所取代。
      
      这种设计哲学的转变，不仅仅是为了视觉上的美观，更是为了降低用户的认知负荷。在信息爆炸的时代，用户的注意力成为了最稀缺的资源。优秀的设计应该像一块透明的玻璃，让用户毫无阻碍地触达核心内容。
      
      我们将以几个领先的科技品牌为例，分析他们是如何通过精准的网格系统、优雅的衬线字体和微妙的留白，构建出充满信任感和专业性的数字体验的。
    `,
    date: '2026年1月28日',
    readTime: '6 min read',
    category: '设计思维',
  },
  {
    id: 4,
    title: '关于心流与深度工作的随笔',
    excerpt: '在这个碎片化时代，如何重建我们深度思考的能力，并在高强度的脑力劳动中保持专注与创造力。',
    content: `
      卡尔·纽波特在《深度工作》中提出，在无干扰的状态下进行专注的职业活动，能够将个人的认知能力推向极限。这不仅是创造真正价值的前提，也是获得持久职业满足感的关键。
      
      然而，现代的办公环境和即时通讯工具，似乎都在与深度工作背道而驰。我们被无数的通知和快速响应的期望撕裂。
      
      本文试图探讨几种在日常生活中构建“专注堡垒”的方法。从时间分块（Time Blocking）到物理环境的改造，以及如何刻意练习我们的注意力肌肉。
    `,
    date: '2025年12月10日',
    readTime: '10 min read',
    category: '个人生产力',
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
            Skill-Lab
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
          <button className={`text-sm px-4 py-1.5 rounded-full border ${THEME.border} ${THEME.textMain} hover:bg-[#1C1B1A] hover:text-[#FAF9F7] transition-all`}>
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
          {['文章', '项目', '关于', '订阅'].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
              className={`text-left text-lg font-serif ${THEME.textMain}`}
            >
              {item}
            </button>
          ))}
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
        <span className={`font-serif text-lg ${THEME.textMain}`}>Skill-Lab</span>
        <span className={`text-sm ${THEME.textMuted}`}>探索技术、设计与思考的边界。</span>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className={`${THEME.textMuted} hover:${THEME.textMain} transition-colors`}><Twitter size={18} /></a>
        <a href="#" className={`${THEME.textMuted} hover:${THEME.textMain} transition-colors`}><Github size={18} /></a>
        <a href="#" className={`${THEME.textMuted} hover:${THEME.textMain} transition-colors`}><Mail size={18} /></a>
      </div>
    </div>
    <div className={`max-w-5xl mx-auto px-6 mt-12 text-xs ${THEME.textMuted}`}>
      &copy; {new Date().getFullYear()} Skill-Lab. All rights reserved. Designed in the style of minimalist research labs.
    </div>
  </footer>
);

// 3. 首页视图 (Home View)
const HomeView = ({ onReadPost }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* 英雄区域 (Hero Section) */}
      <section className={`py-20 md:py-32 border-b ${THEME.border}`}>
        <div className="max-w-3xl">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] tracking-tight ${THEME.textMain} mb-6`}>
            A space for <br className="hidden md:block"/>
            <span className="italic text-[#8B8985]">continuous learning</span> & <br className="hidden md:block"/>
            systems thinking.
          </h1>
          <p className={`text-lg md:text-xl ${THEME.textMuted} leading-relaxed max-w-2xl font-light`}>
            Skill-Lab 是一个致力于研究软件工程、人工智能架构和设计哲学的数字花园。我们在这里解构复杂系统，探索通往未来的技术路径。
          </p>
        </div>
      </section>

      {/* 技能拆解卡片 (Skills Cards - 代码仓库卡片) */}
      <section className={`py-16 border-b ${THEME.border}`}>
        {/* 表头部分 */}
        <div className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-8`}>
          EXPLORE SKILLS
        </div>
        
        {/* 卡片网格部分 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill.id} 
              className={`group flex flex-col p-5 rounded-xl border ${THEME.border} bg-transparent hover:bg-[#F5F4F0] hover:border-[#D0CDC7] transition-all duration-300 cursor-pointer`}
            >
              <h3 className={`text-base font-semibold ${THEME.textMain} mb-3`}>
                {skill.name}
              </h3>
              <div className="flex items-center gap-2 mt-auto">
                <Github size={14} className={`${THEME.textMuted} opacity-60 group-hover:text-[#1C1B1A] group-hover:opacity-100 transition-all`} />
                <span className={`text-xs font-mono ${THEME.textMuted} opacity-80 group-hover:opacity-100 transition-opacity truncate`}>
                  {skill.path}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 文章列表 (Posts List) - 采用 Anthropic 常见的两栏或多栏严格网格 */}
      <section className="py-16">
        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${THEME.textMuted} mb-12`}>
          Latest Research & Essays
        </h2>
        
        <div className="flex flex-col">
          {POSTS.map((post) => (
            <article 
              key={post.id} 
              className={`group cursor-pointer border-t ${THEME.border} py-10 md:py-12 first:border-t-0 flex flex-col md:flex-row gap-4 md:gap-12 hover:bg-[#F5F4F0] -mx-6 px-6 transition-colors`}
              onClick={() => onReadPost(post)}
            >
              {/* 元数据 (左侧列，在大屏幕上) */}
              <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start gap-2">
                <span className={`text-sm tabular-nums ${THEME.textMuted}`}>{post.date}</span>
                <span className={`text-xs px-2 py-1 rounded-sm border ${THEME.border} w-fit ${THEME.textMuted} hidden md:inline-block`}>
                  {post.category}
                </span>
              </div>
              
              {/* 内容区 (右侧列) */}
              <div className="md:w-3/4 flex flex-col gap-3">
                <h3 className={`text-2xl font-serif leading-snug ${THEME.textMain} group-hover:text-[#4A4948] transition-colors`}>
                  {post.title}
                </h3>
                <p className={`text-base leading-relaxed ${THEME.textMuted} max-w-2xl`}>
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#1C1B1A] font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Read article <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

// 4. 文章详情视图 (Post View)
const PostView = ({ post, onBack }) => {
  // 回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return null;

  return (
    <article className="animate-in slide-in-from-bottom-4 fade-in duration-700 py-12 md:py-20 max-w-3xl mx-auto">
      {/* 返回按钮 */}
      <button 
        onClick={onBack}
        className={`mb-12 flex items-center gap-2 text-sm ${THEME.textMuted} hover:${THEME.textMain} transition-colors`}
      >
        <ArrowLeft size={16} />
        返回文章列表
      </button>

      {/* 文章头部 */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-sm ${THEME.textMuted}`}>{post.category}</span>
          <span className={`text-[#D0CDC7]`}>|</span>
          <span className={`text-sm tabular-nums ${THEME.textMuted}`}>{post.date}</span>
          <span className={`text-[#D0CDC7]`}>|</span>
          <span className={`text-sm ${THEME.textMuted}`}>{post.readTime}</span>
        </div>
        <h1 className={`text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] tracking-tight ${THEME.textMain}`}>
          {post.title}
        </h1>
      </header>

      {/* 摘要/引言 */}
      <div className={`text-xl md:text-2xl leading-relaxed font-serif text-[#4A4948] mb-12 pb-12 border-b ${THEME.border}`}>
        {post.excerpt}
      </div>

      {/* 文章正文 (模拟渲染内容) */}
      <div className={`prose prose-lg max-w-none font-serif ${THEME.textMain}`}>
        {post.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-8 leading-[1.8] text-lg text-[#2D2C2B]">
            {paragraph.trim()}
          </p>
        ))}
        
        {/* 模拟代码块或特殊引语结构 */}
        <blockquote className="border-l-2 border-[#1C1B1A] pl-6 my-12 italic text-[#6B6A68]">
          "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it." 
          <br/>
          <span className="text-sm not-italic mt-4 block">— Mark Weiser</span>
        </blockquote>
        
        <p className="mb-8 leading-[1.8] text-lg text-[#2D2C2B]">
          总结来说，无论是技术架构的演进还是设计哲学的回归，其核心都在于剥离复杂性，追求系统的本质与纯粹。这不仅是我们构建 Skill-Lab 的初衷，也是我们在每一个工程实践中应当坚守的准则。
        </p>
      </div>

      {/* 底部互动区 */}
      <div className={`mt-20 pt-8 border-t ${THEME.border} flex justify-between items-center`}>
        <div className="flex items-center gap-4">
          <span className={`text-sm font-medium ${THEME.textMain}`}>分享文章</span>
          <button className={`p-2 rounded-full hover:bg-[#EAE8E4] text-[#6B6A68] transition-colors`}><Twitter size={18} /></button>
          <button className={`p-2 rounded-full hover:bg-[#EAE8E4] text-[#6B6A68] transition-colors`}><Mail size={18} /></button>
        </div>
        <button 
          onClick={onBack}
          className={`text-sm ${THEME.textMain} hover:underline underline-offset-4`}
        >
          阅读下一篇
        </button>
      </div>
    </article>
  );
};

// --- 主应用组件 ---
export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'post'
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadPost = (post) => {
    setSelectedPost(post);
    setCurrentView('post');
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedPost(null);
  };

  return (
    // 最外层容器：应用整体的背景色、默认文本颜色和防锯齿优化
    <div className={`min-h-screen ${THEME.bg} ${THEME.textMain} antialiased selection:bg-[#EAE8E4] selection:text-[#1C1B1A]`}>
      
      <Header 
        onNavigate={handleNavigateHome} 
        currentView={currentView} 
      />
      
      <main className="max-w-5xl mx-auto px-6">
        {currentView === 'home' ? (
          <HomeView onReadPost={handleReadPost} />
        ) : (
          <PostView post={selectedPost} onBack={handleNavigateHome} />
        )}
      </main>

      <Footer />
      
    </div>
  );
}