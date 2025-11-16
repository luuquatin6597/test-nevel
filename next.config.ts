import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/test-nevel",
  assetPrefix: "/test-nevel/",
  trailingSlash: true,
};

export default nextConfig;
