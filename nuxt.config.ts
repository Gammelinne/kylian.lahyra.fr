// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@nuxtjs/i18n", "@nuxt/fonts"],
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
});