# LingoSQL Website

LingoSQL 官方网站 - 现代化的 Web 数据库管理工具

🌐 **预览**: [https://lingosql.dev](https://lingosql.dev) (待部署)

## 技术栈

- **框架**: [Astro](https://astro.build/) 5.x
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **部署**: [Vercel](https://vercel.com/)
- **包管理器**: pnpm

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 项目结构

```
src/
├── components/
│   ├── common/        # 通用组件（导航栏、页脚、主题切换）
│   ├── home/          # 首页组件
│   ├── features/      # 功能页面组件
│   ├── docs/          # 文档组件
│   └── ui/            # UI 基础组件
├── layouts/           # 页面布局
├── pages/             # 页面路由
│   ├── index.astro    # 首页
│   ├── features.astro # 功能特性
│   ├── docs/          # 文档页面
│   ├── about.astro    # 关于页面
│   ├── contribute.astro # 贡献指南
│   └── changelog.astro  # 更新日志
├── styles/            # 全局样式
└── content.config.ts  # 内容集合配置
```

## 页面列表

| 页面 | 路由 | 描述 |
|------|------|------|
| 首页 | `/` | Hero 区域、功能亮点、技术栈展示 |
| 功能特性 | `/features` | 详细功能介绍、状态标签、代码示例 |
| 文档中心 | `/docs` | 文档导航、快速开始、API 预览 |
| 快速开始 | `/docs/quick-start` | Docker 部署指南 |
| 关于项目 | `/about` | 项目背景、技术栈、开源协议 |
| 贡献指南 | `/contribute` | 贡献方式、开发规范 |
| 更新日志 | `/changelog` | 版本历史记录 |

## 设计系统

### 颜色

- **主色**: Blue (`#3b82f6`)
- **辅助色**: Cyan (`#06b6d4`)
- **强调色**: Purple (`#8b5cf6`)
- **暗色模式**: 完整支持

### 组件

- `Button` - 按钮（primary/secondary/ghost）
- `Badge` - 状态标签
- `Card` - 卡片容器
- `CodeBlock` - 代码高亮块
- `Navbar` - 导航栏
- `Footer` - 页脚
- `ThemeToggle` - 暗色模式切换

## 部署到 Vercel

1. 在 Vercel 导入 GitHub 仓库
2. 构建配置自动识别
3. 点击部署

或者使用 CLI：

```bash
pnpm i -g vercel
vercel
```

## 许可证

MIT License
