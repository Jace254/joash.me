<script setup lang="ts">

const { page, toc } = useContent()
const navigation = toc.value.links

onMounted(() => {
  const element = document.getElementById('element-5')
  const button = document.getElementById('replay')
  const element2 = document.getElementById('element-6')
  const button2 = document.getElementById('replay-2')

  if (button && element) {
    button.addEventListener('click', (e) => {
      e.preventDefault()

      element.classList.remove('element-5')

      void element.offsetWidth

      element.classList.add('element-5')
    }, false)
  }

  if (button2 && element2) {
    button2.addEventListener('click', (e) => {
      e.preventDefault()

      element2.classList.remove('element-6')

      void element2.offsetWidth

      element2.classList.add('element-6')
    }, false)
  }
})
</script>

<template>
  <PostWrapper v-if="page" :frontmatter="page">
    <ContentDoc />
  </PostWrapper>

  <div class="table-of-contents" v-if="navigation.length > 0">
    <div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>
    <ul>
      <TOCLinks :navigation="navigation"/>
    </ul>
  </div>
</template>
