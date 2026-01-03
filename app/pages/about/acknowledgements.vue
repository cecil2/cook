<script setup lang="ts">
import type { PersonalAcknowledgement } from '~/constants/acknowledgements'
import { acknowledgements, personalAcknowledgements } from '~/constants/acknowledgements'

// 图标映射表（提取为常量以提升性能）
const ICON_MAP: Record<string, string> = {
  bilibili: 'i-ri-bilibili-line',
  weibo: 'i-ri-weibo-line',
  twitter: 'i-ri-twitter-x-line',
  wechat: 'i-ri-wechat-2-line',
  blog: 'i-ri-article-line',
  website: 'i-ri-global-line',
  email: 'i-ri-mail-line',
}

/**
 * 根据链接类型返回对应的图标类名
 */
function getIconClass(type?: string): string {
  return ICON_MAP[type || 'website'] || 'i-ri-links-line'
}

function getLinkKey(ackIndex: number, linkIndex: number): string {
  return `link-${ackIndex}-${linkIndex}`
}

function getPersonKey(person: PersonalAcknowledgement, index: number): string {
  return person.link ? `${person.name}-${person.link}` : `${person.name}-${index}`
}
</script>

<template>
  <div class="p-4">
    <div class="mb-6 flex items-center">
      <NuxtLink to="/my" class="mr-4 text-gray-500 transition hover:text-gray-700">
        <div i-mdi-arrow-left class="text-2xl" />
      </NuxtLink>
      <h2 class="text-xl font-bold">
        致谢
      </h2>
    </div>

    <!-- 个人致谢名单 -->
    <div v-if="personalAcknowledgements.length > 0" class="mb-8">
      <h3 class="mb-3 px-2 text-sm text-gray-400 tracking-wider uppercase">
        感谢以下朋友在项目早期的支持与帮助
      </h3>
      <div class="overflow-hidden border rounded-xl bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div
          v-for="(person, index) in personalAcknowledgements"
          :key="getPersonKey(person, index)"
          class="border-b last:border-b-0 dark:border-gray-700"
        >
          <component
            :is="person.link ? 'a' : 'div'"
            :href="person.link"
            target="_blank"
            class="flex cursor-pointer items-center p-4 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
            :class="{ 'pointer-events-none': !person.link }"
          >
            <div class="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-gray-700">
              <div i-ri-user-3-line class="text-lg" />
            </div>
            <div class="flex-1 text-gray-900 font-medium dark:text-gray-100">
              {{ person.name }}
            </div>
            <div v-if="person.link" i-mdi-chevron-right class="text-gray-400" />
          </component>
        </div>
      </div>
    </div>

    <!-- 团队/组织致谢 -->
    <div v-for="(ack, index) in acknowledgements" :key="index" class="mb-8">
      <h3 class="mb-3 px-2 text-sm text-gray-400 tracking-wider uppercase">
        {{ ack.description }}
      </h3>
      <div class="overflow-hidden border rounded-xl bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <a
          v-for="(link, linkIndex) in ack.links"
          :key="getLinkKey(index, linkIndex)"
          :href="link.href"
          target="_blank"
          class="flex items-center border-b p-4 transition last:border-b-0 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
        >
          <div v-if="link.type" class="mr-3 h-8 w-8 flex items-center justify-center text-gray-400">
            <div :class="getIconClass(link.type)" class="text-xl" />
          </div>
          <div class="flex-1 text-gray-900 font-medium dark:text-gray-100">
            {{ link.label }}
          </div>
          <div i-mdi-chevron-right class="text-gray-400" />
        </a>
      </div>
    </div>

    <!-- 底部说明 -->
    <div class="py-8 text-center text-sm text-gray-400">
      感谢所有支持和帮助过本项目的人们 ❤️
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
