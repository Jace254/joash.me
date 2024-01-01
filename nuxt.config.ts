// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxtjs/color-mode', '@nuxt/content', 'radix-vue/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdown: {
      remarkPlugins: [
        'remark-external-links',
      ],
    },
  },
  app: {
    head: {
      titleTemplate: 'Joash Agesa - %s',
    },
  },
})
