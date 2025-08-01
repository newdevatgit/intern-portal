/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slideLeft 0.7s ease-out',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
    animation: {
      'fade-slide': 'fadeSlide 0.6s ease-out both',
    },
    keyframes: {
      fadeSlide: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
  },
  animation: {
    'slide-fade-left': 'slideFadeLeft 0.6s ease-out both',
  },
  keyframes: {
    slideFadeLeft: {
      '0%': { opacity: 0, transform: 'translateX(60px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
  },
  
  keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
        animation: {
          typing: "typing 4s steps(16) alternate, blink 1s infinite"
        },

  },
  plugins: [require("tailwindcss-animate")],
  darkMode: 'class', // Enable dark mode support
}
