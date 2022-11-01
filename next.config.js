/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath:'/demo/qatar_licence',
    output: 'standalone',
    images: {
      domains: ['https://aiclub.uit.edu.vn'],
    },
  }
  
  module.exports = nextConfig
  