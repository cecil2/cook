<script setup lang="ts">
// help
</script>

<template>
  <div class="p-4">
    <div class="mb-6 flex items-center">
      <NuxtLink to="/my" class="mr-4 text-gray-500 transition hover:text-gray-700">
        <div i-mdi-arrow-left class="text-2xl" />
      </NuxtLink>
      <h2 class="text-xl font-bold">
        帮助
      </h2>
    </div>

    <div class="mx-auto max-w-md w-full rounded-2xl p-2 text-left">
      <FAQItem title="什么是模式？">
        <ul class="list-disc pl-5 space-y-1">
          <li><b>模糊匹配</b>：展示所有含当前选中任意食材的菜谱</li>
          <li><b>精准匹配</b>：展示所有含当前选中所有食材的菜谱</li>
          <li><b>生存模式</b>：展示当前选中食材即可制作的所有菜谱</li>
        </ul>
      </FAQItem>

      <FAQItem title="如何快速清空所选食材和工具?">
        <div class="inline-flex items-center justify-center">
          点击顶部 <div i-mdi-pot-steam-outline class="mx-1 inline-block" /> 图标即可。
        </div>
      </FAQItem>

      <FAQItem title="页面无法点击、资源加载失败？">
        <blockquote class="my-2 border-l-4 border-gray-300 pl-4 italic">
          试试「无痕模式」是否正常？
        </blockquote>
        <br>
        <ol class="list-decimal pl-5 space-y-2">
          <li>
            <b>清除 Cookie</b>
            <ol class="mt-1 list-decimal pl-5 space-y-1">
              <li>
                点击浏览器网址前方的 🔒 图标
              </li>
              <li>
                点击「Cookie」并清除
              </li>
            </ol>
          </li>
          <li>
            <b>强制刷新缓存</b>
            <ul class="mt-1 list-disc pl-5">
              <li>Windows: <code>Ctrl + F5</code></li>
              <li>macOS: <code>Cmd + Shift + R</code></li>
            </ul>
          </li>
        </ol>
      </FAQItem>
    </div>
  </div>
</template>
