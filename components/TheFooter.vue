<script setup lang="ts">
const year = new Date().getFullYear()
</script>


<template>
  <footer
    flex border-t border-border
    w-full py3 px="216px"
    bg-faded font-mono
    font-light text="#707070"
  >
    
    <div flex-auto />
    <div>{{ year }}</div>
  </footer>
</template>
