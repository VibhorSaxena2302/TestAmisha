/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  // Check if GITHUB_REPOSITORY exists before using it
  if (process.env.GITHUB_REPOSITORY) {
    // Use the GitHub repo name as basePath and assetPrefix
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    basePath = `/${repo}`;
    assetPrefix = `/${repo}`;
  } else {
    console.warn('GITHUB_REPOSITORY not found. Make sure the environment variable is set.');
  }
}

module.exports = {
  output: 'export', // Ensure the output is set for static export (required for GitHub Pages)
  basePath,         // Use the basePath defined above
  assetPrefix,      // Use the assetPrefix defined above
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  trailingSlash: true, // Optional: ensures all routes end with a trailing slash
};
