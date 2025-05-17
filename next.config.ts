import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: import('next').NextConfig = {
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

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
