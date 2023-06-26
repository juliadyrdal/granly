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
      pages: {
        photoGallery: {
          title: "Photo Gallery",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor facilisis tristique. In hac habitasse platea dictumst. In diam est, aliquet a purus id, ultrices dictum lorem. Pellentesque eu purus eu nisl sagittis blandit.",
        },
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
      pages: {
        photoGallery: {
          title: "Bildegalleri",
          body: "Vladimir Vernadskij (1863–1945) var en russisk, ukrainsk og sovjetisk mineralog og geokjemiker. Han regnes som en av grunnleggerne av geokjemi, biogeokjemi og radiometrisk datering.",
        },
      },
    },
  },
}));
