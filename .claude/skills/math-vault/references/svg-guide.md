# SVG 配图规范与可复用片段

几何直觉用 SVG 矢量图承载。Obsidian 原生渲染 `![[xx.svg]]`,无需插件。这份指南固化配图约定,保证全库视觉统一。

## 为什么用 SVG 而非别的

- 矢量,缩放不糊,公式图清晰
- 纯文本,可手改、可版本管理、体积小
- Obsidian 直接嵌入渲染
- 比 ASCII 图精确,能画真正的向量、网格、变换

## 文件与嵌入约定

- 图存到 vault 的 `assets/` 目录(注意:是 vault 里的 assets,不是 skill 的 assets)。
- 命名:`<小节号>-<图名>.svg`,如 `1A-复平面.svg`、`1B-结合律.svg`。
- 笔记里嵌入:`![[<小节号>-<图名>.svg]]`(Obsidian 短链,不写路径)。

## 视觉规范(全库统一)

**画布**:`viewBox="0 0 宽 高"`,常用 420×360(单图)或 560×320(并排双图)。

**配色**(语义化,别乱用):
- 坐标轴/中性:`#444`(线)、`#888`(次要文字)、`#eee`(网格)
- 主向量/强调一:`#2b7`(绿)
- 强调二:`#e77`(红)
- 强调三/结果:`#46c`(蓝)
- 强调四:`#c5a`(紫)

**字体**:`font-family="sans-serif"`,标签 12–14px,标题加 `font-weight="bold"`。

**箭头**:用 `<marker>` 定义箭头,每种颜色一个 marker。向量、坐标轴末端都加箭头。

## 坐标系约定

SVG 的 y 轴向下,数学坐标 y 轴向上,**必须翻转**:
- 设原点在画布的 `(ox, oy)`,单位长度 `u` 像素。
- 数学点 `(x, y)` → SVG 坐标 `(ox + x*u, oy - y*u)`。注意 y 是**减**。
- 画前先算好每个点的 SVG 坐标,避免画反。

## 可复用片段

### 箭头 marker 定义(放 `<defs>` 里)

```xml
<defs>
  <marker id="ar-g" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6 Z" fill="#2b7"/>
  </marker>
  <marker id="ar-r" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6 Z" fill="#e77"/>
  </marker>
  <marker id="ar-b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6 Z" fill="#46c"/>
  </marker>
</defs>
```

### 网格

```xml
<g stroke="#eee" stroke-width="1">
  <line x1="..." y1="..." x2="..." y2="..."/>
  <!-- 等间距横竖线 -->
</g>
```

### 带箭头坐标轴

```xml
<line x1="40" y1="200" x2="400" y2="200" stroke="#444" stroke-width="1.5" marker-end="url(#ar-g)"/>
<line x1="240" y1="320" x2="240" y2="40" stroke="#444" stroke-width="1.5" marker-end="url(#ar-g)"/>
<text x="405" y="204" font-size="13" fill="#444">Re / x</text>
<text x="248" y="50" font-size="13" fill="#444">Im / y</text>
```

### 一个向量(从原点出发)

```xml
<line x1="ox" y1="oy" x2="ox+x*u" y2="oy-y*u" stroke="#2b7" stroke-width="2.5" marker-end="url(#ar-g)"/>
<circle cx="ox+x*u" cy="oy-y*u" r="4" fill="#2b7"/>
<text x="..." y="..." font-size="14" fill="#2b7" font-weight="bold">v</text>
```

### 虚线辅助投影线

```xml
<line x1="..." y1="..." x2="..." y2="..." stroke="#2b7" stroke-width="1" stroke-dasharray="4 3"/>
```

## 常见图型清单(线代/数学常用)

> 注意:下列图型都须满足末节「演算型判据」——能跟着它把计算走一遍才画。纯关系/意义/决策型(如"集合包含关系""概念关联图")**不画**。

