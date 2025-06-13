/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPages ? '/MyDigitalSpace' : '',
  assetPrefix: isGithubPages ? '/MyDigitalSpace/' : '',
};

module.exports = nextConfig;
