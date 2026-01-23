const config = {
  locales: [
    // 'ar',
    // 'fr',
    // ... (keeping commented locales if desired, or removing them for brevity)
  ],
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to LAFS Backend",
      "Auth.form.welcome.subtitle": "Log in to your account",
      "app.components.LeftMenu.navbrand.title": "LAFS Dashboard",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
