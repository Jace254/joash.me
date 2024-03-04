<script setup lang="ts">
import type { Post } from '@/utils/types'
import { formatDate } from '@/utils'

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)
function isSameGroup(a: Post, b?: Post) {
  return (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date)
}

function getGroupName(p: Post) {
  if (isFuture(p.date))
    return 'Upcoming'
  return getYear(p.date)
}
</script>

<template>
  <main>
    <ContentList path="/blog">
      <template #default="{ list }">
        <div v-for="blog, idx in list" :key="blog._path">
          <div
            v-if="!isSameGroup(blog as unknown as Post, list[idx - 1] as unknown as Post)"
            select-none relative h20 pointer-events-none slide-enter
            max-w="content-fit"
            :style="{
              '--enter-stage': idx - 2,
              '--enter-step': '60ms',
            }"
          >
            <span text-8em max-md:text-4.5em color-transparent absolute left--3rem max-md:left--2rem max-md:top-1rem top--2rem font-normal text-stroke-2 text-stroke-hex-818589 op15 >{{ getGroupName(blog as unknown as Post) }}</span>
          </div>
          <div
            class="slide-enter"
            :style="{
              '--enter-stage': idx,
              '--enter-step': '60ms',
            }"
          >
            <component
              :is="blog._path!.includes('://') ? 'a' : 'RouterLink'"
              v-bind="
                blog._path!.includes('://') ? {
                  href: blog._path,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                } : {
                  to: blog._path,
                }
              "
              class="item block font-normal mb-6 mt-2 no-underline"
            >
              <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
                <div class="title text-lg leading-1.2em" flex="~ gap-2 wrap">
                  <span align-middle>{{ blog.title }}</span>
                </div>
                <div flex="~ gap-2 items-center">
                  <span
                    v-if="blog.redirect"
                    align-middle op50 flex-none text-xs ml--1 mt--1
                    i-carbon-arrow-up-right
                    title="External"
                  />
                  <span
                    v-if="blog.inperson"
                    align-middle op50 flex-none
                    i-ri:group-2-line
                    title="In person"
                  />
                  <span
                    v-if="blog.recording || blog.video"
                    align-middle op50 flex-none
                    i-ri:film-line
                    title="Provided in video"
                  />
                  <span
                    v-if="blog.radio"
                    align-middle op50 flex-none
                    i-ri:radio-line
                    title="Provided in radio"
                  />

                  <span text-sm op50 ws-nowrap>
                    {{ formatDate(blog.date, true) }}
                  </span>
                  <span v-if="blog.duration" text-sm op40 ws-nowrap>· {{ blog.duration }}</span>
                  <span v-if="blog.platform" text-sm op40 ws-nowrap>· {{ blog.platform }}</span>
                  <span v-if="blog.place" text-sm op40 ws-nowrap md:hidden>· {{ blog.place }}</span>
                </div>
              </li>
              <div v-if="blog.place" op50 text-sm hidden mt--2 md:block>
                {{ blog.place }}
              </div>
            </component>
          </div>
        </div>
      </template>

      <template #not-found>
        <div py2 op50>
          { nothing here yet }
        </div>
      </template>
    </ContentList>
  </main>
</template>
