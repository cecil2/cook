<script lang="ts" setup>
import { isClient } from '@vueuse/core'

const displayICP = ref(true)

onBeforeMount(() => {
  if (isClient)
    displayICP.value = ['cecil2.github.io', 'localhost', '127.0.0.1'].includes(window.location.hostname)
})
</script>

<template>
  <div p="4 t-2" class="flex flex-col items-center justify-center" text="sm">
    <CurrentVersion />
    <div m="t-2" class="inline-flex items-center justify-center" text="xs">
      <a class="inline-flex items-center justify-center" style="color: #ea7b99" href="https://www.bilibili.com/blackboard/dynamic/306882" target="_blank">
        <span inline-flex>菜谱视频来源：</span>
        <div class="inline-flex" i-ri-bilibili-line />
        <span m="l-1" class="inline-flex" style="margin-top: 1px;">B 站</span>
      </a>
    </div>
    <div m="t-2" opacity="80" class="flex items-center justify-center">
      ©️&nbsp;<span>Cook</span>
    </div>
  </div>
</template>
