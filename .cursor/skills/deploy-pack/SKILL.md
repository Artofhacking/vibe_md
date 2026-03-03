---
name: deploy-pack
description: Build skill-lab and package it into a zip for deployment. Use when the user says "部署", "打包", "构建发布", "build and pack", "deploy", "发布", or wants to build the project and get a distributable zip file.
---

# 部署打包

构建 skill-lab 项目并打包为 zip，方便部署分发。

## 工作流

### Step 1: 构建

在 `skill-lab/` 目录下执行构建：

```bash
cd skill-lab && npm run build
```

构建命令会先做 TypeScript 类型检查（`tsc -b`），再用 Vite 打包（`vite build`）。如果构建失败，报告错误并协助修复。

### Step 2: 打包

将构建产物压缩为 zip：

```bash
cd skill-lab && zip -r skill-lab-dist.zip dist/
```

如果之前已有旧的 `skill-lab-dist.zip`，zip 命令会自动更新覆盖。

### Step 3: 打开访达

用 `open -R` 在 Finder 中定位到压缩包，方便用户直接拖拽或上传：

```bash
open -R skill-lab/skill-lab-dist.zip
```

## 完成后汇报

告知用户：
- 构建是否成功
- 压缩包大小
- 压缩包位置
