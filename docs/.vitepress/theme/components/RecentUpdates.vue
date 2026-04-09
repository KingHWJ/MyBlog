<script setup lang="ts">
import { data as recentUpdates } from '../data/updates.data'
import type { UpdateCardItem } from '../data/content-utils'

const updates = recentUpdates as UpdateCardItem[]
</script>

<template>
  <section class="kb-section">
    <div class="kb-section__header">
      <p class="kb-section__eyebrow">最近更新</p>
      <h2>保持写作节奏，也保持知识归档</h2>
      <p>更新文章用来承接新的输出，再逐步沉淀回专题目录，保证内容既有流动性，也有可复习性。</p>
    </div>

    <div v-if="updates.length > 0" class="kb-update-grid">
      <a
        v-for="item in updates"
        :key="item.url"
        class="kb-update-card"
        :href="item.url"
      >
        <div class="kb-update-card__meta">
          <span>{{ item.category }}</span>
          <span>{{ item.date }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <ul v-if="item.tags.length > 0" class="kb-tag-list">
          <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
        </ul>
      </a>
    </div>

    <div v-else class="kb-empty-state">
      <p>更新内容正在整理中，稍后会在这里展示最新文章。</p>
    </div>
  </section>
</template>
