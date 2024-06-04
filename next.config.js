// theme color must match tailwind.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    author: 'Ting Yun',
    sitename: 'BitKing',
    theme: {
      bg: "#131720",
      profit: "rgb(21,133,87)",
      loss: "rgb(150,22,29)",
      dark: {},
      light: {},
    }
  },
  reactStrictMode: true,
}

module.exports = nextConfig
