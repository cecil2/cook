<script lang="ts" setup>
import pkg from '~/../package.json'

const date = import.meta.env.VITE_APP_BUILD_DATE
const buildDate = date ? (new Date(date)).toLocaleDateString() : new Date().toLocaleDateString()
</script>

<template>
  <div v-if="buildDate" mb-2 text-sm>
    <span>
      当前版本 v{{ pkg.version }}（{{ buildDate }}）
    </span>
  </div>
</template>
