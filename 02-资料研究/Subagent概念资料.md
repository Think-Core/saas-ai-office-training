# Subagent（子 Agent）概念资料

更新日期：2026-07-28
对应页面：`A-10` Subagent 概念辨析

## 页面结论

- 主 Agent 根据任务自动创建或调用子 Agent，并派发边界清楚的子任务；子 Agent 在独立上下文中处理任务，只返回关键结果，避免大量过程信息干扰主 Agent 的判断和执行。
- 在常见的“管理者模式”中，主 Agent 负责理解总目标、拆分任务、选择子 Agent、汇总冲突并形成最终交付；子 Agent 不直接取代主 Agent 对最终结果的责任。
- 子 Agent 的主要价值是隔离大量过程信息、支持专业分工，并让彼此独立的任务并行推进。
- 简单、短小、需要频繁来回确认的任务不必为了“多 Agent”而拆分；拆分本身会增加沟通、等待和成本。

## 面向办公人员的解释

可以把主 Agent 理解为项目负责人，把子 Agent 理解为临时加入的专业执行者。用户只交代总目标；主 Agent 判断哪些工作可以独立完成，再分别交给资料研究、数据核对、内容审校等子 Agent。每个子 Agent 在自己的工作区里处理材料，只把有用的摘要和产物交回来，最后仍由主 Agent 统一判断和交付。

## 适用场景

- 一项任务能拆成互不依赖或弱依赖的子任务，例如资料研究、数据核对、内容审校。
- 搜索结果、日志或大量文件会占用主对话，但主任务只需要关键证据和摘要。
- 不同子任务需要不同专业规则、工具权限或模型配置。
- 多个独立方向可以并行推进，主 Agent 最后需要综合比较或合并结果。

## 不宜泛化的边界

- 不把子 Agent 讲成“永远更快”或“自动保证质量”；并行会增加额外消耗，汇总仍可能需要处理冲突。
- 不把所有多 Agent 产品都说成同一种架构。OpenAI 官方文档同时区分管理者调用专业 Agent 与 Handoff；Claude Code 也把 Subagent、Agent Teams 和独立会话区分开。
- 本页只解释常见的主 Agent—子 Agent 管理者关系，不进入产品配置、模型选择、并发数量或权限参数。

## 官方来源

| 来源 | 链接 | 可用结论 |
|---|---|---|
| Anthropic Claude Code：Create custom subagents | https://code.claude.com/docs/en/sub-agents | 子 Agent 处理特定任务，拥有独立上下文；适合隔离大量搜索、日志和文件内容，完成后向主会话返回结果。 |
| Anthropic Claude Code：Run agents in parallel | https://code.claude.com/docs/en/agents | Subagent 是单一会话内的受委派执行者，由主会话协调并收集结果；与 Agent Teams、独立会话和 Worktree 区分。 |
| OpenAI Agents SDK：Agent orchestration | https://openai.github.io/openai-agents-python/multi_agent/ | 管理者模式中，中央 Agent 调用专业子 Agent，并保留最终答案、综合多个专家输出和统一护栏的控制权。 |
| OpenAI Agents SDK：Tools / Agents as tools | https://openai.github.io/openai-agents-python/tools/ | 一个 Agent 可以把专业 Agent 当作工具调用；专业 Agent 完成有边界的任务后，原 Agent 继续对话和整合。 |

## 与相邻页面的关系

- `A-08`：MCP 解决“连接哪些数据与工具”。
- `A-09`：Skills 解决“这类工作应当怎样做”。
- `A-10`：Subagent 解决“复杂任务由谁分头做、怎样把结果收回来”。
