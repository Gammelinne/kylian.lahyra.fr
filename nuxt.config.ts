export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  primevue: {
    importTheme: { from: "@/theme" },
    options: {
      ripple: true,
    },
  },

  css: ["primeicons/primeicons.css"],
  compatibilityDate: "2024-07-14",
});