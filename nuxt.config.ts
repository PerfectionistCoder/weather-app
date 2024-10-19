// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  vite: {
    server: {
      open: "http://localhost:3000/",
    },
  },
});
