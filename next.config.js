let { CDN_BASE_URL, BASE_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  staticPageGenerationTimeout: 90,
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: true,
  distDir: 'build',
  experimental: {
    appDir: false,
    // runtime: 'experimental-edge',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? CDN_BASE_URL : undefined,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
