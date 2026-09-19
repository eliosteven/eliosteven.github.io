# 晴日小院

> 宇宙明亮，欢迎光临。  
> 好好生活，积攒温柔。

一个用来记录生活、阅读、音乐与学习的个人网站。希望这里像一座安静的小院，有风、有光，也有值得慢慢读完的文字。

**访问网站：[sunshineforelio.me](https://sunshineforelio.me/)**  
**阅读博客：[一些文字，一些停留](https://sunshineforelio.me/blog.html)**

## 小院里有什么

首页以奶油黄色为底色，顶部是一棵风中的树。欢迎语之后，是圆形头像和个人介绍，以及最近在读的书、正在学习的内容和喜欢的音乐。

目前正在阅读《额尔古纳河右岸》，学习[《深入理解 AI Agent》](https://github.com/bojieli/ai-agent-book)，最近喜欢听 Paul Russell 的《Carat Cake》。页面还提供 Catalina《Salió El Sol》的 Apple Music 播放入口，以及可以点击互动的像素小宠物 Clawd。

博客入口位于右上方，左侧的“目录”可以展开查看文章。第一篇文章是挪威语书面语（Bokmål）散文 [《Savner du barndommen vår?》](https://sunshineforelio.me/childhood.html)，中文题意为“你会怀念我们的童年吗？”。文章顶部的海边插图带有缓慢推近和光影浮动效果，可以手动暂停。

首页留言区和文章评论区使用 giscus，访客可以用 GitHub 登录后留言。留言是公开的，存储在本仓库的 Discussions 中。原先的“今日小记”模块已经移除。

## 页面与文件

网站使用 HTML、CSS 和原生 JavaScript，没有构建步骤。

| 文件 | 用途 |
| --- | --- |
| `index.html` | 首页：欢迎语、自我介绍、近况和留言 |
| `blog.html` | 博客文章列表 |
| `childhood.html` | 第一篇挪威语散文 |
| `style.css` | 网站基础样式 |
| `blog.css` | 博客、侧边目录、个人介绍和留言布局，以及插图动画 |
| `app.js` | 首页树木动效、音乐面板和宠物互动 |
| `navigation.js` | 侧边目录开关、键盘操作和当前页面标记 |
| `scene.js` | 博客插图的播放、暂停与减少动态效果设置 |
| `avatar.jpg` | 圆形头像使用的原图 |
| `wind-tree.jpg` | 首页顶部树木背景 |
| `childhood-scene.png` | 第一篇博客顶部插图 |
| `clawd.svg` | 像素宠物图像 |
| `LICENSE-clawd.txt` | Clawd 素材的许可说明 |
| `CNAME` | GitHub Pages 独立域名配置 |
| `.nojekyll` | 将页面直接作为静态文件发布 |

## 更新网站

在 GitHub 中打开需要修改的文件，点击编辑，完成后提交到 `main` 分支。GitHub Pages 会重新部署。可以在仓库的 Actions 或 Pages 设置中查看部署情况，部署完成后刷新网站；若仍显示旧内容，可尝试强制刷新。

修改自我介绍、近况或首页文字时，编辑 `index.html`。调整布局时，查看 `style.css` 和 `blog.css`。替换图片时，可以保留原文件名上传新图片，或同时修改 HTML 中的图片路径。

请保留 `CNAME` 中的域名设置，避免更新页面时意外影响独立域名。

## 添加一篇博客

1. 复制 `childhood.html`，为新文章选择一个固定的文件名，例如 `august.html`。
2. 修改页面标题、描述、正文、正文语言和配图；如果不需要动态插图，删除相应的插图区块及 `scene.js` 引用。
3. 在 `blog.html` 增加文章入口，填写标题、摘要和链接。
4. 更新各 HTML 页面左侧目录中的文章链接。当前目录直接写在每个页面里，需要同步维护。
5. 将新增页面与图片一起提交到 `main`，待部署完成后检查链接和评论框。

当前博客正文直接写在 HTML 中，上传一个 Markdown 文件不会自动生成新的博客页面。若以后希望只写 Markdown 就能发布文章，可以再引入静态博客生成工具。

## 留言与评论

评论由 [giscus](https://giscus.app/zh-CN) 提供，连接到本仓库的 `Announcements` 讨论分类。进入 [Discussions](https://github.com/eliosteven/eliosteven.github.io/discussions) 可以查看、回复和管理留言。

评论按页面路径关联，因此首页和每篇文章拥有各自的讨论；第一条评论或回应出现时，giscus 会自动创建对应讨论。文章发布后尽量保持文件名和路径稳定，以免原评论无法自动关联到新地址。

网站中只包含公开的评论配置标识，不需要将 GitHub 密码或访问令牌写入代码。请保持仓库公开、Discussions 开启，并保留 giscus 对本仓库的授权。

## 动效与音乐

首页树木使用 WebGL 做局部图像位移。博客插图使用 CSS 缓慢缩放、移动和光影叠加，并非实拍视频。页面提供暂停控制，也会尊重浏览器的“减少动态效果”偏好。

音乐通过 Apple Music 嵌入播放器播放，需要访客主动操作；完整播放取决于平台登录、订阅和可用性。评论、在线字体和音乐播放器的加载也受对应服务及访客网络环境影响。

## 素材说明

网站图片由站主提供。Clawd 素材的许可见 `LICENSE-clawd.txt`，该许可不代表网站全部文字与图片采用同一许可证；其他素材的再使用授权需分别确认。

---

愿你在这里，停留得自在。
