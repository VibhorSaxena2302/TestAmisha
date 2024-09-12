// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: '/Autocoder-Story-Matrix-4', // Only the GitHub repo name here, no full URL
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};
