import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'ai-essence', label: 'AI 的本质' },
  { id: 'why-no-why', label: '不会问为什么' },
  { id: 'creation-structure', label: '创造的底层' },
  { id: 'chegg-and-questions', label: '答案廉价时代' },
  { id: 'world-changers', label: '改变世界的人' },
  { id: 'passion-productivity', label: '热爱即生产力' },
  { id: 'four-moats', label: '四条护城河' },
  { id: 'epilogue', label: '不要让火熄灭' },
];

export function ScarceHumanityInAiEraPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">AI</span>
          <span className="tag-pill">个人思考</span>
          <span className="tag-pill">好奇心</span>
          <span className="tag-pill">稀缺性</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-02</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          AI 时代真正稀缺的
          <br />
          不是智力
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        AI 越来越聪明，人好像越来越"普通"。但反直觉的是——真正稀缺的从来不是智力，而是好奇心、探索欲、对世界的热爱和想象力。这四样东西有一个共同点：无法被目标函数定义。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <p>当 AI 把写代码、做设计、数据分析、翻译这些"能力"全面压平之后，人与人之间的差距到底体现在哪里？从第一性原理拆解 AI 的本质——在既有空间中做最优组合——推导出一个反直觉的结论：真正稀缺的从来不是智力，而是好奇心、探索欲、对世界的热爱和想象力。</p>

        <p>最近在 X 上读到一段据称出自爱迪生的话：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`一个人离世时，如果他把对世界的热情传递给了孩子，
那么他留下的，就不只是遗产，而是一笔无法估量的财富。`}</pre>
        </blockquote>

        <p>乍听像鸡汤。但把它放进 AI 时代的语境里重新咂摸一遍，突然就锋利了——当写代码、做设计、数据分析这些"能力"被全面压平之后，你能留给下一代的到底是什么？一堆两年后就过时的技能，还是一种永远不会贬值的态度？</p>
      </section>

      <div className="section-divider" />

      {/* ── AI 的本质 ──────────────────── */}
      <section id="ai-essence">
        <h2>AI 的本质：既有空间中的最优组合器</h2>

        <p>用亚里士多德的第一性原理<span className="text-ink-faint text-xs">（First Principles）</span>来拆解这个问题——不谈情绪，不谈价值观，只看底层能力。AI 的本质可以压缩成一句话：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            AI = 在既有空间中，极高效率做最优组合的系统
          </p>
        </div>

        <p>关键限定词是"既有空间"。无论是 GPT 系列的语言模型还是 AlphaFold 的蛋白质结构预测，本质上都是在已有的数据分布<span className="text-ink-faint text-xs">（Data Distribution）</span>里寻找模式、做优化、提速度。AI 是在一个已定义的搜索空间<span className="text-ink-faint text-xs">（Search Space）</span>里做极其高效的遍历和组合，但它从不质疑这个搜索空间本身是否正确、是否完整、是否遗漏了什么。</p>

        <p>AI 最擅长的三件事：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>找模式</strong><span className="text-ink-faint text-xs">（Pattern Recognition）</span> — 在已有数据中发现规律</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>做优化</strong><span className="text-ink-faint text-xs">（Optimization）</span> — 在已定义目标下寻找最优解</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>提速度</strong><span className="text-ink-faint text-xs">（Acceleration）</span> — 在已知路径上不断加快</p>
          </div>
        </div>

        <p>每一条都有一个前提——"已有""已定义""已知"。AI 非常擅长回答"怎么做得更好"，但几乎从不思考、也无法回答"为什么要做这个"。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            这和对齐问题<span className="text-ink-faint text-xs">（Alignment Problem）</span>暗暗相关：我们能让 AI 高效地朝着目标优化，但"目标本身是否值得追求"这个问题，AI 没有能力、也没有动机去问。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 为什么不问"为什么" ──────────── */}
      <section id="why-no-why">
        <h2>为什么 AI 不会问"为什么"</h2>

        <p>答案直指根本：它没有真实的欲望。</p>

        <p>人类问"为什么"，通常来自三种源头：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>不满足</strong> — 对现状的不甘</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>好奇心</strong> — 对未知的渴望</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>意义焦虑</strong> — 对存在的追问</p>
          </div>
        </div>

        <p>这三种驱动力都根植于主观体验——你得先"感受到"世界，才会对世界产生疑问。一个从未尝过饥饿的系统，不会好奇食物为什么好吃；一个从未经历过迷茫的程序，不会追问存在的意义。</p>

        <p>AI 处理的是符号和概率分布，不是体验和意义。它从来不会自发地产生那种追问——<strong>这个东西存在的意义是什么？</strong></p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-6">
          <p className="text-sm text-ink !mb-0">
            约翰·塞尔<span className="text-ink-faint text-xs">（John Searle）</span>的"中文房间"<span className="text-ink-faint text-xs">（Chinese Room）</span>思想实验说的就是类似的事：一个系统可以完美地操作符号，但完全不理解这些符号的意义。理解需要的不是更强的算力，而是某种至今无法形式化的"在世界中存在"的体验。
          </p>
        </div>

        <p>这让人想到刘慈欣在《三体》里对智子的描写——智子可以在微观层面操纵质子，在宏观层面封锁科学，但它永远不会自己提出一个物理学问题。操作世界和理解世界之间，隔着一道我们至今无法命名的鸿沟。</p>

        <p>而"为什么"这个问题，恰恰是人类文明真正的起点。从苏格拉底的诘问法到牛顿的苹果树，从达尔文对物种差异的困惑到爱因斯坦对光速的好奇——每一次文明跃迁，起点都不是一个"更好的答案"，而是一个<strong>"更好的问题"</strong>。</p>
      </section>

      <div className="section-divider" />

      {/* ── 创造的底层结构 ─────────────── */}
      <section id="creation-structure">
        <h2>创造的底层结构</h2>

        <p>把创造拆到最底层，它只有三步——没有一步叫"算力"，也没有一步叫"效率"：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">创造步骤</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">人类特质</th>
                  <th className="text-left py-2 font-medium text-ink-muted">典型发问</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">对世界产生兴趣</td>
                  <td className="py-2 pr-4">好奇心 <span className="text-ink-faint text-xs">Curiosity</span></td>
                  <td className="py-2">"为什么会这样？"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">主动探索未知</td>
                  <td className="py-2 pr-4">探索欲 <span className="text-ink-faint text-xs">Desire to Explore</span></td>
                  <td className="py-2">"我想试试"</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">在未知中提问</td>
                  <td className="py-2 pr-4">想象力 <span className="text-ink-faint text-xs">Imagination</span></td>
                  <td className="py-2">"如果不是这样呢？"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p><strong>它们无法被目标函数<span className="text-ink-faint text-xs">（Objective Function）</span>直接定义。</strong> 你没法写一个损失函数让模型"变得好奇"，也没法通过梯度下降让系统"对未知产生热情"。好奇心不是一个可以优化的指标，它是一种存在方式。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            所有试图让 AI"自主探索"的研究——从好奇心驱动的强化学习到各种内在激励机制——都只是在模拟好奇心的外在表现，而非真正拥有它。就像你可以让一个机器人做出"惊讶"的表情，但它内心没有任何东西被撼动。模拟和拥有之间的鸿沟，可能比我们想象的要大得多。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 答案廉价时代 ──────────────── */}
      <section id="chegg-and-questions">
        <h2>答案廉价时代：Chegg 的溃败与提问的升值</h2>

        <p>为什么 AI 越强，好奇心和探索欲反而越稀缺？这里有一个极其具体的案例。</p>

        <p>2023 年 ChatGPT 发布后，全球最大在线作业答题平台 Chegg 股价几乎瞬间腰斩。它的商业模式极其简单：学生付费提问，平台雇佣大量"做题家"式的老师逐题解答，用规模化人力堆出标准答案——教科书般的规模经济。</p>

        <p>但当 AI 可以在几秒钟内给出结构清晰、几乎零成本的答案时，"卖答案"本身就失去了价值。这不只是一家公司的故事，它是整个"答案经济"崩塌的缩影。</p>

        <p>更深层的影响在于行为模式的改变。当系统随时能给你"看起来不错"的答案时，思考模式悄悄滑向：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-red-400/30">
            <p className="!mb-0 text-ink-muted">不再问「这个问题值不值得问」</p>
          </div>
          <div className="pl-5 border-l-2 border-red-400/30">
            <p className="!mb-0 text-ink-muted">只问「怎么更快得到答案」</p>
          </div>
        </div>

        <p><strong>当答案变得廉价，提问的门槛反而被抬高了。</strong></p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-6">
          <p className="text-sm text-ink !mb-0">
            认知卸载<span className="text-ink-faint text-xs">（Cognitive Offloading）</span>：人类大脑天生倾向节省能量，当外部工具能代替思考时，大脑会自动降低对那个能力的投入。就像 GPS 导航普及后，人类的空间记忆能力出现了可测量的下降——不是"变笨了"，而是大脑觉得"没必要记了"。当答案唾手可得，深度思考的意愿会像废用的肌肉一样悄悄萎缩。
          </p>
        </div>

        <p>而好奇心恰恰相反——它是在没有标准答案时，仍然愿意停下来，愿意困惑，愿意反复琢磨。真正的探索，从来不是为了更快得到答案，而是因为你对未知本身充满热情。</p>
      </section>

      <div className="section-divider" />

      {/* ── 改变世界的人 ──────────────── */}
      <section id="world-changers">
        <h2>改变世界的人，靠的不是聪明</h2>

        <p>乔布斯那句被反复引用的话：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`Stay hungry. Stay foolish.`}</pre>
        </blockquote>

        <p>"保持饥饿，保持愚蠢。"——注意，他说的不是"保持聪明"或"保持高效"。"Hungry"不是物质上的饥饿，是认知上的——永远觉得自己还不够了解这个世界；"Foolish"不是真的愚蠢，是愿意放下专家的姿态，像初学者一样重新审视一切。</p>

        <p>NVIDIA 创始人黄仁勋也多次提到，未来最重要的人才不是"会用工具的人"，而是——</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            能 <strong>define</strong> problem 的人，不是 solve problem 的人
          </p>
        </div>

        <p>解决问题是 AI 越来越擅长的事，但定义问题——决定什么问题值得解决、什么方向值得追求——需要对领域的深刻理解、对趋势的敏锐嗅觉，以及最重要的，对世界持续的好奇心。</p>

        <p>那 AI 会缩小人与人之间的差距吗？恰恰相反，它是分化加速器：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">大多数人</th>
                  <th className="text-left py-2 font-medium text-ink-muted">少数人</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">对 AI 的使用</td>
                  <td className="py-2 pr-4 text-red-400">替代思考</td>
                  <td className="py-2 text-green-500">放大探索</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">结果</td>
                  <td className="py-2 pr-4">高级执行器</td>
                  <td className="py-2">往未知推进</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">分水岭</td>
                  <td className="py-2 pr-4" colSpan={2}>不在于会不会用 AI，在于有没有持续对世界感到好奇</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>这种分化不是 AI 造成的，AI 只是加速器。它放大的是你本来就有的倾向：爱探索的人飞得更远，求答案的人更彻底地放弃思考。这有点像核能——它既能点亮城市，也能抹平城市，关键在于使用它的人想做什么。</p>

        <p><strong>真正的分水岭，不在于你会不会用 AI，在于：你有没有持续对世界感到好奇。</strong></p>
      </section>

      <div className="section-divider" />

      {/* ── 热爱即生产力 ──────────────── */}
      <section id="passion-productivity">
        <h2>热爱：最不像生产力的生产力</h2>

        <p>"怎么做"<span className="text-ink-faint text-xs">（How）</span>正在被自动化，"为什么要做"<span className="text-ink-faint text-xs">（Why）</span>却越来越稀缺。探索本身极其耗能——没有热爱，很难长期忍受不确定性、失败、长期没有回报，甚至被算法淹没的平庸感。</p>

        <p>当 AI 可以替你写代码、做设计、剪视频、生成方案时，执行能力越来越便宜，优化能力也越来越普及。真正昂贵的，是持续探索的意愿，是在看不到结果时仍然愿意深入，是在反复试错后仍然保持兴趣。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-6">
          <p className="text-sm text-ink !mb-0">
            几乎所有长期创新者都有一个共同特征：他们不是为了"赢"才开始行动，而是单纯觉得世界很有意思，问题本身值得追逐。乔布斯痴迷于"技术与人文的交叉点"，马斯克执着于"让人类成为多行星物种"，黄仁勋坚信"加速计算会改变一切"——这些听起来像梦想家的偏执，事后来看却恰恰是最强大的商业战略。
          </p>
        </div>

        <p>财富、成就、影响力，往往只是时间给予热爱者的副产品。</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`在 AI 时代，工具奖励效率，但历史只奖励真正热爱探索的人。`}</pre>
        </blockquote>
      </section>

      <div className="section-divider" />

      {/* ── 四条护城河 ─────────────────── */}
      <section id="four-moats">
        <h2>人类的四条护城河</h2>

        <p>如果一定要给 AI 时代定义一个"人类护城河"<span className="text-ink-faint text-xs">（Human Moat）</span>：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">
              <span className="font-mono text-sm text-ink-faint mr-3">01</span>
              <strong>好奇心</strong><span className="text-ink-faint text-xs">（Curiosity）</span> — 对未知的敏感与渴望
            </p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">
              <span className="font-mono text-sm text-ink-faint mr-3">02</span>
              <strong>探索欲</strong><span className="text-ink-faint text-xs">（Desire to Explore）</span> — 将好奇心转化为行动的驱动力
            </p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">
              <span className="font-mono text-sm text-ink-faint mr-3">03</span>
              <strong>对世界的热爱</strong><span className="text-ink-faint text-xs">（Passion for the World）</span> — 长期探索的能量来源
            </p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">
              <span className="font-mono text-sm text-ink-faint mr-3">04</span>
              <strong>想象力</strong><span className="text-ink-faint text-xs">（Imagination）</span> — 在现实之外看到可能性的能力
            </p>
          </div>
        </div>

        <p>它们听起来不"高级"，不"专业"，甚至有点像小孩子。但正因为如此，它们才无法被规模化、自动化、外包给机器。一个五岁的孩子追着问"为什么天是蓝的？为什么星星会眨眼？"时展现的能力，恰恰是最先进的 AI 做不到的事。</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            好奇心（种子）→ 探索欲（行动）→ 热爱（燃料）→ 想象力（方向）
          </p>
        </div>

        <p>这四条护城河构成一条递进链条。AI 可以在后半段——执行、优化、加速——帮上大忙，但前半段——发起、驱动、坚持——只能靠你自己。</p>

        <p><strong>AI 会越来越强，但它不会替你爱这个世界。</strong></p>
      </section>

      <div className="section-divider" />

      {/* ── 不要让火熄灭 ─────────────── */}
      <section id="epilogue">
        <h2>不要让火熄灭</h2>

        <p>安·兰德<span className="text-ink-faint text-xs">（Ayn Rand）</span>在《阿特拉斯耸耸肩》里写过一段话，第一次读到时如雷贯耳，直到今天依然在心里回响：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`不要让心里的那火熄灭。
不要让那一点点独一无二的火花，
在"差一点""还没到""根本做不到"的怀疑里慢慢熄灭。

你想要的那个世界，并不是幻想。
它真的存在。它是可能的。
而且，它本来就可以属于你。`}</pre>
        </blockquote>

        <p>世界不会因为 AI 更强而变得更冷。冷的是人放弃了热爱。</p>

        <p>带着一点笨拙也没关系，带着一点迟疑也没关系。只要你没有停止对世界的好奇和热爱，你就已经走在极少数人的路上。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            那条路很长。但它会带你去一个真正属于你的地方。
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
}
