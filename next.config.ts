import i18nConfig from './i18n'

const nextConfig: import('next').NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true
  },
  i18n: i18nConfig
}

export default nextConfig
