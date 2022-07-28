/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://images.balla.dev/upload/',
  },
}

module.exports = nextConfig
