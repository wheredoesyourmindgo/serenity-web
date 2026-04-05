/*
Suppress "Cannot resolve default tailwindcss config path. Please manually set the config option." during lint by specifying the path to this config file.
See eslint.config.mjs for more information. Future versions of eslint-plugin-tailwindcss may resolve this automatically in which case this config file
can be removed.
*/

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
    tableLayout: false
  },
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        heading: ['var(--font-body)'],
        body: ['var(--font-body)']
      }
    },
    // Default Tailwind breakpoints (See breakpoints in lib/breakpoints.ts for variables for use within app):
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}

export default tailwindConfig
