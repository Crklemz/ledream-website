# LEDream Design System

A comprehensive design system for LEDream's psychedelic, neon-themed brand identity.

## Overview

The LEDream design system provides a complete set of design tokens, utilities, and components for creating a cohesive neon aesthetic inspired by marquee lights and psychedelic visuals.

## File Structure

```
styles/
├── design-tokens.ts      # TypeScript design tokens with type safety
├── usage-examples.md     # Comprehensive usage examples
└── README.md            # This file

app/
└── globals.css          # CSS custom properties, utilities, and animations
```

## Key Features

### 🎨 Color Palette
- **Neon Red/Orange**: `#FF3D00`, `#FF6B35`
- **Electric Blue**: `#00F0FF`, `#0099FF`
- **Vibrant Purple**: `#BF00FF`, `#9D4EDD`
- **Hot Magenta/Pink**: `#FF10F0`, `#FF006E`
- **Acid Green**: `#39FF14` (accent)
- **Deep Black**: `#0A0A0A`
- **Dark Brick**: `#1A0F0F`, `#2D1B1B` (textured backgrounds)

### ✨ Effects
- Neon glow effects (text and box shadows)
- Pulsing animations
- Gradient shifts
- Flicker effects
- Marquee scrolling

### 🎭 Typography
- **Display Font**: Montserrat (bold, geometric)
- **Body Font**: Inter (modern, readable)

### 🧱 Textures
- Brick wall pattern (CSS-based, performant)

### ♿ Accessibility
- WCAG AA compliant color combinations
- Reduced motion support
- Accessible text color variants

## Quick Start

### Using Tailwind Classes

```tsx
// Neon text
<h1 className="neon-text-red">Glowing Red</h1>

// Neon border
<div className="neon-border-blue">Blue Border</div>

// Gradient background
<div className="bg-gradient-neon-rainbow">Rainbow</div>

// Animations
<div className="animate-pulse-neon">Pulsing</div>
```

### Using Design Tokens

```tsx
import { designTokens, getNeonColor } from '@/styles/design-tokens';

const redColor = getNeonColor('red'); // '#FF3D00'
```

## Documentation

- **Usage Examples**: See `usage-examples.md` for comprehensive examples
- **Design Tokens**: See `design-tokens.ts` for all available tokens
- **Tailwind Config**: See `tailwind.config.js` for all Tailwind extensions

## Best Practices

1. **Use Tailwind classes** when possible for better performance
2. **Respect reduced motion** - animations auto-disable for users who prefer it
3. **Ensure contrast** - use accessible color variants for text
4. **Performance** - use `gpu-accelerated` class for animated elements
5. **Semantic HTML** - always use proper HTML elements

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties supported
- Transform and animation support required
- Graceful degradation for older browsers

## Performance

- GPU-accelerated animations
- CSS-based textures (no images)
- Optimized font loading via Next.js
- Reduced motion support for accessibility

