# SakuraCat 迁移到 D 盘步骤

## 相关文件位置

| 位置 | 说明 |
|------|------|
| `C:\Users\18314\SakuraCat-Setup-1.6.2.2.exe` | 安装包（125MB） |
| `C:\Users\18314\Desktop\SakuraCat.lnk` | 桌面快捷方式 |
| `C:\Users\18314\AppData\Local\Programs\SakuraCat\` | 程序安装目录 |
| `C:\Users\18314\AppData\Local\sakuracat-updater\` | 更新程序 |
| `C:\Users\18314\AppData\Roaming\sakuracat\` | 配置/数据文件 |

## 操作步骤

### 第一步：创建文件夹 + 移动安装包（需要管理员终端）

右键桌面 → 打开终端（管理员），运行：

```powershell
mkdir "D:\梯子"
move "C:\Users\18314\SakuraCat-Setup-1.6.2.2.exe" "D:\梯子\"
```

### 第二步：卸载当前 SakuraCat

打开 Windows 设置 → 应用 → 已安装的应用 → 找到 SakuraCat → 卸载

### 第三步：重新安装到 D 盘

1. 运行 `D:\梯子\SakuraCat-Setup-1.6.2.2.exe`
2. 安装时选择安装路径为 `D:\梯子\SakuraCat`

### 第四步：清理（可选）

如果卸载后这些文件夹还在，可以手动删除：
- `C:\Users\18314\AppData\Local\sakuracat-updater\`
- `C:\Users\18314\AppData\Roaming\sakuracat\`
