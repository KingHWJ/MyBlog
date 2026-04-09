---
title: TCP 与 HTTP 脉络
description: 从传输层到应用层，先建立一条完整的网络理解链路。
date: 2026-04-09
tags:
  - TCP
  - HTTP
category: 后端基础
featured: true
draft: false
---

# TCP 与 HTTP 脉络

## 为什么要一起看

很多人把 TCP 和 HTTP 分开背，结果真正分析问题时很难串起来。

## 推荐理解顺序

1. TCP 负责可靠传输
2. HTTP 负责应用层语义
3. HTTPS 在 HTTP 之上增加安全握手与加密能力

## 一个简化示意

```text
浏览器 -> HTTP 请求 -> TCP 连接 -> IP 路由 -> 服务器响应
```

图解当然更直观，但先用这条链路帮助自己建立整体心智模型。

