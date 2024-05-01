/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.asos-media.com" }],
  },
};

module.exports = nextConfig;
