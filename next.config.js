const { CDN_BASE_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: true,
  distDir: 'build', 
  experimental: {
    appDir: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? CDN_BASE_URL : undefined,
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig
