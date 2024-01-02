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
    "/user/": {
      redirect: "/",
    },
  },
  mongoose: {
    uri: "mongodb://127.0.0.1:27017/nuxt",
    modelsDir: "models",
  },
  runtimeConfig: {
    JWT_SECRET:
      "3442905344bfe124c8fde4d16411580f30113c0f321a5687f7aa8134a13162289ab1a24e887c076d88cb392e8d5f22eb524e49514f7eac85d497c84428586ecd",
    JWT_EXPIRATION_TIME: "15s",
    JWT_ACCESS_TOKEN_SECRET:
      "d88d90af4573b63aee42deb46dd8cbd5c8b0e389f8c2ce49d6ea1dd8b35ee722d83261b09497323051d032510dd6e067480ab85c323a0bbeda90eda1c017ae54",
    JWT_ACCESS_TOKEN_EXPIRATION_TIME: "30d",
  },
});
