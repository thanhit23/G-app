import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app', 'components', 'containers'],
  },
  env: {
    TOGETHER_API_KEY: process.env.TOGETHER_API_KEY,
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
