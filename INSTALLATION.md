# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Node.js

Download and install Node.js (version 18.x or higher) from:
https://nodejs.org/

### 2. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to:
**http://localhost:3000**

---

## 📝 What You'll See

1. **Terminal Gateway**: Animated intro sequence (press ENTER or tap to continue)
2. **3D Starfield**: Rotating particle background
3. **Hero Section**: Name, role, and call-to-action buttons
4. **About Section**: Professional summary
5. **Projects Section**: 6 project cards with tech stacks
6. **Skills Section**: 4 skill categories with animated badges
7. **Experience Section**: Work history at Octopus/Codewave
8. **Contact Section**: Email, LinkedIn, GitHub links

---

## 🔧 Common Issues

### "npm is not recognized"
**Solution**: Install Node.js from https://nodejs.org/

### Module not found errors
**Solution**: Run `npm install` to install all dependencies

### TypeScript errors in editor
**Solution**: These are expected until you run `npm install` - they will disappear once dependencies are installed

### Port 3000 already in use
**Solution**: The dev server will automatically use port 3001, 3002, etc.

---

## 🎯 Next Steps

1. **Update Contact Information**:
   - Edit `components/Hero.tsx` (lines 82-104)
   - Edit `components/Contact.tsx` (lines 8-28)
   - Replace placeholder emails and links with your actual details

2. **Update Projects**:
   - Edit `components/Projects.tsx` (lines 8-52)
   - Update GitHub links and project descriptions

3. **Update Experience**:
   - Edit `components/Experience.tsx` (lines 8-25)
   - Add or modify work experience entries

4. **Deploy to Vercel**:
   - Push code to GitHub
   - Import to Vercel
   - Deploy with one click

---

## 📱 Testing on Mobile

1. Run `npm run dev`
2. Open your phone's browser
3. Enter your computer's IP address (e.g., `http://192.168.1.X:3000`)
4. Or use browser DevTools (F12) → Toggle Device Toolbar

---

## 🚢 Production Build

To create an optimized production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm start
```

---

## 💡 Tips

- The project uses **lazy loading** for 3D components to improve performance
- All animations respect the `prefers-reduced-motion` setting
- The starfield is limited to **800 particles** for optimal performance
- Code is already split and optimized by Next.js

---

Need help? Check the full [README.md](README.md) for detailed documentation.