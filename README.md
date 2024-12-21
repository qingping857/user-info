# 用户信息收集系统

这是一个使用Next.js、Shadcn UI和MongoDB构建的用户信息收集系统。

## 功能特点

- 用户信息收集表单
- 用户信息展示页面
- MongoDB数据存储
- 响应式设计

## 项目结构

```
src/
├── app/
│   ├── api/
│   │   └── users/
│   │       └── route.ts         # 用户API路由
│   ├── users/
│   │   └── page.tsx            # 用户列表页面
│   ├── layout.tsx              # 主布局文件
│   └── page.tsx               # 首页（包含表单）
├── components/
│   ├── ui/                    # shadcn组件
│   └── forms/
│       └── user-form.tsx      # 用户信息表单组件
├── lib/
│   ├── utils.ts              # 工具函数
│   └── db.ts                 # 数据库连接
└── schemas/
    └── user.ts              # 用户数据验证schema
```

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- MongoDB
- Zod
- React Hook Form

## 数据模型

用户信息包含以下字段：
- 姓名（必填）
- 邮箱（必填）
- 电话号码（必填）
- 年龄（必填）
- 职业
- 兴趣爱好
