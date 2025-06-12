<script setup lang='ts'>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

</script>

<template>
  <div style="min-height: 100vh;" h-full w-screen bg-base>
    <TheNav />
    <main
      flex flex-col
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
