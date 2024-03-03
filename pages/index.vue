<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { projects } from '@/lib'

const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ date: -1 }] }
</script>

<template>
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
      <ContentList v-slot="{ list }" :query="query">
        <div v-for="blog in list" :key="blog._path">
          <NuxtLink :to="blog._path">
            <span align-middle>{{ blog.title }}</span>
            <p font-thin text-gray:70 text-sm mt-2>
              {{ blog.description }}
            </p>
          </NuxtLink>
        </div>
        <div v-if="list.length === 5">
          <NuxtLink class="item block font-normal mb-6 mt-2 " style="cursor: pointer; text-decoration:dashed;">
            More
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </div>
</template>
