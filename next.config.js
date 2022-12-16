let { CDN_BASE_URL, BASE_URL } = process.env

if (CDN_BASE_URL === undefined) {
  CDN_BASE_URL = BASE_URL
}

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
    appDir: true,
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

if (process.env.NODE_ENV === 'production') {
  nextConfig.amp = {
    canonicalBase: BASE_URL,
  }

  nextConfig.images.domains = [
    new URL(BASE_URL).hostname,
    new URL(CDN_BASE_URL).hostname,
  ]
}

module.exports = nextConfig
