// 三门青蟹宣传PPT 生成脚本 —— 占位版 v1
// 运行：node sanmen_crab/gen.js  (在工作目录下)
const pptxgen = require("pptxgenjs");
const C = require("./content.js");
const fs = require("fs");

const p = new pptxgen();
p.defineLayout({ name: "W", width: 13.333, height: 7.5 });
p.layout = "W";
p.author = "陈瀚霖"; p.title = "三门青蟹宣传汇报";

// 配色：海洋青 + 蟹膏橙金
const BG = "0E2A3B", BG2 = "12384C", CARD = "0A2030";
const ACCENT = "F2A65A", ACCENT2 = "E86A33", GOLD = "F4C95D";
const TEAL = "2A9D8F", TEXT = "F0F4F5", SUB = "9DB4BD", DARK = "06151F";
const FONT = "微软雅黑";
const ASSET = __dirname + "/assets/";
const PH = __dirname + "/placeholders/";

function overlay(s, x, y, w, h, color, alpha) {
  s.addShape(p.ShapeType.rect, { x, y, w, h,
    fill: { color: color || DARK, transparency: alpha == null ? 45 : alpha } });
}
function tag(s, t) {
  s.addShape(p.ShapeType.rect, { x: 0.6, y: 0.5, w: 0.14, h: 0.5, fill: { color: ACCENT } });
  s.addText(t, { x: 0.88, y: 0.5, w: 9, h: 0.5, fontFace: FONT,
    fontSize: 15, color: ACCENT, bold: true, valign: "middle" });
}
function pageNo(s, n) {
  s.addText(n + " / 10", { x: 11.7, y: 6.98, w: 1.3, h: 0.4, fontFace: FONT,
    fontSize: 11, color: SUB, align: "right" });
}
// 画一组装饰性波浪线（海洋主题，纯矢量）
function waves(s, x, y, w, rows, color, alpha) {
  for (let r = 0; r < rows; r++) {
    s.addShape(p.ShapeType.line, { x, y: y + r * 0.32, w, h: 0,
      line: { color: color || TEAL, width: 1.5, transparency: alpha == null ? 55 : alpha },
      flipV: r % 2 === 0, lineCap: "round" });
  }
}
// 用形状拼一个简笔蟹钳图标（矢量，不假冒照片）
function crabIcon(s, cx, cy, scale, color) {
  const u = scale || 1;
  // 钳身（大椭圆）
  s.addShape(p.ShapeType.ellipse, { x: cx - 0.45*u, y: cy - 0.3*u, w: 0.9*u, h: 0.6*u,
    fill: { type: "none" }, line: { color: color || ACCENT, width: 2.5*u } });
  // 上下两个钳指
  s.addShape(p.ShapeType.chord, { x: cx + 0.2*u, y: cy - 0.55*u, w: 0.7*u, h: 0.5*u,
    fill: { color: color || ACCENT }, angleRange: [200, 340] });
  s.addShape(p.ShapeType.chord, { x: cx + 0.2*u, y: cy + 0.05*u, w: 0.7*u, h: 0.5*u,
    fill: { color: color || ACCENT }, angleRange: [20, 160] });
}
// 气泡装饰（固定坐标，保证每次生成一致）
function bubbles(s, x, y, count, maxR, color, alpha) {
  const spots = [
    [0.0, 0.0, 0.12], [0.45, 0.3, 0.08], [1.1, -0.1, 0.15],
    [1.6, 0.5, 0.1], [0.3, 0.9, 0.07], [1.9, 0.2, 0.13],
    [0.7, 0.6, 0.09], [1.3, 0.8, 0.11], [2.1, 0.7, 0.06],
  ];
  for (let i = 0; i < Math.min(count, spots.length); i++) {
    const r = spots[i][2] * (maxR || 1) / 0.12;
    s.addShape(p.ShapeType.ellipse, { x: x + spots[i][0], y: y + spots[i][1], w: r * 2, h: r * 2,
      fill: { type: "none" }, line: { color: color || TEAL, width: 0.8, transparency: alpha == null ? 65 : alpha } });
  }
}
// 海藻装饰（用小椭圆串模拟水草形态）
function seaweed(s, x, y, h, color, alpha) {
  const c = color || TEAL, a = alpha == null ? 55 : alpha;
  const segments = Math.floor(h / 0.22);
  for (let i = 0; i < segments; i++) {
    const sway = (i % 2 === 0 ? 0.1 : -0.1) * (1 + i * 0.15);
    s.addShape(p.ShapeType.ellipse, { x: x + sway, y: y - i * 0.22, w: 0.18, h: 0.32,
      fill: { color: c, transparency: a }, rotate: sway > 0 ? 15 : -15 });
  }
}
// 浪花飞溅装饰（小三角形簇，模拟浪尖白沫）
function spray(s, x, y, count, color, alpha) {
  const c = color || "FFFFFF", a = alpha == null ? 70 : alpha;
  for (let i = 0; i < count; i++) {
    const sx = x + i * 0.28, sy = y + (i % 2) * 0.12;
    s.addShape(p.ShapeType.triangle, { x: sx, y: sy, w: 0.14, h: 0.18,
      fill: { color: c, transparency: a }, rotate: i * 30 });
  }
}
// 占位卡片：图片素材待回填时的视觉占位（精致化设计位）
function placeholder(s, x, y, w, h, label, hint, icon) {
  // 主体卡片：深色填充 + 实线描边 + 内层细框，制造层次
  s.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.12,
    fill: { color: CARD }, line: { color: ACCENT, width: 1.75 } });
  s.addShape(p.ShapeType.roundRect, { x: x + 0.18, y: y + 0.18, w: w - 0.36, h: h - 0.36,
    rectRadius: 0.1, fill: { type: "none" }, line: { color: ACCENT, width: 0.75, dashType: "dash" } });
  // 左上角标
  s.addShape(p.ShapeType.rect, { x: x + 0.35, y: y + 0.35, w: 1.5, h: 0.34, fill: { color: ACCENT } });
  s.addText("AI 素材位", { x: x + 0.35, y: y + 0.35, w: 1.5, h: 0.34, fontFace: FONT,
    fontSize: 11, color: DARK, bold: true, align: "center", valign: "middle" });
  // 底部波浪 + 右上气泡（精简装饰）
  waves(s, x + 0.5, y + h - 0.95, w - 1.0, 2, TEAL, 60);
  bubbles(s, x + w - 1.5, y + 0.5, 3, 0.12, TEAL, 60);
  // 中部图标（蟹钳 / 相机 / 影片，按类型）
  const cx = x + w/2, cy = y + h/2 - 0.55;
  if (icon === "crab") crabIcon(s, cx, cy, 0.95, ACCENT);
  else if (icon === "play") {
    s.addShape(p.ShapeType.ellipse, { x: cx - 0.55, y: cy - 0.55, w: 1.1, h: 1.1,
      fill: { type: "none" }, line: { color: ACCENT, width: 2.5 } });
    s.addShape(p.ShapeType.triangle, { x: cx - 0.18, y: cy - 0.28, w: 0.5, h: 0.56,
      fill: { color: ACCENT }, rotate: 90 });
  } else {
    s.addShape(p.ShapeType.roundRect, { x: cx - 0.6, y: cy - 0.4, w: 1.2, h: 0.85, rectRadius: 0.08,
      fill: { type: "none" }, line: { color: ACCENT, width: 2.5 } });
    s.addShape(p.ShapeType.ellipse, { x: cx - 0.25, y: cy - 0.18, w: 0.5, h: 0.5,
      fill: { type: "none" }, line: { color: ACCENT, width: 2 } });
  }
  // 文案
  s.addText(label, { x: x + 0.3, y: y + h/2 + 0.45, w: w - 0.6, h: 0.5, fontFace: FONT,
    fontSize: 15, color: TEXT, bold: true, align: "center" });
  if (hint) s.addText(hint, { x: x + 0.3, y: y + h/2 + 0.98, w: w - 0.6, h: 0.6, fontFace: FONT,
    fontSize: 10.5, color: SUB, align: "center", italic: true });
}
function bg(s, color) { s.background = { color: color || BG }; }

