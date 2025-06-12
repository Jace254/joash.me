import type { ComputedRef } from 'vue'

export function useCustomHead(title?: string | ComputedRef<string>, description?: string | ComputedRef<string>, image?: string | ComputedRef<string>) {
  useHead({
    title,
    meta: [
      {
        name: 'description',
        content:
          description ?? 'Building for comfort',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@JoashMacenton' },
      { name: 'twitter:domain', content: 'joash.me' },
      { name: 'twitter:image', content: image ?? 'https://www.joash.me/og' },
      { name: 'twitter:url', content: 'https://www.joash.me/' },
      { name: 'twitter:description', content: description ?? 'Building for comfort' },
      { name: 'twitter:title', content: title ?? 'Joash Agesa | Building for comfort' },
      { property: 'og:title', content: title ?? 'Joash Agesa | Building for comfort' },
      { property: 'og:url', content: 'https://www.joash.me/' },
      { property: 'og:image', content: 'https://www.joash.me/og' },
      { property: 'og:image:secure_url', content: 'https://www.joash.me/og' },
      { property: 'og:image:type', content: 'image/png' },
      {
        property: 'og:description',
        content:
          description ?? 'Building for comfort',
      },
    ],
  })
}
