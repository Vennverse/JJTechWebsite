# GitHub Pages Deployment Guide

This guide will help you deploy your JJ-Tech website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. This project code

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to GitHub.com and create a new repository
2. Name it something like `jj-tech-website`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README since we have existing code

### 2. Push Code to GitHub

Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - JJ Tech website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jj-tech-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will automatically run

### 4. Build the Static Website

Since GitHub Pages only hosts static files, we need to build a static version:

```bash
# Install dependencies
npm install

# Build static site
node build-static.js
```

This creates a `dist` folder with your static website.

### 5. Manual Deployment (Alternative)

If the automatic deployment doesn't work, you can deploy manually:

```bash
# Build the site
node build-static.js

# Deploy to gh-pages branch
npx gh-pages -d dist
```

## Important Notes

- Your website will be available at: `https://YOUR-USERNAME.github.io/jj-tech-website/`
- It may take a few minutes for changes to appear
- The contact form won't work on GitHub Pages (static hosting only)
- All other pages and navigation will work perfectly

## Troubleshooting

If the site doesn't load correctly:

1. Check that the repository is public
2. Verify GitHub Pages is enabled in settings
3. Wait 5-10 minutes for deployment to complete
4. Check the Actions tab for any deployment errors

## Custom Domain (Optional)

To use your own domain (like jj-tech.co):

1. Add a CNAME file to the `dist` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

Your JJ-Tech website is now ready for the world to see!