/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ enables static export
  images: {
    domains: ['teamstitchpros.com'],
  },
  experimental: {
    appDir: true, // ✅ keep your app/ directory enabled
  },
};

export default nextConfig;
