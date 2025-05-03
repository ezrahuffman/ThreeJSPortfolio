/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        // Proper way to define custom background and text colors
        background: {
          'default': '#FFFFFF',
        },
        text: {
          'tertiary': '#FFFFFF',
          'secondary': '#AFB0B6',  // Based on your JSX
        },
        // For border colors
        border: {
          'default': '#3A3A49',  // This is a guess based on your code, adjust as needed
        },
        icon: {
          'default': '#62646C',  // Again, a guess based on context
        },
        neutral: {
          '950': '#0A0A0B',  // Adding this as it appears in your JSX
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
}