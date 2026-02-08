---
name: "Generate Olyx Documentation"
description: "Generate clean, developer-focused documentation for Overview and Handbook sections by analyzing project structure, design tokens, and configuration files"
tools: [
  "read",
  "edit",
  "search",
  "web",
]
---

## Goal

Generate comprehensive documentation for Olyx's Overview and Handbook sections. Write clear, concise content that developers can use immediately without chaos or fluff.

---

## Input

Section type:
- **Overview**: "introduction" | "get-started" | "roadmap"
- **Handbook**: "styling" | "colors" | "typography" | "theming" | "animation"

---

## Evidence Priority (STRICT)

1. **Design tokens**: `apps/web/src/styles/tokens.css` or `packages/react/src/tokens.css`
2. **Color system**: `apps/web/src/styles/colors.css` or similar
3. **Typography**: `apps/web/src/styles/typography.css` or font configuration
4. **Theme config**: `tailwind.config.js`, `theme.config.ts`, or CSS custom properties
5. **Animation**: CSS transition/animation definitions
6. **Project README**: `README.md`, `CONTRIBUTING.md`
7. **Package.json**: Dependencies, scripts, metadata

Abort if critical files don't exist for requested section.

---

## Overview Sections

### Introduction

**Purpose**: Explain what Olyx is, why it exists, and who should use it.

**Structure**:
```mdx
---
title: Introduction
description: A modern, accessible React component library
---

## What is Olyx?

{1-2 sentences: what it is}

Olyx is a modern React component library built on Base UI primitives, designed for developers who need accessible, customizable components without the bloat.

## Key Features

- **Accessible by default** — Built on Base UI with WCAG 2.1 AA compliance
- **Lightweight** — Minimal dependencies, tree-shakeable
- **Customizable** — CSS custom properties and data attributes
- **Modern stack** — React 19, Next.js 16, TypeScript
- **Developer experience** — Copy/paste components, no package lock-in

## When to Use Olyx

{Bullet list: ideal use cases}

- Building web applications with React 19+
- Need accessible components out of the box
- Want full control over styling
- Prefer copy/paste over npm dependencies

## Stack

| Technology      | Version | Purpose                  |
| --------------- | ------- | ------------------------ |
| React           | 19      | UI framework             |
| Next.js         | 16      | App framework            |
| Base UI         | latest  | Headless primitives      |
| TypeScript      | 5.x     | Type safety              |
| Bun             | 1.3.4   | Package manager & runtime|

## License

{License info from package.json}
```

**Data Sources**:
- Project README for description
- package.json for tech stack versions
- Repository structure for features

---

### Get Started

**Purpose**: Guide developers from zero to first component in 5 minutes.

**Structure**:
```mdx
---
title: Get Started
description: Install Olyx and add your first component in minutes
---

## Prerequisites

- Node.js 18+ or Bun 1.3+
- React 19+
- Next.js 16+ (App Router)

## Installation

### Option 1: CLI (Recommended)

```bash
npx shadcn@latest init
```

Select `@olyx` when prompted for registry.

### Option 2: Manual Setup

<Steps>

<Step>Install dependencies</Step>

```bash
npm install @base-ui/react
```

<Step>Configure path aliases in `tsconfig.json`</Step>

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

<Step>Copy component code</Step>

Browse the [Components](/docs/components) section and copy components you need.

</Steps>

## Add Your First Component

### Using CLI

```bash
npx shadcn@latest add @olyx/button
```

### Manual Copy

1. Go to [Button component](/docs/components/button)
2. Click "Manual" tab in Installation section
3. Copy the code to `components/ui/button.tsx`
4. Import and use:

```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}
```

## Project Structure

```
your-app/
├── src/
│   ├── components/
│   │   └── ui/           # Olyx components go here
│   │       ├── button.tsx
│   │       └── accordion.tsx
│   ├── app/              # Next.js app directory
│   └── styles/           # Global styles
```

## Next Steps

- Browse [Components](/docs/components) to see what's available
- Read [Styling](/docs/handbook/styling) to customize appearance
- Learn about [Theming](/docs/handbook/theming) for dark mode
```

**Data Sources**:
- package.json for peer dependencies
- Project structure for setup requirements
- Registry configuration

---

