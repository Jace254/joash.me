<template>
  <main
    flex justify-center
    w-full py="128px"
    style="min-height: calc(100vh - 48px);" relative
  >
    <article
      w-full h-full max-w="var(--content-width)"
      class="slide-enter-content prose"
      md:px-0 px-7 relative block
    >
      <ContentDoc />
    </article>
  </main>
</template>
