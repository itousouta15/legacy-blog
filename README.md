<img src="https://itousouta15.tw/img/FB/%E4%B8%BB%E9%A0%81.webp"/>
<div align = center>
  <h1>itousouta15.tw</h1>
  
power by [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu)

[演示網站](https://itousouta15.tw)


</div>

---

> \[!警告]
> v1.0.0 以下版本已棄用，請儘快升級至 v1.0.0 以上版本。

## 特點

### 基礎功能

* ✨ 完整的部落格功能
* 🔄 支援 Hexo6 及以上版本
* 📱 響應式設計
* 🌙 支援暗黑模式
* 🅰️ 多語系支援

### 程式碼與數學

* 🖥️ 程式碼高亮與複製
* ➗ KaTeX / MathJax3 數學公式支援
* 📊 Mermaid 流程圖支援

### 搜尋與評論

* 🔍 Algolia 搜尋整合
* 🔍 本地搜尋
* 💬 多種評論系統：

  * Valine
  * Waline
  * Twikoo
  * Gitalk
  * Giscus

### 統計與分析

* 📊 文章閱讀統計（Valine / Waline）
* 👥 訪客統計（不蒜子）

### 媒體與互動功能

* 🎵 音樂播放器：

  * Aplayer
  * Meting
* 🖼️ 圖片懶加載
* ⚡ 載入動畫
* 🖱️ 滑鼠特效：

  * 動畫效果
  * 靈夢滑鼠指針
* 👾 Live2D / Live2D-widgets 整合

### 導覽與結構

* 📑 目錄導覽
* 🔄 PJAX 支援
* 🔧 ServiceWorker 實現
* 📰 RSS 訂閱

### 設計與自訂

* 🎨 圖示支援：

  * Iconfont
  * FontAwesome7
* 🔗 內建標籤插件：

  * 內部連結
  * 外部連結
  * 友情連結
  * 熱力圖
  * 標籤輪盤
* 🎨 主題色動態適配
* 🎨 自訂容器
* ©️ 文章版權宣告
* 🌐 自訂 CDN 設定
* 📜 自訂字體
* 🎨 分享卡片功能

## 安裝

> 本部落格原始碼已包含 Hexo 及主題，直接 clone 本 repo 並安裝依賴即可快速建站。

安裝步驟：

```bash
# 1. 下載本倉庫
git clone https://github.com/itousouta15/itousouta15.github.io.git

# 2. 安裝依賴
npm install

# 3. 啟動本地伺服器
hexo s
```

如需自訂主題，請參考 [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu) 官方文件。

## 使用

### 基本結構

參考 `_example` 在 `source` 內建立 `_data`、`about` 和 `friend` 資料夾（注意是**部落格根目錄**的 `source`，不是主題內的）。

#### \_data

* `avatar` 存放頭像，預設 `avatar.webp`，可在內層 `_config.yml` 設定：

```yaml
avatar: "avatar.webp"
```

* `covers` 存放文章封面
* `covers.yml` 存放封面 URL

#### about

`index.md` 為**關於**頁面

#### friend

`index.md` 為**友情連結**頁面，在 `_data.yml` 中填寫即可顯示好友卡片

### 封面、頭圖與 favicon

* Front-matter 可設定 `cover` 為 URL、false 或純色 RGB
* 若無設定則隨機讀取 `covers` 或顯示預設頭圖
* 置頂文章可用 `sticky: true`

### 頁腳

可設定年份、版權、字數統計、不蒜子訪客統計，支援 ICP 與萌國 ICP 備案。

### 程式碼區塊

支援 Hexo <7.0.0 與 >=7.0.0 設定，高亮、複製按鈕、版權提示及收合設定。

### 評論

支援多種系統，可在 `_config.yml` 全域設定或單篇文章 Front-matter 控制。

### 搜尋

支援 Algolia 與本地搜尋，需安裝對應外掛並設定。

### 數學公式

支援 KaTeX 與 MathJax3，需安裝 `@reimujs/hexo-renderer-markdown-it-plus` 並設定。

### Mermaid 流程圖

需安裝 `hexo-filter-mermaid-diagrams` 並在 Front-matter 啟用。

### RSS

需安裝 `hexo-generator-feed` 並設定。

### 多語系 (i18n)

內建 zh-CN、zh-TW、en、ja、pt-BR，可透過 `hexo-generator-i18n` 自訂語言。

### Icon

內建 Iconfont，可切換為 FontAwesome。

### 進階功能

支援暗黑模式、自訂滑鼠指標、Live2D、PJAX、ServiceWorker、文章版權卡片等設定。
