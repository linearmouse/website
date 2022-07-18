const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  redirects: async () => [
    {
      source: '/zh-cn/',
      destination: '/zh-CN/',
      permanent: true
    }
  ]
}

module.exports = nextTranslate(nextConfig)
