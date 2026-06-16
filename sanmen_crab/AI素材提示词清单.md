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
**曲名**：《鲜甜三门》｜ 选 Instrumental（纯器乐）

> 升级说明：原"seaside folk"过泛，改用浙东地域基因（东海渔歌/舟山渔民号子/舟山锣鼓/江南丝竹）。
> 下面4套填进 Suno 的 **Style 框**，按需选；**推荐方案A**。

**方案A · 江南海洋民乐（最贴题，推荐）**
```
Chinese coastal folk instrumental, East China Sea fishing-village mood, bright and festive harvest celebration, dizi bamboo flute and erhu leading the melody, guzheng and pipa accents, light bamboo percussion and wood blocks, gentle ocean wave ambience, warm and uplifting, moderate tempo, cinematic, 40 seconds
```
核心乐器：笛子dizi、二胡erhu、古筝guzheng、琵琶pipa（江南丝竹标配）

**方案B · 舟山锣鼓气势版（适合开场3秒引子）**
```
Traditional Chinese coastal festival music, Zhoushan fisherman gong-and-drum style, energetic gongs cymbals and drums, suona and dizi over the top, evoking ocean waves and returning fishing boats, powerful and celebratory, building rhythm, instrumental, 40 seconds
```

**方案C · 轻快现代国风（铺背景最安全）**
```
Modern Chinese folk fusion, light and cheerful, dizi flute and guzheng melody over soft acoustic guitar and marimba, subtle modern beat, ocean breeze ambience, fresh seaside town vibe, warm major key, steady relaxed tempo, instrumental, 40 seconds
```

**方案D · 抒情温暖版（对应蟹宴收尾镜头）**
```
Warm gentle Chinese instrumental, slow lyrical East China Sea folk melody, solo dizi and erhu, soft guzheng, light strings, tender and heartwarming, family reunion harvest feast mood, slow tempo, cinematic and emotional, instrumental, 40 seconds
```

### ⚠️ 下载方式（重要）
Suno 免费版下载 MP3/WAV 要会员。**不绕付费墙**，改用录屏录音（录自己生成的内容自用）：
1. 浏览器打开 Suno 播放页
2. **Win + G** 开 Xbox Game Bar → 关掉麦克风（只录桌面/系统声）
3. 点录制 → 切回去播放 Suno → 放完停止（存到「视频\捕获」.mp4）
4. mp4 拖进剪映 → 裁到40秒 → 导出「仅音频/MP3」→ 存为 `assets/sanmen_music.mp3`
- Game Bar 录不到声就用 OBS 加「音频输出采集」同理。
- Win 自带录音机只能录麦克风，录不到机内声，不能用。

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
