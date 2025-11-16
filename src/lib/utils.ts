/**
 * Get asset path with basePath prefix for GitHub Pages
 * basePath is handled by Next.js for <Link>, but NOT for <Image> in static export
 * So we need to manually add it
 */
export function getAssetPath(path: string): string {
  const basePath = "/test-nevel";
  // Don't add basePath if it's already there
  if (path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
}
