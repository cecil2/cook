<script lang="ts" setup>
import type { RecipeItem } from '~/types'
import type { DbRecipeItem } from '~/utils/db'
import { tools } from '~/data/food'
import { getEmojisFromStuff } from '~/utils'

const props = defineProps<{
  dish: RecipeItem | DbRecipeItem
}>()

const dishEmojis = computed(() => {
  return getEmojisFromStuff(props.dish.stuff)
})
</script>

<template>
  <span class="inline-flex items-center gap-1">
    <span>
      {{ dish.tags?.includes('杂烩') ? '🍲' : dishEmojis.join(' ') }}
    </span>

    <span>
      {{ dish.name }}
    </span>

    <template v-for="tool, i in tools">
      <span
        v-if="dish.tools?.includes(tool.name)"
        :key="i" class="inline-block" :class="tool.icon"
      />
    </template>
  </span>
</template>
