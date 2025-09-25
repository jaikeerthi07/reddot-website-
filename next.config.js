/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
}

module.exports = nextConfig