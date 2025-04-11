// tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: {
          DEFAULT: '#2F80ED',
        },
        lightpri: '#e7f1fe',  
        gray: {
          DEFAULT: '#F0F0F0', 
        },
        lightgray: '#FEFEFE', 
      },
    },
  },
  plugins: [],
}
