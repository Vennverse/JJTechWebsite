#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building static site for GitHub Pages...');

// Build the frontend
console.log('Building frontend...');
execSync('vite build', { stdio: 'inherit' });

// Create CNAME file if needed (replace with your domain)
// fs.writeFileSync('dist/CNAME', 'your-domain.com');

// Create .nojekyll file to prevent Jekyll processing
fs.writeFileSync('dist/.nojekyll', '');

// Copy any additional static files if needed
console.log('Static build complete! Ready for GitHub Pages deployment.');