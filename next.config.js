// theme color must match tailwind.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    author: 'Ting Yun',
    sitename: 'BitKing',
    theme: {
      bg: "#131720",
      bg2: "#2c2c2c",
      fg: "#E4E9EC",
      profit: "rgb(21,133,87)",
      loss: "rgb(150,22,29)",
      dark: {},
      light: {},
    }
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "*.googleusercontent.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "platform-lookaside.fbsbx.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
