import { ArticleLayout } from '../../components/article/ArticleLayout';
import { CodeBlock } from '../../components/CodeBlock';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'intro', label: '它是什么' },
  { id: 'highlights', label: '精彩之处' },
  { id: 'structure', label: '结构逻辑' },
  { id: 'pattern', label: '写作模式' },
  { id: 'build-guide', label: '同类构建' },
  { id: 'improvements', label: '改进空间' },
  { id: 'takeaways', label: '启发' },
];

export function BaoyuCoverImagePage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">generation</span>
          <span className="tag-pill">design-system</span>
          <span className="tag-pill">workflow</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm tabular-nums text-ink-muted">234 行</span>
          <span className="text-ink-faint">·</span>
          <span className="text-sm tabular-nums text-ink-muted">31 文件</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">baoyu</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          baoyu-cover-image：把「我不会做封面」变成「选 5 个维度就行」
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        一个将封面图设计拆解为 6 个独立维度（Type × Palette × Rendering × Text × Mood × Font）的生成技能，用兼容性矩阵和自动推荐消灭了用户的决策焦虑。
      </div>

      {/* ── 它是什么 ──────────────────── */}
      <section id="intro">
        <h2>它是什么</h2>

        <p>baoyu-cover-image 是一个文章封面图生成技能。用户给它一篇文章（路径或粘贴内容），它会分析内容、推荐视觉参数、生成 prompt、调用图像生成工具，最终输出一张封面图。</p>

        <p>它面向的是内容创作者——写博客、发公众号、做技术文章的人。这些人有个共同痛点：写完文章后需要一张封面图，但不会设计，也不知道该怎么描述自己想要的视觉风格。</p>

        <p>这个技能的规模相当惊人。SKILL.md 主体 234 行，背后挂载了 <strong>31 个 reference 文件</strong>，覆盖 9 个调色板定义、6 种渲染风格定义、3 个维度详解、3 个工作流步骤、3 个配置文件、兼容性矩阵、自动选择规则、视觉元素库、风格预设表、base prompt 模板。这不是一个「提示词」，这是一个完整的设计系统。</p>

        <div className="my-8 rounded-xl bg-surface-1 px-6 py-5 space-y-2 text-sm">
          <p className="!mb-0"><span className="text-ink-faint">解决的问题</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">写完文章需要封面图，但不会设计，不知道怎么描述想要的视觉风格</span></p>
          <p className="!mb-0"><span className="text-ink-faint">目标用户</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">博客作者、公众号作者、技术文章创作者</span></p>
          <p className="!mb-0"><span className="text-ink-faint">子资源</span> <span className="text-ink-faint mx-1.5">—</span> <span className="text-ink-muted">9 调色板 · 6 渲染风格 · 3 维度详解 · 3 工作流 · 3 配置 · 7 其他</span></p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 精彩之处 ──────────────────── */}
      <section id="highlights">
        <h2>它的精彩之处</h2>

        {/* ── 01 ── */}
        <div className="mt-10">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">01</span>
            把「设计」变成「选择」的维度拆解
          </h3>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-xs text-ink-faint uppercase tracking-[0.15em] mb-3">Five Dimensions</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-ink-muted">维度</th>
                    <th className="text-left py-2 pr-4 font-medium text-ink-muted">可选值</th>
                    <th className="text-left py-2 font-medium text-ink-muted">默认</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4"><span className="font-mono text-xs">Type</span> <span className="text-ink-faint text-xs">类型</span></td><td className="py-2 pr-4">hero<span className="text-ink-faint">（主视觉）</span>、conceptual<span className="text-ink-faint">（概念图）</span>、typography<span className="text-ink-faint">（文字型）</span>、metaphor<span className="text-ink-faint">（隐喻）</span>、scene<span className="text-ink-faint">（场景）</span>、minimal<span className="text-ink-faint">（极简）</span></td><td className="py-2 font-mono text-xs">auto</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4"><span className="font-mono text-xs">Palette</span> <span className="text-ink-faint text-xs">调色板</span></td><td className="py-2 pr-4">warm<span className="text-ink-faint">（暖）</span>、elegant<span className="text-ink-faint">（雅）</span>、cool<span className="text-ink-faint">（冷）</span>、dark<span className="text-ink-faint">（暗）</span>、earth<span className="text-ink-faint">（大地）</span>、vivid<span className="text-ink-faint">（鲜艳）</span>、pastel<span className="text-ink-faint">（粉彩）</span>、mono<span className="text-ink-faint">（黑白）</span>、retro<span className="text-ink-faint">（复古）</span></td><td className="py-2 font-mono text-xs">auto</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4"><span className="font-mono text-xs">Rendering</span> <span className="text-ink-faint text-xs">渲染风格</span></td><td className="py-2 pr-4">flat-vector<span className="text-ink-faint">（扁平矢量）</span>、hand-drawn<span className="text-ink-faint">（手绘）</span>、painterly<span className="text-ink-faint">（油画）</span>、digital<span className="text-ink-faint">（数字）</span>、pixel<span className="text-ink-faint">（像素）</span>、chalk<span className="text-ink-faint">（粉笔）</span></td><td className="py-2 font-mono text-xs">auto</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4"><span className="font-mono text-xs">Text</span> <span className="text-ink-faint text-xs">文字密度</span></td><td className="py-2 pr-4">none<span className="text-ink-faint">（无文字）</span>、title-only<span className="text-ink-faint">（仅标题）</span>、title-subtitle<span className="text-ink-faint">（标题+副标题）</span>、text-rich<span className="text-ink-faint">（多文字）</span></td><td className="py-2 font-mono text-xs">title-only</td></tr>
                  <tr><td className="py-2 pr-4"><span className="font-mono text-xs">Mood</span> <span className="text-ink-faint text-xs">情绪强度</span></td><td className="py-2 pr-4">subtle<span className="text-ink-faint">（柔和）</span>、balanced<span className="text-ink-faint">（均衡）</span>、bold<span className="text-ink-faint">（强烈）</span></td><td className="py-2 font-mono text-xs">balanced</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink-faint mt-2 !mb-0">每个维度独立选择，互不影响。所有维度都支持 auto（根据文章内容自动推荐）。</p>
          </div>

          <p>这是整个技能最核心的设计选择。它没有问用户「你想要什么样的封面」——这是一个开放性问题，会让不会设计的人陷入焦虑。它做了一件聪明的事：<strong>把视觉设计的无限可能性，压缩成 6 个独立维度，每个维度 3-9 个选项</strong>。</p>

          <p>用户不需要懂设计。他只需要知道：我想要暖色调还是冷色调？手绘感还是扁平风？这些是人人能回答的问题。</p>

          <p>维度之间是<strong>正交的</strong>——选调色板不影响选渲染风格，选类型不影响选情绪。这意味着用户每次只需要做一个简单决策，而不是在一个巨大的组合空间里迷失。9 × 6 × 6 × 4 × 3 × 4 = 15,552 种组合，但用户最多只需要回答 6 个单选题。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
