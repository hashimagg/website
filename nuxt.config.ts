export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hashima Islands 端島 — DayZ Map',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1'
        },
        {
          name: 'format-detection', content: 'telephone=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), an abandoned island off Nagasaki.'
        },
        {
          hid: 'og:type', property: 'og:type', content: 'website'
        },
        {
          hid: 'og:title', property: 'og:title', content: 'Hashima Islands 端島 — DayZ Map'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), an abandoned island off Nagasaki.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://hashima.gg/share.png'
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://hashima.gg'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title', name: 'twitter:title', content: 'Hashima Islands 端島 — DayZ Map'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), an abandoned island off Nagasaki.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://hashima.gg/share.png'
        },
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
      bodyAttrs: {
        class: 'bg-zinc-900 font-sans pattern select-none'
      }
    }
  },
  css: [
    '~/assets/css/application.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
