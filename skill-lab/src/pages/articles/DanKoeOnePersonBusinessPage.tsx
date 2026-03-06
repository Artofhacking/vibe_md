import { ArticleLayout } from '../../components/article/ArticleLayout';
import type { TocItem } from '../../components/TableOfContents';

const tocItems: TocItem[] = [
  { id: 'overview', label: '概览' },
  { id: 'everything-changing', label: '一切都在变' },
  { id: 'info-product-shifting', label: '形态在变' },
  { id: 'courses-failing', label: '静态课程失效' },
  { id: 'second-brain', label: '第二大脑' },
  { id: 'help-center-to-teacher', label: '从帮助中心到教师' },
  { id: 'apprenticeship', label: '学徒制回归' },
  { id: 'moat', label: '真正的护城河' },
  { id: 'takeaways', label: '要点提炼' },
  { id: 'glossary', label: '术语表' },
];

export function DanKoeOnePersonBusinessPage() {
  return (
    <ArticleLayout tocItems={tocItems}>
      {/* ── Header ─────────────────────── */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="tag-pill">创业</span>
          <span className="tag-pill">一人公司</span>
          <span className="tag-pill">AI 时代</span>
          <span className="tag-pill">商业模式</span>
          <span className="text-ink-faint">|</span>
          <span className="text-sm text-ink-muted">2026-03-04</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-ink leading-[1.1]">
          如果2026年重新开始<br />做一人公司，我会这么干
        </h1>
      </header>

      {/* ── Hook ───────────────────────── */}
      <div className="text-xl md:text-2xl leading-relaxed font-serif text-ink-muted mb-12 pb-12 border-b border-border">
        Dan Koe 是海外创作者经济领域最具影响力的实践者之一，长期研究「一人公司」模型。在这篇文章中，他对过去十年的一人公司模式做了一次坦诚的复盘——承认旧路径正在失效，然后提出了一个核心判断：教育的未来不是课程，而是学习体验；AI 让学徒制第一次可以规模化。
      </div>

      {/* ── 概览 ───────────────────────── */}
      <section id="overview">
        <h2>概览</h2>

        <div className="my-8 space-y-1.5 text-sm text-ink-muted">
          <p className="!mb-0"><span className="text-ink-faint">原文</span> — How I'd Build a One-Person Business If I Started Over in 2026</p>
          <p className="!mb-0"><span className="text-ink-faint">作者</span> — Dan Koe</p>
          <p className="!mb-0"><span className="text-ink-faint">来源</span> — 微信公众号转载（原文为 Dan Koe 视频/博客内容）</p>
          <p className="!mb-0"><span className="text-ink-faint">类型</span> — 商业洞察 / 创作者经济</p>
        </div>

        <p>Dan Koe 的核心论证链条可以拆成四层递进：</p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>诊断</strong> — 旧的信息产品模式正在失效，静态课程完成率极低，AI 让纯信息近乎免费</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>转向</strong> — 教育的未来不是课程，而是学习体验；你卖的不是信息，而是你的「第二大脑」</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>机制</strong> — AI 让学徒制第一次可以规模化——复制你的判断方式，而不是复制你这个人</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>护城河</strong> — 真正的壁垒是痴迷和长期主义，是你愿意花十年研究的特定知识</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 一切都在变 ──────────────────── */}
      <section id="everything-changing">
        <h2>一切都在改变——但旧方法不值得留恋</h2>

        <p>Dan Koe 开门见山：一切都在改变。商业在变，互联网在变，社交媒体在变，内容在变，艺术在变，编程在变。去年还能奏效的方法，今年已经明显不灵了。</p>

        <p>但紧接着他做了一个出人意料的表态——<strong>他不会再劝任何人去做代运营、自由职业、教练、咨询这种「低垂果实」。</strong></p>

        <p>这些路径他以前讲过很多，也确实曾经有效，但它们已经不是「此刻最合理的选择」了。他没有否认这些模式依然能养活人，而是说——如果你今天从零开始，有更好的结构可以搭。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            他真正要讨论的是一个更根本的问题：在2026当下这个阶段，什么样的一人公司模式，才能在<strong>结构上</strong>成立？
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 形态在变 ──────────────────── */}
      <section id="info-product-shifting">
        <h2>知识付费「死了」？未必，但形态在变</h2>

        <p>过去一年里，很多人开始说——价值型内容死了、知识付费产品死了、当创作者已经不值得了。</p>

        <p>Dan Koe 直接承认，自己也并不完全确定答案。但可以确定的一点是：<strong>一人公司正在发生形态层面的变化。</strong></p>

        <p>在过去十多年里，最成功的一人公司模型，几乎都围绕着一个核心：</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            信息产品 + 极高的利润率
          </p>
        </div>

        <p>一个人，通过互联网和社交媒体获取流量，然后把自己的经验、知识、方法打包成课程、教练服务或咨询产品。这是一个极其反直觉但真实存在过的奇迹——<strong>一个人可以同时承担营销、销售、产品、设计这四个角色。</strong>而在今天，随着 AI 的出现，这件事变得更加极端——一个人能做的事情比以往任何时候都多。</p>

        <p><strong>模式本身并没有消失，消失的是「旧的载体」。</strong></p>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">你仍然可以通过真实的人生经历、长期兴趣、深度学习，成为某个领域的<strong>价值源头</strong></p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">你仍然可以通过内容，把这些东西<strong>传递出去</strong></p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0">你仍然可以通过产品，把它们<strong>变成收入</strong></p>
          </div>
        </div>

        <p>但问题在于——你用什么形式承载这些东西呢？</p>
      </section>

      <div className="section-divider" />

      {/* ── 静态课程正在失效 ────────────── */}
      <section id="courses-failing">
        <h2>静态课程正在失效</h2>

        <p>Dan Koe 用了很长的篇幅解释一个核心判断：<strong>静态课程已经越来越难以满足市场。</strong></p>

        <p>现在主流的课程形态是什么？通常是十几个小时的视频，学生坐在那里看、记笔记、希望某一天能用上。但现实是：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">绝大多数人不会学完课程</li>
          <li className="leading-relaxed pl-1">学完的人中，大多数也拿不到结果</li>
          <li className="leading-relaxed pl-1">学习发生在「脱离真实场景」的环境中</li>
        </ol>

        <p>与此同时，AI 的出现让信息本身几乎可以被瞬间生成。如果只是听人讲道理，AI 可以做得又快又便宜。当信息获取的边际成本趋近于零时，仅仅「传递信息」的课程就失去了溢价能力。</p>

        <p>于是，他提出了一个非常关键的转折点：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`教育的未来，不是课程，而是学习体验。`}</pre>
        </blockquote>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">静态课程 vs 学习体验</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted"></th>
                  <th className="text-left py-2 pr-4 font-medium text-red-400/80">静态课程</th>
                  <th className="text-left py-2 font-medium text-green-500/80">学习体验</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">形态</td>
                  <td className="py-2 pr-4">十几小时视频 + PDF</td>
                  <td className="py-2">知识库 + AI 学习助手</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">学习方式</td>
                  <td className="py-2 pr-4">被动观看、记笔记</td>
                  <td className="py-2">实时交互、边做边学</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">反馈速度</td>
                  <td className="py-2 pr-4 text-red-400">零（自生自灭）</td>
                  <td className="py-2 text-green-500">即时（AI 实时纠正）</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">本质</td>
                  <td className="py-2 pr-4">知识的容器</td>
                  <td className="py-2">判断力的代理</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 卖你的第二大脑 ────────────── */}
      <section id="second-brain">
        <h2>「你卖的是你的第二大脑」</h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`You're practically selling a second version of your mind.`}</pre>
        </blockquote>

        <p><strong>你几乎是在卖你的第二大脑。</strong></p>

        <p>假设你是一个写作教练。过去你会做什么？录一门写作课，讲结构、讲技巧、讲方法，然后把视频卖出去。学生看完，能不能写出来，全靠自觉。</p>

        <p>但在新的模式下，你可以做一件完全不同的事：把你所有关于写作的判断、方法、修改思路、反馈逻辑，全部交给 AI，做成一个<strong>交互式写作助手</strong>。</p>

        <p>这个 AI 不只是回答问题，而是：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">在学员写公众号 / 小红书的时候，像教练一样坐在她旁边</li>
          <li className="leading-relaxed pl-1">告诉学员这一段哪里有问题</li>
          <li className="leading-relaxed pl-1">解释为什么这里不清楚</li>
          <li className="leading-relaxed pl-1">给出该如何改的建议</li>
          <li className="leading-relaxed pl-1">甚至直接带着学员一步步完成写作</li>
        </ol>

        <p>这种学习效率，远远高于一个人对着视频课程反复卡住、然后放弃。</p>

        <div className="border border-border rounded-xl p-5 bg-surface-1 mt-5">
          <p className="text-sm text-ink !mb-0">
            底层逻辑其实非常清晰：课程卖的是「知识的容器」，而 AI 助手卖的是「判断力的代理」。前者是一次性消费，后者是持续陪伴。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 从帮助中心到 AI 教师 ──────── */}
      <section id="help-center-to-teacher">
        <h2>从帮助中心到 AI 教师</h2>

        <p>Dan Koe 还举了另一个例子——他最近搭建了一个帮助中心。</p>

        <p>他让 AI 研究其他公司帮助中心的结构，提出文章选题，然后通过采访的方式从他这里获取知识，写成三十多篇文章。这些文章一方面供人工客服使用，另一方面直接被 AI 客服调用，解决大量不需要人工介入的问题。</p>

        <p>整个过程里，<strong>他并没有写文章，他只是回答问题、纠正错误。</strong>AI 扮演的是采访者和写手的角色，而他扮演的是领域专家。</p>

        <p>这个模式可以直接搬到教育领域。想象一下，一个课程，但它不是视频链接，而是一个<strong>知识库 + AI 学习助手</strong>。这个 AI 不是客服，而是老师，它的任务不是回答「怎么退款」，而是：</p>

        <ol className="list-decimal pl-5 mb-5 space-y-2 text-ink-muted marker:text-ink-faint">
          <li className="leading-relaxed pl-1">帮学生理解内容</li>
          <li className="leading-relaxed pl-1">带学生练习</li>
          <li className="leading-relaxed pl-1">在卡住的时候给反馈</li>
          <li className="leading-relaxed pl-1">甚至直接帮学生完成一部分工作</li>
        </ol>
      </section>

      <div className="section-divider" />

      {/* ── 学徒制回归 ──────────────────── */}
      <section id="apprenticeship">
        <h2>AI 让学徒制回归</h2>

        <p>Dan Koe 做了一个漂亮的历史类比：<strong>这并不是什么新发明。在大规模教育出现之前，人类传递知识的方式，本来就是这样——学徒制。</strong></p>

        <p>铁匠不会给徒弟一本说明书，让他回家研究；他是站在旁边，看你怎么握锤子，错了就当场纠正。</p>

        <p>而课程，本质上只是数字化讲座——它和工业化教育一样，追求规模效率，但牺牲了真正的学习效果。</p>

        <div className="border border-border rounded-xl p-6 bg-surface-1 my-6">
          <p className="text-base font-mono text-ink !mb-0 leading-relaxed text-center">
            AI 的意义，在于第一次让学徒制可以规模化。
          </p>
        </div>

        <div className="space-y-3 my-6">
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>你的 AI 不是替代你</strong> — 而是在复制你</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>它复制的是你的判断方式</strong> — 而不是你这个人</p>
          </div>
          <div className="pl-5 border-l-2 border-ink-faint/30">
            <p className="!mb-0"><strong>你的方法论、边界、语气、经验</strong> — 你对「什么是好、什么是错」的判断，才是无法被轻易复制的，是未来做一人公司的起点</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 真正的护城河 ────────────── */}
      <section id="moat">
        <h2>真正的护城河：痴迷与长期主义</h2>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`真正的护城河，从来不是工具，
而是你的痴迷和长期主义。`}</pre>
        </blockquote>

        <p>AI 让所有人都变快了。但快，并不等于独特。</p>

        <p>真正拉开差距的，是那种你愿意花十年去研究，对你来说像玩，对别人来说难以坚持的、位于知识边缘的<strong>特定知识</strong>。</p>

        <div className="border-l-2 border-ink-faint/30 pl-5 my-5">
          <p className="text-xs text-ink-faint mb-3">AI 时代的价值分层</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">层级</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink-muted">特征</th>
                  <th className="text-left py-2 font-medium text-ink-muted">AI 能否替代</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">通用信息</td>
                  <td className="py-2 pr-4">人人可查、处处可得</td>
                  <td className="py-2 text-red-400">完全可以</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">结构化知识</td>
                  <td className="py-2 pr-4">课程、方法论、框架</td>
                  <td className="py-2 text-red-400">大部分可以</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-ink-faint">判断力</td>
                  <td className="py-2 pr-4">什么是好、什么是错</td>
                  <td className="py-2 text-ink-muted">部分可以</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-ink-faint">痴迷 × 时间</td>
                  <td className="py-2 pr-4">十年研究积淀的特定知识</td>
                  <td className="py-2 text-green-500">无法替代</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>AI 并没有让人类的价值变低，反而正在放大那些真正有积累、有判断力的人。</p>

        <p>放在2026年的个人商业、知识付费语境下，这篇文章其实在提醒我们一件非常重要的事：</p>

        <blockquote className="!my-5">
          <pre className="font-mono text-sm whitespace-pre-wrap !leading-relaxed not-italic">{`个人商业没有结束，但卖课逻辑的时代，正在结束。
真正开始的，是一个「把自己做成一家公司」的时代。`}</pre>
        </blockquote>
      </section>

      <div className="section-divider" />

      {/* ── 要点提炼 ──────────────────── */}
      <section id="takeaways">
        <h2>要点提炼</h2>

        <div className="space-y-4 my-6">
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>形态在变，内核没变</strong> — 信息产品 + 高利润率的内核依然成立，变的是承载形式——从静态课程转向交互式学习体验。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>静态课程正在被侵蚀</strong> — 当信息获取成本趋近于零，仅仅「传递信息」的产品就失去了溢价能力。未来的教育产品需要提供「判断力的代理」，而不只是「知识的容器」。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>「卖你的第二大脑」是新范式</strong> — 把你的专业判断、方法论、反馈逻辑注入 AI，让它在真实场景中像教练一样陪伴用户——这比录一门课的价值密度高得多。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>学徒制第一次可以规模化</strong> — 人类最有效的知识传递方式一直是学徒制，AI 让一个人的判断力可以同时「坐在」无数学员旁边。
            </p>
          </div>
          <div className="border border-border rounded-xl p-5 bg-surface-1">
            <p className="text-sm text-ink !mb-0">
              <strong>痴迷是终极护城河</strong> — 当 AI 让所有人都变快，差异化不再是效率，而是你在某个领域十年如一日的深度——那种对你像玩、对别人像苦差的特定知识。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 术语表 ──────────────────── */}
      <section id="glossary">
        <h2>术语表</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-ink-muted">术语</th>
                <th className="text-left py-2 font-medium text-ink-muted">释义</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 whitespace-nowrap">一人公司 <span className="text-ink-faint text-xs">One-Person Business</span></td>
                <td className="py-2">由单个个体运营的商业实体，通过互联网和数字工具实现高利润率运作</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 whitespace-nowrap">信息产品 <span className="text-ink-faint text-xs">Info Product</span></td>
                <td className="py-2">以知识、经验为核心内容的数字化产品，如在线课程、电子书、模板等</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 whitespace-nowrap">学徒制 <span className="text-ink-faint text-xs">Apprenticeship</span></td>
                <td className="py-2">通过师傅在真实场景中手把手指导学习的传统模式，强调实时反馈和边做边学</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 whitespace-nowrap">第二大脑 <span className="text-ink-faint text-xs">Second Brain</span></td>
                <td className="py-2">此处特指将个人的判断力、方法论注入 AI 系统，使其能代替你向他人提供专业指导</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ArticleLayout>
  );
}