当用户面对开放性创作问题时，把它拆解成几个独立维度，每个维度给有限选项。15,552 种组合 → 6 个单选题，这是消灭决策焦虑的最有效方式。
            </p>
          </div>
        </div>

        {/* ── 02 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">02</span>
            兼容性矩阵——隐形的设计护栏
          </h3>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-xs text-ink-faint mb-3">调色板 × 渲染风格的兼容性矩阵（节选）。<span className="text-green-500">✓✓</span> = 强烈推荐，✓ = 可用，<span className="text-red-400">✗</span> = 不推荐</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse text-center">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-3 font-medium text-ink-muted"></th>
                    <th className="py-2 px-2 font-medium text-ink-muted text-xs"><span>扁平矢量</span></th>
                    <th className="py-2 px-2 font-medium text-ink-muted text-xs"><span>手绘</span></th>
                    <th className="py-2 px-2 font-medium text-ink-muted text-xs"><span>油画</span></th>
                    <th className="py-2 px-2 font-medium text-ink-muted text-xs"><span>数字</span></th>
                    <th className="py-2 px-2 font-medium text-ink-muted text-xs"><span>像素</span></th>
                    <th className="py-2 px-2 font-medium text-ink-muted text-xs"><span>粉笔</span></th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted font-mono text-xs">
                  <tr className="border-b border-border/50"><td className="text-left py-2 pr-3 font-sans text-sm">暖色 <span className="text-ink-faint text-xs">warm</span></td><td className="py-2 text-green-500">✓✓</td><td className="py-2 text-green-500">✓✓</td><td className="py-2">✓</td><td className="py-2">✓</td><td className="py-2">✓</td><td className="py-2">✓</td></tr>
                  <tr className="border-b border-border/50"><td className="text-left py-2 pr-3 font-sans text-sm">优雅 <span className="text-ink-faint text-xs">elegant</span></td><td className="py-2">✓</td><td className="py-2 text-green-500">✓✓</td><td className="py-2">✓</td><td className="py-2 text-green-500">✓✓</td><td className="py-2 text-red-400">✗</td><td className="py-2 text-red-400">✗</td></tr>
                  <tr><td className="text-left py-2 pr-3 font-sans text-sm">大地 <span className="text-ink-faint text-xs">earth</span></td><td className="py-2">✓</td><td className="py-2 text-green-500">✓✓</td><td className="py-2 text-green-500">✓✓</td><td className="py-2">✓</td><td className="py-2 text-red-400">✗</td><td className="py-2 text-red-400">✗</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>大多数参数化技能停留在「给你选项」。baoyu-cover-image 更进一步：<strong>它告诉你哪些组合好、哪些组合差</strong>。</p>

          <p><code>compatibility.md</code> 里有 5 张兼容性矩阵表（Palette × Rendering、Type × Rendering、Type × Text、Type × Mood、Font × Rendering），用 ✓✓ / ✓ / ✗ 三级标注。这不是随意标的——elegant 配 pixel 标了 ✗，因为像素风和优雅感确实矛盾；minimal 配 bold 标了 ✗，因为极简主义和高冲击力天然冲突。</p>

          <p>这些矩阵实际上是<strong>设计知识的编码</strong>。不会设计的用户不可能知道 <code>earth</code> 配 <code>painterly</code> 是 ✓✓ 而配 <code>pixel</code> 是 ✗。但这个矩阵替他做了判断。更巧妙的是，这些矩阵不是给用户看的——用户可能永远不会翻到这个 reference——而是给 AI 用的。AI 在推荐组合时会参照这些矩阵，用户感受到的只是「推荐的选项总是很协调」。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
当你的参数有多个维度时，不要只列选项——告诉 AI 哪些组合好用。✓✓ / ✓ / ✗ 三级标注简单有效，比长篇解释更容易被遵守。
            </p>
          </div>
        </div>

        {/* ── 03 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">03</span>
            基于内容信号的自动推荐
          </h3>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-xs text-ink-faint mb-3">当文章内容包含以下关键词时，自动推荐对应的封面类型：</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-ink-muted">内容信号</th>
                    <th className="text-left py-2 font-medium text-ink-muted">推荐类型</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">产品、发布、公告 <span className="text-ink-faint text-xs">product, launch, announcement…</span></td><td className="py-2"><span className="font-mono text-xs">hero</span> <span className="text-ink-faint text-xs">主视觉冲击</span></td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">架构、框架、系统、API <span className="text-ink-faint text-xs">architecture, framework, system…</span></td><td className="py-2"><span className="font-mono text-xs">conceptual</span> <span className="text-ink-faint text-xs">概念可视化</span></td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">观点、引言、洞察 <span className="text-ink-faint text-xs">quote, opinion, insight…</span></td><td className="py-2"><span className="font-mono text-xs">typography</span> <span className="text-ink-faint text-xs">文字为主</span></td></tr>
                  <tr><td className="py-2 pr-4">哲学、成长、抽象 <span className="text-ink-faint text-xs">philosophy, growth, abstract…</span></td><td className="py-2"><span className="font-mono text-xs">metaphor</span> <span className="text-ink-faint text-xs">视觉隐喻</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p><code>auto-selection.md</code> 为每个维度定义了内容信号到参数值的映射。这是一个精心设计的<strong>语义分析 → 视觉决策</strong>管道。</p>

          <p>写了一篇关于 API 架构的文章？Type 自动选 <code>conceptual</code>，Palette 自动选 <code>cool</code>，Rendering 自动选 <code>flat-vector</code>，Font 自动选 <code>clean</code>。整套推荐一气呵成，而且确实是一个合理的技术文章封面配置。</p>

          <p>这个设计的深层价值在于：它让 <code>--quick</code> 模式真正可用。很多技能的「快速模式」只是跳过确认，实际效果靠运气。baoyu-cover-image 的快速模式背后有一整套推理规则，auto 不是 random，是 smart default。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
如果你提供了自动模式，就要让它真的智能。基于内容信号的推荐规则让 --quick 从「碰运气」变成「懂内容」。
            </p>
          </div>
        </div>

        {/* ── 04 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">04</span>
            Style Presets——组合的快捷方式
          </h3>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-xs text-ink-faint mb-3">一个 preset 名称 = 调色板 + 渲染风格的快捷组合：</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-ink-muted">预设名</th>
                    <th className="text-left py-2 pr-4 font-medium text-ink-muted">调色板</th>
                    <th className="text-left py-2 font-medium text-ink-muted">渲染风格</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">blueprint</td><td className="py-2 pr-4">冷色 <span className="text-ink-faint text-xs">cool</span></td><td className="py-2">数字 <span className="text-ink-faint text-xs">digital</span></td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">chalkboard</td><td className="py-2 pr-4">暗色 <span className="text-ink-faint text-xs">dark</span></td><td className="py-2">粉笔 <span className="text-ink-faint text-xs">chalk</span></td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">sketch-notes</td><td className="py-2 pr-4">暖色 <span className="text-ink-faint text-xs">warm</span></td><td className="py-2">手绘 <span className="text-ink-faint text-xs">hand-drawn</span></td></tr>
                  <tr><td className="py-2 pr-4 font-mono text-xs">watercolor</td><td className="py-2 pr-4">大地 <span className="text-ink-faint text-xs">earth</span></td><td className="py-2">油画 <span className="text-ink-faint text-xs">painterly</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>在 6 维度之上，技能又提供了一层抽象：style presets。一个 <code>--style blueprint</code> 就等于 <code>--palette cool --rendering digital</code>。而且用户还可以局部覆盖：<code>--style blueprint --rendering hand-drawn</code>。</p>

          <p>这是<strong>渐进式复杂度</strong>的教科书写法。新手用 preset 一步到位，老手拆开来逐个调。同一个系统服务两类人，不增加任何结构冗余。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
把常见的好用组合命名为 preset，但允许局部覆盖。新手用 preset 快速上手，老手拆开来精调——同一个系统服务两类人。
            </p>
          </div>
        </div>

        {/* ── 05 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">05</span>
            ⛔ BLOCKING 的首次配置设计
          </h3>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-sm font-semibold text-ink mb-1">Step 0：加载偏好配置 ⛔ 阻塞步骤</p>
            <p className="text-xs text-ink-faint mb-3">正式工作前，先检查有没有保存过偏好文件（EXTEND.md）：</p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-ink-muted">检查结果</th>
                    <th className="text-left py-2 font-medium text-ink-muted">执行动作</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">已找到</td><td className="py-2">加载配置，显示摘要 → 继续</td></tr>
                  <tr><td className="py-2 pr-4">未找到</td><td className="py-2">⛔ 强制进入首次配置流程 → 保存 → 继续</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink-faint italic !mb-0">关键规则：如果未找到配置，必须先完成配置，不允许跳到任何后续步骤。</p>
          </div>

          <p>Step 0 的设计值得单独拿出来说。技能在正式工作之前，先检查有没有 EXTEND.md 偏好配置。如果没有，它会<strong>强制</strong>走一遍首次配置流程——收集水印偏好、默认类型/调色板/渲染风格、宽高比、输出目录、快速模式。</p>

          <p>这个 ⛔ BLOCKING 标记是关键。它不是建议，是命令。<code>first-time-setup.md</code> 甚至专门列出了「Do NOT: Ask about reference images / Ask about content / Ask about dimensions / Proceed to content analysis」。这种<strong>防御性设计</strong>确保了：</p>

          <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
            <li className="leading-relaxed pl-1">用户的偏好只需设置一次，之后所有生成自动应用</li>
            <li className="leading-relaxed pl-1">永远不会出现「生成完了才发现没设水印」的情况</li>
            <li className="leading-relaxed pl-1">偏好文件同时支持项目级（<code>.baoyu-skills/</code>）和用户级（<code>~/.baoyu-skills/</code>），覆盖不同粒度的需求</li>
          </ol>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
用 ⛔ BLOCKING 确保偏好在第一次就收集完毕。一次性摩擦换来永久性便利，这笔账值得算。
            </p>
          </div>
        </div>

        {/* ── 06 ── */}
        <div className="mt-14">
          <h3 className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-ink-faint shrink-0">06</span>
            参考图像的「强制描述」策略
          </h3>

          <blockquote className="!my-5">
            <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">
              Passing --ref alone is NOT enough. Image generation models often ignore reference images unless the prompt text explicitly describes what to reproduce.
            </pre>
          </blockquote>

          <p>这是实战经验的结晶。技能作者显然踩过坑：给图像模型丢一张参考图，它经常视而不见。所以 baoyu-cover-image 做了一个激进的决定——<strong>不仅传参考图，还必须用文字把参考图的每个关键元素写出来</strong>，而且每个元素都要加 "MUST" 或 "REQUIRED" 前缀。</p>

          <p><code>prompt-template.md</code> 里的 Reference Analysis Template 更是把「什么叫具体描述」掰开讲了：</p>

          <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
            <p className="text-xs text-ink-faint mb-3">描述参考图时，模糊 vs 具体的对照——AI 需要的是可复现的细节：</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-red-400/80">模糊描述 ✗</th>
                    <th className="text-left py-2 font-medium text-green-500/80">具体描述 ✓</th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4 line-through opacity-60">"有个 logo" <span className="text-ink-faint text-xs no-underline">Has a logo</span></td><td className="py-2">"logo 的 m 由 3 条竖线构成" <span className="text-ink-faint text-xs">Logo 'm' formed by 3 vertical lines</span></td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4 line-through opacity-60">"有纹样" <span className="text-ink-faint text-xs no-underline">Has patterns</span></td><td className="py-2">"交错曲线编织成菱格网" <span className="text-ink-faint text-xs">Woven intersecting curves forming diamond grid</span></td></tr>
                  <tr><td className="py-2 pr-4 line-through opacity-60">"深浅搭配" <span className="text-ink-faint text-xs no-underline">Dark and light</span></td><td className="py-2">"#2D4A3E 深青 + #F5F0E0 奶油白"</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>这种 Good/Bad 对照是<strong>消灭模糊的利器</strong>。AI 最容易犯的错就是写出「clean style」这种空洞描述，这个表格把标准卡得死死的。</p>

          <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
            <p className="text-sm text-ink !mb-0">
