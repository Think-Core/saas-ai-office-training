# 网页版 PPT 运行与维护

本文档只说明如何启动、查看和关闭网页课件，不涉及课件内容、文案或版式修改。

涉及当前 Chrome 标签页、实际预览验收或编辑器内容同步时，先阅读 `00-项目管理/课件视觉验收与浏览器操作约定.md`；本文只保留启动和运行维护说明。

## 当前课件位置

- 源目录：`04-网页版PPT/课件源代码/`
- 本地预览地址：`http://127.0.0.1:5311/`
- 直接查看第五页：`http://127.0.0.1:5311/?page=5`
- 当前 `A-xx` 与实际页码一致，因此 `?page=11` 对应 `A-11`，`?page=12` 对应 `A-12`。

请始终通过本地预览地址查看课件；不要双击 `index.html` 或使用 `file://` 打开。后者无法正常使用编辑器的保存与导出能力。

## 启动

在项目根目录的 PowerShell 运行：

```powershell
$node = 'C:\Users\thinkcore\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$server = 'C:\Users\thinkcore\.agents\skills\dashi-ppt\project\scripts\start-preview-server.mjs'
$deck = (Resolve-Path '04-网页版PPT/课件源代码').Path
& $node $server $deck 5311
```

启动完成后，用 Chrome 打开 `http://127.0.0.1:5311/`。运行该命令的窗口需要保持打开。

## 关闭

在启动预览服务的 PowerShell 窗口按 `Ctrl + C`，等待命令结束即可。不要为了释放端口而结束不明进程；如果 5311 已被占用，先确认是否已有本项目的预览服务正在运行。

## 维护边界

- 负责运行的 task 只处理：启动、关闭、确认地址可访问、协助打开指定页。
- 不擅自修改 `index.html`、`goal.json`、讲稿或项目文档。
- 若用户在网页编辑器中修改文字，保存结果会写入课件源；内容维护 task 需要随后同步大纲、讲稿、页面台账和决策记录。
- 导出 PPTX 或 PDF 前，应在系统 Chrome 中通过上述 HTTP 地址打开课件，再执行导出。
