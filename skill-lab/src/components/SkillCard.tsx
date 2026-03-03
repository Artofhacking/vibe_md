import { Link } from 'react-router-dom';
import type { SkillData } from '../types';

interface SkillCardProps {
  skill: SkillData;
}

const archetypeLabel: Record<string, string> = {
  workflow: '工作流型',
  database: '知识库型',
  agent: '代理型',
  guideline: '哲学型',
  methodology: '方法论型',
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Link
      to={`/skill/${skill.id}`}
      className="group cursor-pointer border-t border-border py-10 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 hover:bg-surface-1 -mx-6 px-6 transition-colors first:border-t-0"
    >
      <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start gap-2">
        <span className="text-sm tabular-nums text-ink-muted">
          {skill.meta.lineCount} 行
        </span>
        <span className="text-xs px-2 py-1 rounded-sm border border-border w-fit text-ink-faint hidden md:inline-block">
          {archetypeLabel[skill.meta.archetype]}
        </span>
      </div>

      <div className="md:w-3/4 flex flex-col gap-3">
        <h3 className="text-2xl font-serif leading-snug text-ink group-hover:text-ink-muted transition-colors">
          {skill.name}
        </h3>
        <p className="text-base leading-relaxed text-ink-muted max-w-2xl">
          {skill.narrative.hook}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-1">
          {skill.meta.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-ink font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2.5 group-hover:translate-x-0 duration-300">
          阅读分析
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
