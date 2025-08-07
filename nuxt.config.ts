// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/storybook"],

  css: ["./css/main.css"],

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        erasableSyntaxOnly: true,
        verbatimModuleSyntax: false,
      },
    },
  },

  compatibilityDate: "2025-07-16",
});
