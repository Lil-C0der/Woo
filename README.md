<p align="center">
  <a href="https://github.com/Lil-C0der/Woo-UI" target="_blank" rel="noopener noreferrer">
    <img  src="https://s1.ax1x.com/2020/05/29/tuoTM9.png" alt="Echo Wheel logo">
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.org/github/Lil-C0der/Woo-UI" target="_blank">
    <img src="https://travis-ci.org/Lil-C0der/Woo-UI.svg?branch=master" alt="Build Status">
  </a>
  <a href='https://coveralls.io/github/Lil-C0der/Woo-UI?branch=master' target='_blank'>
    <img src='https://coveralls.io/repos/github/Lil-C0der/Woo-UI/badge.svg?branch=master' alt='Coverage Status' />
 </a>
  <a href="https://www.npmjs.com/package/woo-ui" target="_blank">
    <img src="https://img.shields.io/npm/v/woo-ui" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/woo-ui" target="_blank">
    <img src="https://img.shields.io/npm/l/woo-ui" alt="License">
  </a>
</p>

# Woo - UI

我自己的 UI 组件库

## 简介

这是我在学习 `Vue.js` 过程中基于 `Vue 2.6` 开发的一套 `UI` 组件库，包含了一些自己常用的组件，PC 端和移动端都可以使用。点 [这里](https://lil-c0der.github.io/Woo-UI/) 预览

其中部分组件的样式结构与 API 的设计借鉴了一些我使用过的成熟 `UI` 框架，例如 `Element` 和 `Ant Design Vue` 等

注意：玩具项目，请不要在生产环境中使用

## 开发指南

1. 添加 CSS 样式

   使用之前，请务必确保你的浏览器支持标准盒模型，即 border-box

   IE8+浏览器支持

   ```
   *,
   *::before,
   *::after {
     box-sizing: border-box;
   }
   ```

2. 安装

   推荐使用 npm 安装

   ```
   npm install --save woo-ui
   ```

3. 引入 woo-ui

   ```
   import { Button, Icon } from "woo-ui";
   import "woo-ui/dist/woo.css";
   export default {
   name: "App",
   components: {
   "woo-button": Button,
   "woo-icon": Icon,
   },
   };
   ```

## 文档

## 已有组件

- [x] 按钮 Button
- [x] 图标 Icon
- [x] 输入框 Input
- [x] 栅格系统 Grid
- [x] 布局 Layout
- [x] 短提示 Toast
- [x] 气泡提示框 Popover
- [x] 标签页 Tabs
- [x] 折叠面板 Collapse
- [x] 级联选择器 Cascader
- [x] 轮播图 Slide
- [x] 菜单 Menu

## TODO

- [ ] 表单验证
- [ ] 分页器
- [ ] 表格
- [ ] 图片上传
- [ ] Sticky 组件

## 开源许可

[MIT](http://opensource.org/licenses/MIT) License.

Copyright (c) 2020-present, Lil-C0der
