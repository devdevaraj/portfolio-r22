import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        "sm": "2px 2px 2px var(--tw-shadow-color)"
      },
      fontFamily: {
        'GrandHotel': ['GrandHotel'],
        'BalletRegular': ['BalletRegular'],
        'DeliciousHandrawn': ['DeliciousHandrawn'],
        'EduRegular': ['EduRegular'],
        'NeonderthawRegular': ['NeonderthawRegular']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow')})
    })
  ],
};
export default config;
