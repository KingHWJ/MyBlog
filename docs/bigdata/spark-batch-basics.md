---
title: Spark 批处理入门
description: 把 Spark 的批处理学习切成几个最核心的问题，避免一开始被概念淹没。
date: 2026-04-09
tags:
  - Spark
  - 批处理
category: 大数据
featured: true
draft: false
---

# Spark 批处理入门

## 入门时先搞清楚什么

1. 数据是怎么被切分和调度的
2. 转换与行动操作的区别
3. 为什么执行计划会影响性能

## 一个最简单的例子

```scala
val result = spark.read.json("/data/orders")
  .filter($"status" === "PAID")
  .groupBy($"city")
  .count()
```

代码不复杂，但它背后已经涉及读取、过滤、聚合和执行计划。

