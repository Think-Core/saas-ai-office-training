# MCP 概念与生态资料

更新日期：2026-07-22

## `A-08` 的课程表达

- **最小定义**：MCP（Model Context Protocol，模型上下文协议）是一套开放标准，让 AI 应用以统一方式连接外部数据、工具和工作流。
- **面向办公人员的解释**：以“工欲善其事，必先利其器。”引出：它不是一个具体工具或网站，而是让 AI 少做逐个适配、能在授权范围内连接文件、网页、数据库和业务系统的共同接口。
- **与上一页的关系**：Agent 围绕目标组织任务；MCP 为 Agent 提供连接外部信息和工具的共同接口。MCP 不决定目标、权限或验收。
- **两种常见连接形态**：本地 MCP 服务通常运行在员工设备或受控本地环境，适合已授权的本地文件与开发目录；网络 MCP 服务运行在企业内网、私有云或服务商平台，适合团队共用的知识库和业务系统。当前标准传输为 `stdio` 与 Streamable HTTP；不讲已废弃的 HTTP + SSE。
- **安全边界**：安装或启用任何 MCP 前，先确认来源、权限范围、所需凭据和数据去向；不要因为目录收录或“热门”而默认可信。

## 主要来源与可用范围

| 来源 | 链接 / 位置 | 可用内容 | 使用边界 |
|---|---|---|---|
| MCP 中文站《一文读懂 MCP 协议：大模型 AI-Agent 的 USB-C 接口》 | https://mcpcn.com/blog/understanding-mcp-protocol/ | 拓展坞架构图、USB-C 类比 | 用户已说明已取得原作者授权；`A-08` 直接使用拓展坞原图。网页标注主笔 bexzhang、修订 osli，并注明来源“腾讯云智慧传媒”。授权说明存档，不在页面显示脚注。 |
| 知乎《MCP（Model Context Protocol），一篇就够了》 | https://zhuanlan.zhihu.com/p/29001189476 | 使用者视角的解释线索、Without/With MCP 的信息组织 | 仅作参考，不将其转载图作为课件素材。 |
| MCP Chinese Getting Started Guide | https://github.com/liaokongVFX/MCP-Chinese-Getting-Started-Guide | 入门概念、开发与配置线索 | 仅作技术研究，不把配置步骤放进本页。 |
| 《Claude Code 实战 69653》 | `03-素材库/01-原始资料/claude code 实战 69653.pdf` 第 6 章，第 176—195 页 | “工欲善其事，必先利其器。”引子；M×N 到 M+N 的标准化价值；图 6-2「MCP 客户端—服务器架构」；MCP 与 Skill 的“厨房 / 菜谱”关系；最小权限 | 参照图 6-2 的关系与手绘风格生成高清课程示意图；用 WorkBuddy 标注客户端角色，仅用于讲清架构，不代表已核验的具体产品配置。原 PDF 不改动。 |

## 事实核验

| 入口 | 官方链接 | 课件中的准确表述 |
|---|---|---|
| MCP 官方文档 | https://modelcontextprotocol.io/docs/getting-started/intro | MCP 是连接 AI 应用与外部系统的开源标准；可连接数据源、工具和工作流。 |
| 阿里云百炼 MCP 服务 | https://help.aliyun.com/zh/model-studio/official-and-third-party-mcp | 百炼官方 MCP 服务可在平台内部集成，也支持外部调用。 |
| 腾讯云开发者 MCP 广场 | https://cloud.tencent.com/document/product/1212/123193 | 汇集腾讯官方和热门第三方 MCP；提供本地安装与云托管两种方式。 |
| MCP Registry | https://github.com/modelcontextprotocol/registry | 社区驱动的 MCP 服务登记与发现机制。 |
| MCP Market Hub | https://mcpmarket.com/hub | 面向团队的 MCP 与 Agent Skills 发现、连接、版本与同步管理入口。 |
| 腾讯文档 MCP | https://developer.cloud.tencent.com/mcp/server/11803 | 用作“文档协作”场景示例；页面不承诺具体版本或全部能力。 |
| 企业微信机器人消息服务器 | https://developer.cloud.tencent.com/mcp/server/10854 | 用作“消息协同”场景示例；页面不承诺具体版本或全部能力。 |

## 已归档素材

- 网页摘录：`03-素材库/02-网页与社交平台摘录/MCP中文站-*.webp`。
- 页面实际图示：`03-素材库/05-图表与图示/A-08-AI设备拓展坞架构图-白底课件版.png`、`A-08-MCP客户端-服务器架构图-高清办公版.png`；前者按已授权原图重绘为纯白底，以匹配课件图卡；后者参照书中图 6-2 的关系与画风生成。
- 保留书中派生参考图：`03-素材库/05-图表与图示/A-08-MCP客户端-服务器架构图-书中派生.png`。
- 课件运行副本：`04-网页版PPT/课件源代码/assets/a08-mcp-usbc-hub-white.png`、`a08-mcp-client-server-workbuddy.png`。

## 不进入 A-08 的内容

- Host、Client、Server、JSON-RPC 的工程实现与配置文件；本页只借助图 6-2 认识客户端、服务器和外部服务的关系，并以业务语言区分本地与网络两种连接形态。
- 各目录的服务数量、费用、热门排行、产品兼容性和安全评级；变化快且需在实际使用场景中复核。
