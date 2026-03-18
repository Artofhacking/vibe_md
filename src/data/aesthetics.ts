export interface Token {
  name: string;
  value: string;
  usage: string;
}

export interface AestheticData {
  id: string;
  title: string;
  shortDesc: string;
  desc: string;
  type: 'Color' | 'Typography' | 'Iconography' | 'Layout';
  preview: string | string[];
  tokens?: Token[];
}

export const aesthetics: AestheticData[] = [
  {
    id: 'aes-color',
    title: 'Minimal_Palette.css',
    shortDesc: '解构 Claude 风格的低对比度暖色调空间，探讨护眼与沉浸感的平衡。',
    desc: '只要你不用纯黑 #000 闪瞎用户的眼睛，我们就还是朋友。退火、降噪、加一点高级的暖灰色，懂？',
    type: 'Color',
    preview: ['#FAF9F7', '#EAE8E4', '#A3A09A', '#1C1B1A'],
    tokens: [
      { name: 'Background (画布白)', value: '#FAF9F7', usage: '全局页面的底层画布，带有极弱的纸张暖意，缓解视疲劳。' },
      { name: 'Border (分割灰)', value: '#EAE8E4', usage: '极弱的边界分割，完全替代沉重的盒阴影（Box-shadow）。' },
      { name: 'Muted Text (静音灰)', value: '#6B6A68', usage: '用于次要信息与元数据，主动降低非核心信息的视觉噪音。' },
      { name: 'Main Text (柔和黑)', value: '#1C1B1A', usage: '主标题与正文。拒绝刺眼的绝对黑，保持文本的温润感。' }
    ]
  },
  {
    id: 'aes-typo',
    title: 'Typography_Scale.config',
    shortDesc: '为什么 AI 阅读界面都在回归衬线体？探讨排版比例与行距的数学之美。',
    desc: '为什么现在的 AI 界面都在疯狂回归衬线体？因为这能让它一本正经胡说八道（产生幻觉）时，看起来像一篇严谨的学术论文。',
    type: 'Typography',
    preview: 'Aa',
    tokens: [
      { name: 'Serif (衬线体)', value: 'Noto Serif / Georgia', usage: '用于大标题与深度阅读正文，赋予内容极强的学术权威感。' },
      { name: 'Sans-serif (无衬线)', value: 'Inter / System UI', usage: '用于按钮、导航与 UI 交互组件，保持纯粹的功能性。' },
      { name: 'Monospace (等宽)', value: 'Fira Code / Menlo', usage: '用于代码片段、文件路径与时间戳，强调机器上下文的 Vibe。' },
      { name: 'Line Height (行距)', value: 'leading-relaxed (1.625)', usage: '慷慨的正文行距，确保长篇文字的阅读呼吸感。' }
    ]
  },
  {
    id: 'aes-icon',
    title: 'Semantic_Icons.svg',
    shortDesc: '克制即是高级：探索如何使用 16px 极简语义化图标体系构建视觉降噪法则。',
    desc: '能用 16x16 像素的 SVG 说清楚的事，就别逼 AI 写废话。给你的裸奔按钮穿上一件得体且克制的衣服。',
    type: 'Iconography',
    preview: '⌘',
    tokens: [
      { name: 'Stroke Width (描边)', value: '1.5px', usage: '摒弃粗壮的图标，保持纤细，使其与正文的字重融为一体。' },
      { name: 'Size (尺寸)', value: '16px / 20px', usage: '极度克制的尺寸。图标永远只是文字的辅助，绝不喧宾夺主。' },
      { name: 'Corner (圆角)', value: '2px / 4px', usage: '微小的圆角处理，中和纯几何线条带来的工业冷酷感。' },
      { name: 'Hover State (悬停)', value: 'opacity-60 -> 100', usage: '不改变颜色，仅通过透明度的微妙变化来暗示可交互性。' }
    ]
  },
  {
    id: 'aes-layout',
    title: 'Whitespace_Grid.json',
    shortDesc: '留白本身也是一种 Context。基于内容的网格系统与不对称布局法则。',
    desc: '留白本身就是最昂贵的 Context。把几百个组件挤成一坨并不会显得功能强大，只会让读取这个页面的 AI 感到窒息。',
    type: 'Layout',
    preview: '◰',
    tokens: [
      { name: 'Container (容器宽度)', value: 'max-w-5xl', usage: '严格限制最大阅读宽度，确保视线从行首到行尾的移动始终舒适。' },
      { name: 'Rhythm (纵向节奏)', value: 'gap-6 / py-16', usage: '使用超大号的纵向间距，彻底切断不同逻辑模块之间的视觉粘连。' },
      { name: 'Asymmetry (不对称)', value: 'grid-cols-12 (5:7)', usage: '放弃死板的绝对居中，利用不对称比例构建类似社论杂志的高级排版。' },
      { name: 'Borders (边界)', value: 'border-b / border-t', usage: '尽量只用单向的线条来划分区域，绝不用完整的方框把内容锁死。' }
    ]
  }
];