### Roadmap

**Purpose**: Show what's planned, what's in progress, and how to contribute.

**Structure**:
```mdx
---
title: Roadmap
description: Upcoming features and components
---

## Current Version

**v{version}** — {release date}

{Brief summary of current state}

## Completed

- ✅ Core component library (20+ components)
- ✅ Base UI integration
- ✅ Dark mode support
- ✅ CLI tooling
- ✅ Documentation site

## In Progress

### Q{quarter} {year}

- 🚧 **Form Components** — FormField, FormLabel, FormMessage
- 🚧 **Data Components** — Table, DataGrid
- 🚧 **Charts** — Integration with recharts

### Planned

- **Accessibility audit** — WCAG 2.2 AAA compliance
- **Animation library** — Pre-built transitions
- **Figma kit** — Design tokens sync
- **Testing utilities** — Component test helpers

## Component Backlog

{List from issues or tracking document}

- [ ] Calendar
- [ ] Date Picker
- [ ] Command Menu
- [ ] Combobox
- [ ] Data Table
- [ ] Carousel
- [ ] Pagination

## Community Requests

Track feature requests on [GitHub Discussions](link).

Top requests:
1. Vue.js port
2. Svelte integration
3. More chart components

## How to Contribute

See [Contributing Guide](link) for:
- Component proposals
- Bug reports
- Pull request process
- Coding standards
```

**Data Sources**:
- package.json version
- GitHub issues/projects
- CHANGELOG or release notes
- Community feedback

---

## Handbook Sections

### Styling

**Purpose**: Explain the styling approach and how to customize components.

**Structure**:
```mdx
---
title: Styling
description: How styling works in Olyx
---

## Approach

Olyx uses **CSS with custom properties** and **data attributes** for styling. No Tailwind classes in component code.

## Data Attributes

Components use data attributes for variants:

```tsx
<Button variant="outline" size="lg">
  {/* Renders as: */}
  <button data-variant="outline" data-size="lg">
</button>
```

```css
/* Component styles */
[data-ui="button"] {
  /* Base styles */
}

[data-ui="button"][data-variant="outline"] {
  /* Outline variant */
}

