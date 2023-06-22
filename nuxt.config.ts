// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Playfair+Display': [400, 500, 700],
      Lato: [100, 300],
      Inter: {
        wght: [100, 300, 400, 500, 600, 700],
        ital: [100, 300]
      },
    }
  },
})
