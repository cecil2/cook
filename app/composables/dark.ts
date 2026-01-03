export const useDarkMode = createSharedComposable(() => {
  const color = useColorMode()
  const isDark = computed(() => color.value === 'dark')

  async function setLightMode() {
    document.documentElement.classList.remove('dark')
  }

  async function setDarkMode() {
    document.documentElement.classList.add('dark')
  }

  return {
    color,
    isDark,
    setLightMode,
    setDarkMode,

    async toggleDark() {
      const targetMode = color.value === 'dark' ? 'light' : 'dark'
      color.preference = targetMode

      if (targetMode === 'dark') {
        setDarkMode()
      }
      else {
        setLightMode()
      }
    },
  }
})
