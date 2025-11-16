import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/test-nevel" : "",
  assetPrefix: isProd ? "/test-nevel" : "",
};

export default nextConfig;