// ============ P1 封面 ============
let s = p.addSlide(); bg(s, BG);
// 顶部到底部渐变感：叠两层色块
s.addShape(p.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: BG } });
s.addShape(p.ShapeType.rect, { x: 0, y: 4.8, w: 13.333, h: 2.7, fill: { color: BG2, transparency: 30 } });
// 装饰：右侧大色块作为未来主视觉位
s.addShape(p.ShapeType.rect, { x: 9.3, y: 0, w: 4.033, h: 7.5, fill: { color: CARD } });
// 主视觉块顶部、底部波浪装饰
waves(s, 9.55, 0.7, 3.5, 3, TEAL, 65);
waves(s, 9.55, 6.4, 3.5, 3, GOLD, 70);
placeholder(s, 9.55, 1.8, 3.5, 3.9, "封面主视觉（青蟹特写）", "可用第4页特写图", "crab");
s.addShape(p.ShapeType.rect, { x: 0.9, y: 2.5, w: 0.18, h: 1.7, fill: { color: ACCENT } });
s.addText(C.cover.title, { x: 1.25, y: 2.4, w: 7.8, h: 1.4, fontFace: FONT,
  fontSize: 52, color: "FFFFFF", bold: true });
s.addText(C.cover.subtitle, { x: 1.3, y: 3.95, w: 7.8, h: 0.7, fontFace: FONT,
  fontSize: 24, color: ACCENT, bold: true });
