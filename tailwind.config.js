/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- UPDATED KEYFRAMES AND ANIMATIONS ---
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.8 },
        },
        drift: {
          // Move from 100vh (bottom of screen) *above* the top (-100vh)
          '0%': { transform: 'translateY(-100vh)' }, 
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      animation: {
        twinkle: 'twinkle 4s linear infinite',
        // Add the three new drift speeds
        'drift-slow': 'drift 60s linear infinite',
        'drift-medium': 'drift 45s linear infinite',
        'drift-fast': 'drift 30s linear infinite',
      }
      // --- END OF SECTION ---
    },
  },
  plugins: [],
}