- **复平面点**:网格 + 双轴 + 一个标注点 + 虚线投影到两轴(跟着投影把实部虚部读出来)
- **向量加法**:两向量首尾相接 + 和向量,跟着箭头把坐标逐分量加一遍
- **标量乘法**:同一方向上 $v$、$2v$、$-v$ 三箭头,看着长度按倍率伸缩
- **结合律/交换律**:并排两面板,**跟着两条运算路径各加一遍**,看终点重合(演算路径,不是静态对照)
- **线性变换**:跟着基向量 $e_1,e_2$ 被映射、网格被扭成新网格的过程(变换动画,不是前后并排摆着看)
- **逼近/累加/生长**:积分矩形逼近、级数部分和累加、极限趋近——优先做 SMIL 动画,跟着量长出来

每张图务必按末节五条标注:就地标注每条线/量、顶部"本图演算"框点名公式行、正文同色、节制、一图一步。

## 画图注意

- 先在注释里算清坐标(原点、单位、各点),再写 `<line>`,否则容易画反或越界。
- 标签别和线重叠,留 4–6px 间距。
- 一张图只讲一件事,信息别堆。配文字说明在图下方一行小字(`#888`)。
- 画完检查:箭头方向对吗?y 轴翻转了吗?点在画布内吗?

## 配图密度(2026-06-15 起的新标准)

**比早期笔记多配图,目标约 3 倍密度:一个概念配一张图,而非一节配一两张。**
- 把"几何直觉"拆细,每个关键认知点单独成图。例:讲梯度 → 等高线图 / 梯度方向箭头 / 沿梯度上升路径,三张各讲一点,别挤在一张。
- 仍守"一张图只讲一件事";加图是为把直觉拆得更细,不是把信息堆得更密。
- 静态图依旧是主体,占绝大多数。

## 动画规范(Obsidian 电脑端已验证可用)

**用 SMIL 声明式动画(`<animate>`/`<animateMotion>`/`<animateTransform>`)。已实测:`![[x.svg]]` 以 `<img>` 渲染时 SMIL 能播,但 JS 不执行——所以只用 SMIL,绝不依赖 `<script>`。**

何时做动画(克制,只在"过程比结果重要"时):
- 逼近/趋近过程:积分的矩形逼近、极限趋近、级数部分和累加
- 运动/变化:点沿曲线移动、向量线性组合、参数变化扫过曲线族
- 变换:旋转/缩放/剪切的线性变换过程
- 不为动而动;能用静态图讲清的,就用静态图。

### 动画类型:过程型(必须循环) vs 装饰型(一次性)

过程型动画——展示"变换/运动/趋近"的,**必须循环播放**,否则几秒播完就和静图没区别:
- 用 `repeatCount="indefinite"` 无限循环
- 用 `values="起点值; 终点值; 起点值"` + `keyTimes="0; 0.65; 1"` 做"变换 → 复位"的平滑往返
- 每轮 3–5s 为宜(65% 时间在展示变换,35% 时间复位)
- 不用 `fill="freeze"`(让它自然回到起点,下一轮从头来)

装饰型动画——脉冲、高亮、闪烁等不依赖"看到过程"的,用一次性 `fill="freeze"`。

### 静止态硬约束(过程型动画的死活开关)

因为手机端 Obsidian 可能不播动画,且动画复位时处于"变换前"态,**必须保证两个状态都能看懂**:
- 动画箭头/元素:初始值设在"变换前"位置,循环播放过程
- **终态参考线**:画一套虚线半透明的"变换后"参照(`stroke-dasharray="4,4" opacity="0.6"`),即使动画不播,读者也能看到终态在哪
- 同理,动画线的标签(如 `Av₁`)标在终态位置——静态视图下它虽然和线分离,但配合虚线参照可读

### 循环动画常用片段

