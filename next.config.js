const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/zh-cn/',
        destination: '/zh-CN/',
        permanent: true,
        locale: false
      }
    ]
  }
}

module.exports = nextTranslate(nextConfig)
