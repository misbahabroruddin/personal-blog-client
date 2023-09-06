/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:5000/public/'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
