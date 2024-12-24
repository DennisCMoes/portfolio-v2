const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'commondatastorage.googleapis.com',
    ],
  },
}

module.exports = withMDX(nextConfig)
