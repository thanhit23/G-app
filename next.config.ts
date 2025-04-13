import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app', 'components', 'containers'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
