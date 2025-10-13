import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: '**/blog/**.md',
      },
      schema: z.object({
        title:z.string(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        date: z.date(),
        redirect: z.string().optional(),
        inperson: z.boolean().optional(),
        recording: z.boolean().optional(),
        video: z.boolean().optional(),
        radio: z.boolean().optional(),
        duration: z.string().optional(),
        platform: z.string().optional(),
        place: z.string().optional(),
      })
    }),
    home: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['**/blog/**'],
      },
    }),
  },
})