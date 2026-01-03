<script setup lang="ts">
import { links } from '~/constants'

// help

// :href="links.changelog" target="_blank"
</script>

<template>
  <div class="p-4">
    <div class="mb-6 flex items-center">
      <NuxtLink to="/my" class="mr-4 text-gray-500 transition hover:text-gray-700">
        <div i-mdi-arrow-left class="text-2xl" />
      </NuxtLink>
      <h2 class="text-xl font-bold">
        更新日志
      </h2>
    </div>

    <div class="space-y-6">
      <section>
        <h3 class="mb-2 px-1 text-sm text-gray-500 font-medium tracking-wider uppercase">
          功能日志
        </h3>
        <div class="border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <h2 class="mb-2 text-lg font-bold">
            v2.0.0-beta (2025-10-07)
          </h2>
          <ul class="list-disc list-inside text-gray-600 space-y-1 dark:text-gray-400">
            <li>Beta App 功能</li>
            <li>全新原生界面 UI 适配</li>
            <li>新增历史记录和收藏功能</li>
          </ul>
        </div>
      </section>

      <section>
        <div class="border rounded bg-white divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
          <a :href="links.changelog" target="_blank" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
            <span>开发日志</span>
          </a>
          <a :href="links.releaseNotes" target="_blank" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
            <span>Release Notes</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
