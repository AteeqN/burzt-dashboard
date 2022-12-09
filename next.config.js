/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["avatars.slack-edge.com"],
  },
  env: {
    API_URL: process.env.API_BASE_URL,
    PRICE_ID: process.env.PRICE_ID,
    CS_ID: process.env.CHECKOUT_SESSION_ID,
  },
};

module.exports = nextConfig;
