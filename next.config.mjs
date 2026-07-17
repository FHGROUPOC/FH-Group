/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'], // Add your allowed hostnames here
    unoptimized: true
  },
};

export default nextConfig;
