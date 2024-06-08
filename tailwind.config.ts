import type { Config } from 'tailwindcss';
import Color from 'color';

// must match next.config.js
const colorProfit = "rgb(21,133,87)";
const colorPending = "#DCC004"
const colorLoss = "rgb(150,22,29)";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      minWidth: {
        10: '2.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Primary-1": "#0CAF60",
        "Primary-2": "#FE9829",
        "Primary-3": "#131720", //"#171F2A",
        "Primary-bg": "#131720",
        "Neutral-1": "#868D95",
        "Neutral-2": "#212B39",
        "Neutral-3": "#444854",
        "Neutral-4": "#444854",
        "Neutral-5": "#C7CACF",
        "Neutral-6": "#D2D9E4",
        "Neutral-7": "#424A55",
        "Neutral-8": "#3EBF81",
        "Neutral-9": "#FFFFFF",
        "Neutral-10": "#242F40",
        "darkblue": "#141A22",
        "Profit": colorProfit,
        "Profit-bold": Color(colorProfit).lighten(0.5).string(),
        "Pending": colorPending,
        "Pending-bold": Color(colorPending).lighten(0.5).string(),
        "Loss": colorLoss,
        "Loss-bold": Color(colorLoss).lighten(0.5).string(),
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
