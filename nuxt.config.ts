// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/global.css'],

  // needed for page transition in app.vue
  app: {
    pageTransition: {name: 'fade', mode: 'out-in'} //default mode is out-in
  },
})
