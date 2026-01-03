<script lang="ts" setup>
const { isDark, toggleDark } = useDarkMode()

const app = useAppStore()

definePageMeta({
  layout: 'child',
})
</script>

<template>
  <div class="p-4">
    <div class="mb-6 flex items-center">
      <NuxtLink to="/my" class="mr-4 text-gray-500 transition hover:text-gray-700">
        <div i-mdi-arrow-left class="text-2xl" />
      </NuxtLink>
      <h2 class="text-xl font-bold">
        设置
      </h2>
    </div>

    <div class="space-y-6">
      <section>
        <h3 class="mb-2 px-1 text-sm text-gray-500 font-medium tracking-wider uppercase">
          外观
        </h3>
        <div class="border rounded bg-white dark:border-gray-700 dark:bg-gray-800">
          <div class="flex items-center justify-between p-4">
            <span>暗色模式</span>
            <YlfSwitch :model-value="isDark" @update:model-value="toggleDark" />
          </div>
        </div>
      </section>

      <section>
        <h3 class="mb-2 px-1 text-sm text-gray-500 font-medium tracking-wider uppercase">
          数据
        </h3>
        <div class="border rounded bg-white dark:border-gray-700 dark:bg-gray-800">
          <div class="flex items-center justify-between p-4">
            <span>离开网页后保留选中数据</span>
            <YlfSwitch v-model="app.settings.keepLocalData" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>
