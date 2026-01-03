<script lang="ts" setup>
import { links } from '~/constants'

definePageMeta({
  alias: ['/user'],
})

useHead({
  title: '我的',
})
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <h2 class="text-xl font-bold">
        我的
      </h2>
    </div>

    <div class="space-y-4">
      <div class="border rounded bg-white divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <NuxtLink to="/recipes/history" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-history class="mr-3 text-xl text-gray-500" />
          <span>历史记录</span>
        </NuxtLink>
        <NuxtLink to="/recipes/favorites" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-star-outline class="mr-3 text-xl text-gray-500" />
          <span>我的收藏</span>
        </NuxtLink>
      </div>

      <div class="border rounded bg-white divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <a :href="links.githubIssue" target="_blank" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-comment-question-outline class="mr-3 text-xl text-gray-500" />
          <span>问题反馈</span>
        </a>
        <a :href="links.githubDiscussions" target="_blank" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-forum-outline class="mr-3 text-xl text-gray-500" />
          <span>参与讨论</span>
        </a>
        <a :href="links.contribute" target="_blank" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-email-outline class="mr-3 text-xl text-gray-500" />
          <span>菜谱投稿</span>
        </a>
      </div>

      <div class="border rounded bg-white divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <NuxtLink to="/changelog" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-file-document-outline class="mr-3 text-xl text-gray-500" />
          <span>更新日志</span>
        </NuxtLink>
      </div>

      <div class="border rounded bg-white divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <NuxtLink to="/settings" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-cog-outline class="mr-3 text-xl text-gray-500" />
          <span>设置</span>
        </NuxtLink>
      </div>

      <div class="border rounded bg-white divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
        <NuxtLink to="/help" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-help-circle-outline class="mr-3 text-xl text-gray-500" />
          <span>帮助</span>
        </NuxtLink>
        <NuxtLink to="/about" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-information-outline class="mr-3 text-xl text-gray-500" />
          <span>关于</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