s.addText(C.cover.tagline, { x: 1.3, y: 4.75, w: 7.8, h: 0.6, fontFace: FONT,
  fontSize: 18, color: GOLD, charSpacing: 3 });
s.addText(C.cover.meta.join("    |    "), { x: 1.3, y: 6.6, w: 7.8, h: 0.5,
  fontFace: FONT, fontSize: 13, color: SUB });
// 封面海洋装饰：左下气泡+海藻，底部浪花
bubbles(s, 0.3, 5.8, 6, 0.2, TEAL, 55);
bubbles(s, 1.5, 6.2, 3, 0.12, ACCENT, 60);
seaweed(s, 0.6, 7.3, 1.3, TEAL, 45);
seaweed(s, 1.1, 7.1, 1.0, "1A6B5A", 50);
spray(s, 2.5, 6.95, 5, GOLD, 70);

// ============ P2 主题介绍 & 宣传文案 ============
s = p.addSlide(); bg(s, BG);
tag(s, "01  主题介绍 & 宣传文案"); pageNo(s, 2);
s.addText(C.intro.body, { x: 0.9, y: 1.5, w: 7.2, h: 3.6, fontFace: FONT,
  fontSize: 20, color: TEXT, align: "left", lineSpacingMultiple: 1.35, valign: "top" });
// 一句话宣传语高亮卡
s.addShape(p.ShapeType.rect, { x: 0.9, y: 5.2, w: 7.2, h: 1.3, fill: { color: CARD },
  line: { color: ACCENT, width: 1 } });
s.addText(C.intro.sloganTitle, { x: 1.15, y: 5.35, w: 6.7, h: 0.4, fontFace: FONT,
  fontSize: 12, color: ACCENT, bold: true });
s.addText(C.intro.slogan, { x: 1.15, y: 5.7, w: 6.7, h: 0.7, fontFace: FONT,
  fontSize: 24, color: GOLD, bold: true });
