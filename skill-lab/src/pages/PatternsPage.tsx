import { useState } from 'react';
import { Link } from 'react-router-dom';
import { patterns, getSuccessFormula } from '../data/patterns';
import { skills } from '../data/skills';
import type { PatternData } from '../types';

type CategoryFilter = PatternData['category'] | 'all';

const categoryLabels: Record<PatternData['category'], string> = {
  structure: '结构模式',
  value: '价值模式',
  psychology: '心理模式',
  failure: '失败模式',
};

export function PatternsPage() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filtered =
    filter === 'all'
      ? patterns
      : patterns.filter((p) => p.category === filter);

  const successFormula = getSuccessFormula();

  const structureCount = patterns.filter((p) => p.category === 'structure').length;
  const psychCount = patterns.filter((p) => p.category === 'psychology').length;
  const valueCount = patterns.filter((p) => p.category === 'value').length;
  const failCount = patterns.filter((p) => p.category === 'failure').length;

  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-4">
            Research Summary
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.15] tracking-tight text-ink mb-6">
            Patterns
          </h1>
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl font-light">
            从 {skills.length} 个 Skills 中提炼的高频结构模式、成功公式和常见失败模式。
          </p>
        </div>
      </section>

      {/* Success Formula */}
      <section className="py-16 border-b border-border">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-8">
          成功 Skill 公式
        </h2>
        <div className="border border-border rounded-xl p-8 bg-surface-1">
          <p className="text-lg font-mono text-ink leading-relaxed mb-4">
            {successFormula}
          </p>
          <p className="text-sm text-ink-muted">
            出现频率 ≥ 4/6 的结构模式组合。几乎所有高评分 skill 都包含这些要素。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {[
            { count: structureCount, label: '结构模式' },
            { count: valueCount, label: '价值模式' },
            { count: psychCount, label: '心理模式' },
            { count: failCount, label: '失败模式' },
          ].map((stat) => (
            <div key={stat.label} className="border border-border rounded-xl p-5 text-center">
              <p className="text-2xl font-serif font-semibold text-ink">{stat.count}</p>
              <p className="text-2xs text-ink-faint mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + Patterns */}
      <section className="py-16">
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <span className="text-2xs text-ink-faint uppercase tracking-widest mr-1">
            筛选
          </span>
          <button
            onClick={() => setFilter('all')}
            className={`text-sm px-3 py-1 rounded-full border transition-all ${
              filter === 'all'
                ? 'border-ink text-ink'
                : 'border-border text-ink-muted hover:border-border-strong hover:text-ink'
            }`}
          >
            全部
          </button>
          {(Object.keys(categoryLabels) as PatternData['category'][]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm px-3 py-1 rounded-full border transition-all ${
                filter === cat
                  ? 'border-ink text-ink'
                  : 'border-border text-ink-muted hover:border-border-strong hover:text-ink'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          {filtered.map((pattern) => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PatternCard({ pattern }: { pattern: PatternData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group border-t border-border py-8 cursor-pointer transition-colors first:border-t-0 ${
        expanded ? 'bg-surface-1 -mx-6 px-6' : 'hover:bg-surface-1 -mx-6 px-6'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 rounded-sm border border-border text-ink-faint">
              {categoryLabels[pattern.category]}
            </span>
            <span className="text-2xs font-mono text-ink-faint">
              {pattern.frequency}/{pattern.totalSkills} skills
            </span>
          </div>
          <h3 className="text-xl font-serif font-medium text-ink">
            {pattern.nameZh}
          </h3>
          <p className="text-2xs font-mono text-ink-faint mt-0.5">{pattern.name}</p>
        </div>

        <div className="flex items-center gap-1 shrink-0 ml-6 mt-2">
          {Array.from({ length: pattern.totalSkills }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-6 rounded-sm transition-colors ${
                i < pattern.frequency
                  ? 'bg-ink-faint'
                  : 'bg-surface-3'
              }`}
            />
          ))}
        </div>
      </div>

      {expanded && (
        <div className="mt-6 pt-6 border-t border-border fade-in" onClick={(e) => e.stopPropagation()}>
          <p className="text-base text-ink-muted leading-relaxed mb-6 max-w-2xl">
            {pattern.description}
          </p>

          <div className="space-y-3 mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">
              实例
            </p>
            {pattern.examples.map((ex, i) => (
              <p key={i} className="text-sm text-ink-muted pl-5 border-l-2 border-ink-faint/30">
                {ex}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mr-1">
              涉及
            </p>
            {pattern.skillIds.map((sid) => {
              const s = skills.find((sk) => sk.id === sid);
              return (
                <Link
                  key={sid}
                  to={`/skill/${sid}`}
                  className="tag-pill hover:tag-pill-active transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {s?.name || sid}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
