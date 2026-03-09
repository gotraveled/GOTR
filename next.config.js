/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
  env: {
    TRAVELPAYOUTS_PROJECT_ID: '17835',
    TRAVELPAYOUTS_API_TOKEN: '44ce7a2e2d88339ec9004b468ca801e9',
    TRAVELPAYOUTS_MARKER: '250882',
    SITE_URL: 'https://gotraveled.com',
    BOOKING_URL: 'https://book.gotraveled.com',
  },
};

module.exports = nextConfig;