// 右侧标签条
let py = 1.5;
C.intro.points.forEach(pt => {
  s.addShape(p.ShapeType.roundRect, { x: 8.5, y: py, w: 4.3, h: 0.85, rectRadius: 0.1,
    fill: { color: BG2 }, line: { color: TEAL, width: 1 } });
  s.addText("● " + pt, { x: 8.7, y: py, w: 4.0, h: 0.85, fontFace: FONT,
    fontSize: 15, color: TEXT, bold: true, valign: "middle" });
  py += 1.05;
});

// ============ P3 数据图表（柱状+折线组合）============
s = p.addSlide(); bg(s, BG);
tag(s, "02  产业数据"); pageNo(s, 3);
s.addText(C.chart.heading, { x: 0.9, y: 1.15, w: 11.5, h: 0.6, fontFace: FONT,
  fontSize: 24, color: "FFFFFF", bold: true });
// 组合图：柱状(品牌价值) + 折线(增长率)
const barData = [{ name: C.chart.barName, labels: C.chart.years, values: C.chart.brandValue }];
const lineData = [{ name: C.chart.lineName, labels: C.chart.years,
  values: C.chart.growthRate.map(v => v == null ? 0 : v) }];
s.addChart([
  { type: p.ChartType.bar, data: barData, options: { chartColors: [ACCENT], barGrowDirection: "vertical" } },
  { type: p.ChartType.line, data: lineData, options: { chartColors: [GOLD], secondaryValAxis: true, secondaryCatAxis: true, lineDataSymbol: "circle", lineSize: 3 } },
], { x: 0.9, y: 1.95, w: 8.0, h: 3.9,
  barDir: "col", showLegend: true, legendPos: "b", legendColor: TEXT, legendFontFace: FONT, legendFontSize: 11,
  catAxisLabelColor: SUB, catAxisLabelFontFace: FONT, catAxisLabelFontSize: 11,
  valAxisLabelColor: SUB, valAxisLabelFontFace: FONT, valAxisLabelFontSize: 10, valAxisTitle: "亿元", showValAxisTitle: true, valAxisTitleColor: SUB,
  valAxes: [
    { valAxisLabelColor: SUB, valAxisTitle: "亿元", showValAxisTitle: true, valAxisTitleColor: SUB, valAxisTitleFontFace: FONT, valAxisTitleFontSize: 10 },
    { valAxisLabelColor: GOLD, valAxisTitle: "增长率%", showValAxisTitle: true, valAxisTitleColor: GOLD, valAxisTitleFontFace: FONT, valAxisTitleFontSize: 10 },
  ],
  catAxes: [ { catAxisLabelColor: SUB }, { catAxisHidden: true } ],
  plotArea: { fill: { color: CARD } }, chartArea: { fill: { color: BG } },
});
// 右侧关键事实
let fy = 2.0;
C.chart.facts.forEach(f => {
  s.addShape(p.ShapeType.roundRect, { x: 9.2, y: fy, w: 3.6, h: 0.78, rectRadius: 0.08,
    fill: { color: BG2 }, line: { color: ACCENT, width: 1 } });
  s.addText(f, { x: 9.4, y: fy, w: 3.3, h: 0.78, fontFace: FONT, fontSize: 15,
    color: GOLD, bold: true, valign: "middle" });
  fy += 0.95;
});
// 数据来源脚注
s.addText(C.chart.note, { x: 0.9, y: 6.05, w: 11.9, h: 1.1, fontFace: FONT,
  fontSize: 9.5, color: SUB, italic: true, valign: "top", lineSpacingMultiple: 1.1 });

// ============ P4 AI特写图 ============
s = p.addSlide(); bg(s, BG);
tag(s, "03  AI生成图片 · 产品特写"); pageNo(s, 4);
// 优先用真实素材，否则占位
const closeupImg = ASSET + "p4_closeup.jpg";
if (fs.existsSync(closeupImg)) {
  s.addImage({ path: closeupImg, x: 0.9, y: 1.5, w: 7.5, h: 5.2, sizing: { type: "cover", w: 7.5, h: 5.2 } });
} else {
  placeholder(s, 0.9, 1.5, 7.5, 5.2, "AI产品特写图（青蟹微距）", "第二阶段回填 assets/p4_closeup.jpg", "crab");
}
s.addText("青背 · 黄肚 · 绯钳 · 金爪", { x: 8.7, y: 2.0, w: 4.0, h: 1.2, fontFace: FONT,
  fontSize: 26, color: GOLD, bold: true, valign: "top" });
