# Web Design Guidelines：当一个技能决定把灵魂寄存在别处

> 40 行代码实现一个"实时合规审查器"——它的核心设计是拒绝在本地存储任何规则，转而每次从 GitHub 拉取最新版本。这个决定既是它最聪明的地方，也是最危险的地方。

---

## 它是什么

Web Design Guidelines 是 Vercel 出品的一个 UI 审查技能。它的工作方式极其简单：用户指定要审查的文件，技能从 GitHub 拉取 Vercel 维护的 Web Interface Guidelines，逐条检查代码合规性，以 `file:line` 格式输出发现的问题。

整个技能只有一个 SKILL.md，40 行，没有 scripts、没有 references、没有 assets。它可能是我们分析过的最"轻"的技能——轻到让人怀疑它到底算不算一个完整的技能。

但正是这种极端的轻量，让它值得研究。它代表了一种技能设计的极端范式：**技能本身不承载知识，只承载"去哪里获取知识"的指针**。

## 它的精彩之处

### 01 永远不过时的实时拉取设计

> ```
> Fetch fresh guidelines before each review:
> https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
> ```

这是整个技能最核心的设计决策。它没有把 Web Interface Guidelines 的内容复制到本地——而是每次执行时都从源头拉取最新版本。

这意味着 Vercel 更新了规则，用户不需要更新技能就能立即受益。在前端领域，最佳实践的迭代速度极快，这种"永远指向 latest"的策略避免了技能内容腐烂的问题。

如果我们写别的技能，凡是依赖外部不断演进的知识体（API 文档、设计规范、编码标准），都可以考虑这种"指针式"架构：技能只定义工作流，内容实时获取。

### 02 极端克制的 40 行哲学

整个 SKILL.md 只有 40 行。没有冗长的解释，没有"什么是 Web Interface Guidelines"的科普，没有使用场景的穷举。它假设用户知道自己在做什么，只需要一个执行流程。

这种克制在技能设计中很少见。大多数技能作者倾向于"多写总比少写好"，结果造成信息过载。Web Design Guidelines 走向了另一个极端——**只写「怎么做」，不写「为什么」**。

这对于审查型技能来说是合理的。用户触发审查时，他的心理状态是"帮我检查"，不是"教我为什么要这样写 UI"。技能精准地匹配了这个心理预期。

### 03 把输出格式的定义权交给了源内容

> Use WebFetch to retrieve the latest rules. The fetched content contains all the rules and output format instructions.

这句话很容易被忽略，但它揭示了一个巧妙的设计：技能本身不定义输出格式，而是让拉取到的 `command.md` 来定义。

好处是输出格式和规则内容始终一致——不会出现"规则更新了但输出格式没跟上"的版本错位。坏处是如果远端格式变了，用户完全没有心理准备。

## 它的结构逻辑

这个技能的结构异常简单，只有三个部分：

1. **How It Works** — 四步流程概览
2. **Guidelines Source** — 外部 URL
3. **Usage** — 使用说明

但这里有一个结构问题：How It Works 和 Usage 的内容高度重复。前者说"1. Fetch guidelines 2. Read files 3. Check rules 4. Output findings"，后者说"1. Fetch guidelines 2. Read files 3. Apply rules 4. Output findings"。这是不必要的冗余，在一个只有 40 行的技能里尤其扎眼。

它选择了**线性流程式**结构，这对审查型技能是合理的——审查就是一条直线：拿到规则 → 读文件 → 对照检查 → 输出结果。不需要分支，不需要循环，不需要矩阵。

但这种极简结构也意味着：它完全没有处理异常情况。如果 WebFetch 失败怎么办？如果用户不指定文件怎么办（只说了"ask the user"，没有更多引导）？一个成熟的审查型技能应该有 fallback 路径。

## 它的写作模式

**结构公式**

> [外部知识源声明] + [线性工作流] + [格式委托]

这是一个"代理型"公式——技能本身是个薄代理层，核心价值在外部。这个公式适用于：规则由权威方维护、更新频繁、用户只需要"按规则执行"的场景。但它的适用范围很窄，大多数技能需要在本地承载更多价值。

