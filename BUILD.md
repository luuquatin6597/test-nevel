# Build & Deployment Guide

## 🎯 Platform-specific builds

### 1. GitHub Pages (Static Export)

**Automatic via GitHub Actions:**

```bash
git push origin main
# GitHub Actions tự động build và deploy
```

**Manual build:**

```bash
# Set environment variable
export DEPLOY_TARGET=github-pages

# Build
pnpm build

# Output: ./out folder (static HTML/CSS/JS)
```

**Cấu hình:**

- `output: "export"` - static export
- `basePath: "/test-nevel"` - repo path
- `images: { unoptimized: true }` - no image optimization

---

### 2. Vercel (Full Next.js)

**Automatic deployment:**

1. Push code lên GitHub
2. Vercel tự động detect và deploy
3. Không cần config gì thêm

**Cấu hình:**

- Full Next.js features
- Image optimization (WebP/AVIF)
- ISR, API routes, Server Components

---

### 3. Local Development

```bash
pnpm dev
```

**Cấu hình:**

- Không có basePath
- Image optimization enabled
- Hot reload

---

## 🔧 Troubleshooting

### Ảnh không hiển thị trên GitHub Pages?

**Nguyên nhân:** basePath không đúng

**Fix:**

```typescript
// next.config.ts sẽ tự động detect
// Đảm bảo GITHUB_ACTIONS=true hoặc DEPLOY_TARGET=github-pages khi build
```

### Lỗi 404 trên Vercel?

**Nguyên nhân:** Config có basePath cho GitHub Pages

**Fix:**

```bash
# Vercel tự động detect, không cần basePath
# Config hiện tại đã handle tự động
```

---

## 📊 Performance Tips

### GitHub Pages:

- ✅ Nén ảnh trước khi commit (< 100 KB/ảnh)
- ✅ Convert sang WebP manually
- ✅ Tối ưu bundle size

### Vercel:

- ✅ Dùng `priority` cho hero images
- ✅ Dùng `loading="lazy"` cho off-screen images
- ✅ Set `sizes` prop cho responsive images
- ✅ Vercel tự động optimize (WebP/AVIF)

---

## 🚀 URLs

- **GitHub Pages:** https://luuquatin6597.github.io/test-nevel/
- **Vercel:** https://test-nevel.vercel.app/
- **Local:** http://localhost:3000/
