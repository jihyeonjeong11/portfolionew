/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: {
    resolve: {
      fallback: {
        util: require.resolve("util/")
      }
  }
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

}





module.exports = nextConfig
