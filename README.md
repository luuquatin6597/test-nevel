# Xiaomi E-Commerce Website

A modern, responsive e-commerce website built with Next.js 16, TypeScript, and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4)
![pnpm](https://img.shields.io/badge/pnpm-10.8.1-F69220)

## 🚀 Features

### 🎨 Design System

- **Custom Color Palette**: Primary, Secondary, Neutral color scales (100-900)
- **Design Tokens**: Dimension system (dm-2 to dm-1000)
- **Typography**: Inter font with Black Italic style
- **Semantic Tokens**: Reusable text and background colors
- **Responsive Design**: Mobile-first approach with breakpoints

### 📱 Components

#### Layout Components

- **Header**: Responsive navigation with mobile menu (burger button)
- **Footer**: Multi-column links, payment methods, warranty info
- **Container**: Responsive padding (20px mobile, auto desktop)

#### UI Components

- **Button**: Primary/Secondary variants, Large/Small sizes
- **Title**: Normal/Highlight types, with optional navigation arrows
- **Modal**: Popup with backdrop, close button, and animations
- **TableHead**: Reusable table header with dynamic columns
- **TableColumn**: Product item with gradient backgrounds for top 3

#### Section Components

- **Slider**: Hero banner with fade animations, auto-play, conditional controls
- **TopSelling**: Product ranking table with scrollable list and gradients
- **TopProducts**: Horizontal scrollable product gallery
- **BannerSection**: Responsive banners (Large/Small types)

### ✨ Animations

- **Fade In**: Page load animation (0.5s)
- **Fade In Image**: Image reveal (0.8s)
- **Hover Effects**: Scale, color transitions
- **Burger Menu**: Animated X transformation

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind config, animations, scrollbar
│   ├── layout.tsx            # Root layout with Header/Footer
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer with links
│   ├── icons/                # SVG icon components
│   ├── modals/
│   │   └── WelcomeModal.tsx  # Welcome popup
│   ├── sections/
│   │   ├── BannerSection.tsx
│   │   ├── Slider.tsx
│   │   ├── TopProducts.tsx
│   │   └── TopSelling.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── ProductItem.tsx
│       ├── TableColumn.tsx
│       ├── TableHead.tsx
│       └── Title.tsx
├── types/
│   └── product.ts            # TypeScript interfaces
└── utils/
    └── format.ts             # Number/currency formatters
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.3](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager**: [pnpm 10.8.1](https://pnpm.io/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## 📦 Installation

```bash
# Install dependencies with pnpm
pnpm install
```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🏗️ Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 🎨 Design System

### Color Scales

**Primary** (Yellow/Gold):

- 100: #FFF3D5 (Lightest)
- 500: #FFC700 (Base)
- 900: #322811 (Darkest)

**Secondary** (Gray):

- 100: #D7D7DA
- 500: #454852
- 900: #131415

**Neutral** (White to Black):

- 0: #FFFFFF (White)
- 500: #5D5D5D
- 900: #1F1F1F (Near Black)

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1168px
- **2xl**: 1168px

## 📝 Component Usage Examples

### Button Component

```tsx
<Button variant="primary" size="large">
  SIGN UP
</Button>

<Button variant="secondary" size="small" disabled>
  LOG IN
</Button>
```

### Modal Component

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="XIAOMI TV Max Series"
  subtitle="View to the max"
  image="/images/banner.png"
  buttonText="SEE MORE"
/>
```

### Title Component

```tsx
<Title
  text="TOP PRODUCTS"
  type="highlight"
  showArrows={true}
  onNext={handleNext}
  onPrevious={handlePrev}
/>
```

## 📱 Responsive Behavior

- **Mobile (<1024px)**:

  - Burger menu navigation
  - Single column layouts
  - Horizontal scrolling for products
  - 20px container padding

- **Desktop (≥1024px)**:
  - Full navigation menu
  - Multi-column layouts
  - Grid-based product displays

## 🚀 Deployment

### Deploy to GitHub Pages

This project is configured with GitHub Actions for automatic deployment to GitHub Pages.

#### Setup Steps:

1. **Enable GitHub Pages**:

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select:
     - Source: **GitHub Actions**

2. **Push to main branch**:

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment**:
   - GitHub Actions will automatically build and deploy
   - Check the "Actions" tab to monitor progress
   - Once complete, your site will be live at: `https://luuquatin6597.github.io/test-nevel/`

#### Manual Deployment:

You can also trigger deployment manually from the "Actions" tab by running the workflow.

### Deploy on Vercel

Alternatively, you can deploy to [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
