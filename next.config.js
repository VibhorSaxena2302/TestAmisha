/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  // Use the GitHub repo name as basePath and assetPrefix
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  basePath = `/${repo}`;
  assetPrefix = `/${repo}`;
}

module.exports = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  // Optional: Allow proper linking in both environments
  trailingSlash: true,
};