s.addText(C.closeup.caption, { x: 8.7, y: 3.3, w: 4.0, h: 1.6, fontFace: FONT,
  fontSize: 15, color: TEXT, lineSpacingMultiple: 1.3, valign: "top" });
s.addText("生成工具：" + C.closeup.tool, { x: 8.7, y: 6.2, w: 4.0, h: 0.5, fontFace: FONT,
  fontSize: 12, color: SUB, italic: true });

// ============ P5 AI场景氛围图（居中构图，区别于P4左图右文）============
s = p.addSlide(); bg(s, BG);
const sceneImg = ASSET + "p5_scene.jpg";
if (fs.existsSync(sceneImg)) {
  // 居中大图 + 底部半透明遮罩承载文字
  s.addImage({ path: sceneImg, x: 1.2, y: 0.6, w: 10.9, h: 5.5, sizing: { type: "cover", w: 10.9, h: 5.5 } });
  overlay(s, 0.5, 4.6, 12.3, 2.3, DARK, 20);
} else {
  s.addShape(p.ShapeType.rect, { x: 0.5, y: 0.6, w: 12.3, h: 5.5, fill: { color: CARD },
    line: { color: TEAL, width: 1 } });
  placeholder(s, 1.5, 1.2, 10.3, 4.3, "AI场景氛围图（三门湾蟹塘日落）", "第二阶段回填 assets/p5_scene.jpg", "photo");
}
tag(s, "04  AI生成图片 · 场景氛围"); pageNo(s, 5);
// 底部居中文字
s.addText(C.scene.caption, { x: 1.5, y: 5.2, w: 10.3, h: 0.7, fontFace: FONT,
  fontSize: 22, color: "FFFFFF", bold: true, align: "center" });
s.addText("生成工具：" + C.scene.tool, { x: 1.5, y: 5.9, w: 10.3, h: 0.4, fontFace: FONT,
  fontSize: 12, color: SUB, italic: true, align: "center" });
// P5 海洋装饰（重装饰页）
seaweed(s, 0.8, 7.2, 1.2, TEAL, 45);
seaweed(s, 12.2, 7.0, 1.0, "1A6B5A", 50);
bubbles(s, 0.3, 5.8, 4, 0.15, TEAL, 55);
bubbles(s, 11.0, 5.5, 3, 0.12, ACCENT, 55);
spray(s, 5.5, 6.8, 5, "FFFFFF", 70);
waves(s, 2.0, 6.95, 9.3, 1, GOLD, 65);

// ============ P6 AI音乐信息卡（嵌入音频）============
s = p.addSlide(); bg(s, BG);
tag(s, "05  AI音乐 · 信息卡"); pageNo(s, 6);
// 左侧大唱片/封面占位
s.addShape(p.ShapeType.roundRect, { x: 0.9, y: 1.5, w: 4.5, h: 4.5, rectRadius: 0.12,
  fill: { color: BG2 }, line: { color: ACCENT, width: 1.75 } });
// 唱片：双层同心 + 高光环
s.addShape(p.ShapeType.ellipse, { x: 1.55, y: 2.15, w: 3.2, h: 3.2, fill: { color: DARK }, line: { color: GOLD, width: 2.5 } });
s.addShape(p.ShapeType.ellipse, { x: 1.95, y: 2.55, w: 2.4, h: 2.4, fill: { type: "none" }, line: { color: TEAL, width: 1, transparency: 40 } });
s.addShape(p.ShapeType.ellipse, { x: 2.55, y: 3.15, w: 1.2, h: 1.2, fill: { color: ACCENT2 }, line: { color: GOLD, width: 1.5 } });
s.addShape(p.ShapeType.ellipse, { x: 3.0, y: 3.6, w: 0.3, h: 0.3, fill: { color: DARK } });
waves(s, 1.2, 5.55, 3.9, 1, GOLD, 60);
s.addText("♪  " + C.music.fields["曲名"], { x: 0.9, y: 6.05, w: 4.5, h: 0.5, fontFace: FONT,
  fontSize: 18, color: GOLD, bold: true, align: "center" });
