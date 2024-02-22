<script setup lang='ts'>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import BeeetleBot from 'beeetle-chatbot-js'

onMounted(() => {
  BeeetleBot.initBubble({
    apiHost: 'https://netwatch-api-concept.vercel.app/api/chat',
    autoShowDelay: undefined,
    brandColor: undefined,
    isPreview: undefined,
    beeetleBot: undefined,
    onAnswer: undefined,
    onClose: undefined,
    onEnd: undefined,
    onInit: undefined,
    onNewInputBlock: undefined,
    onOpen: undefined,
    onPreviewMessageClick: undefined,
    prefilledVariables: undefined,
    previewMessage: undefined,
    resultId: undefined,
    theme: {
      button: {
        backgroundColor: undefined,
        customCloseIconSrc: undefined,
        customIconSrc: undefined,
        iconColor: undefined,
        size: undefined,
      },
      chatWindow: {
        backgroundColor: undefined,
        maxHeight: undefined,
        maxWidth: undefined,
      },
      placement: undefined,
      previewMessage: {
        backgroundColor: undefined,
        closeButtonBackgroundColor: undefined,
        closeButtonIconColor: undefined,
        textColor: undefined,
      },
    },
  })
})

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
