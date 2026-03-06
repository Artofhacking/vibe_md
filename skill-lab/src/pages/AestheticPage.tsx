import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aesthetics } from '../data/aesthetics';

export function AestheticPage() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const item = aesthetics.find((a) => a.id === id);

  if (!item) {
    return (
      <div className="py-20 text-center text-ink-faint font-serif text-lg">
        规范不存在
      </div>
    );
  }

  return (
    <article className="fade-in py-12 md:py-20 max-w-3xl mx-auto">
      <Link
        to="/"
        className="mb-12 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
      >
        <ArrowRight size={16} className="rotate-180" />
        返回上一级
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-mono font-semibold text-ink">{item.title}</span>
          <span className="text-border">|</span>
          <span className="text-xs uppercase tracking-wider text-ink-muted">{item.type} Protocol</span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed text-ink mb-12">
          "{item.desc}"
        </h1>
      </header>

      <div className="mt-12 border-t border-border pt-12">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-8">
          Design Tokens / 核心设计令牌
        </h2>

        <div className="flex flex-col gap-6">
          {item.tokens?.map((token, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 rounded-xl border border-border bg-surface-0/40"
            >
              <div className="md:w-1/3 flex flex-col gap-2 shrink-0">
                <span className="text-sm font-semibold text-ink">{token.name}</span>

                <div className="flex items-center gap-3">
                  {item.type === 'Color' && (
                    <div className="w-5 h-5 rounded-full border border-border shadow-sm" style={{ backgroundColor: token.value }}></div>
                  )}
                  <span className="font-mono text-xs px-2 py-1 bg-surface-1 text-ink-muted rounded border border-border">
                    {token.value}
                  </span>
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-sm leading-relaxed text-ink-muted">{token.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
