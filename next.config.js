/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [], // Add the domains from where you want to load images
    path: '/_next/image',
    loader: 'default',
    formats: ['image/avif'],
  },
};

module.exports = nextConfig;
