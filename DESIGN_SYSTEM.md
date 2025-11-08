# LEDream Design System

Comprehensive design system documentation for LEDream's psychedelic neon brand with clean, professional layouts.

## Table of Contents

- [Color System](#color-system)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Neon Effects](#neon-effects)
- [Animations](#animations)
- [Component Utilities](#component-utilities)
- [Usage Examples](#usage-examples)

## Color System

### Neon Colors

LEDream's signature neon color palette, designed for dark backgrounds with WCAG AA compliance.

```tsx
// Red/Orange
bg-neon-red        // #FF3D00
bg-neon-red-light  // #FF6B35

// Blue
bg-neon-blue       // #00F0FF
bg-neon-blue-light // #0099FF

// Purple
bg-neon-purple     // #BF00FF
bg-neon-purple-light // #9D4EDD

// Magenta/Pink
bg-neon-magenta    // #FF10F0
bg-neon-magenta-light // #FF006E

// Green (Accent)
bg-neon-green      // #39FF14
```

### Dark Backgrounds

Primary dark backgrounds for the LEDream aesthetic.

```tsx
bg-dark-black      // #0A0A0A - Primary background
bg-dark-navy       // #1A1A2E - Secondary background
bg-dark-navy-light // #16213E - Lighter navy
bg-dark-brick      // #1A0F0F - Textured background
bg-dark-brick-light // #2D1B1B - Lighter brick
```

### Neutral Colors

```tsx
bg-neutral-light-gray // #E8E8E8
text-neutral-white    // #FFFFFF
```

### Color Usage Guidelines

- **Primary Background**: Use `bg-dark-black` for main page backgrounds
- **Secondary Backgrounds**: Use `bg-dark-navy` or `bg-dark-brick` for cards and sections
- **Text on Dark**: Always use `text-neutral-white` for readability
- **Neon Accents**: Use neon colors sparingly for CTAs, highlights, and key elements
- **WCAG Compliance**: All color combinations meet WCAG AA standards

## Typography

### Font Families

- **Headings**: Montserrat (Bold/Black weights)
- **Body**: Inter (Regular/Medium/Semibold weights)

### Font Scale

```tsx
// Heading sizes (with built-in line-height and weight)
<h1 className="text-h1">Heading 1</h1>  // 3rem (48px), weight 900
<h2 className="text-h2">Heading 2</h2>  // 2.5rem (40px), weight 700
<h3 className="text-h3">Heading 3</h3>  // 1.875rem (30px), weight 700
<h4 className="text-h4">Heading 4</h4>  // 1.5rem (24px), weight 600
<h5 className="text-h5">Heading 5</h5>  // 1.25rem (20px), weight 600
<h6 className="text-h6">Heading 6</h6>  // 1.125rem (18px), weight 600

// Body text
<p className="text-base">Body text</p>    // 1rem (16px)
<p className="text-sm">Small text</p>     // 0.875rem (14px)
<p className="text-xs">Extra small</p>    // 0.75rem (12px)
```

### Font Utilities

```tsx
font-heading  // Montserrat for headings
font-body     // Inter for body text
```

## Spacing & Layout

### Container Widths

```tsx
// Standard container (1280px max-width)
<div className="container-standard">
  Content here
</div>

// Wide container (1536px max-width)
<div className="container-wide">
  Content here
</div>
```

### Section Padding

```tsx
// Responsive section padding (64px mobile, 96px desktop)
<section className="section-padding">
  Section content
</section>
```

### Grid Systems

```tsx
// 2-column grid (1 col mobile, 2 cols desktop)
<div className="grid-2-col">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// 3-column grid (1 col mobile, 2 cols tablet, 3 cols desktop)
<div className="grid-3-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// 4-column grid
<div className="grid-4-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

## Neon Effects

### Text Glow Effects

```tsx
// Subtle glow (recommended for body text)
<p className="text-neon-red text-shadow-neon-subtle">
  Subtle neon text
</p>

// Medium glow (for headings)
<h2 className="text-neon-blue text-shadow-neon-medium">
  Medium glow heading
</h2>

// Strong glow (for hero elements)
<h1 className="text-neon-purple text-shadow-neon-strong">
  Strong glow hero
</h1>

// Pre-defined neon text classes
<p className="neon-text-red">Red neon text</p>
<p className="neon-text-blue">Blue neon text</p>
<p className="neon-text-purple">Purple neon text</p>
<p className="neon-text-magenta">Magenta neon text</p>
<p className="neon-text-green">Green neon text</p>
<p className="neon-text-multicolor">Animated multicolor text</p>
```

### Box Shadow Glows

```tsx
// Subtle box glow
<div className="shadow-neon-subtle border-neon-red">
  Subtle glow box
</div>

// Medium box glow
<div className="shadow-neon-medium border-neon-blue">
  Medium glow box
</div>

// Strong box glow
<div className="shadow-neon-strong border-neon-purple">
  Strong glow box
</div>

// Color-specific glows
<div className="shadow-neon-red">Red glow</div>
<div className="shadow-neon-blue">Blue glow</div>
<div className="shadow-neon-purple">Purple glow</div>
```

### Border Glows

```tsx
<div className="neon-border-red">
  Red neon border
</div>

<div className="neon-border-blue">
  Blue neon border
</div>

<div className="neon-border-purple">
  Purple neon border
</div>
```

## Animations

### Available Animations

```tsx
// Pulsing neon glow (subtle, 2s loop)
<div className="animate-pulse-neon">
  Pulsing element
</div>

// Glow pulse animation (text shadow)
<h2 className="animate-glow-pulse text-neon-red">
  Pulsing glow text
</h2>

// Gradient shift (for backgrounds)
<div className="bg-gradient-neon-rainbow animate-gradient-shift">
  Animated gradient
</div>

// Fade in on scroll
<div className="animate-fade-in">
  Fade in element
</div>

// Marquee scroll
<div className="animate-marquee-scroll">
  Scrolling marquee
</div>
```

### Transition Durations

```tsx
// Fast transitions (150ms)
<div className="transition-all duration-fast">
  Fast transition
</div>

// Normal transitions (300ms) - default
<div className="transition-all duration-normal">
  Normal transition
</div>

// Slow transitions (500ms)
<div className="transition-all duration-slow">
  Slow transition
</div>
```

## Component Utilities

### Section Backgrounds

```tsx
// Dark black section
<section className="section-dark section-padding">
  Dark section
</section>

// Navy section
<section className="section-navy section-padding">
  Navy section
</section>

// Brick texture section
<section className="section-brick section-padding">
  Brick section
</section>
```

### Cards

```tsx
// Standard neon card
<div className="card-neon">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

// Color-specific neon cards
<div className="card-neon-red">
  Red neon card
</div>

<div className="card-neon-blue">
  Blue neon card
</div>

<div className="card-neon-purple">
  Purple neon card
</div>
```

### Buttons

```tsx
// Red neon button
<button className="btn-neon-red">
  Click Me
</button>

// Blue neon button
<button className="btn-neon-blue">
  Click Me
</button>

// Purple neon button
<button className="btn-neon-purple">
  Click Me
</button>

// Outline neon button
<button className="btn-neon-outline border-neon-red text-neon-red">
  Outline Button
</button>
```

### Brick Wall Texture

```tsx
<div className="bg-brick-wall">
  Brick wall texture background
</div>
```

### Marquee Light Effect

```tsx
<div className="marquee-light">
  Content with marquee light effect
</div>
```

## Usage Examples

### Hero Section

```tsx
<section className="section-dark section-padding">
  <div className="container-standard">
    <h1 className="text-h1 neon-text-multicolor animate-glow-pulse">
      LEDream
    </h1>
    <p className="text-xl text-neutral-white mt-4">
      Your psychedelic neon experience
    </p>
    <button className="btn-neon-red mt-8">
      Get Started
    </button>
  </div>
</section>
```

### Feature Cards

```tsx
<section className="section-navy section-padding">
  <div className="container-standard">
    <h2 className="text-h2 text-neutral-white mb-12">Features</h2>
    <div className="grid-3-col">
      <div className="card-neon-red">
        <h3 className="text-h3 neon-text-red mb-4">Feature 1</h3>
        <p className="text-neutral-white">Description</p>
      </div>
      <div className="card-neon-blue">
        <h3 className="text-h3 neon-text-blue mb-4">Feature 2</h3>
        <p className="text-neutral-white">Description</p>
      </div>
      <div className="card-neon-purple">
        <h3 className="text-h3 neon-text-purple mb-4">Feature 3</h3>
        <p className="text-neutral-white">Description</p>
      </div>
    </div>
  </div>
</section>
```

### Gradient Background

```tsx
<div className="bg-gradient-neon-rainbow animate-gradient-shift p-8 rounded-lg">
  <h2 className="text-h2 text-dark-black">
    Animated Gradient Background
  </h2>
</div>
```

## Performance Considerations

- All animations use `transform` and `opacity` for GPU acceleration
- Reduced motion support is built-in (respects `prefers-reduced-motion`)
- Use `gpu-accelerated` utility class for performance-critical animations
- Neon effects use CSS filters and shadows efficiently

## Accessibility

- All color combinations meet WCAG AA contrast requirements
- Reduced motion preferences are respected
- Semantic HTML structure is maintained
- Focus states are clearly visible

## Design Tokens

For programmatic access to design tokens, import from:

```tsx
import { designTokens } from '@/lib/design-tokens';
```

This provides TypeScript-safe access to all color values, typography scales, spacing, and animation durations.

