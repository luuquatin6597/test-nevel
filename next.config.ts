import type { NextConfig } from "next";

// Detect deployment platform
// CRITICAL: Vercel sets VERCEL=1, GitHub Actions sets GITHUB_ACTIONS=true
// Priority: Vercel > GitHub Actions (nếu cả 2 đều có, ưu tiên Vercel)
const isVercel = process.env.VERCEL === "1";
const isGitHubPages =
  !isVercel &&
  (process.env.GITHUB_ACTIONS === "true" ||
    process.env.DEPLOY_TARGET === "github-pages");

const nextConfig: NextConfig = {
  // GitHub Pages: static export với basePath
  ...(isGitHubPages && {
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: "/test-nevel",
    assetPrefix: "/test-nevel/",
    trailingSlash: true,
  }),

  // Vercel: KHÔNG có output export, full Next.js features
  ...(isVercel && {
    // Không set output: "export" - để Vercel dùng full Next.js
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  }),

  // Local dev: default config
  ...(!isGitHubPages &&
    !isVercel && {
      images: {
        formats: ["image/avif", "image/webp"],
      },
    }),
};

export default nextConfig;
