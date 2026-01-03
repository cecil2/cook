<script setup lang="ts">
import { links } from '~/constants'
</script>

<template>
  <div class="p-4">
    <div class="mb-6 flex items-center">
      <NuxtLink to="/my" class="mr-4 text-gray-500 transition hover:text-gray-700">
        <div i-mdi-arrow-left class="text-2xl" />
      </NuxtLink>
      <h2 class="text-xl font-bold">
        关于
      </h2>
    </div>

    <TheAboutList />

    <div class="mt-8 space-y-4">
      <div class="overflow-hidden border rounded-xl bg-white shadow-sm divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <a :href="links.cook" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="text-gray-900 font-medium dark:text-gray-100">网页版本</div>
          <div class="flex items-center text-gray-500">
            <div i-ri-global-line class="mr-2" />
            <span class="text-sm">cook.yunyoujun.cn</span>
          </div>
        </a>

        <a :href="links.yyj.bilibiliOpus" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="text-gray-900 font-medium dark:text-gray-100">旅程的起点</div>
          <div class="flex items-center text-gray-500">
            <div i-ri-bilibili-line class="mr-2" />
            <span class="text-sm">动态</span>
          </div>
        </a>

        <a :href="links.yyj.mpArticle" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="text-gray-900 font-medium dark:text-gray-100">关于食用手册的前世今生</div>
          <div class="flex items-center text-gray-500">
            <div i-ri-wechat-2-line class="mr-2" />
            <span class="text-sm">文章</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
