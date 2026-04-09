---
title: Java 学习主线
description: 把 Java 的重点模块串成一个便于长期复习的学习主线。
date: 2026-04-09
tags:
  - Java
  - 学习主线
category: 后端基础
featured: true
draft: false
---

# Java 学习主线

## 核心目标

Java 学习不该只停留在记忆 API，而要知道每一层知识解决了什么问题。

## 推荐模块

### 语言基础

- 类型系统
- 异常机制
- 面向对象抽象

### 集合与并发

- `ArrayList`、`HashMap` 的底层结构
- `synchronized`、`volatile`、线程池

### JVM

- 类加载
- 运行时内存区域
- 垃圾回收与常见调优认知

## 一个很小的示例

```java
ExecutorService executorService = Executors.newFixedThreadPool(4);
Future<String> result = executorService.submit(() -> "hello-jvm");
System.out.println(result.get());
executorService.shutdown();
```

上面的代码很简单，但它会把线程池、任务提交和阻塞等待串在一起，是理解并发 API 的常见入口。

