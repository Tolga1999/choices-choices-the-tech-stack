// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true}, // devtools for help
  css: ['~/assets/css/global.css'],

  // needed for page transition in app.vue
  app: {
    pageTransition: {name: 'fade', mode: 'out-in'} //default mode is out-in
  },

  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    }
  }
})
