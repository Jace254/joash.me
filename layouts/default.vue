<script setup lang='ts'>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import BeeetleBot from 'beeetle-chatbot-js'

onMounted(() => {
  BeeetleBot.initBubble({
    apiHost: 'https://netwatch-api-concept.vercel.app/api/chat',
  })
})

useCustomHead('Joash\'s Personal Webiste')
</script>

<template>
  <div style="min-height: 100vh;" h-full w-screen bg-base>
    <TheNav />
    <main
      flex flex-col justify-center
      items-center
      w-full py="128px"
      style="min-height: calc(100vh - 48px);" relative
    >
      <slot />
    </main>
    <TheFooter />
    <SpeedInsights />
  </div>
</template>
