<script lang="ts" setup>
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    @click="toggleMode"
  >
    <div dark:i-ph-sun-dim-duotone i-ph-moon-stars-duotone text-2xl />
  </button>
</template>
