<script lang="ts" setup>
import type { DbRecipeItem } from '~/utils/db'
import { watchDebounced } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { useIndexedDB } from '~/composables/db'
import { isFavorited, toggleFavorite } from '~/composables/store/favorite'
import { recipeHistories } from '~/composables/store/history'
import { db } from '~/utils/db'

useHead({
  title: '菜谱列表',
})

const keyword = ref('')
const loading = ref(false)
const recipes = ref<DbRecipeItem[]>([])
const view = ref<'all' | 'fav'>('all')

const displayed = computed(() => {
  return view.value === 'fav' ? recipes.value.filter(r => isFavorited(r)) : recipes.value
})

const favCount = computed(() => recipes.value.filter(r => isFavorited(r)).length)

const showToast = ref(false)
const toastMessage = ref('')

async function loadAll() {
  loading.value = true
  try {
    recipes.value = await db.recipes.toArray()
  }
  finally {
    loading.value = false
  }
}

async function runSearch(q: string) {
  const text = (q || '').trim()
  if (!text)
    return loadAll()
  loading.value = true
  try {
    recipes.value = await db.recipes
      .filter(r => r.name.includes(text))
      .toArray()
  }
  finally {
    loading.value = false
  }
}

onMounted(async () => {
  // ensure IndexedDB has data
  const { init } = useIndexedDB()
  await init()
  await loadAll()
})

watchDebounced(keyword, (q) => {
  runSearch(q)
}, { debounce: 200, maxWait: 500 })

function onInput(ev: any) {
  keyword.value = ev.target.value ?? ''
}

function onClear() {
  keyword.value = ''
}

function openDishLink(dish: DbRecipeItem) {
  // keep history like DishTag did
  recipeHistories.value.push({ recipe: dish, time: Date.now() })
  const href = dish.link || `https://www.bilibili.com/video/${dish.bv}`
  window.open(href, '_blank')
}

function onToggleFavorite(item: DbRecipeItem) {
  toggleFavorite(item)
  toastMessage.value = isFavorited(item) ? '已添加到收藏' : '已从收藏移除'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 1200)
}
</script>

<template>
  <div class="p-4">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-xl font-bold">
        菜谱列表
      </h2>
      <NuxtLink to="/recipes/new" class="text-green-600">
        <div i-mdi-plus-circle-outline class="text-2xl" />
      </NuxtLink>
    </div>

    <div class="mb-4">
      <div class="relative">
        <input
          :value="keyword"
          type="search"
          placeholder="搜索菜谱..."
          class="w-full border rounded-lg bg-white py-2 pl-10 pr-4 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          @input="onInput"
        >
        <div class="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2">
          <div i-mdi-magnify />
        </div>
        <button
          v-if="keyword"
          class="absolute right-3 top-1/2 text-gray-400 -translate-y-1/2 hover:text-gray-600"
          @click="onClear"
        >
          <div i-mdi-close-circle />
        </button>
      </div>
    </div>

    <div class="mb-4 flex gap-2">
      <button
        class="rounded-full px-4 py-1.5 text-sm font-medium transition"
        :class="view === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'"
        @click="view = 'all'"
      >
        全部 ({{ recipes.length }})
      </button>
      <button
        class="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition"
        :class="view === 'fav' ? 'bg-green-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'"
        @click="view = 'fav'"
      >
        收藏 ({{ favCount }})
      </button>
    </div>

    <div v-if="loading" class="py-10 text-center text-gray-500">
      <div class="mb-2 animate-spin text-3xl">
        <div i-mdi-loading />
      </div>
      加载中...
    </div>

    <div v-else-if="displayed.length === 0" class="py-10 text-center text-gray-500">
      暂无菜谱
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="item in displayed"
        :key="item.id"
        class="flex cursor-pointer items-center justify-between border rounded-xl bg-white p-4 transition dark:border-gray-700 dark:bg-gray-800 hover:shadow-md"
        @click="openDishLink(item)"
      >
        <div class="mr-4 min-w-0 flex-1">
          <div class="truncate text-lg text-gray-900 font-medium dark:text-gray-100">
            {{ item.name }}
          </div>
          <div class="truncate text-sm text-gray-500">
            {{ item.bv }}
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="text-2xl transition active:scale-125"
            :class="isFavorited(item) ? 'text-yellow-400' : 'text-gray-300 hover:text-gray-400'"
            @click.stop="onToggleFavorite(item)"
          >
            <div v-if="isFavorited(item)" i-mdi-star />
            <div v-else i-mdi-star-outline />
          </button>
          <div i-mdi-chevron-right class="text-xl text-gray-400" />
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div
      v-if="showToast"
      class="fixed bottom-24 left-1/2 z-50 rounded-lg bg-black/80 px-4 py-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2"
    >
      {{ toastMessage }}
    </div>
  </div>
</template>