// 右侧信息卡字段
let my = 1.5;
Object.entries(C.music.fields).forEach(([k, v]) => {
  s.addText(k, { x: 5.8, y: my, w: 1.5, h: 0.55, fontFace: FONT, fontSize: 14, color: ACCENT, bold: true, valign: "middle" });
  s.addText(v, { x: 7.4, y: my, w: 5.4, h: 0.55, fontFace: FONT, fontSize: 15, color: TEXT, valign: "middle" });
  s.addShape(p.ShapeType.line, { x: 5.8, y: my + 0.55, w: 7.0, h: 0, line: { color: BG2, width: 1 } });
  my += 0.62;
});
// 提示词
s.addText(C.music.prompt, { x: 5.8, y: my + 0.1, w: 7.0, h: 0.9, fontFace: FONT,
  fontSize: 10, color: SUB, italic: true, valign: "top", lineSpacingMultiple: 1.1 });
// 音频嵌入或占位
const audioFile = ASSET + "sanmen_music.mp3";
if (fs.existsSync(audioFile)) {
  s.addMedia({ type: "audio", path: audioFile, x: 5.8, y: 6.2, w: 5.0, h: 0.8 });
} else {
  s.addShape(p.ShapeType.roundRect, { x: 5.8, y: 6.2, w: 7.0, h: 0.7, rectRadius: 0.1,
    fill: { color: CARD }, line: { color: ACCENT, width: 1, dashType: "dash" } });
  s.addText("🔊 " + C.music.audioNote, { x: 6.0, y: 6.2, w: 6.6, h: 0.7, fontFace: FONT,
    fontSize: 11, color: ACCENT, valign: "middle" });
}

// ============ P7 分镜画面（表格 ≥6镜头）============
s = p.addSlide(); bg(s, BG);
tag(s, "06  分镜画面 · 短视频脚本"); pageNo(s, 7);
const tHead = C.storyboard.header.map(h => ({ text: h,
  options: { fill: { color: ACCENT2 }, color: "FFFFFF", bold: true, fontSize: 12, align: "center", valign: "middle", fontFace: FONT } }));
const tRows = C.storyboard.shots.map((row, i) => row.map((c, j) => ({ text: c,
  options: { fill: { color: i % 2 ? CARD : BG2 }, color: j === 4 ? GOLD : TEXT,
    fontSize: 10.5, align: j === 1 || j === 4 || j === 5 ? "left" : "center", valign: "middle", fontFace: FONT } })));
s.addTable([tHead, ...tRows], { x: 0.7, y: 1.5, w: 11.93, h: 4.3,
  colW: [0.9, 3.4, 1.3, 0.9, 2.7, 2.73], border: { type: "solid", color: DARK, pt: 1 },
  rowH: [0.5, 0.62, 0.62, 0.62, 0.62, 0.62, 0.62] });
s.addText(C.storyboard.note, { x: 0.7, y: 6.1, w: 11.9, h: 0.5, fontFace: FONT,
  fontSize: 12, color: SUB, italic: true });

// ============ P8 短视频成片（嵌入视频）============
s = p.addSlide(); bg(s, BG);
tag(s, "07  短视频成片"); pageNo(s, 8);
s.addText(C.video.caption, { x: 0.9, y: 1.15, w: 11.5, h: 0.6, fontFace: FONT,
  fontSize: 22, color: "FFFFFF", bold: true });
