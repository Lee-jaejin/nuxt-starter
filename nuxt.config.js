module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'ko',
          iso: 'ko-KR',
          name: '한국어',
          file: 'ko.js'
        },
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          file: 'en.js'
        },
        {
          code: 'cn',
          iso: 'zh-CN',
          name: '简体中文',
          file: 'cn.js'
        }
      ],
      defaultLocale: 'ko',
      lazy: true,
      langDir: 'languages/',
      vuex: {
        moduleName: 'i18n',
        syncLocale: true,
        syncMessages: true,
        syncRouteParams: true
      }
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

