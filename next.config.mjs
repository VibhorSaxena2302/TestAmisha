/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
module.exports = {
    output: 'export',
    basePath: 'https://github.com/Amisha727/Autocoder-Story-Matrix-4', // replace with your GitHub repo name
    images: {
      unoptimized: true, // if you're using Next.js Image Optimization
    },
};