import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DATA = join(ROOT, "data");
const REPORTS = join(ROOT, "reports");
const ARCHIVE = join(REPORTS, "archive");
const HISTORY = join(DATA, "history.json");
const LATEST = join(DATA, "latest.json");
const REPORT = join(REPORTS, "latest.md");
const ranks = [
  ["rising", "飙升榜"],
  ["newbook", "新书榜"],
  ["hot_search", "热搜榜"],
];

const genreRules = [
  ["文学/小说", /小说|文学|故事|悬疑|推理|科幻|奇幻|武侠|言情|诗|散文|名著|侦探|长篇|短篇/i],
  ["历史/社科", /历史|社会|政治|哲学|文化|文明|人类|战争|经济史|心理学|社会学/i],
  ["商业/财经", /商业|管理|投资|金融|经济|财富|创业|营销|股票|基金|领导力/i],
  ["个人成长", /成长|习惯|人生|思维|认知|沟通|自我|情绪|效率|方法|学习|成功/i],
  ["科技/科普", /科技|科学|人工智能|AI|编程|宇宙|物理|生物|医学|数学|互联网/i],
  ["生活/健康", /健康|生活|饮食|养生|旅行|家庭|亲子|育儿|女性|运动|睡眠/i],
];

function genreOf(book) {
  const text = `${book.title} ${book.intro}`;
  return genreRules.find(([, rule]) => rule.test(text))?.[0] ?? "其他";
}

async function fetchRank(key, label) {
  const url = `https://weread.qq.com/web/bookListInCategory/${key}?rank=1`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0 (compatible; WeReadRankTracker/1.0)",
    },
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`${label} HTTP ${response.status} ${response.statusText}`);
  const payload = await response.json();
  if (!Array.isArray(payload.books) || payload.books.length === 0) {
    throw new Error(`${label} 解析失败：回包缺少非空 books 数组`);
  }
  return payload.books.map((item, index) => {
    const info = item.bookInfo ?? {};
    if (!info.bookId || !info.title) throw new Error(`${label} 第 ${index + 1} 项缺少 bookId/title`);
    const book = {
      rank: index + 1,
      bookId: String(info.bookId),
      title: String(info.title),
      author: String(info.author ?? "未知作者"),
      intro: String(info.intro ?? ""),
      publishTime: String(info.publishTime ?? ""),
      readingCount: Number(item.readingCount) || 0,
    };
    return { ...book, genre: genreOf(book) };
  });
}

function previousSnapshot(history) {
  return history.length ? history.at(-1) : null;
}

function changes(current, previous) {
  if (!previous) return { baseline: true, entries: [] };
  const entries = [];
  for (const [key, label] of ranks) {
    const oldRank = new Map((previous.rankings?.[key] ?? []).map((b) => [b.bookId, b.rank]));
    const now = current.rankings[key];
    for (const book of now) {
      const old = oldRank.get(book.bookId);
      if (old == null && book.rank <= 10) entries.push(`${label}新进前10：《${book.title}》（第${book.rank}）`);
      else if (old - book.rank >= 5) entries.push(`${label}《${book.title}》上升${old - book.rank}位（${old}→${book.rank}）`);
      else if (book.rank - old >= 5) entries.push(`${label}《${book.title}》下降${book.rank - old}位（${old}→${book.rank}）`);
    }
  }
  return { baseline: false, entries: entries.slice(0, 12) };
}

function makeReport(snapshot, previous) {
  const all = ranks.flatMap(([key, label]) => snapshot.rankings[key].map((b) => ({ ...b, list: label })));
  const genreCounts = new Map();
  for (const book of all) genreCounts.set(book.genre, (genreCounts.get(book.genre) ?? 0) + 1);
  const genres = [...genreCounts].sort((a, b) => b[1] - a[1]);
  const topReaders = [...all].sort((a, b) => b.readingCount - a.readingCount).slice(0, 10);
  const delta = changes(snapshot, previous);
  const lines = [
    "# 微信读书公开榜单周度报告",
    "",
    `- 抓取时间：${new Date(snapshot.capturedAt).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false })}`,
    `- 覆盖榜单：${ranks.map(([, label]) => label).join("、")}`,
    `- 样本量：${all.length} 条榜单记录（跨榜重复图书按榜单分别计数）`,
    "",
    "## 题材结构",
    "",
    ...genres.map(([genre, count]) => `- ${genre}：${count} 本（${(count / all.length * 100).toFixed(1)}%）`),
    "",
    "## 在读人数靠前图书",
    "",
    ...topReaders.map((b, i) => `${i + 1}. 《${b.title}》— ${b.author}（${b.list}第${b.rank}，在读 ${b.readingCount.toLocaleString("zh-CN")}）`),
    "",
    "## 较上一快照的明显变化",
    "",
    ...(delta.baseline ? ["- 本次为首次成功快照，仅建立比较基线，暂无上一快照可比。"] : delta.entries.length ? delta.entries.map((x) => `- ${x}`) : ["- 未发现前10新进或名次变化达到5位的条目。"]),
    "",
    "## 各榜前十",
    "",
  ];
  for (const [key, label] of ranks) {
    lines.push(`### ${label}`, "", ...snapshot.rankings[key].slice(0, 10).map((b) => `${b.rank}. 《${b.title}》— ${b.author}（在读 ${b.readingCount.toLocaleString("zh-CN")}，${b.genre}）`), "");
  }
  return `${lines.join("\n")}\n`;
}

async function atomicJson(path, value) {
  const temp = `${path}.tmp`;
  await writeFile(temp, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await rename(temp, path);
}

await mkdir(DATA, { recursive: true });
await mkdir(REPORTS, { recursive: true });
await mkdir(ARCHIVE, { recursive: true });
let history = [];
try {
  const saved = JSON.parse(await readFile(HISTORY, "utf8"));
  history = Array.isArray(saved) ? saved : saved.snapshots ?? [];
} catch (error) {
  if (error.code !== "ENOENT") throw new Error(`读取 history.json 失败：${error.message}`);
}

const rankings = Object.fromEntries(await Promise.all(ranks.map(async ([key, label]) => [key, await fetchRank(key, label)])));
const snapshot = { capturedAt: new Date().toISOString(), source: "微信读书公开 Web 榜单", rankings };
const report = makeReport(snapshot, previousSnapshot(history));
history.push(snapshot);
await atomicJson(LATEST, snapshot);
await atomicJson(HISTORY, history);
await writeFile(REPORT, report, "utf8");
const reportDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date(snapshot.capturedAt));
let archiveReport = join(ARCHIVE, `${reportDate}.md`);
try {
  await writeFile(archiveReport, report, { encoding: "utf8", flag: "wx" });
} catch (error) {
  if (error.code !== "EEXIST") throw error;
  const time = new Date(snapshot.capturedAt).toLocaleTimeString("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).replaceAll(":", "-");
  archiveReport = join(ARCHIVE, `${reportDate}-${time}.md`);
  await writeFile(archiveReport, report, { encoding: "utf8", flag: "wx" });
}
console.log(`更新完成：${ranks.map(([key, label]) => `${label}${rankings[key].length}本`).join("，")}`);
console.log(REPORT);
console.log(archiveReport);
