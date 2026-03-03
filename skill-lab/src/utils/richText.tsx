import type { ReactNode } from 'react';

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*(.+?)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

export function RichText({ text, className }: { text: string; className?: string }) {
  const blocks = text.split('\n\n');

  return (
    <div className={className}>
      {blocks.map((block, i) => {
        const lines = block.split('\n').filter((l) => l.trim());

        const isOrdered = lines.length > 0 && lines.every((l) => /^\d+\.\s/.test(l.trim()));
        if (isOrdered) {
          return (
            <ol key={i} className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
              {lines.map((line, j) => (
                <li key={j} className="leading-relaxed pl-1" style={{ fontSize: '1.0625rem' }}>
                  {renderInline(line.replace(/^\d+\.\s*/, ''))}
                </li>
              ))}
            </ol>
          );
        }

        const isUnordered = lines.length > 0 && lines.every((l) => l.trim().startsWith('- '));
        if (isUnordered) {
          return (
            <ul key={i} className="list-disc pl-5 mb-5 space-y-2 text-ink-muted">
              {lines.map((line, j) => (
                <li key={j} className="leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                  {renderInline(line.replace(/^-\s*/, ''))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-ink-muted leading-relaxed mb-5 max-w-[68ch]" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