const videoFile = ASSET + "sanmen_video.mp4";
const posterFile = ASSET + "video_poster.jpg";
if (fs.existsSync(videoFile)) {
  const opt = { type: "video", path: videoFile, x: 2.4, y: 1.9, w: 8.5, h: 4.5 };
  if (fs.existsSync(posterFile)) opt.cover = posterFile;
  s.addMedia(opt);
} else {
  placeholder(s, 2.4, 1.9, 8.5, 4.5, "短视频成片（约34秒）", "第二阶段回填 assets/sanmen_video.mp4 · 30-50秒", "play");
}
s.addText("制作：" + C.video.tool, { x: 2.4, y: 6.55, w: 8.5, h: 0.5, fontFace: FONT,
  fontSize: 13, color: SUB, italic: true, align: "center" });

// ============ P9 人机协同总结 ============
s = p.addSlide(); bg(s, BG);
tag(s, "08  人机协同总结"); pageNo(s, 9);
s.addText(C.collab.intro, { x: 0.9, y: 1.2, w: 11.5, h: 0.5, fontFace: FONT,
  fontSize: 15, color: TEXT });
const cHead = C.collab.rows[0].map(h => ({ text: h,
  options: { fill: { color: TEAL }, color: "FFFFFF", bold: true, fontSize: 13, align: "center", valign: "middle", fontFace: FONT } }));
const cRows = C.collab.rows.slice(1).map((row, i) => row.map((c, j) => ({ text: c,
  options: { fill: { color: i % 2 ? CARD : BG2 }, color: j === 3 ? GOLD : TEXT,
    fontSize: 12, align: j === 0 || j === 3 ? "center" : "left", valign: "middle", fontFace: FONT, bold: j === 3 } })));
s.addTable([cHead, ...cRows], { x: 0.9, y: 1.75, w: 11.5, h: 3.5,
  colW: [2.3, 3.6, 3.6, 2.0], border: { type: "solid", color: DARK, pt: 1 } });
s.addShape(p.ShapeType.rect, { x: 0.9, y: 5.45, w: 11.5, h: 1.3, fill: { color: BG2 }, line: { color: ACCENT, width: 1 } });
s.addText(C.collab.summary, { x: 1.15, y: 5.55, w: 11.0, h: 1.1, fontFace: FONT,
  fontSize: 14, color: TEXT, valign: "middle", lineSpacingMultiple: 1.25 });

// ============ P10 创作反思 ============
s = p.addSlide(); bg(s, BG);
tag(s, "09  创作反思"); pageNo(s, 10);
let ry = 1.4;
C.reflect.blocks.forEach(b => {
  s.addShape(p.ShapeType.rect, { x: 0.9, y: ry, w: 0.14, h: 1.55, fill: { color: ACCENT } });
  s.addText("Q  " + b.q, { x: 1.2, y: ry, w: 11.3, h: 0.5, fontFace: FONT,
    fontSize: 17, color: GOLD, bold: true });
  s.addText(b.a, { x: 1.2, y: ry + 0.5, w: 11.3, h: 1.05, fontFace: FONT,
    fontSize: 13.5, color: TEXT, lineSpacingMultiple: 1.25, valign: "top" });
  ry += 1.85;
});
// P10 海洋装饰
waves(s, 0.5, 7.05, 12.3, 1, TEAL, 70);
spray(s, 2.0, 6.85, 5, GOLD, 70);
bubbles(s, 0.3, 5.8, 3, 0.1, TEAL, 60);

// ============ 各页备注栏（演讲者备注）：作业要求的 工具+提示词+人工修改 标注 ============
p.slides.forEach((slide, i) => {
  const note = C.notes && C.notes[i + 1];
  if (note) slide.addNotes(note);
});

p.writeFile({ fileName: __dirname + "/三门青蟹宣传汇报_v2.pptx" })
  .then(fn => console.log("已生成:", fn))
  .catch(e => console.error("出错:", e));
