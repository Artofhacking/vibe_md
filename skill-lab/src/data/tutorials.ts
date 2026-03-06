export interface ChapterMeta {
  title: string;
  duration?: string;
  hasPage?: boolean;
}

export interface TutorialData {
  id: string;
  tool: string;
  title: string;
  desc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  chapters: number;
  chapterList?: ChapterMeta[];
}

export const tutorials: TutorialData[] = [
  {
    id: 'tut-claude',
    tool: 'Claude Code',
    title: '终端里的全栈 Agent：Claude Code 完全上手指南',
    desc: '当 AI 拿到了整个 Repo 的读写权限和终端控制权，代码重构、跨文件编辑、自动化测试都变成一句话的事。这是目前最强 CLI 编码 Agent 的实战教程。',
    level: 'Advanced',
    chapters: 5,
  },
  {
    id: 'tut-openclaw',
    tool: 'OpenClaw',
    title: 'AI 不该只活在浏览器标签页里',
    desc: '每天打开 ChatGPT 几十次，用完关掉——这不叫 AI 助理，这叫 AI 问答机。OpenClaw 是一个开源的自托管 AI 网关：一个 Gateway 进程打通 WhatsApp、Telegram、Discord、iMessage，让 Agent 住进你已有的聊天 App 里。自己的数据、自己的机器、永远在线。从架构认知到工作区记忆、心跳巡检、会话管理，搭一个真正属于你的 AI 分身。',
    level: 'Intermediate',
    chapters: 2,
    chapterList: [
      { title: '私人助理：从零搭起来', duration: '15 min', hasPage: true },
      { title: 'CLI 入门引导：一条命令配好一切', duration: '12 min', hasPage: true },
    ],
  },
  {
    id: 'tut-obsidian',
    tool: 'Obsidian',
    title: '让知识库自己长出结构：Obsidian × AI 第二大脑实践',
    desc: '笔记不只是记录。用双链图谱配合本地大模型，实现自动打标签、语义关联推荐与每日智能总结——你的知识库会自己涌现出你没想到的连接。',
    level: 'Beginner',
    chapters: 3,
  },
  {
    id: 'tut-codex',
    tool: 'Cursor / Copilot',
    title: '从补全到协作：AI 辅助编码的正确打开方式',
    desc: '忘掉"按 Tab 接受补全"的初级用法。学习注释驱动开发、上下文锚定与意图描述，把 Cursor 和 Copilot 从自动补全工具升级为真正的编程搭档。',
    level: 'Intermediate',
    chapters: 6,
  },
];
