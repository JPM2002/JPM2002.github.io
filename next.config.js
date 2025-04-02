/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    basePath: '', // Leave empty since this is your username.github.io repo
  };
  
  module.exports = nextConfig;
  