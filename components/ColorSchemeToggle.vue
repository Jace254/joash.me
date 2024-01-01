<script lang="ts" setup>
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleMode">
    <div dark:i-ph-sun-dim-duotone i-material-symbols-dark-mode-outline text-2xl />
  </a>
</template>
