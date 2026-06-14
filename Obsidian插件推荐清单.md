# Obsidian 插件推荐清单

> 面向用途：数学/线代知识库（同济高数、LADR）+ 间隔复习 + Git 备份 + 机器人工程
> 接入 Claude Code 用：`obsidian-local-rest-api`（非日常笔记插件）

## 当前已装并启用（截至 2026-06-13）

latex-suite / excalidraw / dataview / obsidian-git / templater / tasks /
table-editor / style-settings / aosr（间隔重复，已选用）

> 注：spaced-repetition 已停用，间隔重复以 **aosr** 为准，避免两个插件卡片管理混乱。

---

## 一、第一次装插件：开启社区插件功能

Obsidian 默认关闭社区插件（安全模式）。第一次需要手动开：

1. 左下角齿轮 ⚙️ 打开 **设置（Settings）**
2. 左侧菜单 → **第三方插件 / Community plugins**
3. 点 **开启社区插件（Turn on community plugins）**，确认关闭安全模式
4. 点 **浏览（Browse）**，进入插件市场

> 之后每装一个插件都是：搜索 → Install（安装）→ Enable（启用）→ 进插件设置调选项。
> **Install 只是下载，必须再点 Enable 才真正生效。**

---

## 二、推荐插件（按优先级）

### 🔥 数学笔记刚需

#### 1. Latex Suite
写公式神器，手写 LaTeX 速度翻几倍。

- **安装**：Browse → 搜 `Latex Suite` → Install → Enable
- **核心功能**：
  - 自动片段（snippets）：打 `//` 自动变分数 `\frac{}{}`，`sr`→`^2`，`->`→`\to`
  - 数学环境内才触发，正文打字不受干扰
  - 支持自定义片段（设置里能加你常用的符号）
- **怎么用**：在 `$$ ... $$` 或 `$ ... $` 里打缩写，自动展开。常用表见插件设置页

#### 2. Excalidraw
手绘矢量图，画几何直觉图比写 SVG 代码快得多。

- **安装**：Browse → 搜 `Excalidraw` → Install → Enable
- **核心功能**：
  - 手绘风格画板，支持箭头/文字/LaTeX 公式贴图
  - 画完可嵌入笔记，双击图能回到画板继续改
  - 导出 SVG/PNG
- **怎么用**：命令面板（Ctrl+P）→ `Excalidraw: Create new drawing`

---

### 📚 复习巩固（知识库的命脉）

#### 3. Spaced Repetition（间隔重复）
把笔记里的自测题变成记忆卡片，按遗忘曲线复习。

- **安装**：Browse → 搜 `Spaced Repetition` → Install → Enable
- **核心功能**：
  - 单行卡片：`问题::答案`
  - 多行卡片：`问题` 下一行 `?` 再下一行 `答案`
  - 自动安排每天该复习哪些
- **怎么用**：写好卡片后，左侧栏点 Spaced Repetition 图标开始复习

> 替代方案：**Obsidian_to_Anki** —— 如果你已经在用 Anki，这个能把笔记同步成 Anki 卡片。二选一即可。

---

### 🗂️ 导航与自动化

#### 4. Dataview
用类 SQL 查询自动生成笔记列表/索引，"全章地图""索引清单"不用手动维护。

- **安装**：Browse → 搜 `Dataview` → Install → Enable
- **核心功能**：
  - 代码块里写查询，自动列出符合条件的笔记
  - 例：列出所有带 `#线代` 标签的笔记并按日期排序
- **怎么用**：笔记里插入代码块：
  ```dataview
  list from #线代 sort file.name asc
  ```

#### 5. Obsidian Git
自动把 vault 提交到 Git 备份（你已经在用 Git，正好闭环）。

- **安装**：Browse → 搜 `Obsidian Git` → Install → Enable
- **核心功能**：
  - 定时自动 commit（可设每 N 分钟）
  - 一键 push 到远程
- **怎么用**：插件设置里设 `Auto commit interval`（如 10 分钟）。
  注意：vault 要先是个 git 仓库（你这个目录已经是了）

---

### 🎨 体验增强（可选）

#### 6. Style Settings
可视化调主题颜色/字号/间距，不用改 CSS。

- **安装**：Browse → 搜 `Style Settings` → Install → Enable
- **怎么用**：设置 → Style Settings 里拖滑块调

#### 7. Editing Toolbar
给编辑器加一个所见即所得的格式工具栏（加粗/标题/列表按钮）。

- **安装**：Browse → 搜 `Editing Toolbar` → Install → Enable

---

## 三、最小启动套餐建议

如果不想一次装太多，先装这 3 个就能立刻提升体验：

1. **Latex Suite**（写公式）
2. **Excalidraw**（画图）
3. **Spaced Repetition**（复习）

跑顺了再加 Dataview 和 Obsidian Git。

---

## 四、常见问题

- **装完没反应？** → 检查是不是只 Install 没 Enable
- **插件列表搜不到？** → 确认已关闭安全模式（第一步）；或网络问题，多刷新几次
- **不影响 Claude Code 接入** → 这些都是本地笔记插件，和 `local-rest-api` 互不干扰

---

## 五、增量推荐（基于理科 + 机器人工程，均未安装）

> 通用安装流程同上：Browse → 搜插件名 → Install → **Enable** → 进设置调选项

### 🔥 强推（数学知识库结构化）

#### Number Headings
自动给标题编号（1 / 1.1 / 1.1.1），章节笔记不用手动维护编号。

- **安装**：搜 `Number Headings` → Install → Enable
- **怎么用**：命令面板（Ctrl+P）→ `Number Headings: Number all headings`，
  或设置里开自动编号，写标题时实时编号

> 自带的 Callout（`> [!note]` / `> [!theorem]`）已能做"定义/定理/证明"色块折叠框，
> 配合 Number Headings 即可让 LADR 那种结构层次分明，通常无需额外装 Admonition。

### ⚙️ 机器人工程相关

#### Code Styler
代码块美化：行号、语言标签、高亮、折叠。写 C++/Python 控制代码时默认块太朴素。

- **安装**：搜 `Code Styler` → Install → Enable
- **怎么用**：装完代码块自动美化；设置里可调主题/行号开关

#### Execute Code
笔记里直接运行 Python/JS 代码块看结果，做算法验证/数值实验很爽。

- **安装**：搜 `Execute Code` → Install → Enable
- **前置**：本机要装好对应解释器（如 Python 在 PATH 里）
- **怎么用**：代码块语言标在 ```` ```python ```` 上，块下方出现 Run 按钮

### 📐 数学输入体验

#### Quick Latex for Obsidian
补 latex-suite 没覆盖的快捷输入：矩阵、对齐环境（align）一键生成。

- **安装**：搜 `Quick Latex` → Install → Enable
- **怎么用**：与 latex-suite 共存，互补使用

#### MathLinks
让双链 / 标题里的 `$...$` 也能正常渲染公式（默认链接内公式不渲染）。

- **安装**：搜 `MathLinks` → Install → Enable
- **怎么用**：装完链接里的公式自动渲染，无需额外操作

### 🧹 维护

#### Linter
保存时自动规范格式（多余空行、标题空格、YAML 字段），知识库越大越值。

- **安装**：搜 `Linter` → Install → Enable
- **怎么用**：设置里开 `Lint on save`，或命令面板手动 lint 当前文件

---

## 六、增量最小套餐建议

理科学习先加这 2 个见效最快：

1. **Number Headings**（章节自动编号）
2. **MathLinks**（链接/标题里公式正常显示）

写代码多了再加 **Code Styler** + **Execute Code**。
