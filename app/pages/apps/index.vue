<script setup lang="ts">
useHead({
  title: '发现',
})
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="mb-4">
      <h2 class="text-xl font-bold">
        发现
      </h2>
    </div>

    <div class="space-y-4">
      <div class="border rounded bg-white dark:border-gray-700 dark:bg-gray-800">
        <NuxtLink to="/apps/random" class="flex items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700">
          <div i-mdi-shuffle class="mr-3 text-xl text-gray-500" />
          <span>今天吃什么</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
