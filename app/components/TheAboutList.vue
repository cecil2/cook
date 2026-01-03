<script lang="ts" setup>
import pkg from '~/../package.json'

const date = import.meta.env.VITE_APP_BUILD_DATE
const buildDate = date ? (new Date(date)).toLocaleDateString() : new Date().toLocaleDateString()
</script>

<template>
  <div class="space-y-4">
    <div class="overflow-hidden border rounded-xl bg-white shadow-sm divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
      <div class="flex items-center justify-between p-4">
        <span class="text-gray-900 font-medium dark:text-gray-100">当前版本</span>
        <span class="text-gray-500">v{{ pkg.version }}</span>
      </div>

      <div class="flex items-center justify-between p-4">
        <span class="text-gray-900 font-medium dark:text-gray-100">构建时间</span>
        <span class="text-gray-500">{{ buildDate }}</span>
      </div>
    </div>

    <div class="overflow-hidden border rounded-xl bg-white shadow-sm divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
      <div class="flex items-center justify-between p-4">
        <span class="text-gray-900 font-medium dark:text-gray-100">数据来源</span>
        <div class="flex items-center text-gray-500">
          <div i-ri-bilibili-line class="mr-2" />
          <span class="text-sm">哔哩哔哩</span>
        </div>
      </div>

      <NuxtLink
        to="/about/acknowledgements"
        class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span class="text-gray-900 font-medium dark:text-gray-100">致谢名单</span>
        <div i-mdi-chevron-right class="text-gray-400" />
      </NuxtLink>
    </div>
  </div>
</template>
