<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <PostWrapper :frontmatter="page">
    <ContentDoc />
  </PostWrapper>
</template>
