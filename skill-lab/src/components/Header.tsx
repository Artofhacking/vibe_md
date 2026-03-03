import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const navItems = [
  { to: '/', label: 'Skills' },
  { to: '/patterns', label: 'Patterns' },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-0/90 backdrop-blur-sm border-b border-border transition-all">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 bg-ink rounded-[4px] group-hover:bg-ink-muted transition-colors" />
          <span className="font-display text-xl tracking-tight font-normal text-ink">
            AI Read Lab
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === item.to
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={onToggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-md text-ink-muted hover:text-ink hover:bg-surface-2 transition-colors"
            aria-label="切换主题"
          >
            {theme === 'light' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" />
                <circle cx="8" cy="8" r="3" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13.5 8.5a5.5 5.5 0 0 1-7-7A5.5 5.5 0 1 0 13.5 8.5z" />
              </svg>
            )}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface-0 border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="text-left text-lg font-serif text-ink"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => { onToggleTheme(); setMobileOpen(false); }}
            className="text-left text-lg font-serif text-ink-muted"
          >
            {theme === 'light' ? '深色模式' : '浅色模式'}
          </button>
        </div>
      )}
    </header>
  );
}
