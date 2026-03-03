import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SkillPage } from './pages/SkillPage';
import { PatternsPage } from './pages/PatternsPage';
import { FrontendDesignPage } from './pages/skills/FrontendDesignPage';
import { UiUxProMaxPage } from './pages/skills/UiUxProMaxPage';
import { BaoyuCoverImagePage } from './pages/skills/BaoyuCoverImagePage';
import { WebDesignGuidelinesPage } from './pages/skills/WebDesignGuidelinesPage';
import { SkillCreatorPage } from './pages/skills/SkillCreatorPage';
import { NineObservationsAgentsPage } from './pages/skills/NineObservationsAgentsPage';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-surface-0 text-ink antialiased">
      <Header theme={theme} onToggleTheme={toggle} />

      <main className="max-w-content mx-auto px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skill/frontend-design" element={<FrontendDesignPage />} />
          <Route path="/skill/ui-ux-pro-max" element={<UiUxProMaxPage />} />
          <Route path="/skill/baoyu-cover-image" element={<BaoyuCoverImagePage />} />
          <Route path="/skill/web-design-guidelines" element={<WebDesignGuidelinesPage />} />
          <Route path="/skill/skill-creator" element={<SkillCreatorPage />} />
          <Route path="/skill/9-observations-building-ai-agents" element={<NineObservationsAgentsPage />} />
          <Route path="/skill/:id" element={<SkillPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
        </Routes>
      </main>

      <footer className="border-t border-border mt-24 py-12">
        <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-display text-lg text-ink">AI Read Lab</span>
            <span className="text-sm text-ink-muted">
              拆解 AI 时代真正好用的东西。
            </span>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 mt-12 text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} AI Read Lab. Designed in the style of minimalist research labs.
        </div>
      </footer>
    </div>
  );
}
