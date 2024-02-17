<script setup lang="ts">
import { projects } from '@/lib'

</script>

<template>
  <main
    flex flex-col justify-center
    items-center
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
    <div grid="~ md:cols-3 cols-1" gap-x-3 w-full class=" prose" md:px-0 px-7 relative>
      <div flex flex-col gap-2 items-start class="slide-enter-content">
        <h4 text-black dark:text-white>
          Craft
        </h4>
        <span>Coming Soon</span>
      </div>
      <div flex flex-col gap-2 items-start class="slide-enter-content">
        <h4 text-black dark:text-white>
          Projects
        </h4>
        <div v-for="project, idx of projects" :key="idx" grid gap-y-1>
          <a :href="project.link" target="_blank" rel="noopener" flex items-center>{{ project.name }} <span i-ic-sharp-arrow-outward text-gray /></a>
          <p text=".9rem">
            {{ project.description }}
          </p>
        </div>
      </div>
      <div flex flex-col gap-2 items-start class="slide-enter-content">
        <h4 text-black dark:text-white>
          Writing
        </h4>
        <span>Coming Soon</span>
      </div>
    </div>
  </main>
</template>
