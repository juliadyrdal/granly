export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      navItems: {
        photoGallery: "Photo gallery",
        features: "Features",
        details: "Details of sale",
        contact: "Contact",
      },
    },
    no: {
      welcome: "Velkommen",
      navItems: {
        photoGallery: "Bildegalleri",
        features: "Egenskaper",
        details: "Salgsdetaljer",
        contact: "Kontakt",
      },
    },
  },
}));
