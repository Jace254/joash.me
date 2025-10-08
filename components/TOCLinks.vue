<script setup lang="ts">
interface Nav {
  id: string
  text: string
  children?: Nav[]
}
defineProps<{ navigation: Nav[] }>()

const { scrollToAnchor } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 140,
    },
  },
})
</script>

<template>
  <li v-for="link, idx of navigation" :key="idx">
    <NuxtLink
      :href="`#${link.id}`"
      @click="scrollToAnchor(link.id)"
    >
      {{ link.text }}
    </NuxtLink>
    <ul v-if="link.children">
      <TOCLinks :navigation="link.children" />
    </ul>
  </li>
</template>
