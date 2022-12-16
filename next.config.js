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
  },
};

module.exports = nextConfig;
