<script lang="ts" setup>
const { count, inc, dec } = useCount()
const { random, randomRecipes } = useRandomRecipe(count)
</script>

<template>
  <div class="my-6 flex flex-col items-center gap-4">
    <div class="inline-flex items-center gap-4 rounded-full bg-gray-100 p-2 dark:bg-gray-800">
      <button
        class="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm transition dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        @click="dec()"
      >
        <div i-mdi-minus />
      </button>
      <div font="mono" class="w-10 text-center text-2xl font-bold">
        {{ count }}
      </div>
      <button
        class="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm transition dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        @click="inc()"
      >
        <div i-mdi-plus />
      </button>
    </div>

    <button
      class="flex items-center gap-2 rounded-full bg-green-600 px-6 py-2 text-white shadow transition active:scale-95 hover:bg-green-700"
      @click="random"
    >
      <div i-mdi-refresh class="text-xl" />
      <span class="font-bold">随机一下</span>
    </button>

    <div v-show="randomRecipes.length > 0" class="max-w-sm w-full">
      <div class="flex flex-col gap-2">
        <template v-for="recipe, i in randomRecipes" :key="i">
          <DishTag v-if="recipe" :dish="recipe" />
        </template>
      </div>
    </div>
  </div>
</template>
