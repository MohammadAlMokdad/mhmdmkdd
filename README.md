# Mohammad.exe - Cinematic Developer Portfolio

A production-ready, cinematic portfolio website for Mohammad Al-Mokdad, .NET Developer. Built with Next.js 14, Three.js, Framer Motion, and TailwindCSS.

## 🌟 Features

- **Cinematic Intro**: Animated terminal-style gateway sequence
- **3D Starfield Background**: Optimized Three.js particle system (800 particles)
- **Smooth Animations**: Framer Motion-powered scroll-based animations
- **Fully Responsive**: Mobile-first design, optimized for all devices
- **Performance Optimized**: Lazy loading, code splitting, minimal bundle size
- **SEO Ready**: Complete metadata, Open Graph, Twitter cards
- **Accessible**: Keyboard navigation, ARIA labels, semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## 📦 Project Structure

```
mohammad-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page
├── components/
│   ├── Gateway.tsx           # Intro terminal animation
│   ├── Starfield.tsx         # 3D starfield background
│   ├── Navigation.tsx        # Desktop/mobile navigation
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Projects.tsx          # Projects grid
│   ├── Skills.tsx            # Skills categories
│   ├── Experience.tsx        # Experience timeline
│   └── Contact.tsx           # Contact section
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Step 1: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 2: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Step 4: Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🎨 Customization

### Update Personal Information

Edit the following files to personalize the portfolio:

1. **Contact Info**: Update email, LinkedIn, GitHub links in:
   - `components/Hero.tsx`
   - `components/Contact.tsx`

2. **Projects**: Modify project data in `components/Projects.tsx`

3. **Experience**: Update work history in `components/Experience.tsx`

4. **Skills**: Adjust skill categories in `components/Skills.tsx`

### Theme Customization

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  background: "#0a0a0a",  // Main background
  primary: "#3B82F6",     // Primary accent (blue)
  accent: "#06B6D4",      // Secondary accent (cyan)
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## ⚡ Performance Optimizations

- **Lazy Loading**: Gateway and Starfield components are dynamically imported
- **Particle Limit**: Starfield limited to 800 particles for smooth performance
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Use Next.js Image component for images
- **CSS Purging**: TailwindCSS removes unused styles
- **Reduced Motion**: Respects user's motion preferences

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Accessible navigation

## 📄 License

This project is created for Mohammad Al-Mokdad. Feel free to use it as a template for your own portfolio.

## 👤 Author

**Mohammad Al-Mokdad**
- .NET Developer
- Backend Systems Engineer
- Beirut, Lebanon

---

Built with ❤️ using Next.js, Three.js, and Framer Motion