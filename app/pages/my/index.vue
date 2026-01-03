<script lang="ts" setup>
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
        <NuxtLink to="/settings" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-cog-outline class="mr-3 text-xl text-gray-500" />
          <span>设置</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
