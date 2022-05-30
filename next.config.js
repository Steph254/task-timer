/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/task-timer",
  assetPrefix: "/task-timer"
}

module.exports = nextConfig
