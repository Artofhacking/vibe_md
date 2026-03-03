# Skill Creator：教 AI 造 AI 技能的元技能，以及它背后的方法论野心

> 481 行 SKILL.md、7 个脚本、3 个专职 agent、一个完整的 eval viewer——这不是一个技能，这是一套技能工厂的操作系统。它最精彩的地方不是教你怎么写 skill，而是把"创建 skill"这件事变成了一个可量化、可迭代、有对照组的实验过程。

---

## 它是什么

Skill Creator 是 Anthropic 为 Claude Code 打造的官方元技能（meta-skill）。它的目标是帮助用户从零开始创建一个 AI 技能，然后通过反复测试和迭代把它打磨到好用。

它解决的核心问题是：**写一个 skill 容易，写一个好 skill 难**。大多数人写完第一版就停了，因为不知道怎么评估"好不好"，也不知道怎么系统性地改进。Skill Creator 把这个模糊的"改进"过程工程化了——它引入了测试用例、对照实验、量化评分、用户反馈循环、描述优化，让"创建 skill"从手艺活变成了可复现的流程。

整个技能的资源非常丰富：

- **SKILL.md**（481 行）：主体指令
- **scripts/**（7 个 Python 脚本）：评估运行、基准聚合、描述优化、技能打包等
- **agents/**（3 个子 agent）：评分器（grader）、盲评器（comparator）、分析器（analyzer）
- **references/**：JSON schema 文档
- **eval-viewer/**：完整的 HTML 评审界面，支持逐条反馈和基准对比
- **assets/**：描述优化的评审模板

这是我们分析过的资源最丰富、工程化程度最高的技能。

## 它的精彩之处

### 01 迭代循环作为第一性原理

> Decide what you want the skill to do → Write a draft → Create test prompts and run claude-with-access-to-the-skill on them → Help the user evaluate the results → Rewrite the skill based on feedback → Repeat until you're satisfied → Expand the test set and try again at larger scale

整个技能围绕一个核心循环构建：**草稿 → 测试 → 评估 → 改进 → 重复**。这不是某个章节里提到的建议，而是整个技能的骨架——所有其他内容（脚本、agent、viewer）都是为了让这个循环跑得更快、更可靠。

这种设计选择非常高明。大多数"教你做 X"的技能会写一份线性清单："第一步做这个，第二步做那个"。Skill Creator 认识到创建技能是一个**收敛问题**，不是一个执行问题——你不可能一次写对，你需要反复逼近。所以它的结构不是一条线，而是一个环。

更聪明的是，它在循环中嵌入了科学方法：有实验组（with-skill），有对照组（baseline），有量化指标（pass rate），有定性评估（用户反馈）。这让"改进 skill"从"感觉好了一点"变成了"pass rate 从 0.65 提升到 0.85"。

### 02 "Cool? Cool." —— 技术文档里罕见的人味

> Cool? Cool.

> This task is pretty important (we are trying to create billions a year in economic value here!) and your thinking time is not the blocker; take your time and really mull things over.

整个 SKILL.md 的语气像一个经验丰富的同事在跟你聊天，不像一份技术规范。"Cool? Cool." 出现在核心循环介绍之后，用两个词确认了共识。"we are trying to create billions a year in economic value here!" 则用一种半开玩笑的方式传达了任务的重要性。

这种语气不是随意的——它是刻意的设计选择。当一个 skill 有 481 行时，保持读者（包括 AI）的注意力本身就是挑战。对话式语气降低了认知疲劳，让模型更倾向于"理解意图"而不是"机械执行指令"。

如果换成正式的技术规范语气，这个 skill 的效果会打折扣。因为它的核心诉求不是让 AI 按部就班地执行步骤，而是让 AI **理解为什么要这样做**，然后灵活应对。对话式语气天然适合传达"为什么"。

### 03 预见了"人人都是开发者"的时代

> There's a trend now where the power of Claude is inspiring plumbers to open up their terminals, parents and grandparents to google "how to install npm".

"Communicating with the user"这一节几乎可以从技能中独立出来当一篇产品设计文章。它预见到了一个正在发生的趋势：使用 AI 工具创建 skill 的人，不再只是程序员。

它给出了具体的校准标准：

> - "evaluation" and "benchmark" are borderline, but OK
> - for "JSON" and "assertion" you want to see serious cues from the user that they know what those things are before using them without explaining them

这不是空泛的"注意用户水平"，而是精确到了具体术语级别。它告诉 AI："evaluation 可以直接说，但 JSON 要先确认用户懂不懂"。这种颗粒度的沟通指导，在其他技能中几乎看不到。

这个设计击中了一个真实的痛点：技术工具的说明文档几乎都假设读者是技术人员。当受众扩大时，同一套工具需要不同级别的语言。Skill Creator 没有选择"写两个版本"，而是让 AI 实时检测并适应。

### 04 "Explain the why" —— 反 MUST 的写作哲学

> Try hard to explain the **why** behind everything you're asking the model to do. Today's LLMs are *smart*. If you find yourself writing ALWAYS or NEVER in all caps, or using super rigid structures, that's a yellow flag — if possible, reframe and explain the reasoning so that the model understands why the thing you're asking for is important.

这可能是整个 skill 中最深刻的一段。它不是在说"怎么改进技能"，它是在说"怎么跟 AI 沟通"。

它的观点是：与其用大写的 MUST 和 NEVER 来约束 AI，不如解释原因让 AI 自己判断。这是一种尊重智能体自主性的写法——你给它理由，它自己得出结论，比你给它命令但它不理解为什么要这样做效果更好。

而且这个观点是自洽的——Skill Creator 自己就几乎不用 MUST/NEVER。它用 "please"、"I'd suggest"、"if possible" 这类柔性表达，但传达的信息一点也不模糊。它用自己的写法证明了自己的理论。

### 05 并行对照实验——把 A/B 测试引入技能开发

> For each test case, spawn two subagents in the same turn — one with the skill, one without. This is important: don't spawn the with-skill runs first and then come back for baselines later. Launch everything at once so it all finishes around the same time.

这个设计直接把实验科学的方法引入了技能开发。每个测试用例同时跑两个版本：带技能的和不带技能的（或旧版本的），然后对比结果。

强调"在同一轮次同时启动"不是性能优化——它是为了**控制变量**。如果先跑完实验组再跑对照组，中间可能发生环境变化，影响对比的公平性。这种对实验严谨性的关注，在一个"教你写 skill"的工具里出现，说明作者的方法论思维非常成熟。

更进一步，它还有盲评机制（Blind Comparator）：让一个独立的 agent 看两份输出，但不告诉它哪个是实验组哪个是对照组，纯粹基于质量判断。这直接对标了学术研究中的双盲实验。虽然标注为 "advanced" 和 "optional"，但它的存在本身就拉高了这个技能的方法论层次。

### 06 把描述优化当成机器学习问题

> It splits the eval set into 60% train and 40% held-out test, evaluates the current description (running each query 3 times to get a reliable trigger rate), then calls Claude with extended thinking to propose improvements based on what failed. It re-evaluates each new description on both train and test, iterating up to 5 times.

Description Optimization 这一节把"让 skill 被正确触发"这个问题，完全用机器学习的方法论来处理：

- **训练集/测试集划分**（60/40），防止过拟合
- **每个 query 跑 3 次**，用统计方法得到可靠的触发率
- **迭代优化**，最多 5 轮
- **用测试集分数选最佳描述**，而不是训练集分数

这是一种降维打击。大多数人写 skill 描述靠直觉——"这样写应该能触发吧"。Skill Creator 把它变成了可测量、可优化的工程问题。

而且它还教了一个关键洞察：

> Skills appear in Claude's available_skills list... Claude only consults skills for tasks it can't easily handle on its own — simple, one-step queries like "read this PDF" may not trigger a skill even if the description matches perfectly.

这个关于触发机制的解释，帮助用户理解为什么有些"应该触发"的描述不触发——不是描述写得不好，而是任务太简单，AI 觉得自己能搞定。

### 07 三套环境适配——真正面向部署的工程思维

> **Claude.ai-specific instructions** / **Cowork-Specific Instructions**

技能的最后 60 行专门为不同运行环境做了适配：Claude Code（完整版）、Claude.ai（无子 agent、无浏览器）、Cowork（有子 agent、无浏览器）。

这不是"以后再说"的锦上添花——它直接决定了技能在不同环境下的可用性。每套环境说明都具体到了哪些功能可用、哪些要跳过、怎么替代。比如 Claude.ai 没有子 agent，就把并行执行改成串行执行，跳过基准对比，聚焦定性反馈。

这种对部署环境的严肃考虑，在大多数 skill 中完全缺失。它背后的思维是：**技能不是在真空中运行的，它必须适配真实的约束条件**。

## 它的结构逻辑

Skill Creator 的结构是**螺旋上升式**的，不是线性的。

第一层是概览——用一段自然语言描述整个迭代循环，建立全局心智模型。第二层进入细节——创建技能、运行评估、改进技能，每个阶段有自己的步骤。第三层是高级功能——盲评、描述优化、打包。第四层是环境适配——不同平台的差异处理。

这种"先全局后细节"的结构匹配了渐进式披露模式，但有一个独特之处：**核心循环被重复了三次**。开头一次（概览），中间一次（详细步骤），结尾一次（强调）。

> Repeating one more time the core loop here for emphasis

这种刻意的重复在大多数技能写作指南中会被归为"冗余"。但在一个 481 行的技能中，重复核心循环是必要的——它确保无论 AI 从哪个位置开始读，都能找到这个环的入口。

子资源的组织也值得关注。agents/ 目录下的三个 agent（grader、comparator、analyzer）形成了一个完整的评估体系：评分 → 盲评 → 分析原因。它们不是独立工具，而是一条评估流水线的三个站点。

## 它的写作模式

**结构公式**

> [情境感知入口] + [迭代循环框架] + [并行对照实验] + [定量+定性双轨评估] + [反馈驱动改进] + [描述优化] + [环境适配]

这个公式的核心是"迭代循环"——其他所有要素都是为了让这个循环跑起来。情境感知入口让 AI 判断用户在哪个阶段，然后直接切入。并行对照实验和双轨评估提供改进的依据。反馈驱动改进执行改进。描述优化和环境适配是最后的打磨。

**匹配的已知模式**

- **步骤化工作流**（5/6 skills 使用）— 创新质量：步骤形成循环而非直线，且步骤间有明确依赖
- **渐进式披露**（4/6 skills 使用）— 优秀质量：三层加载（metadata → body → bundled resources）在这个 skill 中既是教学内容也是自身实践
- **自动默认 + 手动覆盖**（4/6 skills 使用）— 创新质量：根据用户当前阶段动态调整起点
- **反模式清单**（3/6 skills 使用）— 标准质量：通过"explain the why"替代传统的 MUST/NEVER
- **完成报告**（3/6 skills 使用）— 优秀质量：eval viewer + benchmark 提供完整的完成信号
- **焦虑→确定性管道**（5/6 skills 使用）— 优秀质量："不知道怎么写好 skill" → 可量化的迭代改进过程
- **赋能叙事**（4/6 skills 使用）— 优秀质量：用户学到的不只是这个 skill，而是一整套创建和改进 skill 的方法论

模式组合完美匹配**元技能型**（步骤化 + 迭代循环 + 评估体系 + 赋能叙事）。

## 如果我们要写一个同类 skill

元技能（教 AI 创建某类产出的技能）的构建步骤：

1. **定义迭代循环**：先想清楚"草稿 → 评估 → 改进"这个环怎么转。不要写线性步骤，写循环
2. **设计评估机制**：有没有可量化的指标？有没有需要人类判断的定性部分？两条轨道都需要
3. **构建对照实验**：新版本 vs 旧版本，或有技能 vs 无技能。对比才能判断改进是否真的有效
4. **写情境感知入口**：用户可能在任何阶段进来——已有草稿、从零开始、只想改进描述。技能要能判断起点
5. **解释 why，不要堆 MUST**：元技能的用户需要理解原理才能举一反三
6. **提供工具链**：评估脚本、评审界面、聚合统计——减少每次迭代的人工成本
7. **处理环境差异**：不同运行环境有不同的能力约束，技能要优雅降级
8. **重复核心循环**：在开头、中间、结尾各说一次，确保不丢失主线

骨架模板：

```markdown
---
name: {domain}-creator
description: Create and iteratively improve {output-type}. Use when users want to create {output-type} from scratch, improve existing {output-type}, or evaluate {output-type} quality.
---

# {Domain} Creator

A skill for creating and iteratively improving {output-type}.

The core loop:
- Understand what the user wants
- Draft the {output}
- Test it with realistic cases
- Evaluate results (quantitative + qualitative)
- Improve based on feedback
- Repeat until satisfied

## Understanding the user

Figure out where the user is in the process and jump in accordingly.
{Possible entry points and how to detect them}

## Creating the {output}

### Capture Intent
{Questions to ask / information to gather}

### Write the draft
{Key components and patterns}

## Testing and evaluating

### Run test cases
{How to set up and run tests, with baseline comparison}

### Evaluate results
{Quantitative metrics + qualitative review process}

## Improving the {output}

{How to think about improvements: generalize, keep lean, explain why}

### The iteration loop
{Improve → Rerun → Review → Repeat}

## Reference files
- {List of agents, scripts, schemas}
```

## 它还可以更好

Skill Creator 最大的问题是**信息密度不均**。481 行中有些段落信息密度极高（比如描述优化的 ML 方法论），有些则偏松散（比如 "Of course, you should always be flexible" 这类过渡句）。"Communicating with the user" 虽然洞察精彩，但它和"创建技能"的主流程在结构上是割裂的——可以考虑提取到 `references/communication-guide.md` 中。

第二个问题是 **Claude.ai 和 Cowork 的适配说明放在了 SKILL.md 末尾**。这意味着这 60 行内容在每次加载时都会进入上下文，即使用户在 Claude Code 中使用也要付出这个 token 成本。更好的做法是把环境适配文档放到 `references/` 中，主体只保留一句指针："如果你不在 Claude Code 中运行，请先读 references/environment-guide.md"。

第三个问题是**没有 Quick Start**。一个 481 行的技能，用户打开后面对的是一段自然语言概述。如果在开头加一个 5 行的"最小可用流程"（比如："1. 告诉我你想做什么 2. 我帮你写草稿 3. 我跑几个测试 4. 你看结果 5. 我改进"），能极大降低首次使用的认知门槛。

第四个问题是 **eval viewer 的依赖没有说明**。`generate_review.py` 需要 Python 环境，但没有提供 `requirements.txt` 或说明需要哪些依赖包。在"plumbers opening terminals"的时代，这个遗漏会直接卡住非技术用户。

## 总结：写 skill 可以从它身上学到什么

**迭代循环比线性步骤更适合创造性任务。** 当最终产出不可能一次做对时，不要写"第一步→第二步→完成"，要写"草稿→测试→改进→重复"。循环结构承认不完美，并提供系统性改进的路径。

**对话式语气在长文档中是功能性需求，不是风格偏好。** 481 行的技术文档如果用正式语气写，AI 会倾向于机械执行。对话式语气让 AI 更倾向于理解意图，在模糊地带自主判断。

**"Explain the why" 是比 MUST/NEVER 更强大的指令方式。** AI 理解了原因后会在新场景中自行推理正确做法。MUST 只在它见过的场景中有效，遇到新情况就失灵。

**把评估工程化是元技能的核心竞争力。** 对照实验、量化指标、盲评机制——这些不是锦上添花，它们是把"感觉变好了"变成"确实变好了"的基础设施。

**环境适配决定了技能的实际覆盖面。** 一个只在理想环境下能用的技能，实际用户群会缩小一半以上。花 60 行处理环境差异，换来的是所有平台的可用性。
