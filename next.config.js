/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    strictNullChecks: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    ppr: true,
  },
}

module.exports = nextConfig;