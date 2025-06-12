<script setup lang="ts">
import crypticTyping from 'cryptic-typing'
import { projects } from '@/lib'

useCustomHead("Projects", "A collection of my projects, showcasing my skills and creativity. Explore the links to learn more about each project.")

const newProjects = ref(projects.map((p) => { return { name: '', description: '', year: '', link: p.link } }))

onBeforeMount(() => {
  projects.forEach((p, i) => {
    crypticTyping(p.name, (n) => {
      newProjects.value[i].name = n
    }, false)
    crypticTyping(p.description, (n) => {
      newProjects.value[i].description = n
    }, false)
    crypticTyping(p.year, (n) => {
      newProjects.value[i].year = n
    }, true, 90)
  })
})

definePageMeta({
  layout: 'lists',
})
</script>

<template>
  <main class="wrapper sizing w-full ">
    <div
      v-for="project, idx in newProjects"
      :key="idx" class="link-wrapper slide-enter"
      :style="{
        '--enter-stage': idx,
        '--enter-step': '100ms',
      }"
    >
      <NuxtLink class="link" :href="project.link" target="_blank" rel="noopener">
        <span
          class="project-title"
        >{{ project.name }}</span>
        <span class="project-desc">{{ project.description }}</span>
        <div class="animated-line" :style="`--d: ${idx}`" />
        <div class="project-date">
          {{ project.year }}
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style>
.wrapper {
  max-width: 600px;
}
@media (max-width: 600px) {
  .wrapper {
    padding-top: 40px;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  margin: 0px auto;
  overflow: hidden;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 120px;
  transition: padding-top 1s ease-in-out;
}

.sizing {
  box-sizing: border-box;
}

.link-wrapper {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.link {
  display: flex;
  align-items: center;
  gap: 12px;
  width: calc(100% + 32px);
  position: relative;
  overflow: hidden;
  padding: 12px;
  margin: -12px;
  border-radius: 12px;
  outline: 0;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.link:hover {
  background-color: hsl(var(--accent)/ 50%);
}

.link::selection {
  background: #fff9a8;
  color: black;
}

.project-title {
  display: inline-block;
  color:var(--fg-deeper);
  font-weight: 500;
  line-height: 28px;
  font-size: 14px;
  margin: 0;
}

.project-desc {
  margin: 0;
  margin-left: -8px;
  display: inline-block;
  color:var(--fg);
  font-weight: 400;
  line-height: 28px;
  font-size: 14px;
}

@media (max-width: 720px) {
  .project-desc {
    display: none;
  }
}

.animated-line {
  flex: 1 1 0%;
  position: relative;
  box-sizing: border-box;
}

.animated-line::before {
  content: "";
  position: absolute;
  bottom: -1px;
  height: 1px;
  width: 0px;
  z-index: 3;
  animation: 1s ease calc(var(--d) * 0.1s) 1 normal forwards running shine;
}

.animated-line::after {
  content: "";
  position: absolute;
  bottom: -1px;
  height: 1px;
  width: 0px;
  animation: 1s ease calc(var(--d) * 0.1s) 1 normal forwards running settle;
}

.project-date {
  color:  hsl(var(--foreground));
  font-weight: 400;
  display: block;
  margin: 0;
  line-height: 28px;
  font-size: 14px;
  font-family: X, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
}

@keyframes shine {
  0% {
    background: transparent;
  }

  50% {
    background: hsl(var(--foreground));
  }
  100% {
    width: 100%;
    background: transparent;
  }
}

@keyframes settle {
  0% {
    background: transparent;
  }

  50% {
    background: hsl(var(--foreground));
  }
  100% {
    width: 100%;
    background: hsl(var(--foreground)/ 30%);
  }
}
</style>
