import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SkillPage } from './pages/SkillPage';
import { PatternsPage } from './pages/PatternsPage';
import { TutorialPage } from './pages/TutorialPage';
import { AestheticPage } from './pages/AestheticPage';
import { FrontendDesignPage } from './pages/skills/FrontendDesignPage';
import { UiUxProMaxPage } from './pages/skills/UiUxProMaxPage';
import { BaoyuCoverImagePage } from './pages/skills/BaoyuCoverImagePage';
import { WebDesignGuidelinesPage } from './pages/skills/WebDesignGuidelinesPage';
import { SkillCreatorPage } from './pages/skills/SkillCreatorPage';
import { NineObservationsAgentsPage } from './pages/articles/NineObservationsAgentsPage';
import { WhatAiCannotDoPage } from './pages/articles/WhatAiCannotDoPage';
import { DanKoeOnePersonBusinessPage } from './pages/articles/DanKoeOnePersonBusinessPage';
import { ScarceHumanityInAiEraPage } from './pages/articles/ScarceHumanityInAiEraPage';
import { McpIsDeadLongLiveCliPage } from './pages/articles/McpIsDeadLongLiveCliPage';
import { SkillCreatorEvalBenchmarkUpgradePage } from './pages/articles/SkillCreatorEvalBenchmarkUpgradePage';
import { WorldClassAgenticEngineerPage } from './pages/articles/WorldClassAgenticEngineerPage';
import { ObsidianClaudeCodeVaultPage } from './pages/articles/ObsidianClaudeCodeVaultPage';
import { ModularizeHabitsWithSkillsPage } from './pages/articles/ModularizeHabitsWithSkillsPage';
import { CliNativeLanguageOfAiAgentsPage } from './pages/articles/CliNativeLanguageOfAiAgentsPage';
import { OpenClawPersonalAssistantPage } from './pages/tutorials/OpenClawPersonalAssistantPage';
import { OpenClawCliOnboardingPage } from './pages/tutorials/OpenClawCliOnboardingPage';

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
          <Route path="/article/9-observations-building-ai-agents" element={<NineObservationsAgentsPage />} />
          <Route path="/article/what-ai-cannot-do" element={<WhatAiCannotDoPage />} />
          <Route path="/article/dan-koe-one-person-business" element={<DanKoeOnePersonBusinessPage />} />
          <Route path="/article/scarce-humanity-in-ai-era" element={<ScarceHumanityInAiEraPage />} />
          <Route path="/article/mcp-is-dead-long-live-cli" element={<McpIsDeadLongLiveCliPage />} />
          <Route path="/article/skill-creator-eval-benchmark-upgrade" element={<SkillCreatorEvalBenchmarkUpgradePage />} />
          <Route path="/article/world-class-agentic-engineer" element={<WorldClassAgenticEngineerPage />} />
          <Route path="/article/obsidian-claude-code-vault-as-ai-context" element={<ObsidianClaudeCodeVaultPage />} />
          <Route path="/article/modularize-habits-with-skills" element={<ModularizeHabitsWithSkillsPage />} />
          <Route path="/article/cli-native-language-of-ai-agents" element={<CliNativeLanguageOfAiAgentsPage />} />
          <Route path="/tutorial/tut-openclaw/1" element={<OpenClawPersonalAssistantPage />} />
          <Route path="/tutorial/tut-openclaw/2" element={<OpenClawCliOnboardingPage />} />
          <Route path="/skill/:id" element={<SkillPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
          <Route path="/tutorial/:id" element={<TutorialPage />} />
          <Route path="/aesthetic/:id" element={<AestheticPage />} />
        </Routes>
      </main>

      <footer className="border-t border-border mt-24 py-12">
        <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-display text-lg text-ink">Vibe.md</span>
            <span className="text-sm text-ink-muted">
              为人类阅读而写，为 AI 解析而生。
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-ink-muted hover:text-ink transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="text-ink-muted hover:text-ink transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="#" className="text-ink-muted hover:text-ink transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 mt-12 text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} Vibe.md. All rights reserved. Designed for the Vibe Coding era.
        </div>
      </footer>
    </div>
  );
}
