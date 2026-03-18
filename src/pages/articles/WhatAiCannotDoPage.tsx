import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'attention', label: 'Attention 的隐喻' },
  { id: 'desire', label: '渴望' },
  { id: 'agency', label: '主体性' },
  { id: 'top-001', label: '前 0.01%' },
  { id: 'trinity', label: '掌控 Attention' },
];

export function WhatAiCannotDoPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">AI</span>
          <span className="tag-pill">认知</span>
          <span className="tag-pill">个人成长</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-02</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          知道 AI 不能做什么
          <br />
          比知道它能做什么重要一万倍
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        AI 处理 Key 和 Value 的速度越来越快，但它<strong className="text-ink">没有自己的 Query</strong>。
      </div>

      {/* ── Attention 的隐喻 ──────────── */}
      <section id="attention">
        <h2>Attention Is All You Need——这句话不只是在说 AI</h2>

        <p>2017 年，Google 的一篇论文 <em>Attention Is All You Need</em> 提出了 Transformer 架构，此后将近十年，整个 AI 界围绕这条主线不断进化，至今没有跳脱这个框架。GPT、Claude、Gemini……所有你叫得上名字的大模型，底层都是 Transformer 的后代。</p>

        <p>Transformer 最核心的机制叫做自注意力，说白了就是学会分配权重——面对海量信息，不是每一条都同等重要，你得学会筛选。而注意力机制的运作方式，可以压缩成三个向量的交互：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Query</strong> — 你想要的</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Key</strong> — 信息的标签</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Value</strong> — 信息的实质</p>
          </div>
        </div>

        <p>系统拿着 Query 去扫描所有 Key，找到匹配度最高的，然后提取对应的 Value。这就是注意力的全部——听起来朴素，但整个 AI 革命就建立在这个朴素的直觉之上。</p>

        <p>有意思的是，这个机制映射到人身上，几乎丝毫不差。</p>

        <p>我们的时间和精力是有限的，每天被推送、消息、KPI、社交媒体的无穷刺激轰炸。平庸的人对所有刺激做出同等反应——什么都关注，等于什么都没关注。而真正厉害的人，是通过自己的权重分配穿越噪音，精准捕获对自己真正有价值的信号。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            这就引出了一个关键问题：<strong>你的 Query 是什么？</strong>
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 渴望 ───────────────────────── */}
      <section id="desire">
        <h2>渴望：你和 AI 的根本分野</h2>

        <p>在 Transformer 的世界里，Query 是系统预设的，由上一层的计算结果传递而来。但在人的世界里，Query 对应的是一个远比数学向量深邃得多的东西——<strong>渴望</strong>。</p>

        <p>你真正想要什么？不是社会告诉你应该想要的，不是父母期望你追求的，不是朋友圈里晒出来显得你应该拥有的——而是你在深夜三点钟、关掉所有屏幕、独自面对天花板时，心里那个挥之不去的念头。</p>

        <p>AI 再发达，也无法代替你心中的渴望。它可以帮你执行、帮你优化、帮你加速，但它无法替你回答"我到底想要什么"这个问题。它没有欲望，没有不甘，没有那种"非如此不可"的执念。Claude 不会在凌晨三点因为一个未解的问题辗转难眠，GPT 不会因为一个想法被否定而愤怒。它们只是在做概率推理——极其精妙的概率推理，但终究只是概率推理。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-6">
          <p className="text-sm text-ink !mb-0">
            一旦你的渴望是被社会或他人规训植入的，那你就是一个 Agent。而且因为算力和算法的局限，你还不如一个真正的 AI Agent——它至少在给定目标下执行得又快又准，而你在执行别人植入的目标时，还会犹豫、拖延、自我怀疑。
          </p>
        </div>

        <p>为什么那么多人对 AI 感到焦虑？原因其实很残酷——他们回头审视自己的工作，发现自己做的事和一个 Agent 没有本质区别。接收指令、处理信息、输出结果，日复一日。想来想去，确实完全可以被取代。</p>

        <p><strong>焦虑的根源不是 AI 太强，而是自己从来没有认真回答过那个最基本的问题：我的 Query 是什么？</strong></p>
      </section>

      <div className="section-divider" />

      {/* ── 主体性 ──────────────────────── */}
      <section id="agency">
        <h2>主体性：知与行之间差了一个宇宙</h2>

        <p>其实很多人知道自己的渴望是什么。</p>

        <p>有人想写一本书，有人想创业，有人想搬到另一个城市重新开始，有人想放弃现在的高薪去做一件"没用但热爱"的事。这些渴望不是不存在，它们只是被压在了日常的惯性之下，像地壳下的岩浆——你知道它在那儿，但很少有勇气让它喷发出来。</p>

        <p>知与行之间差的不是信息，不是资源，不是方法论——<strong>差的是勇气</strong>。</p>

        <p>去追逐自己的渴望，人便有了主体性。这个词在 AI 领域被用来描述 Agent 的自主行动能力，但放到人身上它有一层更深的含义：不是"能自动执行任务"，而是"为自己的人生做决定并承担后果"。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-6">
          <p className="text-sm text-ink !mb-0">
            很多时候，人渴望的并不是自由，而是一纸神谕——告诉我该怎么活，告诉我什么是对的，告诉我人生的意义是什么。这样就不需要承担选择的重量，只需要像一个 Agent 一样去执行就好。
          </p>
        </div>

        <p>宗教是一种神谕，社会共识是一种神谕，"别人家的孩子"是一种神谕，甚至"AI 时代你应该学什么"的各种焦虑贩卖，本质上也是一种神谕——它们都在暗示：别想了，照做就行。</p>

        <p>但主体性恰恰意味着：<strong>没有人能替你做决定。世界不提供标准答案，你得自己活出一个来。</strong></p>

        <p>有人渴望幸福，有人渴望智慧，有人渴望体验，有人就是渴望金钱本身。这些渴望没有高低之分——不存在"高级的渴望"和"低级的渴望"，只有"真实的"和"被植入的"。承认自己的渴望，哪怕它看起来不够崇高、不够宏大、不够政治正确——这本身就是一种勇气。而这种勇气，是 AI 永远无法模拟的。</p>
      </section>

      <div className="section-divider" />

      {/* ── 前 0.01% ───────────────────── */}
      <section id="top-001">
        <h2>前 0.01%：AI 时代的残酷算术</h2>

        <p>第三件 AI 做不到的事，不是关于内在，而是关于<strong>极致</strong>。</p>

        <p>这个时代的算术异常残酷：前 10% 没有意义，前 1% 没有意义，前 0.1% 也没有意义——<strong>前 0.01% 才刚刚开始有一点点意义</strong>。</p>

        <p>为什么？逻辑很简单。当客户花 20 美元就能让 AI 生成一份 80 分的方案时，他为什么要花 10 万美元雇你？答案只有一个：因为你能给出 99.99 分的结果，而这个结果能帮客户赚 1000 万美元。价格差了 5000 倍，但那最后的 19.99 分才是真正的价值所在——里面浓缩的是几十年的刻意练习、无数次失败的积累、对领域深入骨髓的理解、以及某种只有人类顶尖从业者才拥有的直觉和判断力。</p>

        <p>AI 正在以惊人的速度拉高"平庸"的基准线。以前 60 分就能混口饭吃，现在 AI 轻松做到 80 分。这意味着所有 80 分以下的人类产出，在经济意义上都在快速归零。你不需要比所有人强，但你需要强到 AI 够不着的地方。</p>

        <p><em>On Writing Well</em> 里有一段话说得精准：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`打字机并没有帮助作家写出比用羽毛笔更好的作品；
文字处理机也没有帮助他们写出比用打字机更好的作品。
莎士比亚用羽毛笔写出了《李尔王》；
如果他拥有一台文字处理机，他也未必能写得更好。`}</pre>
        </blockquote>

        <p><strong>工具从来不是决定性因素。</strong>决定性因素是使用工具的那个人——他的洞察、他的品味、他对人性的理解、他在无数个深夜里独自打磨出来的那一点不可替代的东西。AI 是有史以来最强大的打字机，但它不会帮你写出《李尔王》。</p>
      </section>

      <div className="section-divider" />

      {/* ── 收束 ──────────────────────── */}
      <section id="trinity">
        <h2>掌控 Attention，就是掌控生活</h2>

        <p>把这三件事放在一起看，它们构成了一条递进的链条：先知道自己要什么——这是你的 Query，你在信息洪流中筛选信号的滤波器；然后敢于行动——知道和做到之间，不是一步之遥，而是一个宇宙的距离；最后在选定的方向上做到极致——不是什么都做到前 0.01%，而是在渴望指向的那个方向上，投入足够深、足够久、足够诚实，以至于你的产出带有某种 AI 无法复制的人格印记。</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            渴望（Query）→ 主体性（Action）→ 极致（0.01%）
          </p>
        </div>

        <p>这句话在 Transformer 的语境下是数学，在人的语境下是哲学，而在 AI 时代的语境下，它是生存策略。</p>

        <p><strong>我们人类完全有理由保持希望。</strong></p>
      </section>
    </ArticleLayout>
  );
}
