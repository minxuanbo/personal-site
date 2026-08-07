# Min Xuanbo - Personal Portfolio

个人作品集网站，展示工作经历、研究成果与技能栈。

## 技术栈

- **React 19** + **TypeScript 5.6**
- **Vite 5** 构建工具
- **Framer Motion** 组件动效
- **GSAP** 高性能动画
- **CSS 原生动画**（fade-in / rise-in / marquee 等）
- **oxlint** 代码检查

## 功能版块

| 版块 | 组件 | 说明 |
|------|------|------|
| 导航栏 | `Navbar` + `LineSidebar` | 桌面端线条侧边栏导航，移动端汉堡菜单 |
| 关于我 | `Hero` | 个人介绍首页 |
| 工作经历 | `Experience` | 时间线展示工作经历 |
| 研究项目 | `Research` + `DomeGallery` | 左侧文字 + 右侧 3D 穹顶画廊 |
| 技能 | `Skills` + `LogoLoop` | 技能矩阵 + 底部技术 Logo 循环滚动 |
| 联系方式 | `Contact` | 居中文案与联系方式 |

## 特效组件

| 组件 | 说明 |
|------|------|
| `DepthText` | 深度/3D 透视文字效果 |
| `DomeGallery` | 3D 穹顶图片画廊，支持拖拽旋转与惯性 |
| `DriftWall` | 桌面端漂移墙视效背景 |
| `LogoLoop` | 无限循环滚动的 Logo 展示 |
| `StrokeText` | 描边文字效果 |
| `VariableProximity` | 鼠标逼近时字体宽度变化的交互文字 |

## 本地运行

```bash
npm install
npm run dev
```

## 构建部署

```bash
npm run build
npm run preview
```
