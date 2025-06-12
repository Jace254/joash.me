import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'
import { useUrl } from '../../../composables/url'

export default defineEventHandler(async (event) => {
  const url = useUrl()
  const fonts = ['arial.ttf', 'arial_bold.ttf']
  try {
    // svg inspired from https://og-playground.vercel.app/
    const svg = await satori(
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '-.02em',
            fontWeight: 700,
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='400' viewBox='0 0 1600 400' fill='none'%3E%3Cg filter='url(%23filter0_n_2_3)'%3E%3Crect width='1600' height='400' rx='0' fill='url(%23paint0_linear_2_3)'/%3E%3Crect width='1600' height='400' rx='0' fill='%230B1924'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_n_2_3' x='0' y='0' width='1600' height='400' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5 2.5' stitchTiles='stitch' numOctaves='3' result='noise' seed='9425'/%3E%3CfeColorMatrix in='noise' type='luminanceToAlpha' result='alphaNoise'/%3E%3CfeComponentTransfer in='alphaNoise' result='coloredNoise1'%3E%3CfeFuncA type='discrete' tableValues='0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 '/%3E%3C/feComponentTransfer%3E%3CfeComposite operator='in' in2='shape' in='coloredNoise1' result='noise1Clipped'/%3E%3CfeFlood flood-color='rgba(44, 82, 15, 0.25)' result='color1Flood'/%3E%3CfeComposite operator='in' in2='noise1Clipped' in='color1Flood' result='color1'/%3E%3CfeMerge result='effect1_noise_2_3'%3E%3CfeMergeNode in='shape'/%3E%3CfeMergeNode in='color1'/%3E%3C/feMerge%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_2_3' x1='1504' y1='38' x2='752.446' y2='712.358' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%238B339D'/%3E%3Cstop offset='0.495192' stop-color='%23A12B2B'/%3E%3Cstop offset='1' stop-color='%23A1A43D'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          },
          children: [
            {
              type: 'img',
              props: {
                style: {
                  right: 42,
                  bottom: 42,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  width: '300px',
                },
                src: `${url}/banner.png`,
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  padding: '20px 50px',
                  margin: '0 42px 150px 42px',
                  fontSize: '64px',
                  width: 'auto',
                  marginTop: '120px',
                  maxWidth: 1200 - 48 * 2,
                  textAlign: 'center',
                  backgroundColor: '#2D2D2D',
                  borderRadius: '30px',
                  color: '#E5FF91',
                  lineHeight: 1.4,
                },
                children: 'Building For Comfort',
              },
            },
          ],
        },
      },
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Arial',
            // eslint-disable-next-line node/prefer-global/process
            data: readFileSync(join(process.cwd(), 'public/fonts', fonts[0])),
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Arial',
            // eslint-disable-next-line node/prefer-global/process
            data: readFileSync(join(process.cwd(), 'public/fonts', fonts[1])),
            weight: 700,
            style: 'normal',
          },
        ],
      },
    )

    // render to svg as image

    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width',
        value: 1200,
      },
      font: {
        fontFiles: fonts.map(i => join(resolve('.'), 'public/fonts', i)), // Load custom fonts.
        loadSystemFonts: false,
      },
    })

    const resolved = await Promise.all(
      resvg.imagesToResolve().map(async (url) => {
        const img = await fetch(url)
        const buffer = await img.arrayBuffer()
        return {
          url,
          // eslint-disable-next-line node/prefer-global/buffer
          buffer: Buffer.from(buffer),
        }
      }),
    )
    if (resolved.length > 0) {
      for (const result of resolved) {
        const { url, buffer } = result
        resvg.resolveImage(url, buffer)
      }
    }

    const renderData = resvg.render()
    const pngBuffer = renderData.asPng()

    event.res.setHeader('Cache-Control', 's-maxage=7200, stale-while-revalidate')
    return pngBuffer
  }
  catch (err) {
    return createError({ statusCode: 500, statusMessage: err instanceof Error ? err.message : 'Internal Server Error' })
  }
})
