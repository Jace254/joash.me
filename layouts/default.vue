<script setup lang='ts'>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

useCustomHead('Joash\'s Personal Webiste')
</script>

<template>
  <div style="min-height: 100vh;" h-full w-screen bg-base>
    <TheNav />
    <slot />
    <TheFooter />
    <SpeedInsights />
  </div>
</template>
