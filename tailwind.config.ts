import type { Config } from "tailwindcss";

import { colorPlugin } from './tw/colors'

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'blink': 'blink 0.7s infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    colorPlugin({
      primary: {
        DEFAULT: '#fa323c',
        darker: {
          1: '#e61e28',
          2: '#c8050f',
          3: '#aa0000',
          4: '#FF0404',
          5: '#F3818C',
          6: '#FF296F',
          7: '#FA323C',
        },
        lighter: {
          1: '#ff4d50',
          2: '#ff828c',
          3: '#ffaaaf',
          4: '#F1858A',
          5: '#FEEBE2',
        },
        persimmon: {
          DEFAULT: '#EB5B0C',
        },
      },
      peach: {
        DEFAULT: '#ffc8dc',
        lighter: {
          1: '#ffd2e6',
          2: '#ffe1f5',
          3: '#ffebfa',
        },
        3: '#FCE1ED',
      },
      yellow: {
        darker: {
          1: '#F3C428',
        },
        lighter: {
          1: '#FFFCD5',
        },
      },
      orange: {
        DEFAULT: '#ffc8b4',
        lighter: {
          1: '#ffd2be',
          2: '#ffe1cd',
          3: '#fff0dc',
          4: '#FBC2AC',
          5: '#FDF7ED',
        },
        darker: {
          1: '#FF731B',
        },
      },
      lemon: {
        DEFAULT: '#ff9e9e',
        lighter: {
          1: '#ffb1b1',
          2: '#ffc4c4',
          3: '#ffd7d7',
        },
      },
      melon: {
        DEFAULT: '#96f5e6',
        lighter: {
          1: '#a0fff0',
          2: '#aafffa',
          3: '#b4ffff',
        },
        4: '#DEF0EB',
      },
      blue_berry: {
        DEFAULT: '#afe1ff',
        lighter: {
          1: '#b9ebff',
          2: '#c3f5ff',
          3: '#c8faff',
          4: '#93BFE6',
          5: '#CCF2FF',
        },
        darker: {
          1: '#0087FF',
          2: '#2A9EF9',
          3: '#092D7A',
        },
        4: '#D7EAF9',
      },
      disabled: {
        DEFAULT: '#CAC4D0',
      },
      danger: {
        DEFAULT: '#FF0000',
      },
      grey: {
        DEFAULT: '#A1A1A1',
        1: '#4d4d4d',
        2: '#2d2d2d',
        3: '#777777',
      },
      black: {
        DEFAULT: '#000000',
        1: '#0a0a0a',
        quartz: {
          1: '#181818',
          2: '#4C4949',
          3: '#5B5B5B',
          4: '#9E9B9B',
          5: '#C7C5C5',
          6: '#8F8F8F',
          7: '#8B8887',
          8: '#1D1A22',
          9: '#1C1C1C',
          10: '#4A4A4A',
          11: '#79747E',
          12: '#333638',
        },
        philippine_gray: '#8E8E8E',
        philippine_gray_2: '#D9D9D9',
        charcoal: {
          DEFAULT: '#323030',
          1: '#544834',
          2: '#344054',
        },
        wash: '#0D0D0D',
      },
      purple: {
        DEFAULT: '#AA5AE5',
        1: '#6750A4',
      },
      green: {
        DEFAULT: '#008000',
        crayola: '#5CB86C',
        jungle: '#282010',
        1: '#EAFCCF',
        2: '#1B6F14',
      },
      success: {
        DEFAULT: '#6FC36C',
      },
      silver: {
        A1: '#A1A1A1',
        E6: '#E6E6E6',
        AF: '#B2AFAF',
      },
      extensions: {
        5: '#F4E2E3',
      },
    }),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate")
  ],
} satisfies Config;
