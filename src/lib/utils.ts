/**
 * Get asset path with basePath prefix for GitHub Pages
 * Only add basePath in production build
 */
export function getAssetPath(path: string): string {
  // Only add basePath for production builds
  const basePath = process.env.NODE_ENV === "production" ? "/test-nevel" : "";
  
  // Don't add basePath if it's already there
  if (path.startsWith("/test-nevel")) {
    return path;
  }
  
  return `${basePath}${path}`;
}
