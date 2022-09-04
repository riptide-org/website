export default {
  head: {
    title: 'Riptide',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  render: {
    csp: true
  },

  components: true,

  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
  ],

  axios: {
    baseURL: '/' // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    },
    browserBaseURL: process.env.BROWSER_BASE_URL
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.SSR_BASE_URL
    }
  }
}
