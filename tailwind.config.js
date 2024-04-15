/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    colors:{
      primary:'hsl(25, 97, 53)',
      secondary:{
        DEFAULT:'hsl(213, 19, 18)',
        900:'hsl(216, 12, 8)'
      },
      neutral:{
        DEFAULT:'hsl(0,0,100)',
        50:'hsl(217, 12, 63)',
        500:'hsl(216, 12, 54)'
      }
    },
    extend: {
      fontFamily:{
        'overpasse':["OVERPASS"]
      }
    },
  },
  plugins: [],
}

