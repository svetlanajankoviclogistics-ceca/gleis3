import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 2. Uklanjanje console.log u produkciji
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // 3. Optimizacija CSS-a
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
