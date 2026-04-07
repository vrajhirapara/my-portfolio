/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'neon-pink': 'var(--neon-pink)',
        'accent-green': 'var(--accent-green)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-elevated': 'var(--bg-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        glass: 'var(--glass)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,200,240,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,240,0.018) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        neon: '0 0 18px rgba(0, 200, 240, 0.32), 0 0 48px rgba(90, 40, 200, 0.18)',
        'neon-pink': '0 0 18px rgba(230, 40, 106, 0.28)',
        'neon-purple': '0 0 26px rgba(107, 36, 232, 0.22)',
      },
      animation: {
        'mesh-shift': 'meshShift 22s ease-in-out infinite',
        'float-slow': 'floatY 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'blink-cursor': 'blink 1s step-end infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        meshShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%, 100% 50%',
            opacity: '0.55',
          },
          '50%': {
            backgroundPosition: '100% 50%, 0% 50%',
            opacity: '0.72',
          },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            filter:
              'drop-shadow(0 0 8px rgba(0,200,240,0.45)) drop-shadow(0 0 22px rgba(107,36,232,0.28))',
          },
          '50%': {
            filter:
              'drop-shadow(0 0 14px rgba(0,200,240,0.65)) drop-shadow(0 0 32px rgba(230,40,106,0.22))',
          },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
