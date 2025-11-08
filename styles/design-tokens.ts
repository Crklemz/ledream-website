/**
 * LEDream Design System Tokens
 * 
 * This file contains all design tokens for the LEDream brand identity,
 * including colors, typography, spacing, animations, and effects.
 */

export const designTokens = {
  colors: {
    neon: {
      red: {
        DEFAULT: '#FF3D00',
        light: '#FF6B35',
        rgb: '255, 61, 0',
        hsl: '14, 100%, 50%',
      },
      blue: {
        DEFAULT: '#00F0FF',
        light: '#0099FF',
        rgb: '0, 240, 255',
        hsl: '185, 100%, 50%',
      },
      purple: {
        DEFAULT: '#BF00FF',
        light: '#9D4EDD',
        rgb: '191, 0, 255',
        hsl: '280, 100%, 50%',
      },
      magenta: {
        DEFAULT: '#FF10F0',
        light: '#FF006E',
        rgb: '255, 16, 240',
        hsl: '304, 100%, 53%',
      },
      green: {
        DEFAULT: '#39FF14',
        rgb: '57, 255, 20',
        hsl: '110, 100%, 54%',
      },
    },
    dark: {
      black: '#0A0A0A',
      brick: {
        DEFAULT: '#1A0F0F',
        light: '#2D1B1B',
        rgb: '26, 15, 15',
      },
    },
  },
  typography: {
    fonts: {
      display: {
        name: 'Montserrat',
        weights: [400, 500, 600, 700, 800, 900],
        fallback: 'sans-serif',
      },
      body: {
        name: 'Inter',
        weights: [300, 400, 500, 600, 700],
        fallback: 'sans-serif',
      },
    },
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
      '8xl': '6rem', // 96px
      '9xl': '8rem', // 128px
    },
    lineHeights: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
  },
  shadows: {
    neon: {
      red: '0 0 10px #FF3D00, 0 0 20px #FF3D00, 0 0 30px #FF3D00',
      blue: '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF',
      purple: '0 0 10px #BF00FF, 0 0 20px #BF00FF, 0 0 30px #BF00FF',
      magenta: '0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0',
      green: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
      multicolor:
        '0 0 10px #FF3D00, 0 0 20px #00F0FF, 0 0 30px #BF00FF, 0 0 40px #FF10F0',
    },
    glow: {
      red: '0 0 5px #FF3D00, 0 0 10px #FF3D00, 0 0 15px #FF3D00, 0 0 20px #FF3D00',
      blue: '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF, 0 0 20px #00F0FF',
      purple: '0 0 5px #BF00FF, 0 0 10px #BF00FF, 0 0 15px #BF00FF, 0 0 20px #BF00FF',
    },
  },
  textShadows: {
    neon: {
      red: '0 0 5px #FF3D00, 0 0 10px #FF3D00, 0 0 15px #FF3D00',
      blue: '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF',
      purple: '0 0 5px #BF00FF, 0 0 10px #BF00FF, 0 0 15px #BF00FF',
      magenta: '0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 15px #FF10F0',
      green: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
      multicolor:
        '0 0 5px #FF3D00, 0 0 10px #00F0FF, 0 0 15px #BF00FF, 0 0 20px #FF10F0',
    },
  },
  gradients: {
    neon: {
      redBlue: 'linear-gradient(135deg, #FF3D00 0%, #00F0FF 100%)',
      purpleMagenta: 'linear-gradient(135deg, #BF00FF 0%, #FF10F0 100%)',
      rainbow:
        'linear-gradient(135deg, #FF3D00 0%, #FF10F0 25%, #BF00FF 50%, #00F0FF 75%, #39FF14 100%)',
      diagonal: 'linear-gradient(45deg, #FF3D00, #00F0FF, #BF00FF, #FF10F0)',
    },
    dark: {
      brick: 'linear-gradient(180deg, #1A0F0F 0%, #2D1B1B 100%)',
    },
  },
  animations: {
    durations: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '1s',
      slowest: '2s',
    },
    easings: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear',
    },
    keyframes: {
      pulseNeon: {
        '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
        '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
      },
      glowPulse: {
        '0%, 100%': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '50%': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        },
      },
      gradientShift: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
      flicker: {
        '0%, 100%': { opacity: '1' },
        '41.99%': { opacity: '1' },
        '42%': { opacity: '0' },
        '43%': { opacity: '0' },
        '43.01%': { opacity: '1' },
        '47.99%': { opacity: '1' },
        '48%': { opacity: '0' },
        '49%': { opacity: '0' },
        '49.01%': { opacity: '1' },
      },
      marqueeScroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    full: '9999px',
  },
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  accessibility: {
    contrast: {
      // WCAG AA compliant color combinations
      textOnDark: {
        neonRed: '#FF6B35', // Lighter variant for better contrast
        neonBlue: '#0099FF', // Lighter variant
        neonPurple: '#9D4EDD', // Lighter variant
        white: '#FFFFFF',
        lightGray: '#E5E5E5',
      },
      minimumRatio: 4.5, // WCAG AA standard
      enhancedRatio: 7, // WCAG AAA standard
    },
  },
} as const;

// Type exports for TypeScript
export type DesignTokens = typeof designTokens;
export type NeonColor = keyof typeof designTokens.colors.neon;
export type GradientName = keyof typeof designTokens.gradients.neon;

// Helper functions
export const getNeonColor = (color: NeonColor, variant: 'DEFAULT' | 'light' = 'DEFAULT') => {
  return designTokens.colors.neon[color][variant] || designTokens.colors.neon[color].DEFAULT;
};

export const getGradient = (name: GradientName) => {
  return designTokens.gradients.neon[name];
};

export const getTextShadow = (color: NeonColor) => {
  return designTokens.textShadows.neon[color];
};

export const getBoxShadow = (color: NeonColor) => {
  return designTokens.shadows.neon[color];
};

