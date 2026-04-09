---
title: MySQL 索引设计
description: 理解索引的价值、代价和常见设计思路，先建立正确的索引观。
date: 2026-04-09
tags:
  - MySQL
  - 索引
category: 后端基础
featured: true
draft: false
---

# MySQL 索引设计

## 索引解决什么问题

索引本质上是在空间换时间，帮助数据库更快定位数据。

## 设计索引时先问三个问题

1. 查询条件是否稳定且高频
2. 排序与过滤字段是否能复用同一个索引
3. 写入成本是否能接受

## 一个示例

```sql
CREATE INDEX idx_user_status_created_at
ON user_order (status, created_at);
```

这个索引适合“按状态过滤并按时间排序”的查询场景，但不意味着所有查询都适合直接套用。

