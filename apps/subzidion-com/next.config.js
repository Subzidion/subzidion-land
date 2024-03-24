/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
