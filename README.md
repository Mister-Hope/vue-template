# Vue 3 + Typescript 4 + Vue Cli 5 + Vue Router 4 + Vuex 4 Template

[![作者：Mr.Hope](https://img.shields.io/badge/作者-Mr.Hope-blue.svg?style=for-the-badge)](https://mrhope.site)
[![License](https://img.shields.io/github/license/mister-hope/vue-template?style=for-the-badge)](https://github.com/Mister-Hope/vue-template/blob/main/LICENSE)

该项目为 Typescript 版 Vue 项目模板，同时添加了 vue router 和 vuex。

[→ 点击前往](https://vue-demo.mrhope.site/)

## 别名设置

- @：`src/`

## Linter 配置

项目风格预设基于 prettier。

## 初始化项目

```bash
yarn install
```

### 启动开发环境

```bash
yarn run serve
```

> 运行开发环境，可在浏览器通过 [http://localhost:8080](http://localhost:8080) 直接访问。
> 使用 `ctrl + c` 组合键并输入 `y` 与 `enter` 来终止开发环境

### 构建生产环境

> 执行构建，将构建成功的网页输出至 /dist 目录

- 构建现代输出(ES5 标准支持，有 fallback)

```bash
yarn run build
```

- 构建常规输出(ES5 标准支持，有 fallback)

```bash
yarn run normal:build
```

#### 执行文件格式化修复

```bash
yarn run lint
```

#### 分析打包文件

- 分析现代构建打包

  ```bash
  yarn run analyze
  ```

- 分析普通构建打包

  ```bash
  yarn run normal:analyze
  ```

#### 查看浏览器支持

```bash
yarn run browser
```

#### 输出 Webpack 模式打包配置

- 输出现代构建打包配置至当前目录的 moderm.js

  ```bash
  yarn run inspect
  ```

- 输出普通构建打包配置至当前目录的 normal.js

  ```bash
  yarn run normal:inspect
  ```

#### 执行测试

```bash
# e2e test
yarn run test:e2e

# unit test
yarn run test:unit
```

### 自定义配置

查看 [自定义配置](https://cli.vuejs.org/zh/config/).
