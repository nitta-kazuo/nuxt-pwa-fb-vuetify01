const pkg = require('./package')

module.exports = {
  //mode: 'spa',
  mode: 'universal',
  generate: { fallback: true },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '~/modules/typescript.js'
  ],

  /*
  ** route configuration
  */
  router: {
    base: '/'
  },

  manifest: {
    name: 'nuxt-pwa-fb',
    lang: 'ja',
    short_name: 'nextpwa',
    title: 'nuxt-pwa-fb サンプル',
    'og:title': 'nuxt-pwa-fb サンプル',
    description: 'nuxt-pwa-fb サンプルです',
    'og:description': 'nuxt-pwa-fb サンプルです',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: '/',
    icons: [
      {
        src: 'icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  //開発環境でもPWAできるように
  workbox: {
    dev: true,
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        // APIから取得した結果
        //urlPattern: 'https://google.co.jp/.*',
        //handler: 'cacheFirst',
        //method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24
          }
        }
      }
    ]
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      //if (process.server && process.browser) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
