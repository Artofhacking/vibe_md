import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { skills } from '../data/skills';
import { articles } from '../data/articles';
import { tutorials } from '../data/tutorials';
import { aesthetics } from '../data/aesthetics';
import type { SortKey } from '../types';
import { SkillCard } from '../components/SkillCard';

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'impact', label: '影响力' },
  { key: 'structure', label: '结构分' },
  { key: 'value', label: '价值分' },
  { key: 'psychology', label: '心理分' },
  { key: 'name', label: '名称' },
];

const allTags = Array.from(
  new Set(skills.flatMap((s) => s.meta.tags))
).sort();

const archetypeLabel: Record<string, string> = {
  workflow: '工作流型',
  database: '知识库型',
  agent: '代理型',
  guideline: '哲学型',
  methodology: '方法论型',
};

// 将 articles 数据映射为页面所需格式
const POSTS = articles.map((article) => ({
  id: article.id,
  title: article.title,
  englishTitle: article.englishTitle || article.originalTitle,
  excerpt: article.summary,
  date: article.date,
  readTime: article.readTime || '5 min read',
  tags: article.tags,
  category: article.category || 'AI 工具',
}));

export function HomePage() {
  const [sortBy, setSortBy] = useState<SortKey>('impact');
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let result = [...skills];

    if (selectedTags.size > 0) {
      result = result.filter((s) =>
        s.meta.tags.some((t) => selectedTags.has(t))
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'impact':
          return b.surface.impact.overall - a.surface.impact.overall;
        case 'structure':
          return b.structure.score - a.structure.score;
        case 'value':
          return b.valueDensity.score - a.valueDensity.score;
        case 'psychology':
          return b.psychology.score - a.psychology.score;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [sortBy, selectedTags]);

  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display leading-[1.15] tracking-tight text-ink mb-6">
            Written for <span className="italic text-ink-faint">human intuition</span>. <br className="hidden md:block" />
            Structured for <span className="italic text-ink-faint">machine context</span>.
          </h1>
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl font-light">
            在 Vibe Coding 时代，Markdown 是人类与 AI 共享的底层协议。这里的每一份工作流、工具链指南和开发随笔，既为你提供灵感，也随时准备好作为高优上下文被你的 Agent 读取。
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-24 pb-20">
        {/* 第一层：CONTEXT PATTERNS (原 SKILL LAB) */}
        <section>
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              CONTEXT PATTERNS
            </h2>
            <p className="text-sm text-ink-muted">高维度的 Prompt 蓝图、系统提示词与架构切片</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.slice(0, 6).map((skill) => (
              <Link
                key={skill.id}
                to={`/skill/${skill.id}`}
                className="group flex flex-col justify-between p-6 rounded-xl border border-border bg-surface-0/40 hover:bg-surface-1 hover:border-border-strong transition-all duration-300 cursor-pointer shadow-sm h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base font-mono font-semibold text-ink pr-4">
                    {skill.name}
                  </h3>
                  <span className="shrink-0 text-[10px] px-2 py-1 rounded-[4px] border border-border text-ink-faint bg-surface-0">
                    {archetypeLabel[skill.meta.archetype]}
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mt-auto">
                  {skill.surface.tagline}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-start">
            <Link
              to="/patterns"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              View all context patterns{' '}
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* 第二层：AGENT WORKFLOWS (TUTORIALS) */}
        <section>
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              AGENT WORKFLOWS
            </h2>
            <p className="text-sm text-ink-muted">工欲善其事，必先利其器——Vibe Coding 时代的核心工具实战</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tut) => (
              <Link
                key={tut.id}
                to={`/tutorial/${tut.id}`}
                className="group flex flex-col p-6 md:p-8 rounded-xl border border-border bg-transparent hover:bg-surface-0 hover:border-border-strong hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4 border-b border-dashed border-border pb-4">
                  <span className="font-mono text-sm font-semibold text-ink">
                    {tut.tool}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${tut.level === 'Advanced' ? 'bg-ink' : tut.level === 'Intermediate' ? 'bg-ink-muted' : 'bg-ink-faint'}`}></span>
                    <span className="text-[11px] uppercase tracking-wider text-ink-muted">
                      {tut.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-ink group-hover:text-ink-muted transition-colors mb-3">
                  {tut.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  {tut.desc}
                </p>

                <div className="mt-auto flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-surface-1 text-ink text-xs font-bold">
                    {tut.chapters}
                  </span>
                  <span className="text-xs font-medium text-ink-muted">
                    章节 (Chapters)
                  </span>
                  <ArrowRight size={14} className="ml-auto text-ink-muted opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-start">
            <Link
              to="/tutorials"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              View all workflows{' '}
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* 第三层：AESTHETIC PROTOCOLS */}
        <section>
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              AESTHETIC PROTOCOLS
            </h2>
            <p className="text-sm text-ink-muted">Vibe Coding 时代的极简美学、色彩空间与排版规范</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aesthetics.map((item) => (
              <Link
                key={item.id}
                to={`/aesthetic/${item.id}`}
                className="group flex flex-col p-5 rounded-xl border border-border bg-surface-0/40 hover:bg-surface-1 hover:border-border-strong transition-all duration-300 cursor-pointer shadow-sm h-full"
              >
                <div className="h-24 mb-5 rounded-lg border border-border flex items-center justify-center overflow-hidden bg-surface-0/50 relative">
                  {item.type === 'Color' && typeof item.preview === 'object' ? (
                    <div className="flex w-full h-full">
                      {(item.preview as string[]).map((c, i) => (
                        <div key={i} className="flex-1" style={{ backgroundColor: c }}></div>
                      ))}
                    </div>
                  ) : (
                    <span className={`text-4xl ${item.type === 'Typography' ? 'font-serif text-ink' : 'font-mono text-ink-muted'}`}>
                      {item.preview as string}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-mono font-bold text-ink truncate pr-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed mt-auto">
                  {item.shortDesc}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-start">
            <Link
              to="/aesthetics"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              View all design tokens{' '}
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* 第四层：RESEARCH LOGS */}
        <section>
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              RESEARCH LOGS
            </h2>
            <p className="text-sm text-ink-muted">关于开发范式、设计哲学与人机交互的深度长文</p>
          </div>

          <div className="flex flex-col gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.id}
                to={`/article/${post.id}`}
                className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border border-border bg-surface-0/40 hover:bg-surface-1 hover:border-border-strong transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-ink group-hover:text-ink-muted transition-colors mb-2">
                    {post.title}
                  </h3>
                  <h4 className="font-mono text-xs text-ink-muted mb-4">
                    {post.englishTitle}
                  </h4>
                  <p className="text-base leading-relaxed text-ink-muted mb-6 max-w-3xl">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-dashed border-border">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 rounded-[6px] border border-border text-ink-faint bg-surface-0">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-ink font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                      阅读全文 <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <div className="md:w-48 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-3 md:pl-6 md:border-l border-border mt-4 md:mt-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">Date</span>
                    <span className="font-mono text-sm text-ink-muted">{post.date}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">Category</span>
                    <span className="text-sm text-ink-muted">{post.category}</span>
                  </div>
                  <div className="flex flex-col gap-1 hidden md:flex">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">Read Time</span>
                    <span className="text-sm text-ink-muted">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center border-t border-dashed border-border pt-12">
            <Link
              to="/articles"
              className="group flex items-center gap-2 text-sm px-6 py-2.5 rounded-full border border-border text-ink hover:border-ink transition-all"
            >
              Read full archive{' '}
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* 第五层：SKILL DEEP DIVES (原有详细列表) */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-12">
            Skill Deep Dives
          </h2>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-2xs text-ink-faint uppercase tracking-widest mr-1">
                排序
              </span>
              {sortOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSortBy(opt.key)}
                  className={`text-sm px-3 py-1 rounded-full border transition-all ${
                    sortBy === opt.key
                      ? 'border-ink text-ink'
                      : 'border-border text-ink-muted hover:border-border-strong hover:text-ink'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-2xs text-ink-faint uppercase tracking-widest mr-1">
                标签
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`tag-pill transition-colors ${
                    selectedTags.has(tag) ? 'tag-pill-active' : ''
                  }`}
                >
                  {tag}
                </button>
              ))}
              {selectedTags.size > 0 && (
                <button
                  onClick={() => setSelectedTags(new Set())}
                  className="text-2xs text-ink-faint hover:text-ink ml-2 underline underline-offset-2"
                >
                  清除
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            {filtered.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-ink-faint font-serif italic">
              没有匹配的 Skills
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
