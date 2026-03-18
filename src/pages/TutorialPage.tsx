import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import { tutorials } from '../data/tutorials';

const FALLBACK_TITLES = [
  '核心概念与心智模型',
  '环境配置与初始化',
  '核心 API 深度解析',
  '高阶工作流与进阶技巧',
  '真实项目重构演练',
  '部署、监控与自动化',
];

export function TutorialPage() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const tutorial = tutorials.find((t) => t.id === id);

  if (!tutorial) {
    return (
      <div className="py-20 text-center text-ink-faint font-serif text-lg">
        教程不存在
      </div>
    );
  }

  const chaptersList = Array.from({ length: tutorial.chapters }, (_, i) => {
    const meta = tutorial.chapterList?.[i];
    return {
      num: i + 1,
      title: meta?.title ?? `${FALLBACK_TITLES[i % FALLBACK_TITLES.length]}`,
      duration: meta?.duration ?? `${10 + i * 5} min`,
      hasPage: meta?.hasPage ?? false,
    };
  });

  return (
    <article className="fade-in py-12 md:py-20 max-w-3xl mx-auto">
      <Link
        to="/"
        className="mb-12 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
      >
        <ArrowRight size={16} className="rotate-180" />
        返回上一页
      </Link>

      <header className="mb-12 border-b border-border pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-mono font-semibold text-ink">{tutorial.tool}</span>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${tutorial.level === 'Advanced' ? 'bg-ink' : tutorial.level === 'Intermediate' ? 'bg-ink-muted' : 'bg-ink-faint'}`}></span>
            <span className="text-xs uppercase tracking-wider text-ink-muted">{tutorial.level}</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-display leading-[1.1] tracking-tight text-ink mb-6">
          {tutorial.title}
        </h1>
        <p className="text-xl leading-relaxed text-ink-muted">{tutorial.desc}</p>
      </header>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-6">
          Syllabus / 课程大纲
        </h2>
        <div className="flex flex-col gap-3">
          {chaptersList.map((ch) => {
            const inner = (
              <>
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded bg-surface-1 text-ink-muted font-mono text-xs font-bold group-hover:text-ink transition-colors">
                    {ch.num < 10 ? `0${ch.num}` : ch.num}
                  </span>
                  <span className="font-medium text-ink">{ch.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  {!ch.hasPage && (
                    <Lock size={12} className="text-ink-faint" />
                  )}
                  <span className="text-xs font-mono text-ink-muted">{ch.duration}</span>
                  <ArrowRight size={16} className={`transform group-hover:translate-x-1 transition-all ${ch.hasPage ? 'text-border group-hover:text-ink' : 'text-border/50'}`} />
                </div>
              </>
            );

            if (ch.hasPage) {
              return (
                <Link
                  key={ch.num}
                  to={`/tutorial/${tutorial.id}/${ch.num}`}
                  className="group flex items-center justify-between p-5 rounded-lg border border-border bg-surface-0/40 hover:border-border-strong hover:bg-surface-0 transition-all cursor-pointer shadow-sm"
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={ch.num}
                className="group flex items-center justify-between p-5 rounded-lg border border-border bg-surface-0/40 opacity-60 cursor-default shadow-sm"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
