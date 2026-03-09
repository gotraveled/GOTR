/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'tp.media', 'search.jetradar.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'tp.media',
      },
      {
        protocol: 'https',
        hostname: '**.jetradar.com',
      },
    ],
  },
  env: {
    TRAVELPAYOUTS_PROJECT_ID: '17835',
    TRAVELPAYOUTS_API_TOKEN: '44ce7a2e2d88339ec9004b468ca801e9',
    TRAVELPAYOUTS_MARKER: '250882',
    NEXT_PUBLIC_SITE_URL: 'https://gotraveled.com',
    NEXT_PUBLIC_BOOKING_URL: 'https://book.gotraveled.com',
  },
  async headers() {
    return [
      {
        source: '/book/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://book.gotraveled.com https://*.travelpayouts.com https://*.jetradar.com https://*.aviasales.com https://*.kiwitaxi.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
