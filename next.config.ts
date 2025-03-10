import { NextConfig } from 'next';

// next.config.ts


const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  i18n: {
    locales: ['en', 'sw'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
