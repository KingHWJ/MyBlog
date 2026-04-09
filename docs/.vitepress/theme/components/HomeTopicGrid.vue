<script setup lang="ts">
const topics = [
  {
    title: 'Java',
    description: '从语言基础到 JVM，把后端工程师最常用的主线知识梳理成可复习的地图。',
    link: '/backend/java/',
    badge: '主线专题'
  },
  {
    title: '数据库',
    description: '围绕 MySQL 的索引、事务、SQL 优化与建模方法，沉淀数据库基础能力。',
    link: '/backend/database/',
    badge: '高频基础'
  },
  {
    title: '计算机网络',
    description: '把 TCP/IP、HTTP、连接管理和常见问题拆成可阅读、可串联的知识卡片。',
    link: '/backend/network/',
    badge: '协议脉络'
  },
  {
    title: '操作系统',
    description: '关注进程、线程、调度、内存和系统调用，让后端基础不只停留在八股层面。',
    link: '/backend/os/',
    badge: '底层基础'
  },
  {
    title: '大数据',
    description: '先建立对生态和处理链路的整体认知，再逐步展开 Spark、数仓与计算引擎专题。',
    link: '/bigdata/',
    badge: '持续扩展'
  }
]
</script>

<template>
  <section class="kb-section">
    <div class="kb-section__header">
      <p class="kb-section__eyebrow">专题入口</p>
      <h2>从稳定的知识结构开始学习</h2>
      <p>
        首页不做时间流堆叠，而是把重点专题直接放到读者面前，方便从路线图进入，也方便从专题回头复习。
      </p>
    </div>

    <div class="kb-card-grid">
      <a
        v-for="topic in topics"
        :key="topic.link"
        class="kb-topic-card"
        :href="topic.link"
      >
        <span class="kb-topic-card__badge">{{ topic.badge }}</span>
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.description }}</p>
        <span class="kb-topic-card__link">进入专题</span>
      </a>
    </div>
  </section>
</template>

