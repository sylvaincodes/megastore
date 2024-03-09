import type { Config } from "tailwindcss"
import  colors  from 'tailwindcss/colors'

const config = {
  
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors:{

        // default colors 
        hero_bg: "#212844",
        bg_primary_light: '#F3F9FB',
        bg_primary: '#008ECC',
        color_icon: '#008ECC',
        bg_icon: '#F3F9FB',
        bg_gray: '#F5F5F5',
        border_gray: '#D9D9D9',
        text_gray: '#666666',
        transparent: 'transparent',
        green: colors.green,
        gray: colors.gray,
      black: '#121212',
      white: colors.white,

      // curious-blue
      primary:{
        50: '#f0faff',
        100: '#e0f3fe',
        200: '#b9e8fe',
        300: '#7cd8fd',
        400: '#36c5fa',
        500: '#0caeeb',
        600: '#008ecc',
        700: '#016fa3',
        800: '#065e86',
        900: '#0b4e6f',
        950: '#07314a',
      }

    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '0rem',
        md: '0rem',
        lg: '0rem',
        xl: '12rem',
        '2xl': '12rem',
      },
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }
        
        'sm': '575px',
        // => @media (min-width: 575px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config