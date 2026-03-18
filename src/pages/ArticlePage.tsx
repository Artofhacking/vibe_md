import { useParams, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { articles } from '../data/articles';

// Lazy load all article components
const NineObservationsAgentsPage = lazy(() =>
  import('./articles/NineObservationsAgentsPage').then((m) => ({
    default: m.NineObservationsAgentsPage,
  }))
);
const WhatAiCannotDoPage = lazy(() =>
  import('./articles/WhatAiCannotDoPage').then((m) => ({
    default: m.WhatAiCannotDoPage,
  }))
);
const ScarceHumanityInAiEraPage = lazy(() =>
  import('./articles/ScarceHumanityInAiEraPage').then((m) => ({
    default: m.ScarceHumanityInAiEraPage,
  }))
);
const DanKoeOnePersonBusinessPage = lazy(() =>
  import('./articles/DanKoeOnePersonBusinessPage').then((m) => ({
    default: m.DanKoeOnePersonBusinessPage,
  }))
);
const SkillCreatorEvalBenchmarkUpgradePage = lazy(() =>
  import('./articles/SkillCreatorEvalBenchmarkUpgradePage').then((m) => ({
    default: m.SkillCreatorEvalBenchmarkUpgradePage,
  }))
);
const WorldClassAgenticEngineerPage = lazy(() =>
  import('./articles/WorldClassAgenticEngineerPage').then((m) => ({
    default: m.WorldClassAgenticEngineerPage,
  }))
);
const ObsidianClaudeCodeVaultPage = lazy(() =>
  import('./articles/ObsidianClaudeCodeVaultPage').then((m) => ({
    default: m.ObsidianClaudeCodeVaultPage,
  }))
);
const ModularizeHabitsWithSkillsPage = lazy(() =>
  import('./articles/ModularizeHabitsWithSkillsPage').then((m) => ({
    default: m.ModularizeHabitsWithSkillsPage,
  }))
);
const CliNativeLanguageOfAiAgentsPage = lazy(() =>
  import('./articles/CliNativeLanguageOfAiAgentsPage').then((m) => ({
    default: m.CliNativeLanguageOfAiAgentsPage,
  }))
);
const McpIsDeadLongLiveCliPage = lazy(() =>
  import('./articles/McpIsDeadLongLiveCliPage').then((m) => ({
    default: m.McpIsDeadLongLiveCliPage,
  }))
);

// Map component path to lazy-loaded component
const articleComponentMap: Record<string, React.ComponentType> = {
  NineObservationsAgentsPage,
  WhatAiCannotDoPage,
  ScarceHumanityInAiEraPage,
  DanKoeOnePersonBusinessPage,
  SkillCreatorEvalBenchmarkUpgradePage,
  WorldClassAgenticEngineerPage,
  ObsidianClaudeCodeVaultPage,
  ModularizeHabitsWithSkillsPage,
  CliNativeLanguageOfAiAgentsPage,
  McpIsDeadLongLiveCliPage,
};

function ArticleLoader() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const articleId = parseInt(id, 10);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const ArticleComponent = articleComponentMap[article.componentPath];

  if (!ArticleComponent) {
    return <Navigate to="/" replace />;
  }

  return <ArticleComponent />;
}

export function ArticlePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-ink-muted">Loading article...</div>
        </div>
      }
    >
      <ArticleLoader />
    </Suspense>
  );
}
