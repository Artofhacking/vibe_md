import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { skills } from '../data/skills';
import { articles } from '../data/articles';
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

const DIMENSIONS = [
  {
    id: 'structure',
    title: '结构拆解',
    desc: '分析组织方式、步骤设计与信息架构。好的结构让读者和 AI 都知道"该做什么"。',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'psychology',
    title: '心理驱动',
    desc: '研究好内容如何消除焦虑、制造确定性、赋予用户"我变强了"的感觉。',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'patterns',
    title: '写作模式',
    desc: '提炼可复用的结构公式、成功模板与失败反模式。让好东西可以被复制。',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    to: '/patterns',
  },
  {
    id: 'value',
    title: '价值密度',
    desc: '评估信息压缩度、决策成本降低与"拿来就用"的程度。一句顶一万句。',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const archetypeLabel: Record<string, string> = {
  workflow: '工作流型',
  database: '知识库型',
  agent: '代理型',
  guideline: '哲学型',
  methodology: '方法论型',
};

const archetypeCounts = skills.reduce<Record<string, number>>((acc, s) => {
  acc[s.meta.archetype] = (acc[s.meta.archetype] || 0) + 1;
  return acc;
}, {});

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
      <section className="py-20 md:py-32 border-b border-border">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.15] tracking-tight text-ink mb-6">
            Dissecting <br className="hidden md:block" />
            <span className="italic text-ink-faint">what works</span> in <br className="hidden md:block" />
            the AI era.
          </h1>
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl font-light">
            拆解 AI 时代真正好用的东西——Skills、技术文章、工具与实践。研究它们的结构、心理驱动和可复用模式，搞清楚「为什么好用」。
          </p>
          <p className="text-sm text-ink-faint mt-4">
            {skills.length} Skills · {articles.length} Articles · 12 Patterns
          </p>
        </div>
      </section>

      {/* Research Dimensions */}
      <section className="py-16 border-b border-border">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-8">
          Research Dimensions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIMENSIONS.map((dim) => {
            const Wrapper = dim.to ? Link : 'div';
            const wrapperProps = dim.to ? { to: dim.to } : {};
            return (
              <Wrapper
                key={dim.id}
                {...(wrapperProps as any)}
                className="group flex flex-col p-6 rounded-xl border border-border bg-transparent hover:bg-surface-1 hover:border-border-strong transition-all duration-300 cursor-pointer"
              >
                <div className="mb-5 text-ink opacity-60 group-hover:opacity-100 transition-opacity">
                  {dim.icon}
                </div>
                <h3 className="text-lg font-serif font-medium text-ink mb-2">
                  {dim.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {dim.desc}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* ── Dual Track: Skill Lab + Read Lab ── */}
      <section className="py-16 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skill Lab */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              Skill Lab
            </h2>
            <p className="text-sm text-ink-muted mb-6">
              拆解 AI Skills 的结构、设计与心理驱动
            </p>
            <div className="flex flex-col gap-3">
              {skills.map((skill) => (
                <Link
                  key={skill.id}
                  to={`/skill/${skill.id}`}
                  className="group flex flex-col p-4 rounded-xl border border-border bg-transparent hover:bg-surface-1 hover:border-border-strong transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-ink group-hover:text-ink-muted transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-sm border border-border text-ink-faint shrink-0 ml-3">
                      {archetypeLabel[skill.meta.archetype]}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-1">
                    {skill.surface.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Read Lab */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              Read Lab
            </h2>
            <p className="text-sm text-ink-muted mb-6">
              转化优秀技术文章为中文知识库资料
            </p>
            <div className="flex flex-col gap-3">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/skill/${article.id}`}
                  className="group flex flex-col p-4 rounded-xl border border-border bg-transparent hover:bg-surface-1 hover:border-border-strong transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold text-ink mb-1 group-hover:text-ink-muted transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-ink-faint font-mono mb-2">
                    {article.originalTitle}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-sm border border-border text-ink-faint"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs font-mono text-ink-faint opacity-80 ml-auto">
                      {article.date}
                    </span>
                  </div>
                </Link>
              ))}
              {articles.length === 0 && (
                <div className="text-center py-12 text-ink-faint font-serif italic text-sm">
                  Coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed List */}
      <section className="py-16">
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
  );
}
