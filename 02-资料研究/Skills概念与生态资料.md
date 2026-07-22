# Skills 概念与生态资料

更新日期：2026-07-22
对应页面：`A-08` Skills 概念辨析与发现入口

## 页面结论

- Skills 不是具体工具，也不是权限本身；它将一类工作的方法、规则、参考资料和交付标准沉淀为可复用的工作方法包。
- MCP 解决“连接什么、能调用什么”；Skills 解决“这类工作应当怎样做”。二者在企业场景中互补。
- 安装第三方 Skill 前，仍须核对发布者、依赖权限、数据去向与适配版本。

## 《Claude Code 实战》第 3 章可用观点

- 第 3 章标题为“授人以渔：Skills 工程实践”；本页取其“把方法沉淀为可复用资产”的表达，不复述技术实现。
- `SKILL.md` 是主控入口；`reference/` 承载按需参考资料；`templates/` 保障输出一致；`scripts/` 承担确定性操作。页面以 `monthly-briefing/` 的办公场景目录表达这套结构。
- 书中将 Skills 比作专业工作流或部门 SOP；本页采用“工作入口、规则口径、交付模板、确定性操作”四个业务化名称。
- 最小权限与“需要时再读取详细规则、模板和示例”是企业员工需要理解的边界；不进入 YAML、Token 预算或命令细节。

## 线上来源与核验

| 编号 | 来源 | 链接 | 核验用途 |
|---|---|---|---|
| W37 | 掘金：实践八：自我进化—创建自己的 Skills | https://juejin.cn/post/7616644308809809920 | Skill 目录结构参考；仅采纳目录命名与职责表达，页面自行重绘 |
| W38 | Datawhale hello-agents：Agent Skills 与 MCP | https://github.com/datawhalechina/hello-agents/blob/main/Extra-Chapter/Extra05-AgentSkills%E8%A7%A3%E8%AF%BB.md | `Skills + MCP` 互补关系、典型工作流与图 4 来源 |
| W39 | WorkBuddy：Skill Marketplace / 创建自己的 Skills | https://www.workbuddy.ai/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Skills-Market；https://www.workbuddy.ai/docs/zh/workbuddy/From-Beginner-to-Expert-Guide/Practice-Cases/Create-Skills | 平台入口名称、办公能力与高频工作方法可沉淀为长期复用能力的官方表述 |
| W40 | 腾讯云 SkillHub | https://skillhub.cloud.tencent.com/skills?sortBy=score | 腾讯文档、KDocs、PPT 生成、PDF/图片文字提取等办公技能示例核验 |
| W41 | Agent Skill Hub | https://skhub.dev/skills?sort=total_installs | 公开技能目录名称与发现用途核验 |

## 图片与素材说明

- `A-08-Skills与MCP混合架构-Datawhale原图.png`：从 W38 仓库 `Extra05-figures/image4.png` 归档，作为右上图的分层关系与信息要点参考。
- `A-08-Skills与MCP企业工作流图-高清课件版.png`：根据用户指定的图形关系重新生成，改为办公场景“请生成本月经营简报”，并在图内明确写入“Skills 规定怎么做 / 定义业务流程和领域知识”与“MCP 提供能做什么 / 暴露基础能力和任务工具”；用于课件右上区。
- WorkBuddy、腾讯云 SkillHub 与 Agent Skill Hub 的标志仅用于识别入口；不代表平台安全、兼容性或功能背书。
- 页面其余结构、流程和卡片均为可编辑 HTML 组件，不以截图承载文字。
