import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { TableOfContents, type TocItem } from '../TableOfContents';

interface ArticleLayoutProps {
  children: ReactNode;
  tocItems: TocItem[];
  backTo?: string;
  backLabel?: string;
  footerLeftTo?: string;
  footerLeftLabel?: string;
  footerRightTo?: string;
  footerRightLabel?: string;
}

export function ArticleLayout({
  children,
  tocItems,
  backTo = '/',
  backLabel = '返回 Skills',
  footerLeftTo,
  footerLeftLabel,
  footerRightTo = '/patterns',
  footerRightLabel = '查看 Patterns →',
}: ArticleLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fade-in py-12 md:py-20">
      <div className="max-w-content mx-auto px-6 mb-12">
        <Link
          to={backTo}
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </Link>
      </div>

      <div className="max-w-content mx-auto px-6 flex gap-12">
        <TableOfContents items={tocItems} />

        <article className="flex-1 min-w-0 max-w-3xl mx-auto prose-lab">
          {children}

          <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
            <Link to={footerLeftTo ?? backTo} className="text-sm text-ink hover:underline underline-offset-4">
              {footerLeftLabel ?? `← ${backLabel}`}
            </Link>
            <Link to={footerRightTo} className="text-sm text-ink hover:underline underline-offset-4">
              {footerRightLabel}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
