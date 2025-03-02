# DeepSeek Auto Retry Extension

DeepSeek 网页端繁忙时 自动重试。

[English](README.md) | 简体中文

## 功能

在 DeepSeek 网页端提示 “服务器繁忙” 时自动重试请求，直到成功为止。帮助用户在高峰期更顺畅地使用 DeepSeek 服务。

## 环境

- 浏览器：Microsoft Edge

## 安装

1. clone [本项目](https://github.com/PuppyOne/DeepSeek-Auto-Retry-Extension.git).
2. Microsoft Edge-管理扩展-开启**开发人员模式**.
3. 加载解压缩的扩展，选择扩展文件夹（manifest.json 所在目录）.

## 注意事项

不会重试进入网页前已失败的请求，只会重试进入网页后新失败的请求。