# AITT Website - Deployment Checklist

**Prepared for G5 deployment to GitHub Pages**

## ✅ Completed Cleanup (CK2)

1. **Figma Signatures Removed:**
   - ✅ `package.json`: Changed from `@figma/my-make-file` → `aitt-website`
   - ✅ `Hero.tsx`: Changed from `figma:asset/...` → `../../assets/logo-hero.png`
   - ✅ `Header.tsx`: Changed from `figma:asset/...` → `../../assets/orb-icon.png`
   - ✅ `README.md`: Removed Figma project link, added AITT description
   - ✅ `ATTRIBUTIONS.md`: Removed Figma/Unsplash references

2. **Unused Code Identified:**
   - ⚠️ `src/app/components/figma/ImageWithFallback.tsx` - Not imported anywhere (safe to delete)

---

## 📋 G5 Deployment Tasks

### 1. Add Missing Assets
Before deployment, add these images to `/src/assets/`:
- `logo-hero.png` - Main hero logo
- `orb-icon.png` - Header icon

**Source:** Check existing logo files from:
- `/home/aitt-terminal/Pictures/tier 1/` (orb animations)
- `/home/aitt-terminal/AITT-youtube-terminal/` (logo generators)

### 2. Build & Test
```bash
cd "/home/aitt-terminal/CK2 youtube, GUI engine/Websites versions/aittwebsite full code"
npm install
npm run dev    # Test locally
npm run build  # Build for production
```

### 3. GitHub Repository Setup
Create new repo: `aitt-website` or similar
```bash
git init
git add .
git commit -m "Initial AITT website deployment"
git remote add origin <GITHUB_URL>
git push -u origin main
```

### 4. GitHub Pages Configuration
- Go to repo Settings → Pages
- Source: Deploy from branch `main` (or `gh-pages`)
- Folder: `/` (root) or `/dist` depending on build output
- Custom domain (optional): `ai-tradingterminal.com`

### 5. Vite Config for GitHub Pages
Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/aitt-website/',  // Replace with repo name
  // ... rest of config
})
```

---

## 🎨 Design Notes

**Color Palette:**
- Background: `#0B0F14` (dark)
- Purple accent: `#3A1C5A`, `#6A3DBE`
- Text: `#E6E9EF` (light), `#B6BDC9` (muted)
- Accent: `#8B6FD8` (purple highlight)

**Sections:**
- Hero (with logo + diagonal overlay)
- System Overview
- Architecture (with diagram SVG)
- Philosophy
- How It Works

**Responsive:** Mobile-friendly with Tailwind CSS

---

## ✅ Ready for Deployment

All Figma signatures removed. Website code is clean and ready for GitHub!

**Next:** G5 handles GitHub repo creation + Pages deployment 🚀
