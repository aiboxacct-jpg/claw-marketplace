/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0f',
        'bg-card': '#12121a',
        'border-color': '#2a2a3a',
        'hot-pink': '#ff2d92',
        'cyan': '#00f5ff',
        'lime': '#b4ff39',
        'purple': '#a855f7',
        'orange': '#ff6b2c',
        'text-primary': '#ffffff',
        'text-secondary': '#8b8b9e',
        'text-muted': '#5a5a6e',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
