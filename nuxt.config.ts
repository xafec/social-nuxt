// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/ui", "nuxt-mongoose"],

  routeRules: {
    "/auth/": {
      redirect: "/auth/signin",
    },
    "/api/**": { cors: true },
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: "models",
  },
  runtimeConfig: {
    JWT_SECRET:
      "f5b48efbad009dd6ffe01e2d2d43ce6e67ec8e6a3e94c1a2b8ff4907319ec210f097a0e6ec1fb24cc0498a926fd0b15cc5171b3d92a231bbcfd65f4aca7c33c5",
    JWT_EXPIRATION_TIME: "15s",
    JWT_ACCESS_TOKEN_SECRET:
      "aa2fcec5e10cb54af588e60709abcaa38f874c15cd92ade80f82d226199573736b347269f0822a11662dd50e7f4c9343667d3b7a500e4698dd5c624e9796220a",
    JWT_ACCESS_TOKEN_EXPIRATION_TIME: "30d",
  },
});
