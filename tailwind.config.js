import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'fade-up':{
          '0%':{opacity:'0', transform:'translateY(30px) scale(0.9)'},
          '100%':{opacity:'1', transform:'translateY(0px) scale(1)'}
        },
        'fade-down':{
          '0%':{opacity:'0', transform:'translateY(-30px) scale(0.9)'},
          '100%':{opacity:'1', transform:'translateY(0px) scale(1)'}
        },
        'fade-in':{
          '0%':{opacity:'0', transform:'scale(0.9)'},
          '100%':{opacity:'1', transform:'scale(1)'}
        }
      },
      animation:{
        'fade-up':'fade-up 0.5s',
        'fade-down':'fade-down 0.5s',
        'fade-in':'fade-in 0.5s'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}