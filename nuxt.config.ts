// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  swiper: {
    // Swiper options
    //----------------------
    prefix: "Swiper",
    // styleLang: 'css',
    modules: ["navigation", "pagination", "a11y", "virtual"], // all modules are imported by default
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Playfair+Display": [400, 500, 700],
      Lato: [100, 300],
      Inter: {
        wght: [100, 300, 400, 500, 600, 700],
        ital: [100, 300],
      },
    },
  },
});
