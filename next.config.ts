import type { NextConfig } from "next";

// Detect deployment platform
// GitHub Pages: khi có GITHUB_ACTIONS hoặc build cho GitHub Pages
// Vercel: khi có VERCEL environment variable
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "github-pages";
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  // GitHub Pages: static export
  ...(isGitHubPages && {
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: "/test-nevel",
    assetPrefix: "/test-nevel/",
    trailingSlash: true,
  }),

  // Vercel: full Next.js features với Image optimization
  ...(isVercel && {
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  }),

  // Local dev hoặc platforms khác: default config
  ...(!isGitHubPages && !isVercel && {
    images: {
      formats: ["image/avif", "image/webp"],
    },
  }),
};

export default nextConfig;
