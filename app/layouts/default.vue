<template>
  <main class="cook-main text-center text-gray-700 dark:text-gray-200" p="b-$cook-bottom-menu-height">
    <div class="sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-2 dark:bg-gray-800">
      <DarkToggle />
      <SearchRecipe />
    </div>
    <slot />
    <TheBottomMenu fixed bottom-0 left-0 right-0 />
  </main>
</template>
