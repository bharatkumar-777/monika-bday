import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
} as NextConfig;

export default nextConfig;
