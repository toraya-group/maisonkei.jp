const gtmID = 'GTM-5K63PX6'
const gtmHeadTag = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmID}');`
const gtmBodyTag = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Maison KEI',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { "http-equiv": 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
      { name: 'keywords', content: 'Maison KEI, メゾンケイ, とらや, 虎屋, 小林圭, Kei Kobayashi' }
    ],
    script: [
      { src: '//typesquare.com/3/tsst/script/ja/typesquare.js?rU8A2bw0hwQ%3D', body: true, defer: '' },
      { src: 'https://code.jquery.com/jquery-1.12.4.min.js', defer: '' },
      { src: '/js/common.js', body: true, defer: '' },
      { hid: 'gtmHead', innerHTML: gtmHeadTag }
    ],
    noscript: [
      { hid: 'gtmBody', innerHTML: gtmBodyTag, pbody: true }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtmHead': ['innerHTML'],
      'gtmBody': ['innerHTML']
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&display=swap', body: true },
      { rel: 'stylesheet', href: '//unpkg.com/swiper/swiper-bundle.min.css', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
