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
      <FAQItem title="未来计划？">
        计划增加新功能，如自定义菜谱，与使用其他用户分享的菜谱。
      </FAQItem>

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

      <FAQItem title="是否有微信小程序?">
        因不可抗力（小程序因跳转 B 站视频而被判定为导流违规）下架。
        将不再提供小程序版本。
        <br>
        <br>
        搜索微信公众号<b>「云游君」</b>并发送<b>「做菜」</b>，也可以快速找到本网站。
      </FAQItem>

      <FAQItem title="是否有 APP?">
        <b>本项目主要以 Web 形式提供服务。</b>
      </FAQItem>

      <FAQItem title="未来是否会收费？">
        该项目将以免费开源的形式运营。
        <br>
        您可以考虑赞助本项目，以支持我们的开发。
        我会将其投入在周边的服务器、域名、CDN 等费用上。
        <ul class="mt-2 space-y-1">
          <li>
            <a href="https://afdian.net/a/yunyoujun" target="_blank" class="text-green-600 hover:underline">爱发电赞助</a>
          </li>
          <li>
            <a href="https://sponsors.yunyoujun.cn/" target="_blank" class="text-green-600 hover:underline">我要直接打钱！</a>
          </li>
        </ul>
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

      <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700">

      <HelpAbout />

      <FAQItem title="关于我">
        <div class="text-left">
          我的个人微信公众号「云游君」，会分享一些生活和写的<a href="https://sponsors.yunyoujun.cn/projects" target="_blank" class="text-green-600 hover:underline">
            小玩具们
          </a>。

          <a class="block py-4" href="https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg" target="_blank">
            <img class="mx-auto max-w-xs rounded shadow-lg" src="https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg" alt="云游君">
          </a>
        </div>
      </FAQItem>
    </div>
  </div>
</template>
