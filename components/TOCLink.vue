<script setup lang="ts">
interface Nav {
  id: string
  text: string
  children?: Nav[]
}
defineProps<{ navigation: Nav[] }>()
</script>

<template>
  <li v-for="link, idx of navigation" :key="idx">
    <NuxtLink :to="`#${link.id}`">
      {{ link.text }}
    </NuxtLink>
    <ul v-if="link.children">
      <TOCLink :navigation="link.children" />
    </ul>
  </li>
</template>