**匹配的已知模式**

- **步骤化工作流**（标准质量）— 有编号步骤，但步骤间无依赖标记
- **关键外部依赖** ⚠️（失败模式）— 核心价值 100% 依赖 GitHub URL，无任何 fallback
- **有规则无示例** ⚠️（失败模式）— 没有展示一次审查的输入输出长什么样

模式组合最接近**工作流型**，但缺少自动默认和完成报告两个关键要素，组合不完整。

## 如果我们要写一个同类 skill

审查型技能的构建步骤：

1. **确定规则来源**：是内置还是外部拉取？如果外部，必须有 fallback。
2. **定义输入范围**：支持单文件、glob 模式、整个目录？给出默认范围。
3. **内联核心规则摘要**：即使主要靠外部拉取，也在本地保留 top-10 核心规则，确保离线可用。
4. **设计输出格式**：`file:line:severity:message` 是审查类的标准格式，在本地定义好，不依赖外部。
5. **添加严重级别**：区分 error / warning / info，让用户优先处理关键问题。
6. **处理异常**：WebFetch 失败时使用本地缓存或内联规则。文件不存在时给出友好提示。
7. **生成完成报告**：审查结束后汇总（X 个文件，Y 条发现，Z 条严重），给用户"完成"信号。

骨架模板：

```markdown
---
name: {domain}-review
description: Review {target-files} for compliance with {standard-name}. Use when asked to "review my {domain}", "check {domain} quality", or "audit {domain}".
---

# {Standard Name} Review

## Rules Source

Primary: `{url}`
Fallback: See [core-rules.md](references/core-rules.md) for top rules summary.

## Workflow

1. Fetch latest rules from source (fallback to local if unavailable)
2. Read specified files (default: `{default-glob-pattern}`)
3. Check each rule, classify severity: 🔴 error / 🟡 warning / 🟢 info
4. Output findings in `file:line [severity] message` format
5. Summary report: files scanned, findings by severity

## Output Example

{一个完整的审查输出示例，让用户知道期望什么}

## When Fetch Fails

Use bundled core rules in [references/core-rules.md](references/core-rules.md).
Warn user that results may not reflect latest guidelines.
```

## 它还可以更好

最大的问题是**完全依赖外部 URL**。如果 `raw.githubusercontent.com` 不可达（企业防火墙、GitHub 故障、仓库改名），这个技能就完全失效。修复方式是在 `references/` 中保留一份规则摘要作为 fallback，同时标注缓存日期，提醒用户可能不是最新版。

第二个问题是**没有任何输出示例**。用户不知道一次审查的结果长什么样——是一行一条？是分文件列出？是有严重级别区分？一个 before/after 的输出示例能极大降低用户的认知负担。修复方式是加一个 `## Output Example` 章节，展示 3-5 条典型发现。

第三个问题是 **How It Works 和 Usage 内容重复**。40 行的技能里有两段几乎一样的步骤描述，浪费了宝贵的信息空间。应该合并为一个 `## Workflow` 章节，把省下的空间留给更有价值的内容（比如输出示例或 fallback 策略）。

## 总结：写 skill 可以从它身上学到什么

**"指针式架构"适合快速演进的外部知识**。当规则由权威方维护且频繁更新时，技能做薄代理、内容实时拉取是合理的策略。但必须配 fallback。

**极端克制是一种勇气，但有底线**。40 行能覆盖核心流程，说明不是每个技能都需要 200 行。但"克制"不等于"缺失"——输出示例、异常处理、完成报告是审查型技能的底线配置。

**审查型技能的核心体验是"确定性"**。用户想知道"我的代码有没有问题"，答案必须是明确的、分级的、可操作的。模糊的输出格式和缺失的严重级别会削弱这种确定性。

**不要在短技能里重复自己**。每一行都是成本。如果两个章节说的是同一件事，合并它们，把空间留给更有价值的内容。
