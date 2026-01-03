<script lang="ts" setup>
useHead({
  title: '食用手册',
})

const rStore = useRecipeStore()
</script>

<template>
  <div class="text-center">
    <div class="py-4">
      <button
        class="m-auto flex cursor-pointer items-center gap-2 transition active:text-green-800 hover:(text-green-600)"
        title="重置"
        @click="rStore.reset"
      >
        <div v-if="rStore.selectedStuff.length" i-mdi-pot-steam-outline />
        <div v-else i-mdi-pot-mix-outline />

        <span>
          好的，今天我们来做菜！
        </span>
      </button>
    </div>
    <ChooseFood />
  </div>
</template>
