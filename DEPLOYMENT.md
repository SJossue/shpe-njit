# SHPE NJIT Website Deployment Guide

This guide will help you deploy your SHPE NJIT website to Vercel for free!

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free - sign up with GitHub)
2. [Git](https://git-scm.com/) installed on your computer
3. Your project pushed to GitHub

---

## Option 1: Deploy via Vercel Website (Easiest)

### Step 1: Push to GitHub
```bash
# If you haven't already, initialize git and push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your `shpe-njit` repository from GitHub
4. Vercel will automatically detect it's a Create React App
5. Click "Deploy"
6. Done! Your site will be live in ~2 minutes

**Your site will be at:** `https://shpe-njit.vercel.app` (or similar)

---

## Option 2: Deploy via Command Line

### Step 1: Login to Vercel
```bash
npx vercel login
```
Follow the prompts to authenticate.

### Step 2: Deploy Preview (Test Deployment)
```bash
npm run deploy:preview
```
This creates a preview deployment for testing.

### Step 3: Deploy to Production
```bash
npm run deploy
```
This deploys to production!

---

## Custom Domain Setup (Optional)

### If you want to use `shpenjit.org` or another domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your DNS settings
5. Wait for DNS to propagate (can take up to 48 hours)

---

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch to production
- Create preview deployments for pull requests
- Run your build and tests

---

## Environment Variables (If Needed Later)

If you need to add API keys or secrets:

1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add variables like `REACT_APP_API_KEY`
3. Redeploy to apply changes

---

## Updating Your Website

Once deployed, updating is simple:

```bash
# Make your changes
git add .
git commit -m "Update website content"
git push origin main
```

Vercel will automatically rebuild and deploy!

---

## Useful Commands

```bash
# Start development server
npm start

# Build for production (test locally)
npm run build

# Deploy preview version
npm run deploy:preview

# Deploy to production
npm run deploy
```

---

## Troubleshooting

### Build fails on Vercel?
- Check that `npm run build` works locally first
- Look at build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`

### Routing issues (404 on refresh)?
- Already configured in `vercel.json` - should work!
- The rewrite rule sends all requests to `index.html`

### Need help?
- Check [Vercel documentation](https://vercel.com/docs)
- Contact: [Vercel Support](https://vercel.com/support)

---

## Your Next Steps

1. **Sign up for Vercel** (if you haven't)
2. **Push to GitHub** (if not already done)
3. **Import project to Vercel** or run `npx vercel login && npm run deploy`
4. **Share your live URL!** 🎉

Your SHPE NJIT website will be live at `https://shpe-njit.vercel.app`!
