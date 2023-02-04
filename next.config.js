const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextTranslate(nextConfig)
