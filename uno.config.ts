import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import extractorMdc from '@unocss/extractor-mdc'
import presetShadcn from './preset.shadcn'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'line-shine': 'bg-[#858585] dark:bg-[#7e7e7e]',
    'line-settle': 'bg-[#e8e8e8] dark:bg-[#2e2e2e]',
    'bg-active': 'bg-gray:10',
    'bg-faded': 'bg-gray:10',
    'bg-base': 'bg-background',
    'animate-accordion-up': 'accordion-up',
    'animate-accordion-down': 'accordion-down',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        mono: 'Quicksand',
      },
    }),
    presetTypography(),
    presetShadcn(),
  ],
  extractors: [
    extractorMdc(),
  ],
  content: {
    filesystem: [
      './content/**/*.md',
    ],
    pipeline: {
      include: [/\.ts/, /\.vue$/, /\.vue\?vue/],
    },
  },
  transformers: [
    transformerDirectives(),
  ],
})
