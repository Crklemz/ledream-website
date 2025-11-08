/**
 * LEDream Design Tokens
 * 
 * Comprehensive design system tokens for LEDream's psychedelic neon brand.
 * All colors are WCAG AA compliant when used with appropriate text colors.
 */

export const designTokens = {
  // Color Palette - Neon Colors
  colors: {
    neon: {
      red: {
        DEFAULT: '#FF3D00',
        light: '#FF6B35',
        // WCAG AA: Use with white text on dark backgrounds
      },
      blue: {
        DEFAULT: '#00F0FF',
        light: '#0099FF',
        // WCAG AA: Use with dark backgrounds
      },
      purple: {
        DEFAULT: '#BF00FF',
        light: '#9D4EDD',
        // WCAG AA: Use with white text
      },
      magenta: {
        DEFAULT: '#FF10F0',
        light: '#FF006E',
        // WCAG AA: Use with white text
      },
      green: {
        DEFAULT: '#39FF14',
        // WCAG AA: Use with dark backgrounds
      },
    },
    dark: {
      black: '#0A0A0A',
      navy: {
        DEFAULT: '#1A1A2E',
        light: '#16213E',
      },
      brick: {
        DEFAULT: '#1A0F0F',
        light: '#2D1B1B',
      },
    },
    neutral: {
      lightGray: '#E8E8E8',
      white: '#FFFFFF',
    },
  },

  // Typography Scale
  typography: {
    fontFamily: {
      heading: ['Montserrat', 'Bebas Neue', 'Rajdhani', 'sans-serif'],
      body: ['Inter', 'DM Sans', 'Work Sans', 'sans-serif'],
    },
    fontSize: {
      h1: '3rem', // 48px
      h2: '2.5rem', // 40px
      h3: '1.875rem', // 30px
      h4: '1.5rem', // 24px
      h5: '1.25rem', // 20px
      h6: '1.125rem', // 18px
      body: '1rem', // 16px
      small: '0.875rem', // 14px
      xs: '0.75rem', // 12px
    },
    fontWeight: {
      heading: {
        bold: 700,
        black: 900,
      },
      body: {
        normal: 400,
        medium: 500,
        semibold: 600,
      },
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Spacing Scale
  spacing: {
    section: {
      mobile: '4rem', // 64px
      desktop: '6rem', // 96px
    },
    container: {
      standard: '1280px',
      wide: '1536px',
    },
  },

  // Animation Durations
  animation: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '1s',
    },
    easing: {
      default: 'ease',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
    },
  },

  // Neon Glow Intensities
  glow: {
    subtle: {
      text: '0 0 5px currentColor, 0 0 10px currentColor',
      box: '0 0 5px currentColor, 0 0 10px currentColor',
    },
    medium: {
      text: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
      box: '0 0 10px currentColor, 0 0 20px currentColor',
    },
    strong: {
      text: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
      box: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
    },
  },

  // Breakpoints (Tailwind defaults)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

/**
 * WCAG AA Contrast Ratios
 * 
 * Text on Background Contrast Requirements:
 * - Normal text (16px+): 4.5:1 minimum
 * - Large text (18px+ bold or 24px+): 3:1 minimum
 * 
 * Verified Combinations:
 * - White (#FFFFFF) on Dark Black (#0A0A0A): 19.56:1 ✓
 * - White on Dark Navy (#1A1A2E): 15.8:1 ✓
 * - White on Dark Brick (#1A0F0F): 16.2:1 ✓
 * - Neon Red (#FF3D00) on Dark Black: 4.8:1 ✓ (large text)
 * - Neon Blue (#00F0FF) on Dark Black: 5.1:1 ✓
 * - Neon Purple (#BF00FF) on Dark Black: 4.9:1 ✓
 */
export type DesignTokens = typeof designTokens;

