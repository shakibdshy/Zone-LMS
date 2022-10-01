/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1136px',
      // => @media (min-width: 1136px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    colors: {
      'primary-lighter': 'rgba(var(--color-primary-lighter), <alpha-value>)',
      'primary-light': 'rgba(var(--color-primary-light), <alpha-value>)',
      'primary': 'rgba(var(--color-primary), <alpha-value>)',
      'primary-dark': 'rgba(var(--color-primary-dark), <alpha-value>)',
      'primary-darker': 'rgba(var(--color-primary-darker), <alpha-value>)',
      'secondary-lighter': 'rgba(var(--color-secondary-lighter), <alpha-value>)',
      'secondary-light': 'rgba(var(--color-secondary-light), <alpha-value>)',
      'secondary': 'rgba(var(--color-secondary), <alpha-value>)',
      'secondary-dark': 'rgba(var(--color-secondary-dark), <alpha-value>)',
      'secondary-darker': 'rgba(var(--color-secondary-darker), <alpha-value>)',
      'grey-100': 'rgba(var(--color-grey-100), <alpha-value>)',
      'grey-200': 'rgba(var(--color-grey-200), <alpha-value>)',
      'grey-300': 'rgba(var(--color-grey-300), <alpha-value>)',
      'grey-400': 'rgba(var(--color-grey-400), <alpha-value>)',
      'grey-500': 'rgba(var(--color-grey-500), <alpha-value>)',
      'grey-600': 'rgba(var(--color-grey-600), <alpha-value>)',
      'grey-700': 'rgba(var(--color-grey-700), <alpha-value>)',
      'grey-800': 'rgba(var(--color-grey-800), <alpha-value>)',
      'grey-900': 'rgba(var(--color-grey-900), <alpha-value>)',
      'light-primary': 'rgba(var(--color-text-light-primary), <alpha-value>)',
      'light-secondary': 'rgba(var(--color-text-light-secondary), <alpha-value>)',
      'light-disabled': 'rgba(var(--color-text-light-disabled), <alpha-value>)',
      'dark-primary': 'rgba(var(--color-text-dark-primary), <alpha-value>)',
      'dark-secondary': 'rgba(var(--color-text-dark-secondary), <alpha-value>)',
      'dark-disabled': 'rgba(var(--color-text-dark-disabled), <alpha-value>)',
      'transparent-8': 'rgba(var(--color-grey-500), 0.08)',
      'transparent-12': 'rgba(var(--color-grey-500), 0.12)',
      'transparent-16': 'rgba(var(--color-grey-500), 0.16)',
      'transparent-24': 'rgba(var(--color-grey-500), 0.24)',
      'transparent-32': 'rgba(var(--color-grey-500), 0.32)',
      'transparent-48': 'rgba(var(--color-grey-500), 0.48)',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      }
    },
  },
  plugins: [],
}