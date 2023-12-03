// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/ui", "nuxt-mongoose"],
  ui: {
    global: true,
  },

  routeRules: {
    '/auth/': {
      redirect: '/auth/signin'
    },
    '/user/': {
      redirect: '/'
    },
  },
  mongoose: {
    uri: "mongodb://127.0.0.1:27017/nuxt",
    modelsDir: "models",
  },
});