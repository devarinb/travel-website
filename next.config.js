/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the line below if you want to use Image Optimization in server mode
  output: 'export',

  // Add the line below if you want to disable Image Optimization
  images: { unoptimized: true },
};

module.exports = nextConfig;
