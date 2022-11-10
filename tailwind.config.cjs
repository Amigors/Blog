/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        XanhMono: ['Xanh Mono', 'monospace']
      }
    },
    colors: {
      letsee: {
        green: '#5C885C'
      },
    },
    spacing: {
        navItem: '2rem'
    },
    boxShadow: {
      banner: 'inset 0 8px 8px -8px rgb(0 0 0/ 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)'
    },
    dropShadow: {
      logo: '0px 1px 3px rgb(0 0 0 / 30%)'
    },
    fontSize: {
      logo: '3.5rem'
    }
  },
  plugins: [],
}
