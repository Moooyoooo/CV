# 个人介绍网站

这是一个纯静态个人介绍网站，可直接部署到 GitHub 和 Vercel。

## 文件结构

- `index.html`：页面内容结构
- `styles.css`：页面样式
- `script.js`：页面动效与导航高亮
- `avatar.png`：头像资源

## 本地预览

直接双击 `index.html` 即可打开。

如果你想用本地服务方式预览，也可以在当前目录运行：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`

## 部署到 GitHub

1. 在 GitHub 新建一个仓库
2. 进入当前项目目录
3. 依次运行以下命令：

```bash
git add .
git commit -m "feat: add personal profile site"
git branch -M main
git remote add origin 你的仓库地址
git push -u origin main
```

如果这个目录已经绑定了别的远程仓库，先用下面命令检查：

```bash
git remote -v
```

## 部署到 Vercel

1. 打开 [Vercel](https://vercel.com/)
2. 使用 GitHub 账号登录
3. 选择 `Add New Project`
4. 导入这个仓库
5. Framework Preset 保持 `Other`
6. Build 和 Output 配置都留空
7. 点击 `Deploy`

部署完成后，Vercel 会给你一个可访问链接。

## 后续更新

后续只需要修改网站文件，再执行：

```bash
git add .
git commit -m "update site content"
git push
```

Vercel 会自动重新部署。

## 常见修改位置

- 修改个人介绍与经历：`index.html`
- 修改视觉样式：`styles.css`
- 修改滚动动效：`script.js`
