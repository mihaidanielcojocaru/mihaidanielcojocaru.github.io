const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
}

module.exports = nextConfig
