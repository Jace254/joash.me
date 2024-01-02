<script lang="ts" setup>
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleMode">
    <div i-ph-sun-dim-duotone dark:i-material-symbols-dark-mode-outline text-2xl dark:hover:bg-cyan style="transition: background-color 0.3s ease-in-out;" />
  </a>
</template>
