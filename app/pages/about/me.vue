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
        关于作者
      </h2>
    </div>

    <div class="space-y-4">
      <div class="overflow-hidden border rounded-xl bg-white shadow-sm divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <a :href="links.yyj.bilibili" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="flex items-center">
            <div i-ri-bilibili-line class="mr-3 text-xl text-gray-500" />
            <div class="text-gray-900 font-medium dark:text-gray-100">哔哩哔哩</div>
          </div>
          <div class="text-gray-500">云游君</div>
        </a>

        <a :href="links.yyj.github" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="flex items-center">
            <div i-ri-github-line class="mr-3 text-xl text-gray-500" />
            <div class="text-gray-900 font-medium dark:text-gray-100">GitHub</div>
          </div>
          <div class="text-gray-500">YunYouJun</div>
        </a>

        <a :href="links.yyj.blog" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="flex items-center">
            <div i-ri-article-line class="mr-3 text-xl text-gray-500" />
            <div class="text-gray-900 font-medium dark:text-gray-100">博客</div>
          </div>
          <div class="text-sm text-gray-500">云游君的小站</div>
        </a>

        <a :href="links.yyj.mp" target="_blank" class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div class="flex items-center">
            <div i-ri-wechat-2-line class="mr-3 text-xl text-gray-500" />
            <div class="text-gray-900 font-medium dark:text-gray-100">公众号</div>
          </div>
          <div class="text-gray-500">云游君</div>
        </a>
      </div>
    </div>
  </div>
</template>
