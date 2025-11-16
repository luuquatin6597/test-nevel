import type { NextConfig } from "next";

// Use basePath for GitHub Pages deployment
// In development: run with empty basePath
// In production/build: use /test-nevel
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Always use basePath for builds, empty for dev server
  basePath: isProduction ? "/test-nevel" : "",
  assetPrefix: isProduction ? "/test-nevel" : "",
};

export default nextConfig;
