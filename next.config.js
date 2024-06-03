/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    author: 'Ting Yun',
    sitename: 'BitKing',
    theme: {
      light: {
      },
      dark: {
      },
      both: {
        chart: {
          profit: "rgba(12, 200, 150, 1)",
          loss: ""
        }
      },
    }
  },
  reactStrictMode: true,
}

module.exports = nextConfig
