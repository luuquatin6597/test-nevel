/**
 * Get asset path with basePath prefix for GitHub Pages
 * In development, basePath is empty
 * In production, it's set via next.config.ts
 */
export function getAssetPath(path: string): string {
  // The basePath from next.config.ts is automatically handled by Next.js
  // We just return the path as-is
  return path;
}