```xml
<!-- 过程型循环:箭头端点从"变换前"→"变换后"→"变换前"往返 -->
<!-- 初始 x2/y2 设在变换前位置;虚线ghost 画在终态供静态阅读 -->
<line x1="ox" y1="oy" x2="x_before" y2="y_before" stroke="#46c" stroke-width="2.8" marker-end="url(#ar-b)">
  <animate attributeName="x2" values="x_before; x_after; x_before" keyTimes="0; 0.65; 1" dur="4.5s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="y_before; y_after; y_before" keyTimes="0; 0.65; 1" dur="4.5s" repeatCount="indefinite"/>
</line>
<!-- 终态虚线参照(静止态可读) -->
<line x1="ox" y1="oy" x2="x_after" y2="y_after" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.6" marker-end="url(#ar-b-ghost)"/>

<!-- 线生长(一次性,用 fill="freeze" 停在终态) -->
<line x1=".." y1=".." x2=".." y2=".." stroke="#46c" stroke-width="3"
      stroke-dasharray="L" stroke-dashoffset="L">
  <animate attributeName="stroke-dashoffset" from="L" to="0" dur="2s" fill="freeze"/>
</line>

<!-- 点沿路径移动(一次性) -->
<circle r="6" fill="#e77">
  <animateMotion path="M x0,y0 L x1,y1" dur="2s" fill="freeze"/>
</circle>

<!-- 旋转变换(一次性) -->
<g>
  <animateTransform attributeName="transform" type="rotate"
                    from="0 cx cy" to="90 cx cy" dur="2s" fill="freeze"/>
</g>

<!-- 脉冲提示(装饰型循环,轻量) -->
<circle cx=".." cy=".." r="5" fill="none" stroke="#e77" stroke-width="2">
  <animate attributeName="r" from="5" to="16" dur="1.2s" repeatCount="indefinite"/>
  <animate attributeName="opacity" from="1" to="0" dur="1.2s" repeatCount="indefinite"/>
</circle>
```

## 演算型判据 + 标注规范(2026-06-16 校准,最高优先级)

> 这一节是对前面所有内容的**收口约束**。和上面冲突时,以这里为准。依据是多媒体学习认知理论(Mayer 空间邻近 / Sweller 认知负荷 / signaling 信号原则),不是个人口味。

### 判据:只画"能跟着演算一遍"的过程型图

画每张图前先自查一句:**"读者能不能跟着这张图,把这一步计算几何地走一遍?"**
- 能 → 画(过程/演算型:量随计算扫过、变形、累加、生长)。
- 只是"帮人理解一个事实/意义/关系/选择" → **砍,或就地改成演算型**。

按 Carney & Levin 图示功能分类,数学库只保留**解释/过程型**这一种。明确砍掉:
- ① 意义型(如"散度=源汇"三联,只说"是什么意思")
- ② 关系/组织型(并排升维对照、概念怎么连)
- ③ 决策/流程型(审敛决策树、"投影 vs 高斯"选择树)

这三类对"在脑海里几何地演算"零帮助,占着版面反而增加无关认知负荷。

### 五条标注规范(消除"看着费力" = 消除 split-attention)

1. **每条线/每个量就地标注**——直接在线旁写它"是谁":代表哪条曲线/哪个量,写方程或字母,必要时补一句"它是哪个面的影子/哪个量的投影"。**禁止把说明放到远处的图例(legend)里**,读者来回找 = 分散注意。
2. **顶部放"本图演算"框**——用一个浅色 `rect` 框点名:这张图在演算笔记里的哪行公式(写出那行公式本身)。让图自己声明"我在解释哪一步",读者不用猜。
3. **正文关键量用颜色,和图里同色**——笔记正文里写到 `dz` 就让这俩字也是蓝色(和图里蓝线同色),`dx` 红色,`dS` 绿色。signaling 原则,最强的图文绑定:用颜色当指针,代替"蓝色那条是 dz"这种文字描述。语义配色沿用上面的 #2b7绿/#e77红/#46c蓝/#c5a紫。
4. **节制(coherence 反向约束)**——只标"演算这一步要用到的量",无关的别堆。三条线就三个标注,别加第四条凑数,否则又变回费力。
5. **一图一步(segmenting)**——一张图只演算一个推导步骤;多步推导拆成多张图,别把整条推导挤进一张。

### 图文挂钩(spatial / temporal contiguity)

- 图**紧贴**它解释的那段文字:先正文一句话引出("下面这张图把 X 演算清楚")→ 紧接着图 → 再接结论公式。
- 动画播放时,解释它的那行字要在同一屏可见(顶部"本图演算"框正是干这个)。
- 顺序:setup(铺垫)→ 看图演算 → payoff(结论)。图卡在"铺垫之后、结论之处"。
