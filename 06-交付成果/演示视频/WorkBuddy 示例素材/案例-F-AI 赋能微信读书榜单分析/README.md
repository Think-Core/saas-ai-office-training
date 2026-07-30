# 微信读书公开榜单追踪器

运行 `node track.mjs` 抓取飙升榜、新书榜和热搜榜。脚本不需要、不会读取微信读书 API Key。

输出：

- `data/history.json`：全部历史快照
- `data/latest.json`：最新快照
- `reports/latest.md`：最新中文报告
- `reports/archive/YYYY-MM-DD.md`：每日独立报告；同日重复运行会添加时间后缀，不覆盖已有报告
