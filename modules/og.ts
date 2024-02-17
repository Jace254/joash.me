import { copyFile, cp } from 'node:fs/promises'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('close', async () => {
      await cp('public/fonts', '.vercel/output/functions/__nitro.func/public/fonts', { recursive: true })
    })
  },
})
