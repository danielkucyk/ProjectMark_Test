/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  safelist: [
    {
      pattern: /bg-+/,
      variants: ['hover', 'focus']
    },
    {
      pattern: /from-+/,
      variants: ['hover', 'focus']
    },
    {
      pattern: /text-+/,
      variants: ['hover', 'focus']
    },
    {
      pattern: /border-+/,
      variants: ['hover', 'focus']
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

