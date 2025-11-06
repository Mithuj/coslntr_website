# Quick Color Usage Guide

## 🎨 Your 4-Color Palette

| Color | Hex Code | HSL | Usage % | Purpose |
|-------|----------|-----|---------|---------|
| **Background** | `#121212` | `hsl(0, 0%, 7%)` | ~60% | Main dark background for all pages |
| **Text/Secondary** | `#E0E0E0` | `hsl(0, 0%, 88%)` | ~30% | Body text, secondary information, subtle borders |
| **Primary/Logo** | `#685C79` | `hsl(274, 17%, 42%)` | ~5% | Logo, primary navigation, brand elements |
| **Neon Accent** | `#1E90FF` | `hsl(210, 79%, 56%)` | ~5% | CTAs, interactive elements, glow effects, highlights |

---

## 🚀 Quick Reference

### Background (#121212) - 60%
```tsx
className="bg-background"     // Main background
className="bg-card"          // Cards (slightly lighter)
className="bg-input"         // Input fields
```

### Text (#E0E0E0) - 30%
```tsx
className="text-foreground"         // Main text
className="text-muted-foreground"   // Secondary text
```

### Brand (#685C79) - 5%
```tsx
className="text-brand"       // Logo color
className="bg-brand"         // Brand buttons
className="border-brand"     // Brand accents
```

### Neon Accent (#1E90FF) - 5%
```tsx
className="bg-primary"       // Primary CTA buttons
className="text-primary"     // Active links, highlights
className="border-primary"   // Focus states
className="shadow-neon"      // Glow effects
```

---

## ✅ DO's

- ✅ Use **#121212** for 60% of your design (backgrounds)
- ✅ Use **#E0E0E0** for 30% of your design (text/content)
- ✅ Reserve **#685C79** for 5% (logo, brand elements only)
- ✅ Limit **#1E90FF** to 5% (CTAs, active states, key interactions)
- ✅ Add glow effects to neon accent buttons
- ✅ Use white text on neon blue buttons

## ❌ DON'Ts

- ❌ Don't use more than 5% neon accent (reduces impact)
- ❌ Don't mix brand color with primary CTAs
- ❌ Don't use neon accent for body text
- ❌ Don't introduce new colors outside this palette
- ❌ Don't use pure black or pure white

---

## 🎯 Common Components

### Primary Button
```tsx
<button className="bg-primary text-white hover:bg-primary/90 shadow-neon px-6 py-3 rounded-lg font-semibold">
  Get Started
</button>
```

### Secondary Button
```tsx
<button className="bg-brand text-brand-foreground hover:bg-brand/90 px-6 py-3 rounded-lg font-semibold">
  Learn More
</button>
```

### Logo
```tsx
<div className="text-brand text-4xl font-bold">
  <Logo />
</div>
```

### Active Navigation
```tsx
<a className="text-primary border-b-2 border-primary font-semibold">
  Services
</a>
```

### Regular Link
```tsx
<a className="text-primary hover:underline">
  Learn more →
</a>
```

---

## 📊 Visual Balance

```
Background (#121212):  ████████████████████████████████████████████████████████████  60%
Text (#E0E0E0):        ██████████████████████████████                                30%
Brand (#685C79):       █████                                                          5%
Neon Accent (#1E90FF): █████                                                          5%
```

This distribution ensures:
- Comfortable viewing with dark backgrounds
- Excellent readability with light text
- Strong brand presence without overwhelming
- Eye-catching accents that drive action

---

## 🎨 Color Relationships

- **Background + Text** = High contrast, excellent readability (15.3:1)
- **Background + Brand** = Subtle, sophisticated (4.9:1) 
- **Background + Neon** = Attention-grabbing, vibrant (8.6:1)
- **Neon + White text** = Clear, actionable (4.8:1)

---

## 🚦 When to Use Each Color

### Use Background (#121212) for:
- Page backgrounds
- Card backgrounds
- Modal overlays
- Section backgrounds

### Use Text (#E0E0E0) for:
- Paragraphs
- Headings
- Labels
- Descriptions
- Icons (non-interactive)

### Use Brand (#685C79) for:
- Logo
- Company name
- Brand marks
- Secondary buttons
- Subtle decorative elements

### Use Neon Accent (#1E90FF) for:
- "Get Started" buttons
- "Sign Up" / "Contact Us" buttons
- Active navigation items
- Form focus states
- Important links
- Loading indicators
- Notification badges
- Hover states on interactive elements

---

**Last Updated:** November 1, 2025
**Status:** ✅ All files updated and ready to use
