import type { ComputedRef } from 'vue'

export function useCustomHead(title?: string | ComputedRef<string>, description?: string | ComputedRef<string>, image?: string | ComputedRef<string>) {
  useHead({
    title,
    meta: [
      {
        name: 'description',
        content:
          description ?? 'Joash Agesa\'s personal webiste',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@JoashMacenton' },
      { name: 'twitter:title', content: title ?? 'Joash.me | Surronded by someone\'s life\'s work' },
      { property: 'og:title', content: title ?? 'Joash.me | Surronded by someone\'s life\'s work' },
      { property: 'og:url', content: 'https://joash.me/' },
      { property: 'og:image', content: image ?? 'https://joash.me/og' },
      { property: 'og:image:secure_url', content: image ?? 'https://joash.me/og' },
      { property: 'og:image:type', content: 'image/png' },
      {
        property: 'og:description',
        content:
          description ?? 'Joash Agesa\'s personal webiste',
      },
    ],
  })
}
