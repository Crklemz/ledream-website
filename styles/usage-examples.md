# LEDream Design System - Usage Examples

This document provides practical examples of how to use the LEDream design system in your components.

## Colors

### Neon Colors

```tsx
// Using Tailwind classes
<div className="bg-neon-red text-white">Red neon background</div>
<div className="text-neon-blue">Blue neon text</div>
<div className="border-neon-purple border-2">Purple neon border</div>

// Using design tokens in TypeScript
import { designTokens } from '@/styles/design-tokens';

const redColor = designTokens.colors.neon.red.DEFAULT; // '#FF3D00'
const lightBlue = designTokens.colors.neon.blue.light; // '#0099FF'
```

## Text Effects

### Neon Glowing Text

```tsx
// Using utility classes
<h1 className="neon-text-red">Glowing Red Text</h1>
<h1 className="neon-text-blue">Glowing Blue Text</h1>
<h1 className="neon-text-purple">Glowing Purple Text</h1>
<h1 className="neon-text-multicolor">Rainbow Glowing Text</h1>

// With animations
<h1 className="neon-text-red animate-glow-pulse-red">
  Pulsing Red Glow
</h1>
```

### Accessible Text (WCAG AA Compliant)

```tsx
// Use lighter variants for better contrast on dark backgrounds
<p className="text-neon-accessible-red">
  Accessible red text on dark background
</p>
<p className="text-neon-accessible-blue">
  Accessible blue text on dark background
</p>
```

## Backgrounds

### Brick Wall Texture

```tsx
<div className="bg-brick-wall p-8">
  <h2 className="neon-text-blue">Content on brick wall</h2>
</div>
```

### Gradient Backgrounds

```tsx
// Using Tailwind classes
<div className="bg-gradient-neon-red-blue">
  Red to Blue gradient
</div>

<div className="bg-gradient-neon-rainbow animate-gradient-shift">
  Animated rainbow gradient
</div>

// Using design tokens
import { getGradient } from '@/styles/design-tokens';

<div style={{ background: getGradient('rainbow') }}>
  Rainbow gradient
</div>
```

## Borders and Glows

### Neon Borders

```tsx
<div className="neon-border-red p-4">
  Red neon border
</div>

<div className="neon-border-multicolor p-4">
  Multicolor neon border
</div>
```

### Box Shadows (Glows)

```tsx
<div className="glow-red p-4 bg-dark-black">
  Red glow effect
</div>

<div className="shadow-neon-multicolor p-4">
  Multicolor glow shadow
</div>
```

## Animations

### Pulsing Effects

```tsx
<div className="animate-pulse-neon">
  Pulsing neon effect
</div>

<h1 className="neon-text-red animate-glow-pulse-red">
  Pulsing text glow
</h1>
```

### Gradient Shifts

```tsx
<div className="bg-gradient-neon-rainbow animate-gradient-shift">
  Animated gradient background
</div>
```

### Flicker Effect

```tsx
<div className="neon-text-red animate-flicker">
  Flickering neon light effect
</div>
```

### Marquee Scroll

```tsx
<div className="marquee-light overflow-hidden">
  <div className="animate-marquee-scroll">
    Scrolling marquee text
  </div>
</div>
```

## Geometric Shapes

### Diamond Shape

```tsx
<div className="shape-diamond text-neon-blue"></div>
```

### Glowing Circle

```tsx
<div className="w-20 h-20 shape-circle-glow bg-neon-purple"></div>
```

## Typography

### Display Font (Montserrat)

```tsx
<h1 className="font-display text-4xl font-bold neon-text-red">
  Display Heading
</h1>
```

### Body Font (Inter)

```tsx
<p className="font-body text-base text-white">
  Body text using Inter font
</p>
```

## Component Examples

### Neon Button

```tsx
<button className="neon-border-red bg-dark-black text-neon-red px-6 py-3 rounded-lg hover:glow-red transition-all duration-300">
  Click Me
</button>
```

### Neon Card

```tsx
<div className="bg-dark-brick neon-border-blue p-6 rounded-lg">
  <h3 className="neon-text-blue font-display text-2xl mb-4">
    Card Title
  </h3>
  <p className="text-white font-body">
    Card content with neon styling
  </p>
</div>
```

### Hero Section

```tsx
<section className="bg-brick-wall min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="font-display text-6xl neon-text-multicolor animate-glow-pulse mb-4">
      LEDream
    </h1>
    <p className="text-white font-body text-xl">
      Welcome to the neon experience
    </p>
  </div>
</section>
```

### Animated Gradient Text

```tsx
<h1 className="neon-text-multicolor font-display text-5xl font-bold">
  Animated Rainbow Text
</h1>
```

## Performance Considerations

### GPU Acceleration

```tsx
<div className="gpu-accelerated animate-pulse-neon">
  Optimized animation
</div>
```

### Reduced Motion Support

The design system automatically respects `prefers-reduced-motion` media query. Animations will be disabled for users who prefer reduced motion.

## Accessibility

### Contrast Compliance

Always use accessible color variants when placing text on dark backgrounds:

```tsx
// ✅ Good - Accessible
<p className="text-neon-accessible-red">
  Accessible text
</p>

// ⚠️ Use with caution - May not meet WCAG AA
<p className="text-neon-red">
  May have contrast issues
</p>
```

### Semantic HTML

Always use semantic HTML elements:

```tsx
// ✅ Good
<h1 className="neon-text-red">Main Heading</h1>
<button className="neon-border-blue">Action Button</button>

// ❌ Avoid
<div className="neon-text-red">Main Heading</div>
<div className="neon-border-blue">Action Button</div>
```

## Design Tokens Usage

### Importing Tokens

```tsx
import { designTokens, getNeonColor, getGradient } from '@/styles/design-tokens';

// Get color values
const redColor = getNeonColor('red'); // '#FF3D00'
const lightBlue = getNeonColor('blue', 'light'); // '#0099FF'

// Get gradients
const rainbowGradient = getGradient('rainbow');

// Access full token object
const allColors = designTokens.colors;
const allAnimations = designTokens.animations;
```

### Using in Inline Styles

```tsx
<div
  style={{
    color: designTokens.colors.neon.blue.DEFAULT,
    boxShadow: designTokens.shadows.neon.blue,
  }}
>
  Styled with design tokens
</div>
```

## Best Practices

1. **Use Tailwind classes when possible** - Better performance and easier to maintain
2. **Respect reduced motion** - Animations are automatically disabled for users who prefer it
3. **Ensure contrast** - Use accessible color variants for text
4. **Performance** - Use `gpu-accelerated` class for animated elements
5. **Semantic HTML** - Always use proper HTML elements
6. **Consistency** - Stick to the design tokens for colors and spacing