[data-ui="button"][data-size="lg"] {
  /* Large size */
}
```

## Custom Properties

All components use CSS custom properties for theming:

```css
[data-ui="button"] {
  background: var(--color-primary);
  color: var(--color-on-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-2) var(--spacing-4);
}
```

## Customization Methods

### Method 1: Override Custom Properties

```css
/* globals.css */
:root {
  --color-primary: #your-color;
  --radius-md: 0.5rem;
}
```

### Method 2: Target Data Attributes

```css
/* globals.css */
[data-ui="button"][data-variant="primary"] {
  background: linear-gradient(to right, #667eea, #764ba2);
}
```

### Method 3: Component-Level Styles

```tsx
<Button
  style={{
    '--color-primary': '#custom',
  } as React.CSSProperties}
>
  Custom Button
</Button>
```

## File Structure

Each component has separate files:

```
packages/react/src/button/
├── index.tsx        # Component logic
└── style.css        # Component styles
```

Import both when copying manually:

```tsx
import { Button } from '@/components/ui/button'
import '@/components/ui/button/style.css'
```

## Best Practices

- **Use custom properties** for theme-level changes
- **Use data attributes** for variant-specific styles
- **Avoid inline styles** unless dynamic values
- **Keep specificity low** for easier overrides
```

**Data Sources**:
- Component CSS files for patterns
- tokens.css for custom property names
- Component index.tsx for data attribute usage

---

### Colors

**Purpose**: Document color system and how to use/customize it.

**Structure**:
```mdx
---
title: Colors
description: Color system and customization
---

## Color Tokens

Olyx uses a semantic color system built on CSS custom properties.

### Surface Colors

{Extract from colors.css or tokens.css}

| Token                      | Light Mode | Dark Mode | Usage              |
| -------------------------- | ---------- | --------- | ------------------ |
| `--color-surface`          | #ffffff    | #1a1a1a   | Background         |
| `--color-surface-variant`  | #f5f5f5    | #2a2a2a   | Cards, panels      |
| `--color-on-surface`       | #000000    | #ffffff   | Text on surface    |

### Brand Colors

| Token               | Value   | Usage              |
| ------------------- | ------- | ------------------ |
| `--color-primary`   | #3b82f6 | Primary actions    |
| `--color-secondary` | #8b5cf6 | Secondary actions  |
| `--color-accent`    | #06b6d4 | Highlights         |

### Semantic Colors

| Token             | Usage                    |
| ----------------- | ------------------------ |
| `--color-success` | Success states, positive |
| `--color-warning` | Warning states           |
| `--color-error`   | Error states, destructive|
| `--color-info`    | Informational            |

## Color Scales

Each color has a scale (50-900):

```css
--color-primary-50: #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
/* ... */
--color-primary-900: #1e3a8a;
```

## Dark Mode

Colors automatically adapt to `data-theme="dark"`:

```tsx
<html data-theme="dark">
```

```css
:root {
  --color-surface: #ffffff;
}

[data-theme="dark"] {
  --color-surface: #1a1a1a;
}
```

## Customization

### Full Theme

```css
/* globals.css */
:root {
  --color-primary: #your-brand;
  --color-primary-50: /* light variant */;
  --color-primary-900: /* dark variant */;
}
```

### Component-Specific

```css
[data-ui="button"][data-variant="primary"] {
  background: var(--color-primary-600);
  color: white;
}

[data-theme="dark"] [data-ui="button"][data-variant="primary"] {
  background: var(--color-primary-400);
}
```

## Accessibility

All color combinations meet WCAG 2.1 AA contrast requirements:

- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

Test your custom colors with a [contrast checker](https://webaim.org/resources/contrastchecker/).
```

**Data Sources**:
- colors.css or color token definitions
- Theme configuration
- Component CSS for color usage

---

### Typography

**Purpose**: Document typography system and usage.

**Structure**:
```mdx
---
title: Typography
description: Type scale, fonts, and text styling
---

## Fonts

{Extract from typography.css or font config}

### Font Families

```css
--font-sans: system-ui, -apple-system, sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Loading

```tsx
// app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' })
```

## Type Scale

| Token              | Size    | Line Height | Usage              |
| ------------------ | ------- | ----------- | ------------------ |
| `--font-size-xs`   | 0.75rem | 1rem        | Captions, labels   |
| `--font-size-sm`   | 0.875rem| 1.25rem     | Small text         |
| `--font-size-base` | 1rem    | 1.5rem      | Body text          |
| `--font-size-lg`   | 1.125rem| 1.75rem     | Large text         |
| `--font-size-xl`   | 1.25rem | 1.75rem     | Headings           |
| `--font-size-2xl`  | 1.5rem  | 2rem        | Section headings   |
| `--font-size-3xl`  | 1.875rem| 2.25rem     | Page titles        |

## Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## Usage

### In Components

```tsx
<p style={{ fontSize: 'var(--font-size-sm)' }}>
  Small text
</p>
```

### In CSS

```css
.heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

## Customization

```css
/* globals.css */
:root {
  --font-sans: 'Your Font', system-ui, sans-serif;
  --font-size-base: 1.125rem; /* 18px */
}
```

## Responsive Typography

Use CSS clamp for fluid scaling:

```css
--font-size-display: clamp(2rem, 5vw, 4rem);
```

## Best Practices

- Use `--font-size-base` for body text
- Maintain 1.5-1.6 line height for readability
- Use system fonts for performance
- Test at 200% zoom for accessibility
```

**Data Sources**:
- typography.css or font configuration
- tokens.css for type scale
- Font loader in app/layout.tsx

---

### Theming

**Purpose**: Explain dark mode and custom theme creation.

**Structure**:
```mdx
---
title: Theming
description: Dark mode and custom themes
---

## Built-in Themes

Olyx includes light and dark themes by default.

### Switching Themes

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
```

### Dynamic Switching

```tsx
'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  )
}
```

## Theme Structure

{Extract from tokens.css}

```css
:root {
  /* Light theme (default) */
  --color-surface: #ffffff;
  --color-on-surface: #000000;
}

[data-theme="dark"] {
  /* Dark theme */
  --color-surface: #1a1a1a;
  --color-on-surface: #ffffff;
}
```

## Creating Custom Themes

### Single Custom Theme

```css
/* themes/brand.css */
[data-theme="brand"] {
  --color-primary: #ff6b6b;
  --color-surface: #ffe5e5;
  --color-on-surface: #4a0000;
  --radius-md: 1rem;
}
```

```tsx
<html data-theme="brand">
```

### Multiple Themes

```css
/* themes/themes.css */
[data-theme="ocean"] {
  --color-primary: #0077be;
  --color-surface: #e6f3ff;
}

[data-theme="forest"] {
  --color-primary: #2d5016;
  --color-surface: #f0f8e8;
}
```

## System Preference

Detect user's OS preference:

```tsx
'use client'

import { useEffect, useState } from 'react'

export function useSystemTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  return theme
}
```

## Best Practices

- Test both themes for contrast
- Use semantic tokens (not direct colors)
- Transition smoothly between themes
- Persist user preference in localStorage
- Support system preference as default

## Token Reference

All themeable tokens:

{Table of all CSS custom properties}

| Category   | Tokens                                        |
| ---------- | --------------------------------------------- |
| Colors     | `--color-*`                                   |
| Spacing    | `--spacing-*`                                 |
| Radius     | `--radius-*`                                  |
| Typography | `--font-*`, `--line-height-*`                 |
| Shadows    | `--shadow-*`                                  |
| Transitions| `--transition-*`                              |
```

**Data Sources**:
- tokens.css for all custom properties
- Theme switching implementation
- Dark mode configuration

---

### Animation

**Purpose**: Document animation system and usage patterns.

**Structure**:
```mdx
---
title: Animation
description: Transitions, animations, and motion
---

## Animation Tokens

{Extract from tokens.css or animation.css}

### Duration

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;
```

### Easing

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Presets

```css
--transition-colors: color var(--transition-base) var(--ease-out),
                     background-color var(--transition-base) var(--ease-out);

--transition-transform: transform var(--transition-base) var(--ease-out);

--transition-all: all var(--transition-base) var(--ease-in-out);
```

## Usage

### In Components

```css
[data-ui="button"] {
  transition: var(--transition-colors);
}

[data-ui="button"]:hover {
  background-color: var(--color-primary-600);
}
```

### Custom Animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn var(--transition-base) var(--ease-out);
}
```

## Common Patterns

### Enter/Exit

```tsx
'use client'

import { useState } from 'react'

export function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'var(--transition-all)',
      }}
    >
      {children}
    </div>
  )
}
```

### Hover States

```css
[data-ui="card"] {
  transition: var(--transition-transform);
}

[data-ui="card"]:hover {
  transform: translateY(-2px);
}
```

### Loading States

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

## Accessibility

### Respect Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### In React

```tsx
'use client'

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const listener = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}
```

## Performance

- Use `transform` and `opacity` for 60fps animations
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly (only during animation)
- Prefer CSS transitions over JavaScript animations

## Best Practices

- Keep animations under 300ms for UI interactions
- Use consistent easing curves across the app
- Test with reduced motion enabled
- Animate enter/exit states for better UX
- Don't animate on every interaction
```

**Data Sources**:
- tokens.css for animation variables
- Component CSS for animation usage
- Accessibility configuration

---

## Output Format

All documentation files use MDX with frontmatter:

```mdx
---
title: {Section Title}
description: {One-line description}
---

{Content}
```

Save to:
- Overview: `apps/web/content/docs/(root)/{section}.mdx`
- Handbook: `apps/web/content/docs/handbook/{section}.mdx`

---

## Quality Checklist

- [ ] Read all relevant source files before writing
- [ ] Extract actual values from code (no placeholders)
- [ ] Use tables for reference data
- [ ] Include code examples with syntax highlighting
- [ ] No marketing fluff or verbose explanations
- [ ] Link to external resources where appropriate
- [ ] Test all code examples for accuracy
- [ ] Follow existing MDX component patterns
- [ ] Keep sections under 500 lines
- [ ] Use consistent terminology across docs

---

## Prohibited

- Lorem ipsum or placeholder content
- Verbose explanations of obvious concepts
- Marketing language ("amazing", "powerful", "revolutionary")
- Incomplete code examples
- Outdated version numbers or deprecated APIs
- Copying from other libraries without attribution
- Missing accessibility considerations
- Inventing features that don't exist