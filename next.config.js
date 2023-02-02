const nextTranslate = require('next-translate')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const runtimeDotenv = nextRuntimeDotenv({
  public: ['CLUSTER_NAME']
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = runtimeDotenv(nextTranslate(nextConfig))
