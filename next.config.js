/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["geist"],
  // Ensure proper CSS handling
  compiler: {
    // Disable the styled-components transform for better compatibility
    styledComponents: false,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 