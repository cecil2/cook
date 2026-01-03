<script setup lang="ts">
definePageMeta({
  alias: ['/random'],
})

useHead({
  title: '今天吃什么',
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex items-center border-b bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <NuxtLink to="/apps" class="mr-4 text-gray-500 transition hover:text-gray-700">
        <div i-mdi-arrow-left class="text-2xl" />
      </NuxtLink>
      <h2 class="text-xl font-bold">
        今天吃什么
      </h2>
    </div>

    <div class="flex flex-grow flex-col items-center justify-center p-4">
      <RandomRecipe />
    </div>
  </div>
</template>
