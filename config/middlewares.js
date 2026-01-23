module.exports = ({ env }) => [
  'global::no-admin-cache',
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("AWS_ENDPOINT"),
            env("AWS_CDN_URL", "https://pub-515f8a574da64a9b814056de131b7137.r2.dev"),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("AWS_ENDPOINT"),
            env("AWS_CDN_URL", "https://pub-515f8a574da64a9b814056de131b7137.r2.dev"),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
