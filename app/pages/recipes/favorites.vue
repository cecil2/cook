<script lang="ts" setup>
import type { DbRecipeItem } from '~/utils/db'
import { getFavoriteTime, isFavorited, toggleFavorite } from '~/composables/store/favorite'
import { db } from '~/utils/db'

definePageMeta({
  layout: 'child',
  title: '我的收藏',
})

const loading = ref(false)
const recipes = ref<DbRecipeItem[]>([])
const keyword = ref('')
const sortKey = ref<'time' | 'name'>('time')

const displayed = computed(() => {
  const text = keyword.value.trim()
  let list = recipes.value
  if (text)
    list = list.filter(r => r.name.includes(text))

  if (sortKey.value === 'name')
    return [...list].sort((a, b) => a.name.localeCompare(b.name))

  // time: sort by recorded favorite timestamp (recent first)
  return [...list].sort((a, b) => {
    const ta = getFavoriteTime(a) ?? -Infinity
    const tb = getFavoriteTime(b) ?? -Infinity
    return tb - ta
  })
})

async function loadFavorites() {
  loading.value = true
  try {
    const all = await db.recipes.toArray()
    recipes.value = all.filter(r => isFavorited(r))
  }
  finally {
    loading.value = false
  }
}

onMounted(loadFavorites)

async function clearAllFavorites() {
  // eslint-disable-next-line no-alert
  if (window.confirm('确定要取消所有收藏吗？')) {
    for (const item of recipes.value)
      toggleFavorite(item)
    await loadFavorites()
  }
}

function onToggleFavorite(item: DbRecipeItem) {
  toggleFavorite(item)
  // update list immediately
  recipes.value = recipes.value.filter(r => isFavorited(r))
}

function openDishLink(item: DbRecipeItem) {
  const href = item.link || `https://www.bilibili.com/video/${item.bv}`
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
          我的收藏
        </h2>
      </div>
      <button
        v-if="recipes.length"
        class="rounded-full p-2 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-900/30"
        title="清空收藏"
        @click="clearAllFavorites"
      >
        <div i-mdi-trash-can-outline class="text-xl" />
      </button>
    </div>

    <div class="mb-4">
      <div class="relative">
        <input
          v-model="keyword"
          type="text"
          placeholder="搜索收藏"
          class="w-full border rounded p-2 pl-10 dark:border-gray-700 dark:bg-gray-800"
        >
        <div i-mdi-magnify class="absolute left-3 top-3 text-gray-400" />
        <div
          v-if="keyword"
          i-mdi-close-circle
          class="absolute right-3 top-3 cursor-pointer text-gray-400"
          @click="keyword = ''"
        />
      </div>
    </div>

    <div class="mb-4 flex border-b dark:border-gray-700">
      <button
        class="flex-1 py-2 text-center"
        :class="{ 'border-b-2 border-green-600 text-green-600 font-bold': sortKey === 'time' }"
        @click="sortKey = 'time'"
      >
        按收藏时间
      </button>
      <button
        class="flex-1 py-2 text-center"
        :class="{ 'border-b-2 border-green-600 text-green-600 font-bold': sortKey === 'name' }"
        @click="sortKey = 'name'"
      >
        按名称
      </button>
    </div>

    <div v-if="loading" class="py-10 text-center">
      <div i-mdi-loading class="inline-block animate-spin text-3xl" />
    </div>

    <div v-else-if="displayed.length" class="space-y-2">
      <div
        v-for="item in displayed"
        :key="item.id ?? item.name"
        class="flex cursor-pointer items-center justify-between border rounded p-3 transition dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        @click="openDishLink(item)"
      >
        <div class="flex-1 truncate">
          <DishLabel class="text-sm" :dish="item" />
        </div>
        <button class="p-2" @click.stop="onToggleFavorite(item)">
          <div i-mdi-star class="text-xl text-yellow-500" />
        </button>
      </div>
    </div>

    <div v-else class="py-10 text-center text-gray-500">
      {{ keyword ? '没有找到相关收藏' : '暂无收藏' }}
    </div>
  </div>
</template>
