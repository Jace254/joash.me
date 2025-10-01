// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'radix-vue/nuxt',
    '@/modules/og',
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    build: {
      markdown: {
        rehypePlugins: {
          'rehype-external-links': {},
        },
        highlight: {
          theme: {
            default: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        },
        toc: {
          depth: 5,
          searchDepth: 5,
        },
      },
    },
  },
  app: {
    head: {
      titleTemplate: '%s',
    },
  },
  nitro: {
    preset: 'vercel',
  },
})
