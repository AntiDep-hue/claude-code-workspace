# 三门青蟹PPT — AI素材生成提示词清单

> 第二阶段用：拿这些提示词去各平台生成素材，生成后按文件名放进 `sanmen_crab/assets/`，
> 然后让 Claude 重跑 `node sanmen_crab/gen.js` 即可自动嵌入。

---

## 第4页 · 产品特写图（文生图）
**平台**：即梦 / 豆包
**保存为**：`assets/p4_closeup.jpg`（横版，建议 4:3 或 16:9）

**提示词（中文）**：
```
一只新鲜的三门青蟹特写微距，青绿色背壳、黄色腹部、橙红色蟹钳、金色尖爪，
壳上水珠晶莹，背景虚化的滩涂青蟹养殖塘，自然光，高清商业美食摄影，
浅景深，细节锐利，色彩鲜艳诱人
```
**英文备用**：
```
extreme macro close-up of a fresh live mud crab (Scylla), green-blue carapace,
yellow belly, orange-red claws, golden tips, water droplets, blurred tidal-flat
crab farm background, natural light, commercial food photography, shallow DOF, 8k
```
**负面词**：模糊、变形、多余蟹腿、卡通、低分辨率、文字水印

---

## 第5页 · 场景氛围图（文生图）
**平台**：即梦 / 豆包
**保存为**：`assets/p5_scene.jpg`（宽版 16:9，全屏铺底）

**提示词（中文）**：
```
浙江三门湾滩涂青蟹养殖塘全景，夕阳西下，金色霞光洒在水面，蟹塘连片延伸到
远方，几位渔民撑船归来，远处是低矮的海岸丘陵，宁静丰收的渔村氛围，
电影级广角风光摄影，暖色调，唯美
```
**英文备用**：
```
panoramic view of mud-crab farming ponds on Sanmen Bay tidal flats at sunset,
golden hour light on water, ponds stretching to horizon, fishermen rowing back,
coastal hills, peaceful harvest mood, cinematic wide-angle landscape, warm tones
```
**负面词**：人物面部畸形、过曝、杂乱、现代高楼、文字水印

---

## 第6页 · 背景音乐（AI音乐）
**平台**：Suno AI
**保存为**：`assets/sanmen_music.mp3`（**30-50秒**，超长需在剪映裁剪）

**风格提示词（英文，Suno用）**：
```
bright cheerful seaside folk, light acoustic guitar and marimba, gentle ocean
wave ambience, festive harvest mood, Chinese coastal town vibe, instrumental,
upbeat but warm, 40 seconds
```
**曲名**：《鲜甜三门》
**说明**：纯器乐即可（做背景乐），如要人声可加歌词描述青蟹丰收。生成后裁到30-50秒。

---

## 第8页 · 短视频成片（图生视频 + 剪辑）
**平台**：可灵 / 即梦（图生视频）+ 剪映（剪辑配乐）
**保存为**：`assets/sanmen_video.mp4`（**30-50秒**）
**可选封面**：`assets/video_poster.jpg`

**制作思路**：按第7页分镜表的6个镜头逐个生成短片段，再用剪映拼接，配上第6页的《鲜甜三门》音乐。

**逐镜头图生视频提示词**：
1. 滩涂日出蟹塘连片，水波粼粼，镜头缓缓推进
2. 渔民下塘起笼，一笼青蟹活蹦乱跳，水花四溅
3. 青蟹微距特写，蟹钳张合、吐泡，镜头环绕
4. 竹蒸笼蒸蟹，白色热气袅袅升腾
5. 揭开蒸笼瞬间，蟹壳通红、蟹膏金黄流油，特写
6. 餐桌全景，一家人举杯，满桌蟹宴，温暖灯光

**字幕**（叠加在视频上）：见第7页分镜表"字幕文案"列。

---

## 回填后操作
1. 把上述文件放进 `sanmen_crab/assets/`，文件名严格一致
2. 让 Claude 运行：`node sanmen_crab/gen.js`
3. 脚本会自动检测到真实素材并替换占位、嵌入音视频
4. 输出仍为 `三门青蟹宣传汇报_v1.pptx`（如需可改名为 final）

## 数据真实性说明（第3页）
- 真实锚点：2019品牌价值31.91亿(农业部)、2022品牌价值46.66亿+养殖9万亩+产量1.37万吨(二十周年发布会)、2023约48亿(潮新闻)、2025产业链50亿(新华网)
- 2020/2021为线性插值推算，图表脚注已注明"示意/推算"，未编造
