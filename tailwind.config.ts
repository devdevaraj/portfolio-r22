import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { _skillsLength } from "./src/data/skills";
import { log } from "console";

const breakPoints = ["","sm:","md:","lg:","xl:"];
const delays = new Array(6).fill(100).map((i,j) => i*j);
const baseDelays = delays.map(i => `delay-[${i}ms]`);
const delaySafelist = breakPoints.map(bp => baseDelays.map(bd => `${bp}${bd}`)).flat();

const flexSafelist = breakPoints.map(i => `${i}flex`);
const hiddenSafelist = breakPoints.map(i => `${i}hidden`);



const safeList = [...delaySafelist, ...flexSafelist, ...hiddenSafelist];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: safeList,
  theme: {
    extend: {
      aspectRatio: {
        "portrait": "4/5"
      },
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