当你需要 AI 输出具体描述时，提供 Good/Bad 对照表。一个反面示例的行为约束力远超三段正面指导。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 结构逻辑 ──────────────────── */}
      <section id="structure">
        <h2>它的结构逻辑</h2>

        <p>baoyu-cover-image 采用的是<strong>分层知识库 + 线性工作流</strong>的混合结构。</p>

        <p>工作流是线性的：Step 0 → Step 1 → Step 2 → Step 3 → Step 4 → Step 5，有明确的依赖关系和阻塞标记。但支撑这个工作流的知识不是线性的——它被拆散成 31 个 reference 文件，按需加载。</p>

        <p>这种结构的选择背后有清晰的逻辑：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>SKILL.md 是控制流</strong>，它告诉 AI「做什么、什么顺序」。234 行主体涵盖了完整的执行逻辑。</li>
          <li className="leading-relaxed pl-1"><strong>references/ 是知识库</strong>，它告诉 AI「怎么做、具体规则是什么」。9 个调色板定义不需要写在主体里——AI 只在选中 <code>warm</code> 时才需要读 <code>palettes/warm.md</code>。</li>
          <li className="leading-relaxed pl-1"><strong>config/ 是状态管理</strong>，它处理持久化偏好、首次配置、schema 迁移。</li>
        </ol>

        <p>这种分离的好处是<strong>注意力经济</strong>。一个 1000+ 行的单文件技能会让 AI 的注意力分散在大量无关细节上。baoyu-cover-image 让 AI 在每个步骤只看需要的信息——Step 2 确认选项时读 <code>confirm-options.md</code>，Step 3 写 prompt 时读 <code>prompt-template.md</code>。</p>

        <CodeBlock language="text" code={`references/
├── palettes/        # 9 个调色板定义，结构统一
├── renderings/      # 6 种渲染风格定义，结构统一
├── dimensions/      # 3 个维度详解（text, mood, font）
├── workflow/        # 3 个工作流步骤详解
├── config/          # 3 个配置相关文件
├── auto-selection.md    # 自动推荐规则
├── compatibility.md     # 兼容性矩阵
├── style-presets.md     # 风格预设
├── visual-elements.md   # 视觉元素库
└── base-prompt.md       # 基础 prompt 模板`} />

        <p>每个调色板文件的结构完全一致：标题 → Color Palette 表 → Decorative Hints → Best For。每个渲染风格文件的结构也完全一致：Core Characteristics → Lines → Texture → Depth → Element Vocabulary → Typography Approach。<strong>结构统一意味着可预测</strong>，AI 读过一个就知道所有同类文件的结构，加载效率极高。</p>
      </section>

      <div className="section-divider" />

      {/* ── 写作模式 ──────────────────── */}
      <section id="pattern">
        <h2>它的写作模式</h2>

        <h3>结构公式</h3>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            [多维参数矩阵] + [自动推荐规则] + [兼容性矩阵] + [快捷预设] + [阻塞式工作流] + [持久化偏好系统] + [结构化 Prompt 模板] + [完成报告]
          </p>
        </div>

        <p>这个公式的核心逻辑是一条<strong>决策辅助链</strong>：</p>

        <ul>
          <li>多维参数矩阵<strong>定义选择空间</strong></li>
          <li>自动推荐规则<strong>缩小选择空间</strong></li>
          <li>兼容性矩阵<strong>约束选择空间</strong></li>
          <li>快捷预设<strong>跳过选择空间</strong></li>
          <li>工作流<strong>串联选择到执行</strong></li>
          <li>偏好系统<strong>记忆选择</strong></li>
          <li>Prompt 模板<strong>转译选择为输出</strong></li>
          <li>完成报告<strong>确认选择的结果</strong></li>
        </ul>

        <p>每个要素都在降低用户的认知负担，层层递进，从「无限可能」压缩到「一个确定的输出」。</p>

        <h3>匹配的已知模式</h3>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>步骤化工作流</strong>（创新级）— 6 步 + ⛔ BLOCKING + ASCII 流程图</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>多维参数矩阵</strong>（创新级）— 6 维正交 + 兼容性矩阵约束</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>渐进式披露</strong>（优秀级）— 234 行主体 → 31 个按需加载的 reference</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>自动默认 + 手动覆盖</strong>（创新级）— 基于内容信号的动态推荐 + style presets + --quick</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>输出文件结构规范</strong>（优秀级）— slug 命名 + 时间戳冲突处理 + 多种输出目录模式</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>完成报告</strong>（优秀级）— 全参数摘要 + 文件列表</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>焦虑→确定性管道</strong>（创新级）— 从开放设计问题到 6 个单选题</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p><strong>反模式清单</strong>（标准级）— "Do NOT invent titles"、Good/Bad 对照表</p>
          </div>
        </div>

        <p>整体匹配「<strong>工作流型</strong>」组合。以步骤化流程为骨架，以多维参数为核心机制，以自动默认和完成报告为用户体验保障。</p>
      </section>

      <div className="section-divider" />

      {/* ── 同类构建 ──────────────────── */}
      <section id="build-guide">
        <h2>如果我们要写一个同类 skill</h2>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1"><strong>确定生成物的维度</strong>。找到你要生成的东西可以被哪些独立维度描述。封面图是 Type × Palette × Rendering × Text × Mood × Font，演示文稿可能是 Layout × Theme × Animation × Density。维度之间应正交。</li>
          <li className="leading-relaxed pl-1"><strong>为每个维度定义有限选项</strong>。每个维度 3-9 个选项，每个选项用 1 行描述说清楚差异。选项命名要直觉化（<code>warm</code> 比 <code>palette-01</code> 好）。</li>
          <li className="leading-relaxed pl-1"><strong>建立兼容性矩阵</strong>。标注哪些维度组合好用（✓✓）、可用（✓）、不推荐（✗）。这是设计知识的编码。</li>
          <li className="leading-relaxed pl-1"><strong>写自动推荐规则</strong>。定义内容信号到维度值的映射，让 <code>auto</code> 模式有据可依。</li>
          <li className="leading-relaxed pl-1"><strong>设计快捷预设</strong>。把常见的好用组合命名为 preset，允许局部覆盖。</li>
          <li className="leading-relaxed pl-1"><strong>设计工作流</strong>。线性步骤 + checklist，关键步骤标 ⛔ BLOCKING。</li>
          <li className="leading-relaxed pl-1"><strong>设计偏好系统</strong>。EXTEND.md + 首次配置流程，一次设置反复使用。</li>
          <li className="leading-relaxed pl-1"><strong>设计 Prompt 模板</strong>。把所有维度选择转化为结构化的生成指令。</li>
          <li className="leading-relaxed pl-1"><strong>设计完成报告</strong>。列出所有参数 + 输出文件路径。</li>
        </ol>

        <h3>可复制模板</h3>

        <CodeBlock language="markdown" code={`---
name: {skill-name}
description: {一句话}. Use when user asks to "{triggers}".
---

# {Skill Title}

{一句话描述}

## Usage

{CLI 示例，包含 --quick 和维度指定}

## Options

| Option | Description |
|--------|-------------|
| \`--{dim1} <name>\` | {维度1选项列表} |
| \`--{dim2} <name>\` | {维度2选项列表} |
| \`--style <name>\` | Preset shorthand (see [Style Presets](references/style-presets.md)) |
| \`--quick\` | Skip confirmation, use auto-selection |

## Dimensions

| Dimension | Values | Default |
|-----------|--------|---------|
| **{Dim1}** | {options} | auto |
| **{Dim2}** | {options} | auto |

Auto-selection rules: [references/auto-selection.md](references/auto-selection.md)

## File Structure

{输出目录规范，包含 slug 命名和冲突处理}

## Workflow

### Progress Checklist

- [ ] Step 0: Check preferences (EXTEND.md) ⛔ BLOCKING
- [ ] Step 1: Analyze content
- [ ] Step 2: Confirm options ⚠️ unless --quick
- [ ] Step 3: Create prompt
- [ ] Step 4: Generate {output}
- [ ] Step 5: Completion report

### Step 0: Load Preferences ⛔ BLOCKING

{检查 EXTEND.md → 首次配置流程}

### Step 1-5: {各步骤}

## Extension Support

{EXTEND.md 配置说明}

## References

{按类别列出所有 reference 文件链接}`} />
      </section>

      <div className="section-divider" />

      {/* ── 改进空间 ──────────────────── */}
      <section id="improvements">
        <h2>它还可以更好</h2>

        <p><strong>31 个 reference 文件对维护者来说是沉重的负担。</strong>这个量级的子资源意味着每次修改一个概念（比如增加一种渲染风格），需要同时更新 <code>renderings/</code> 新文件 + <code>auto-selection.md</code> + <code>compatibility.md</code> + <code>style-presets.md</code> + <code>base-prompt.md</code> 至少 5 个地方。如果有一个「维度注册表」，新增维度值只需在一处定义，其他文件自动引用，维护成本会大幅降低。</p>

        <p><strong>没有任何视觉示例。</strong>对于一个生成图像的技能，所有 reference 都是纯文字描述。<code>warm</code> 调色板只列了色号和文字描述，但用户（甚至 AI 自身）看不到一张 warm 调色板的实际封面效果。如果每个调色板和渲染风格配一张示例图，用户在确认阶段的选择质量会显著提升。</p>

        <p><strong>完全依赖外部图像生成技能。</strong>Step 4 写道 "Check image generation skills; if multiple, ask preference"，但没有内联任何 fallback。如果用户环境中没有安装图像生成技能，整个工作流在最后一步断裂。至少应该在 Step 0 增加图像生成能力的检测，提前告知用户需要什么前置条件。</p>

        <p><strong>Schema 迁移增加了认知重量。</strong><code>preferences-schema.md</code> 用了 60+ 行来处理 v1 → v2 → v3 的迁移逻辑。这对首次用户毫无价值，对老用户也只在升级时有用。可以把迁移逻辑抽到一个独立的 <code>references/config/migration.md</code>，让 schema 文件专注于当前版本的定义。</p>

        <p><strong>Reference Image 处理流程过于复杂。</strong><code>reference-images.md</code> + <code>prompt-template.md</code> 中关于参考图的处理逻辑涉及 file saving、verbal extraction、frontmatter references、MUST INCORPORATE 模板等多个子流程。虽然每个子流程都有其必要性，但合在一起对 AI 的指令跟随能力是个考验。可以考虑用一张决策流程图来简化。</p>
      </section>

      <div className="section-divider" />

      {/* ── 启发 ──────────────────────── */}
      <section id="takeaways">
        <h2>写 skill 可以从它身上学到什么</h2>

        <p><strong>把开放问题变成选择题。</strong>如果用户面对的是「你想要什么」这种开放问题，就把它拆成几个独立维度，每个维度给有限选项。这是消灭决策焦虑的最有效方式。</p>

        <p><strong>兼容性矩阵是沉默的专家。</strong>当你的参数有多个维度时，不要只列选项——告诉用户（和 AI）哪些组合好用。✓✓ / ✓ / ✗ 三级标注简单有效，比长篇解释更容易被遵守。</p>

        <p><strong>auto 不是 random，是 smart default。</strong>如果你提供了自动模式，就要让它真的智能。基于内容信号的推荐规则让 <code>--quick</code> 模式从「碰运气」变成「懂内容」。</p>

        <p><strong>用 reference 文件做知识分层。</strong>主体控制执行逻辑，reference 存储领域知识。AI 按需加载，注意力不浪费。但要注意子资源数量的维护成本——31 个文件是上限而非标杆。</p>

        <p><strong>首次配置是投资，不是打扰。</strong>用 ⛔ BLOCKING 确保偏好在第一次就收集完毕，之后所有执行都自动应用。一次性摩擦换来永久性便利，这笔账值得算。</p>
      </section>
    </ArticleLayout>
  );
}
