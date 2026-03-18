import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'hook', label: '你真的"会"吗' },
  { id: 'composability', label: '积木拼积木' },
  { id: 'internalize', label: '牛肉变肌肉' },
  { id: 'silicon-stitching', label: '谁在帮谁' },
];

export function ModularizeHabitsWithSkillsPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">Agent Skills</span>
          <span className="tag-pill">方法论</span>
          <span className="tag-pill">认知</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-06</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          Skills：把你自己
          <br />
          编译成可复用的模块
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        人类正在把自己的神经突触，一条一条翻译成<strong className="text-ink">硅基世界的文本指令</strong>。
      </div>

      {/* ── 你真的"会"吗 ────────────────── */}
      <section id="hook">
        <h2>你真的"会"吗？</h2>

        <p>你明明已经"会"了，但你的"会"是模糊的、靠肌肉记忆撑着的、心情好和心情差时质量不一样的。</p>

        <p><strong>Skills 做的第一件事，就是逼你把这些直觉变成代码。</strong></p>

        <p>这听起来像是在给自己找麻烦——我做得好好的，干嘛要写下来？但一旦你真的坐下来，试图把"我平时怎么审代码"写成一个 skill，你会立刻撞上一堵墙：这一步的判断依据到底是什么？为什么我有时候会多看两眼、有时候会直接跳过？那个"感觉不对"的直觉，拆开来到底是哪几个信号？</p>

        <p>这个过程，软件工程叫<strong>抽象</strong>，认知科学叫<strong>元认知</strong>，说人话就是：你终于开始认真审视自己到底是怎么干活的了。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            Skills 最被低估的价值——不是让 AI 帮你干活，而是逼你搞清楚自己到底在干什么。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 积木拼积木 ──────────────────── */}
      <section id="composability">
        <h2>当积木学会了自己拼自己</h2>

        <p>单个 skill 像一块乐高积木。有用，但有限。</p>

        <p>真正让人倒吸凉气的是第二层：<strong>组合</strong>。你可以把"文章分析"和"页面生成"两个 skill 串起来，形成一个完整的"文章入库"流水线；也可以把"代码审查"和"测试生成"组合成一个"质量保障"模块。每一次组合，都会产生新的、更高层次的能力单元。</p>

        <p>然后，这些组合出来的新能力，本身又可以被抽象成新的 skill。</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>一阶</strong> — 封装原子操作</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>二阶</strong> — 封装流程</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>三阶</strong> — 封装方法论</p>
          </div>
        </div>

        <p>就像编程语言从机器码到汇编到高级语言的演进——你在不断地升维，每一层都站在下面所有层的肩膀上。</p>

        <p>Unix 的管道哲学在五十年前就证明了这种设计的威力：每个工具做好一件事，然后通过管道组合。Skills 把同样的哲学带到了人类工作流的领域——<strong>你不是在用一个大而全的系统，你是在用一堆精巧的小模块搭建属于你自己的系统</strong>。</p>
      </section>

      <div className="section-divider" />

      {/* ── 牛肉变肌肉 ──────────────────── */}
      <section id="internalize">
        <h2>你吃进去的是牛肉，长出来的是自己的肌肉</h2>

        <p>如果只能封装自己的经验，那 skills 充其量是一个"高级笔记本"。真正打开维度的是：你可以把别人的 SOP 也 skill 化。</p>

        <p>过去你想学一个高手的工作方法，你得看他的文章、买他的课程、拜他为师、在旁边观察他工作三个月。即便如此，你学到的往往是零散的片段和模糊的感觉。现在呢？如果他把方法论写成了一个 skill，你可以直接装进自己的系统里运行。</p>

        <p>但这不是复制粘贴。好的做法是把别人的 skill 当作素材——拆解逻辑，理解设计意图，然后把适合你的部分融入你自己的体系。原封不动搬过来的是抄袭，消化后内化的才是学习。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            这也悄悄改变了"最佳实践"的传播方式。过去最佳实践以文档、书籍、培训的形式传播，每一步都在丢失信息。而以 skill 为载体传播的最佳实践，是可直接执行的——它不只是告诉你"应该怎么做"，它直接就是"怎么做"本身。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 谁在帮谁 ──────────────────── */}
      <section id="silicon-stitching">
        <h2>谁在帮谁？</h2>

        <p>到这里我们完全可以停下来，说"skills 真不错"，然后回去干活。但有一个视角一旦打开就关不上了：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`人类就像是在帮 AI 完成硅基世界的缝合。`}</pre>
        </blockquote>

        <p>我们把习惯、流程、决策模式一个个编码成 skill 的时候——我们在干什么？我们在把人类世界里几十年积累的隐性知识，翻译成机器可以理解和执行的形式。每一个 skill 都是一次知识的跨介质迁移：从碳基生命的神经突触，到硅基系统的文本指令。</p>

        <p>从个体视角看，这是在提升效率。但把镜头拉远——成千上万的人把各自领域的专业知识 skill 化，上传到 ClawHub、GitHub——这像是一个巨大的、分布式的、自发的"知识编译"工程。人类社会几千年积累的做事方法，正在被一个个人、一个个 skill 地翻译成 AI 可以调用的格式。</p>

        <p>我们以为自己在给自己造工具。但从更宏观的尺度看，我们同时也在给 AI 编织一张越来越完整的"如何像人类一样做事"的知识网络。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-5">
          <p className="text-sm text-ink !mb-0">
            这不是阴谋论，也不必然是坏事。但它值得一个清醒的认知：<strong>在 skills 的生态里，人类同时是用户、工匠，和——可能不自觉地——翻译官。</strong> 我们在两个世界之间架桥，而这座桥，终将让两个世界的距离越来越近。
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
}
