# Deployment Guide - Mohammad.exe Portfolio

## 🚀 Deploying to Vercel (Recommended)

### Method 1: Quick Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mohammad.exe portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mohammad-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Wait ~2 minutes for deployment

3. **Your Portfolio is Live!**
   - Vercel will provide a URL like: `https://mohammad-portfolio.vercel.app`
   - You can add a custom domain in Vercel settings

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project? No
   - Project name: mohammad-portfolio
   - Directory: ./
   - Override settings? No

## 🌐 Deploying to Netlify

### Method 1: Netlify Dashboard

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `.next` folder
   - Or connect to GitHub for automatic deployments

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=.next
   ```

## 📦 Deploying to Other Platforms

### AWS Amplify
1. Push code to GitHub
2. Go to [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify)
3. Click "New App" → "Host web app"
4. Connect to GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Base directory: `/`
   - Start command: `npm start`
6. Click "Save and deploy"

### Railway
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Railway will auto-detect Next.js settings
5. Click "Deploy"

### Render
1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect to GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Start Command: `npm start`
5. Click "Create Web Service"

## ⚙️ Pre-Deployment Checklist

Before deploying, make sure to:

### 1. Update Placeholder Content
- [ ] Replace `mohammad@example.com` with real email
- [ ] Update LinkedIn URL in `components/Contact.tsx`
- [ ] Update GitHub URL in `components/Hero.tsx` and `components/Contact.tsx`
- [ ] Update project GitHub links in `components/Projects.tsx`
- [ ] Add any additional projects or skills

### 2. Test Locally
- [ ] Run `npm run dev` and test all features
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Test all navigation links
- [ ] Verify animations work smoothly
- [ ] Test contact links

### 3. Build Test
- [ ] Run `npm run build`
- [ ] Check for build errors
- [ ] Run `npm start` to test production build
- [ ] Verify performance in browser DevTools

### 4. Environment Variables (if needed)
- [ ] Add any required environment variables
- [ ] Check `.env.local` for sensitive data

## 🔍 Post-Deployment Checklist

After deploying:

- [ ] Test the live URL
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test contact links
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check for console errors
- [ ] Verify meta tags with [metatags.io](https://metatags.io)
- [ ] Test social sharing (Twitter, LinkedIn, Facebook)

## 📊 Performance Optimization Tips

To achieve Lighthouse 90+ score:

1. **Images**: Use Next.js Image component for any images you add
2. **Fonts**: Already optimized with next/font/google
3. **Code Splitting**: Already configured with dynamic imports
4. **CSS**: TailwindCSS purges unused styles automatically
5. **Analytics**: Add Vercel Analytics for performance monitoring

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔧 Custom Domain Setup

### Vercel
1. Go to project settings in Vercel
2. Click "Domains"
3. Add your domain (e.g., `mohammad.com`)
4. Update DNS records as instructed
5. Wait for SSL certificate (automatically provided)

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Enable HTTPS (automatic)

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (should be 18.x+)
- Delete `node_modules` and `.next` folders, then run `npm install`
- Check for TypeScript errors

### Deployment Stalls
- Check build logs in platform dashboard
- Ensure all dependencies are in `package.json`
- Verify `.gitignore` isn't excluding necessary files

### Performance Issues
- Run `npm run build` and check bundle size
- Use Next.js Image component for images
- Limit Three.js particles (already set to 800)
- Enable compression in `next.config.js`

### 404 Errors
- Check page routing structure
- Verify `app/page.tsx` exists
- Check file names (case-sensitive on some platforms)

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## ✨ Success!

Once deployed, your portfolio will be:
- ✅ Live on the web
- ✅ Accessible via custom domain
- ✅ Optimized for performance
- ✅ SEO-ready for recruiters
- ✅ Fully responsive

Congratulations! 🎉