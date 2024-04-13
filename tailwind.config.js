/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    borderStyle: ['responsive', 'hover', 'focus', 'focus-visible'],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'opacity': 'opacity 1s linear',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      }
    },
    backgroundPosition: {
      'top-4': 'center top -1rem',
    }
  },
  plugins: [],
};
