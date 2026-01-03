<script lang="ts" setup>
import type { RecipeItem } from '~/types'
import dayjs from 'dayjs'
import { recipeHistories } from '~/composables/store/history'

definePageMeta({
  layout: 'child',
  title: '历史记录',
})

// todo
// clear one history
async function clearAllHistory() {
  // eslint-disable-next-line no-alert
  if (window.confirm('确定要清空所有历史记录吗？此操作不可撤销。')) {
    recipeHistories.value = []
  }
}

function clearOneHistory(history: typeof recipeHistories.value[0]) {
  recipeHistories.value = recipeHistories.value.filter(h => h !== history)
}

function openDishLink(dish: RecipeItem) {
  const href = dish.link || `https://www.bilibili.com/video/${dish.bv}`
  window.open(href, '_blank')
}
</script>

<template>
  <div class="p-4">
    <div class="mb-6 flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/my" class="mr-4 text-gray-500 transition hover:text-gray-700">
          <div i-mdi-arrow-left class="text-2xl" />
        </NuxtLink>
        <h2 class="text-xl font-bold">
          历史记录
        </h2>
      </div>
      <button
        v-if="recipeHistories.length"
        class="rounded-full p-2 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-900/30"
        title="清空记录"
        @click="clearAllHistory"
      >
        <div i-mdi-trash-can-outline class="text-xl" />
      </button>
    </div>

    <div v-if="recipeHistories.length" class="space-y-2">
      <div
        v-for="history in recipeHistories"
        :key="history.recipe.name + history.time"
        class="group flex cursor-pointer items-center justify-between border rounded p-3 transition dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        @click="openDishLink(history.recipe)"
      >
        <div class="flex-1 truncate">
          <div class="flex flex-col">
            <DishLabel class="text-sm" :dish="history.recipe" />
            <span class="mt-1 text-xs text-gray-400">
              {{ dayjs(history.time).format('YYYY-MM-DD HH:mm:ss') }}
            </span>
          </div>
        </div>
        <button
          class="p-2 text-gray-400 opacity-0 transition hover:text-red-500 group-hover:opacity-100"
          title="删除"
          @click.stop="clearOneHistory(history)"
        >
          <div i-mdi-close class="text-lg" />
        </button>
      </div>
    </div>

    <div v-else class="py-10 text-center text-gray-500">
      暂无历史记录
    </div>
  </div>
</template>
