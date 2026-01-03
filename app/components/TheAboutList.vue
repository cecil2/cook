<script lang="ts" setup>
import { isClient } from '@vueuse/core'
import pkg from '~/../package.json'
import { icp } from '../constants'

const displayICP = ref(true)

const commitSha = (import.meta.env.VITE_COMMIT_REF || '').slice(0, 7)
const date = import.meta.env.VITE_APP_BUILD_DATE
const buildDate = (new Date(date)).toLocaleDateString()

onBeforeMount(() => {
  if (isClient)
    displayICP.value = ['cook.yunyoujun.cn', 'localhost', '127.0.0.1'].includes(window.location.hostname)
})
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

      <a
        v-if="commitSha"
        :href="`https://github.com/YunYouJun/cook/commit/${commitSha}`"
        target="_blank"
        class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span class="text-gray-900 font-medium dark:text-gray-100">Commit Hash</span>
        <span class="text-gray-500">{{ commitSha }}</span>
      </a>

      <a
        v-if="displayICP"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span class="text-gray-900 font-medium dark:text-gray-100">备案号</span>
        <span class="text-gray-500">{{ icp }}</span>
      </a>
    </div>

    <div class="overflow-hidden border rounded-xl bg-white shadow-sm divide-y dark:border-gray-700 dark:bg-gray-800 dark:divide-gray-700">
      <a
        href="https://www.bilibili.com/blackboard/dynamic/306882"
        target="_blank"
        class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span class="text-gray-900 font-medium dark:text-gray-100">数据来源</span>
        <div class="flex items-center text-gray-500">
          <div i-ri-bilibili-line class="mr-2" />
          <span class="text-sm">哔哩哔哩</span>
        </div>
      </a>

      <a
        href="https://github.com/YunYouJun/cook"
        target="_blank"
        class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span class="text-gray-900 font-medium dark:text-gray-100">开源代码</span>
        <div class="flex items-center text-gray-500">
          <div i-ri-github-line class="mr-2" />
          <span class="text-sm">GitHub</span>
        </div>
      </a>

      <NuxtLink
        to="/about/me"
        class="flex items-center justify-between p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span class="text-gray-900 font-medium dark:text-gray-100">项目作者</span>
        <span class="text-gray-500">云游君</span>
      </NuxtLink>

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
