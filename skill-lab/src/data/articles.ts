export interface ArticleData {
  id: string;
  title: string;
  originalTitle: string;
  tags: string[];
  date: string;
  summary: string;
}

export const articles: ArticleData[] = [
  {
    id: '9-observations-building-ai-agents',
    title: '构建 AI Agent 的九条实战心得',
    originalTitle: '9 Observations from Building with AI Agents',
    tags: ['AI Agent', '工程实践'],
    date: '2026-03-03',
    summary:
      '从模型选择策略到多模型对抗协作，从提示词热更新到闭环自动优化——一位深耕一年的工程师浓缩出的九条 Agent 开发实战观察。',
  },
];
