import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'naked-skills', label: 'Skills 裸奔' },
  { id: 'skill-types', label: '两种类型' },
  { id: 'evals', label: 'Evals 测试' },
  { id: 'benchmark', label: 'Benchmark' },
  { id: 'multi-agent', label: '多智能体' },
  { id: 'trigger-tuning', label: '触发调优' },
  { id: 'future', label: '未来方向' },
  { id: 'takeaways', label: '要点提炼' },
];

export function SkillCreatorEvalBenchmarkUpgradePage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">Agent Skills</span>
          <span className="tag-pill">测试</span>
          <span className="tag-pill">工程实践</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-05</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          Skill-Creator 重磅升级：让 Agent Skills 像软件一样可测试、可度量、可迭代
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        Anthropic 把软件工程最核心的三板斧——测试、基准测试、迭代优化——搬进了 skill-creator，全程不需要写一行代码。听起来像是"给 Word 文档装了个 CI/CD 流水线"，但它确实做到了。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <p>这是 Agent Skills 发展史上一个里程碑式的更新。Skill-creator 新增四大能力：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Evals</strong> — Skills 的"单元测试"，用自然语言定义"好输出长什么样"，自动判断达标与否</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Benchmark 模式</strong> — 标准化性能仪表盘，追踪通过率、执行时间、Token 消耗</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>多智能体并行 + 比较智能体</strong> — 并行加速评估，盲测 A/B 对比消除主观偏差</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>触发描述调优</strong> — 智能优化 Skill 描述，同时降低假阳性和假阴性</p>
          </div>
        </div>

        <p>它解决的是 Skills 从"感觉能用"到"确定能用"的信任鸿沟。</p>
      </section>

      <div className="section-divider" />

      {/* ── Skills 裸奔 ────────────────── */}
      <section id="naked-skills">
        <h2>一个尴尬的现实：Skills 一直在"裸奔"</h2>

        <p>自去年 10 月 Agent Skills 发布以来，大量用户开始创建自己的技能。但这些用户有一个共同特征——他们大多是领域专家，不是工程师。他们精通自己的工作流程，知道"好的输出长什么样"，但完全没有工具去回答三个关键问题：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">换了新模型，这个 Skill 还好使吗？</li>
          <li className="leading-relaxed pl-1">它是不是只在该触发的时候才触发？</li>
          <li className="leading-relaxed pl-1">改了一版，到底是变好了还是变烂了？</li>
        </ol>

        <p>没有测试，Skills 就像一段从来不跑单元测试的代码——它可能工作得很好，但你心里永远悬着一根弦。用软件工程的术语说：这是在生产环境里 YOLO。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            这次更新的本质，是把软件开发里最成熟的实践——测试、基准、迭代——移植到了 Skill 创作领域。而且巧妙地保留了"零代码"哲学：你不需要学 pytest，不需要写 assertion，只需要用自然语言描述"好的输出应该长什么样"。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 两种类型 ───────────────────── */}
      <section id="skill-types">
        <h2>先搞清楚：你的 Skill 属于哪一类？</h2>

        <p>在讨论测试之前，有必要厘清 Skills 的两种本质类型——它们需要测试的原因截然不同。</p>

        <div className="space-y-4 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>能力提升型</strong><span className="text-ink-faint text-xs">（Capability Uplift）</span></p>
            <p className="text-ink-muted !mb-0">模型原本"做不到"或"做不稳定"的事，通过 Skill 注入特定技巧和模式来稳定输出。典型例子是 Anthropic 的文档创建类 Skills。这类 Skill 有一个独特的宿命：随着模型能力进化，它们可能会变得不再必要——"光荣退休"。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>偏好编码型</strong><span className="text-ink-faint text-xs">（Encoded Preference）</span></p>
            <p className="text-ink-muted !mb-0">模型每一步都能做，但需要按照你团队的特定流程严格排序。比如按固定标准审查 NDA 合同、按公司模板生成周报。这类 Skill 更加持久，但风险是模型可能"自作主张"偏离你精心设计的流程。</p>
          </div>
        </div>

        <p>这个分类直接决定了你的测试策略：</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">类型</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">测试重点</th>
                  <th className="text-left py-2 font-medium text-ink-muted">信号</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">能力提升型</td>
                  <td className="py-2 pr-4">模型是否已追上 Skill</td>
                  <td className="py-2">基线模型不加载 Skill 即可通过 evals → 可退休</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">偏好编码型</td>
                  <td className="py-2 pr-4">Skill 是否忠实还原流程</td>
                  <td className="py-2">输出偏离预设步骤或跳过关键节点 → 需修复</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            无论哪种，测试的目的都一样：把一个"看起来管用"的 Skill 变成一个"确切知道管用"的 Skill。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Evals ──────────────────────── */}
      <section id="evals">
        <h2>Evals：给 Skills 装上单元测试</h2>

        <p>这是整次更新中最重要的功能，没有之一。</p>

        <p>用法极简：你提供测试提示词，再描述"好的输出应该是什么样"，skill-creator 自动运行 Skill 并判断是否达标。如果你写过软件测试，这个流程会非常亲切——只不过你的 assertion 是用自然语言写的，而不是 <code>assertEqual</code>。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 my-6">
          <p className="text-xs text-ink-faint mb-2">真实案例</p>
          <p className="text-sm text-ink !mb-0">
            Anthropic 的 PDF Skill 曾经无法处理"非填表表单"——没有预定义字段的 PDF，必须在精确坐标上放置文字。这种失败靠人工抽检可能好几周都发现不了，但 evals 精准定位了失败场景。团队据此修复为"锚定已提取文字坐标"的策略，问题彻底解决。
          </p>
        </div>

        <p>Evals 带来两个至关重要的实际价值：</p>

        <div className="space-y-4 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>及早发现质量回归</strong></p>
            <p className="text-ink-muted !mb-0">模型更新、基础设施变动、依赖链改变——任何一环的变化都可能导致原本工作良好的 Skill 突然失效。定期跑 evals 就像给 Skill 装了心电监护仪，异常心跳一出现就能收到警报，而不是等到用户已经受到影响。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>判断 Skill 是否已经"过时"</strong></p>
            <p className="text-ink-muted !mb-0">基线模型在不加载 Skill 的情况下就能通过所有 evals？说明 Skill 编码的技巧可能已经被模型内化——这个 Skill 没有坏，它只是不再被需要了。这种"光荣退役"的判断，在没有 evals 的时候几乎做不到。</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Benchmark ──────────────────── */}
      <section id="benchmark">
        <h2>Benchmark 模式：标准化的性能仪表盘</h2>

        <p>如果说单次 eval 是"这次手术成功了吗"，那 Benchmark 模式就是"这个医生的整体手术成功率是多少"。</p>

        <p>它支持批量运行同一组 evals，输出三个核心指标：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>通过率</strong><span className="text-ink-faint text-xs">（Pass Rate）</span> — Skill 在多大比例的测试场景中达标</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>执行时间</strong><span className="text-ink-faint text-xs">（Elapsed Time）</span> — 每次运行花了多长时间</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>Token 消耗</strong><span className="text-ink-faint text-xs">（Token Usage）</span> — 每次运行用了多少 token</p>
          </div>
        </div>

        <p>三个数字放在一起，你就有了一张可追踪的成绩单。在模型更新后跑一次，看看通过率有没有掉；在 Skill 迭代前后各跑一次，看看新版是不是真的更好了。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            这些数据可以本地存储、接入仪表盘、甚至插入 CI/CD 系统。像管理软件质量一样管理 Skill 质量——Skills 持续集成，听起来像科幻，但现在已经是现实。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 多智能体 ───────────────────── */}
      <section id="multi-agent">
        <h2>多智能体并行 + 比较智能体</h2>

        <p>传统的顺序执行有两个问题：慢，而且上下文会互相污染——前一个测试的残留信息可能影响后一个测试的结果。</p>

        <div className="space-y-4 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>并行运行</strong></p>
            <p className="text-ink-muted !mb-0">新版 skill-creator 为每个 eval 启动独立智能体，在干净的上下文中并行运行，每个实例都有自己的 token 和时间指标。结果更快出来，杜绝交叉污染。</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-1"><strong>比较智能体</strong><span className="text-ink-faint text-xs">（Comparator Agent）</span></p>
            <p className="text-ink-muted !mb-0">同时运行"Skill A vs Skill B"或"有 Skill vs 无 Skill"的 A/B 测试。关键在于"盲测"——一个第三方智能体在不知道哪个输出来自哪个版本的情况下进行客观打分，消除主观偏差。</p>
          </div>
        </div>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            这跟医学界的双盲实验一个道理：不知道哪个是新药、哪个是安慰剂，评估才有可信度。在 AI 领域，"自己评价自己"的问题已经被吐槽了无数次，而比较智能体正是对这个问题的优雅回应。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 触发调优 ───────────────────── */}
      <section id="trigger-tuning">
        <h2>触发描述智能调优</h2>

        <p>随着 Skill 库越来越大，一个隐蔽但致命的问题浮出水面：触发准确性。</p>

        <p>Skill 的描述就像是它的"门牌号"——描述太宽泛，路过的人都会误闯进来（假阳性）；描述太窄，真正需要它的人根本找不到（假阴性）。当你只有三五个 Skills 时这不是问题，但当 Skill 库膨胀到几十上百个时，精确触发就成了生死攸关的事。</p>

        <p>Skill-creator 现在可以：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">分析当前描述与历史样本提示之间的匹配度</li>
          <li className="leading-relaxed pl-1">建议优化文字，同时降低假阳性和假阴性</li>
        </ol>

        <p>实际效果：在 Anthropic 自己的 6 个公开文档创建 Skills 上测试，<strong>5 个的触发准确率显著提升</strong>。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            这让人想起搜索引擎优化的逻辑——你写的不是给人看的描述，而是给模型"理解并匹配"的描述。两者的核心挑战都一样：如何用最少的文字传达最精确的语义边界。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 未来方向 ───────────────────── */}
      <section id="future">
        <h2>未来方向：从"怎么做"到"做什么"</h2>

        <p>这是整篇文章中最让人兴奋的前瞻。</p>

        <p>今天的 SKILL.md 本质上是一份"实现计划"——它详细告诉模型如何做某件事，步骤 1、步骤 2、步骤 3，事无巨细。但如果模型变得足够聪明，也许未来你只需要描述"目标"——"我要的输出长这样，满足这些约束就行"——模型自己推导实现路径。</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed">
            How（实现计划） → What（目标描述） → 模型自行推导路径
          </p>
        </div>

        <p>这个演进方向，和编程语言的发展史如出一辙。从汇编语言的"把这个值放到这个寄存器"，到 SQL 的"给我满足这个条件的数据"——每一代抽象都在从 How 走向 What。</p>

        <p>而本次发布的 evals 框架，恰恰是迈向这个未来的关键一步——因为 evals 本身就是在描述"What should happen"。当 evals 足够全面、足够精确时，它们就是 Skill 本身的最佳表达。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            到那一天，<strong>Skill = 一组 evals + 一句目标描述</strong>就够了，模型负责填充中间的所有 How。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ──────────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-4 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>Skills 有两种本质类型</strong> — 能力提升型需要监控"是否过时"，偏好编码型需要验证"是否忠实"。搞清楚类型才能对症下测试。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>Evals 是核心中的核心</strong> — 用自然语言定义"好输出长什么样"，自动判断达标。PDF Skill 真实案例证明，evals 能精准定位人工抽检根本发现不了的失败场景。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>Benchmark 让 Skill 质量可追踪</strong> — 通过率、执行时间、Token 消耗三个指标组成成绩单，支持接入 CI/CD 系统，实现 Skills 持续集成。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>比较智能体解决"自评不可信"</strong> — 盲测 + 第三方评判的设计，和医学双盲实验一个道理，让 A/B 对比终于有可信度。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>触发调优是规模化的关键</strong> — 描述太宽会误触发，太窄会漏触发。这和搜索引擎优化面临的挑战本质相同。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>未来：Skill 从 How 走向 What</strong> — 当 evals 足够精确时，Skill = 一组 evals + 一句目标描述，模型负责填充所有实现细节。
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
