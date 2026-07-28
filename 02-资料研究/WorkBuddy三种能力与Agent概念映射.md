# WorkBuddy 三种能力与 Agent 概念映射

本文件服务于课件 `A-20`，用于解释 WorkBuddy 的连接器、技能、专家团，与 MCP、Skills、Subagent 的关系。核验日期：2026-07-28。

## 教学结论

| WorkBuddy 产品入口 | 解决的问题 | 与通用概念的关系 | 需要说明的边界 |
|---|---|---|---|
| 连接器 | 把外部服务接进任务 | **主要对应 MCP** | 官方文档同时列出 `MCP + CLI` 与 `Skill + CLI` 两种实现形式，因此不能简单写成“连接器 = MCP” |
| 技能 | 把脚本、工作流和任务规则封装成可复用能力 | **直接对应 Skills** | 具体能力、依赖和权限仍需按当前版本与来源核验 |
| 专家团 | 由团长拆解、分配任务，多位专家协作并整合交付 | **概念相近：主 Agent + Subagent** | 这是产品中的多专家协作机制，不是所有 Subagent 实现的统一名称；单个“专家”只是角色切换，不等同于“专家团” |

## A-20 页面表达

- 标题：连接、方法、分工：看懂 WorkBuddy 的能力组合。
- 三张卡片只回答三个问题：连接器解决“能接什么”，技能解决“怎样做”，专家团解决“谁来分工完成”。
- 关系标签分别使用“主要对应”“直接对应”“概念相近”，不使用三个完全相同的等号。
- 页面不展开 CLI、安装步骤、配置参数和权限细节；下一页再通过官方演示视频展示多专家协作。

## 官方资料

- WorkBuddy 连接器：<https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Connector>
- WorkBuddy 技能市场：<https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Skills-Market>
- WorkBuddy 专家中心：<https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Expert-Center>
