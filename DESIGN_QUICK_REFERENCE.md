# LEDream Design System - Quick Reference

Quick reference guide for common design patterns and utilities.

## Colors

### Backgrounds
```tsx
bg-dark-black      // Primary background
bg-dark-navy       // Secondary background
bg-dark-brick      // Textured background
bg-neon-red        // Neon red
bg-neon-blue       // Neon blue
bg-neon-purple     // Neon purple
bg-neon-magenta    // Neon magenta
bg-neon-green      // Neon green (accent)
```

### Text Colors
```tsx
text-neutral-white    // White text (primary)
text-neon-red         // Red neon text
text-neon-blue        // Blue neon text
text-neon-purple      // Purple neon text
text-neon-magenta     // Magenta neon text
text-neon-green       // Green neon text
```

## Typography

```tsx
// Headings (Montserrat)
<h1 className="text-h1">Heading 1</h1>
<h2 className="text-h2">Heading 2</h2>
<h3 className="text-h3">Heading 3</h3>

// Body (Inter)
<p className="text-base">Body text</p>
<p className="text-sm">Small text</p>
```

## Layout

```tsx
// Containers
<div className="container-standard">...</div>
<div className="container-wide">...</div>

// Sections
<section className="section-dark section-padding">...</section>
<section className="section-navy section-padding">...</section>
<section className="section-brick section-padding">...</section>

// Grids
<div className="grid-2-col">...</div>
<div className="grid-3-col">...</div>
<div className="grid-4-col">...</div>
```

## Neon Effects

### Text Glow
```tsx
<p className="neon-text-red">Red neon</p>
<p className="neon-text-blue">Blue neon</p>
<p className="neon-text-purple">Purple neon</p>
<p className="neon-text-multicolor">Rainbow neon</p>

// With shadow utilities
<p className="text-neon-red text-shadow-neon-subtle">Subtle</p>
<p className="text-neon-blue text-shadow-neon-medium">Medium</p>
<p className="text-neon-purple text-shadow-neon-strong">Strong</p>
```

### Box Glow
```tsx
<div className="shadow-neon-red">Red glow</div>
<div className="shadow-neon-blue">Blue glow</div>
<div className="shadow-neon-purple">Purple glow</div>
```

### Borders
```tsx
<div className="neon-border-red">Red border</div>
<div className="neon-border-blue">Blue border</div>
<div className="neon-border-purple">Purple border</div>
```

## Components

### Cards
```tsx
<div className="card-neon">Standard card</div>
<div className="card-neon-red">Red card</div>
<div className="card-neon-blue">Blue card</div>
<div className="card-neon-purple">Purple card</div>
```

### Buttons
```tsx
<button className="btn-neon-red">Red button</button>
<button className="btn-neon-blue">Blue button</button>
<button className="btn-neon-purple">Purple button</button>
<button className="btn-neon-outline border-neon-red text-neon-red">
  Outline button
</button>
```

## Animations

```tsx
<div className="animate-pulse-neon">Pulsing</div>
<div className="animate-glow-pulse">Glow pulse</div>
<div className="animate-gradient-shift">Gradient shift</div>
<div className="animate-fade-in">Fade in</div>
```

## Gradients

```tsx
<div className="bg-gradient-neon-red-blue">Red to Blue</div>
<div className="bg-gradient-neon-purple-magenta">Purple to Magenta</div>
<div className="bg-gradient-neon-rainbow">Rainbow</div>
```

## Special Effects

```tsx
<div className="bg-brick-wall">Brick texture</div>
<div className="marquee-light">Marquee effect</div>
```

## Common Patterns

### Hero Section
```tsx
<section className="section-dark section-padding">
  <div className="container-standard text-center">
    <h1 className="text-h1 neon-text-multicolor animate-glow-pulse">
      LEDream
    </h1>
    <p className="text-xl text-neutral-white">Subtitle</p>
    <button className="btn-neon-red mt-8">CTA</button>
  </div>
</section>
```

### Feature Grid
```tsx
<section className="section-navy section-padding">
  <div className="container-standard">
    <h2 className="text-h2 text-neutral-white mb-12">Features</h2>
    <div className="grid-3-col">
      <div className="card-neon-red">
        <h3 className="text-h3 neon-text-red">Feature</h3>
        <p className="text-neutral-white">Description</p>
      </div>
    </div>
  </div>
</section>
```

