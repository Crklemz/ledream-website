/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // shadcn/ui colors (kept for compatibility)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // LEDream neon color palette
        neon: {
          red: {
            DEFAULT: '#FF3D00',
            light: '#FF6B35',
          },
          blue: {
            DEFAULT: '#00F0FF',
            light: '#0099FF',
          },
          purple: {
            DEFAULT: '#BF00FF',
            light: '#9D4EDD',
          },
          magenta: {
            DEFAULT: '#FF10F0',
            light: '#FF006E',
          },
          green: {
            DEFAULT: '#39FF14',
          },
        },
        dark: {
          black: '#0A0A0A',
          brick: {
            DEFAULT: '#1A0F0F',
            light: '#2D1B1B',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'neon-red': '0 0 10px #FF3D00, 0 0 20px #FF3D00, 0 0 30px #FF3D00',
        'neon-blue': '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF',
        'neon-purple': '0 0 10px #BF00FF, 0 0 20px #BF00FF, 0 0 30px #BF00FF',
        'neon-magenta': '0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0',
        'neon-green': '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
        'neon-multicolor':
          '0 0 10px #FF3D00, 0 0 20px #00F0FF, 0 0 30px #BF00FF, 0 0 40px #FF10F0',
        'glow-red': '0 0 5px #FF3D00, 0 0 10px #FF3D00, 0 0 15px #FF3D00, 0 0 20px #FF3D00',
        'glow-blue': '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF, 0 0 20px #00F0FF',
        'glow-purple': '0 0 5px #BF00FF, 0 0 10px #BF00FF, 0 0 15px #BF00FF, 0 0 20px #BF00FF',
      },
      textShadow: {
        'neon-red': '0 0 5px #FF3D00, 0 0 10px #FF3D00, 0 0 15px #FF3D00',
        'neon-blue': '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF',
        'neon-purple': '0 0 5px #BF00FF, 0 0 10px #BF00FF, 0 0 15px #BF00FF',
        'neon-magenta': '0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 15px #FF10F0',
        'neon-green': '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
        'neon-multicolor':
          '0 0 5px #FF3D00, 0 0 10px #00F0FF, 0 0 15px #BF00FF, 0 0 20px #FF10F0',
      },
      backgroundImage: {
        'gradient-neon-red-blue': 'linear-gradient(135deg, #FF3D00 0%, #00F0FF 100%)',
        'gradient-neon-purple-magenta': 'linear-gradient(135deg, #BF00FF 0%, #FF10F0 100%)',
        'gradient-neon-rainbow':
          'linear-gradient(135deg, #FF3D00 0%, #FF10F0 25%, #BF00FF 50%, #00F0FF 75%, #39FF14 100%)',
        'gradient-neon-diagonal': 'linear-gradient(45deg, #FF3D00, #00F0FF, #BF00FF, #FF10F0)',
        'gradient-dark-brick': 'linear-gradient(180deg, #1A0F0F 0%, #2D1B1B 100%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(1)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'brightness(1.2)',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
          },
          '50%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
          },
        },
        'glow-pulse-red': {
          '0%, 100%': {
            textShadow: '0 0 5px #FF3D00, 0 0 10px #FF3D00, 0 0 15px #FF3D00',
          },
          '50%': {
            textShadow: '0 0 10px #FF3D00, 0 0 20px #FF3D00, 0 0 30px #FF3D00',
          },
        },
        'glow-pulse-blue': {
          '0%, 100%': {
            textShadow: '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF',
          },
          '50%': {
            textShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF',
          },
        },
        'glow-pulse-purple': {
          '0%, 100%': {
            textShadow: '0 0 5px #BF00FF, 0 0 10px #BF00FF, 0 0 15px #BF00FF',
          },
          '50%': {
            textShadow: '0 0 10px #BF00FF, 0 0 20px #BF00FF, 0 0 30px #BF00FF',
          },
        },
        'gradient-shift': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'flicker': {
          '0%, 100%': {
            opacity: '1',
          },
          '41.99%': {
            opacity: '1',
          },
          '42%': {
            opacity: '0',
          },
          '43%': {
            opacity: '0',
          },
          '43.01%': {
            opacity: '1',
          },
          '47.99%': {
            opacity: '1',
          },
          '48%': {
            opacity: '0',
          },
          '49%': {
            opacity: '0',
          },
          '49.01%': {
            opacity: '1',
          },
        },
        'marquee-scroll': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-pulse-red': 'glow-pulse-red 2s ease-in-out infinite',
        'glow-pulse-blue': 'glow-pulse-blue 2s ease-in-out infinite',
        'glow-pulse-purple': 'glow-pulse-purple 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'flicker': 'flicker 0.15s infinite',
        'marquee-scroll': 'marquee-scroll 20s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      });
    },
  ],
}

