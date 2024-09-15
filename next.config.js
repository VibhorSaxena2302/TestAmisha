// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS;

module.exports = {
  // Example basePath; remove if not needed
  basePath: isGithubActions ? '/Autocoder-Story-Matrix-4' : '',

  // Other Next.js configurations
  reactStrictMode: true,
  swcMinify: true,
  
  // Optionally set up environment variables based on the environment
  env: {
    customKey: isGithubActions ? 'github-action-value' : 'local-value',
  },

  // Optional: Redirects
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },

  // Optional: Rewrites
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://api.example.com/:path*`,
      },
    ];
  },
};
