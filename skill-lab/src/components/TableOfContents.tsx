import { useState, useEffect } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

const defaultItems: TocItem[] = [
  { id: 'intro', label: '它是什么' },
  { id: 'highlights', label: '精彩之处' },
  { id: 'structure-logic', label: '结构逻辑' },
  { id: 'pattern', label: '写作模式' },
  { id: 'reverse', label: '同类构建' },
  { id: 'improvements', label: '改进空间' },
  { id: 'takeaways', label: '启发' },
];

interface Props {
  items?: TocItem[];
}

export function TableOfContents({ items }: Props) {
  const tocItems = items || defaultItems;
  const [activeId, setActiveId] = useState(tocItems[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <nav className="hidden xl:block sticky top-24 w-44 shrink-0 self-start">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-faint mb-4">
        目录
      </p>
      <ul className="space-y-1 border-l border-border">
        {tocItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block text-sm py-1.5 pl-4 -ml-px transition-all duration-200 ${
                activeId === id
                  ? 'text-ink font-medium border-l-2 border-ink'
                  : 'text-ink-faint hover:text-ink-muted border-l-2 border-transparent'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
