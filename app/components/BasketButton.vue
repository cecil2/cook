<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const rStore = useRecipeStore()
const { displayedRecipe } = storeToRefs(rStore)

/**
 * scroll into view
 */
function recipePanelScrollIntoView() {
  const panel = recipePanelRef.value as HTMLElement
  if (panel) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="group fixed bottom-20 right-4 z-50">
    <div class="flex flex-col-reverse items-center gap-2">
      <button
        class="h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition active:scale-95 hover:bg-green-700"
      >
        <div v-if="displayedRecipe.length > 0" i-mdi-bowl-mix-outline class="text-2xl" />
        <div v-else i-mdi-bowl-outline class="text-2xl" />
      </button>

      <div class="pointer-events-none flex flex-col translate-y-2 gap-2 opacity-0 transition duration-200 group-hover:(pointer-events-auto translate-y-0 opacity-100)">
        <button
          class="h-10 w-10 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition dark:bg-gray-800 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
          title="重置"
          @click="rStore.reset"
        >
          <div i-mdi-trash-can-outline class="text-xl" />
        </button>
        <button
          class="h-10 w-10 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition dark:bg-gray-800 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
          title="跳转到菜谱"
          @click="recipePanelScrollIntoView"
        >
          <div i-mdi-format-list-bulleted class="text-xl" />
        </button>
      </div>
    </div>
  </div>
</template>
