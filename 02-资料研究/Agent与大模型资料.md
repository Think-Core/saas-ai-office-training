# Agent 与大模型资料

## 课程所需的最小概念

### Chat

用户提出问题，模型主要返回文字、图片或建议。价值集中在理解和生成，任务之外的文件搬运、软件操作和结果保存通常仍由人完成。

### Copilot

AI 嵌入某个具体软件或工作环节，提供局部辅助，例如补全、改写、总结或生成单个对象。它比 Chat 更贴近工作环境，但通常仍以“人主导操作”为中心。

### Agent

用户给出目标和约束，AI 结合上下文、文件、工具和执行环境拆解并推进任务，输出可检查的成果。Agent 不等于完全自治，权限确认和人工验收仍然是工作流的一部分。

## 课程演进表达

- 2024：以问答和内容生成为主要体验。
- 2025：文件理解、代码执行、工具调用和局部自动化逐渐普及。
- 2026：桌面 Agent 和 Agentic Harness 更强调跨文件、跨工具、长任务和成果交付。

这是一种教学概括，不作为严格行业分期。最终课件需要为具体产品发布时间和能力提供来源，避免把渐进变化说成某一天突然发生。

## Agent 构成

- 模型：理解、推理和生成能力。
- 上下文：任务背景、历史对话、规则和当前状态。
- 文件与数据：真实工作的输入和证据。
- 工具：读写文件、运行代码、调用应用或外部服务。
- Skills：把专业方法、步骤、模板和质量标准沉淀成可复用能力。
- Connector/MCP：让 Agent 连接外部服务和数据源。
- 记忆：保存长期偏好、项目约定和历史决策。
- 执行环境：Agent 实际操作文件、应用和工作目录的场所。
- 权限与验收：控制风险并判断成果是否可用。

## 工具版图表达原则

- WorkBuddy：本课程主要使用的桌面办公 Agent，突出本地文件、办公任务和能力扩展。
- Codex：突出项目上下文、文件协作、技能、连接器、长期任务和可验证成果，作为能力对照或备选案例。
- 其他工具：只用于说明产品形态，不进行未经实测的优劣排名。

## 待补来源

- 各产品官方发布页和文档。
- Agent、MCP、Skills 等术语的官方定义。
- 课程实际使用版本的界面截图与功能实测记录。

## 2026-07-21｜外部资料补充：Agent 概念与办公表达

### 可追溯定义

- OpenAI 将 Agent 描述为能以较高独立性代表用户执行工作流的系统；其区别点在于由模型管理工作流、可判断完成状态，并可调用工具获取上下文或采取行动。来源：[A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)，访问于 2026-07-21。
- Google Cloud 将 Agent 概括为“代表用户追求目标并完成任务”的软件系统，并列出推理、行动、观察、规划、协作等能力。来源：[What is an AI agent?](https://cloud.google.com/discover/what-are-ai-agents)，更新于 2026-04-02，访问于 2026-07-21。
- IBM 对“助手”和“Agent”的区分适合课堂使用：助手偏向响应请求；Agent 围绕已定义目标，结合可用工具和权限规划并采取行动。来源：[AI Agents vs. AI Assistants](https://www.ibm.com/think/topics/ai-agents-vs-ai-assistants)，访问于 2026-07-21。

### 办公语境可借用的表达

- Microsoft 将 Agent 描述为可与人协同或代表人处理多步骤任务的数字协作者；其 2025 Work Trend Index 使用“助手 → 由人指挥的数字同事 → 人设方向、Agent 执行流程”的演进框架。来源：[AI agents — what they are](https://news.microsoft.com/source/features/ai/ai-agents-what-they-are-and-how-theyll-change-the-way-we-work/)、[2025 Work Trend Index](https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born)，访问于 2026-07-21。
- 腾讯云公开材料可作为 WorkBuddy 的产品定位线索，但具体功能、数量与界面仍以录屏客户端核验为准。来源：[WorkBuddy 产品介绍](https://cloud.tencent.com/developer/article/2638189)，发布于 2026-03-12，访问于 2026-07-21。

### 对第三页的启示

- 第三页先回答“Agent 是什么”，不进入周报或任何具体案例；案例应留到后面的案例章节。
- 不用“回答/闭环”等孤立口号。推荐用可验证的最小定义：**Agent 是围绕目标，能理解上下文、规划步骤、调用工具并推动任务的 AI 系统；人负责目标、权限与验收。**
- 视觉可采用“目标 → 判断与规划 → 工具与行动 → 人工验收”的单线闭环。它直接对应官方资料的共识，也避免将产品界面或未经实测能力放进概念页。
- 公开演示材料只参考信息组织方式，不复制视觉或图示： [BCG 的观察—计划—行动循环](https://www.bcg.com/ja-jp/capabilities/artificial-intelligence/ai-agents) 与 [Speaker Deck 的 Chatbot / Agent / 软件系统边界页](https://speakerdeck.com/masahiro_nishimi/aiezientowoxian-chang-nidao-ru-surumu-xian-toha)。

## 2026-07-21｜外部资料补充：办公痛点的共鸣表达

### 资料中的共性

- Microsoft 2025 工作趋势报告的特别分析显示，知识工作者经常被邮件、会议和消息打断；重点不放在单一统计数字，而是“工作被频繁切开、难以连续推进”的现象。来源：[Breaking down the infinite workday](https://news.microsoft.com/source/emea/2025/06/neue-microsoft-studie-zeigt-anstieg-der-endlosen-arbeitszeit-40-der-mitarbeitenden-rufen-e-mails-vor-6-uhr-morgens-ab-meetings-am-abend-steigen-um-16-prozent/)，访问于 2026-07-21。
- 一项 2025 年邮件过载研究发现，工作时间内的邮件过载与更高的工作压力、较低的工作和生活满意度相关。来源：[E-mail overload: Exploring employees’ experiences](https://www.sciencedirect.com/science/article/pii/S037872062400171X)，发布于 2025-03，访问于 2026-07-21。
- 真实从业者讨论反复提到：上下文散落在消息、项目管理、文档和邮件中；频繁切换的不只是任务，还有工具、格式、团队和思路。来源：[Atlassian Community：Context-switching fatigue](https://community.atlassian.com/forums/Teamwork-Lab-Improving-our-ways/It-s-not-burnout-It-s-context-switching-fatigue/ba-p/3078486)，发表于 2025-07，访问于 2026-07-21。
- 中文办公讨论里，会议后的信息遗漏、纪要改来改去、找不到重点，以及资料版本分散、找到了却不知道哪个能用，是更贴近业务人员的具体表述。来源：[知乎：一页纸会议记录](https://www.zhihu.com/market/albums/1124021410082971648/manuscript/1137687148735045632)、[知乎：系统越多数据越难用](https://zhuanlan.zhihu.com/p/2020908843748606983)，访问于 2026-07-21。

### 第三页的推荐叙事（待确认，不进入页面）

- 不从“什么是 Agent”开始，而从“我们以为自己在完成一项工作，实际上却在处理一堆零碎事”开始。
- 先让听众认出四类日常麻烦：**找资料、对版本、追进展、反复确认**。它们不是四个案例，而是一项工作被切碎后的常见动作。
- 结尾只留下一个问题：**如果这些零碎动作能被接住，我们能不能把时间放回真正需要判断和决策的地方？** 下一页再解释 Agent 为什么能参与这件事。
