<script setup lang="ts">
const { page } = useContent()

if (!page) {
  throw createError({
    statusCode: 404,
    message: 'not found',
    fatal: true,
  })
}

onMounted(() => {
  const element = document.getElementById('element-5')
  const button = document.getElementById('replay')
  const element2 = document.getElementById('element-6')
  const button2 = document.getElementById('replay-2')

  if (button && element) {
    // reset the transition by...
    button.addEventListener('click', (e) => {
      e.preventDefault()

      // -> removing the class
      element.classList.remove('element-5')

      // -> triggering reflow /* The actual magic */
      // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
      // Oops! This won't work in strict mode. Thanks Felis Phasma!
      // element.offsetWidth = element.offsetWidth;
      // Do this instead:
      void element.offsetWidth

      // -> and re-adding the class
      element.classList.add('element-5')
    }, false)
  }

  if (button2 && element2) {
    // reset the transition by...
    button2.addEventListener('click', (e) => {
      e.preventDefault()

      // -> removing the class
      element2.classList.remove('element-6')

      // -> triggering reflow /* The actual magic */
      // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
      // Oops! This won't work in strict mode. Thanks Felis Phasma!
      // element.offsetWidth = element.offsetWidth;
      // Do this instead:
      void element2.offsetWidth

      // -> and re-adding the class
      element2.classList.add('element-6')
    }, false)
  }
})
</script>

<template>
  <PostWrapper v-if="page" :frontmatter="page">
    <ContentDoc />
  </PostWrapper>
</template>
