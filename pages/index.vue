<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { projects } from '@/lib'

useCustomHead()


const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ date: -1 }] }
</script>

<template>
  <article
    w-full h-full
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
      <div v-for="project, idx of projects.slice(0, 5)" :key="idx">
        <NuxtLink :to="project.link" target="_blank" rel="noopener" class="after:i-ic-sharp-arrow-outward after:text-gray after:content-[''] after:text-md after:inline-block">
          {{ project.name }}
          <span   />
        </NuxtLink>
        <p text=".9rem">
          {{ project.description }}
        </p>
      </div>
      <div>
        <NuxtLink class="block text-[14px] mb-6 mt--2 " to="/projects" style="cursor: pointer; border-bottom: 1px dashed; --at-apply: 'text-foreground:40 hover:text-foreground'">
          More Projects
        </NuxtLink>
      </div>
    </div>
    <div flex flex-col gap-2 items-start class="slide-enter-content">
      <h4 text-black dark:text-white>
        Writing
      </h4>
      <ContentList v-slot="{ list }" :query="query">
        <div v-for="blog in list" :key="blog._path">
          <NuxtLink :to="blog._path">
            {{ blog.title }}
          </NuxtLink>
          <p text=".9rem">
            {{ blog.description }}
          </p>
        </div>
        <div v-if="list.length === 5">
          <NuxtLink class="block mb-6 mt--2 border-foreground" to="/blog" style="cursor: pointer; border-bottom: 1px dashed;">
            More
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </div>
</template>
