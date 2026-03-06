import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

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
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 6000);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface-0/90 backdrop-blur-sm border-b border-border transition-all">
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-5 h-5 bg-ink rounded-[4px] group-hover:bg-ink-muted transition-colors" />
            <span className="font-display text-xl tracking-tight font-normal text-ink">
              Vibe.md
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {['Skills', 'Patterns', 'About'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Skills' ? '/' : item === 'Patterns' ? '/patterns' : '#'}
                  className="text-sm tracking-wide text-ink-muted hover:text-ink transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <button
              onClick={handleSubscribe}
              className="text-sm px-4 py-1.5 rounded-full border border-border text-ink hover:bg-ink hover:text-surface-0 transition-all"
            >
              订阅更新
            </button>

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
              <X size={20} className="text-ink" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface-0 border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
            {['Skills', 'Patterns', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Skills' ? '/' : item === 'Patterns' ? '/patterns' : '#'}
                onClick={() => setMobileOpen(false)}
                className="text-left text-lg font-serif text-ink"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => { handleSubscribe(); setMobileOpen(false); }}
              className="text-left text-lg font-serif text-ink-muted hover:text-ink"
            >
              订阅更新
            </button>
            <button
              onClick={() => { onToggleTheme(); setMobileOpen(false); }}
              className="text-left text-lg font-serif text-ink-muted"
            >
              {theme === 'light' ? '深色模式' : '浅色模式'}
            </button>
          </div>
        )}
      </header>

      {/* 订阅成功 Toast 弹窗 */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-ink text-surface-0 p-5 rounded-xl shadow-2xl z-50 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex items-start gap-3">
            <span className="text-xl">🧠</span>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-sm tracking-wide">脑机接口同步成功</h4>
              <p className="text-xs leading-relaxed opacity-90 text-surface-2">
                你的海马体表示已经死记硬背下了这个极其优雅、简短且朗朗上口的域名：
              </p>
              <code className="text-[10px] bg-surface-3 p-2 rounded text-surface-0 break-all font-mono shadow-inner border border-surface-2">
                {window.location.href}
              </code>
              <p className="text-xs opacity-80 italic mt-1 text-surface-2">
                它说下次绝不会忘（大概）。
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-auto text-surface-2 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
