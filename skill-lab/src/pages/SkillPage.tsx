import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { skills } from '../data/skills';
import { extractPatternsFromSkill } from '../data/patterns';
import { TableOfContents } from '../components/TableOfContents';
import { CodeBlock } from '../components/CodeBlock';
import { RichText } from '../utils/richText';

export function SkillPage() {
  const { id } = useParams<{ id: string }>();
  const skill = skills.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!skill) {
    return (
      <div className="max-w-content mx-auto px-6 py-20 text-center">
        <p className="text-ink-muted font-serif italic">Skill not found</p>
        <Link to="/" className="text-sm text-ink-muted hover:text-ink mt-4 inline-block underline underline-offset-4">
          返回首页
        </Link>
      </div>
    );
  }

  const relatedPatterns = extractPatternsFromSkill(skill.id);
  const { narrative } = skill;
  const title = skill.reportTitle || skill.name;

  return (
    <div className="fade-in py-12 md:py-20">
      {/* Back */}
      <div className="max-w-content mx-auto px-6 mb-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          返回 Skills
        </Link>
      </div>

      <div className="max-w-content mx-auto px-6 flex gap-12">
        <TableOfContents />

        <article className="flex-1 min-w-0 max-w-3xl mx-auto prose-lab">
          {/* ── Header ─────────────────────── */}
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              {skill.meta.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
              <span className="text-ink-faint">|</span>
              <span className="text-sm tabular-nums text-ink-muted">
                {skill.meta.lineCount} 行
              </span>
              <span className="text-ink-faint">|</span>
              <span className="text-sm text-ink-muted">{skill.source}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
              {title}
            </h1>
          </header>

          {/* ── Excerpt / Hook ─────────────── */}
          <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
            {narrative.hook}
          </div>

          {/* ── 它是什么 ──────────────────── */}
          <section id="intro">
            <h2>它是什么</h2>
            <RichText text={narrative.intro} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-border rounded-xl p-5">
                <p className="text-2xs text-ink-faint uppercase tracking-[0.2em] mb-2">解决的问题</p>
                <p className="text-sm text-ink-muted !mb-0">{skill.surface.problem}</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <p className="text-2xs text-ink-faint uppercase tracking-[0.2em] mb-2">目标用户</p>
                <p className="text-sm text-ink-muted !mb-0">{skill.surface.targetUser}</p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* ── 精彩之处 ──────────────────── */}
          <section id="highlights">
            <h2>它的精彩之处</h2>
            <div className="space-y-14">
              {narrative.highlights.map((h, i) => (
                <div key={i}>
                  <h3 className="flex items-baseline gap-3">
                    <span className="font-mono text-sm text-ink-faint shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {h.title}
                  </h3>

                  {h.quote && (
                    <blockquote className="!my-5">
                      <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
                        {h.quote}
                      </pre>
                    </blockquote>
                  )}

                  <RichText text={h.explanation} />

                  <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
                    <p className="text-sm text-ink !mb-0">
                      <span className="font-semibold">启发：</span>
                      {h.insight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider" />

          {/* ── 结构逻辑 ──────────────────── */}
          <section id="structure-logic">
            <h2>它的结构逻辑</h2>
            <RichText text={narrative.structureLogic} />
          </section>

          <div className="section-divider" />

          {/* ── 写作模式 ──────────────────── */}
          <section id="pattern">
            <h2>它的写作模式</h2>

            <div className="border border-border rounded-xl p-6 bg-surface-1 my-8">
              <p className="text-2xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                结构公式
              </p>
              <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
                {skill.pattern.formula}
              </p>
            </div>

            {skill.pattern.formulaElements && skill.pattern.formulaElements.length > 0 && (
              <div className="space-y-3 my-8">
                {skill.pattern.formulaElements.map((el, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-semibold text-ink shrink-0" style={{ fontSize: '1.0625rem' }}>
                      {el.name}：
                    </span>
                    <span className="text-ink-muted" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                      {el.role}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <RichText text={skill.pattern.abstractFramework} />

            {/* Inline pattern matches from narrative */}
            {narrative.patternMatches && narrative.patternMatches.length > 0 && (
              <div className="mt-8">
                <h3>匹配的已知模式</h3>
                <div className="space-y-3">
                  {narrative.patternMatches.map((match, i) => (
                    <div key={i} className="pl-5 border-l-2 border-ink-faint/30">
                      <RichText text={match} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback: link-based patterns from pattern library */}
            {(!narrative.patternMatches || narrative.patternMatches.length === 0) && relatedPatterns.length > 0 && (
              <div className="mt-8">
                <h3>匹配的已知模式</h3>
                <div className="space-y-3">
                  {relatedPatterns.map((p) => (
                    <Link
                      key={p.id}
                      to="/patterns"
                      className="block border border-border rounded-xl p-4 hover:bg-surface-1 hover:border-border-strong transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-ink">
                            {p.nameZh}
                          </span>
                          <span className="text-2xs text-ink-faint ml-2">
                            {p.name}
                          </span>
                        </div>
                        <span className="text-2xs font-mono text-ink-faint">
                          {p.frequency}/{p.totalSkills} skills
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>

          <div className="section-divider" />

          {/* ── 同类构建 ──────────────────── */}
          <section id="reverse">
            <h2>如果我们要写一个同类 skill</h2>

            {skill.reverseEngineering.intro && (
              <p className="text-ink-muted leading-relaxed mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                {skill.reverseEngineering.intro}
              </p>
            )}

            <RichText text={skill.reverseEngineering.blueprint} />

            <h3>可复制模板</h3>
            <CodeBlock
              code={skill.reverseEngineering.templateCode}
              language="markdown"
            />
          </section>

          <div className="section-divider" />

          {/* ── 改进空间 ──────────────────── */}
          <section id="improvements">
            <h2>它还可以更好</h2>

            <div className="space-y-8">
              {skill.improvements.map((imp, i) => (
                <div key={i}>
                  <p className="text-ink-muted leading-relaxed max-w-[68ch]" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                    <strong className="text-ink">{imp.gap}。</strong>
                    {imp.suggestion}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider" />

          {/* ── 启发 ──────────────────────── */}
          <section id="takeaways">
            <h2>写 skill 可以从它身上学到什么</h2>

            <div className="space-y-6">
              {narrative.takeaways.map((t, i) => {
                const boldMatch = t.match(/^\*\*(.+?)\*\*(.+)$/s);
                if (boldMatch) {
                  return (
                    <p key={i} className="text-ink-muted leading-relaxed max-w-[68ch]" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                      <strong className="text-ink">{boldMatch[1]}</strong>
                      {boldMatch[2]}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-ink-muted leading-relaxed max-w-[68ch]" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                    {t}
                  </p>
                );
              })}
            </div>
          </section>

          {/* ── Bottom nav ────────────────── */}
          <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
            <Link
              to="/"
              className="text-sm text-ink hover:underline underline-offset-4"
            >
              ← 返回 Skills
            </Link>
            <Link
              to="/patterns"
              className="text-sm text-ink hover:underline underline-offset-4"
            >
              查看 Patterns →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
