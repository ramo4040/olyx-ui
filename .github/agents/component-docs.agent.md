---
name: "Generate Olyx Component Documentation"
description: "Generate complete component docs by analyzing source, fetching Base UI API, creating unique particles with inline CSS, and writing MDX"
tools: [
  "read",
  "edit",
  "search",
  "web"
]
---

## Goal

Generate complete documentation for specified Olyx component. Write particles and MDX exactly once per run.

---

## Input

Component name (e.g., "button", "accordion", "dialog")

---

## Evidence Priority (STRICT)

1. Component source: `packages/react/src/{component}/index.tsx`
2. Component styles: `packages/react/src/{component}/style.css`
3. Base UI docs: `https://base-ui.com/react/components/{base-ui-component}`

Abort if source files don't exist.

---

## Component Analysis

From `index.tsx`:
- Exported components (main + sub-components)
- Base UI imports and usage
- Props interfaces with JSDoc
- Data attributes (data-variant, data-size, data-state)
- Supported variants/sizes/states

From `style.css`:
- CSS custom properties
- Data attribute selectors
- Animation/transition patterns

From Base UI docs:
- API reference (props, methods)
- Accessibility features
- Keyboard interactions

---

## Particle Rules (NON-NEGOTIABLE)

1. **Naming**: `p-{component}-{number}.tsx` (start at 1)
2. **Count**: Based on component features (each variant/size/state = 1 particle)
3. **Structure**:
   - 'use client' directive (first line)
   - Import from @olyx/react only
   - **Minimal inline CSS** — only `display: flex`, `gap`, `alignItems` when needed
   - **Every particle shows ONE thing** — one variant, one size, one state
   - Realistic labels (no "Item 1", "Lorem ipsum")

### Code Readability (CRITICAL)

Particles must be **clean and copyable**. Developers will copy these examples.

**Good — Clean, minimal:**
```tsx
'use client'

import { Button } from '@olyx/react/button'

export default function Particle() {
  return <Button variant="outline">Button</Button>
}
```

**Good — Multiple items with minimal layout:**
```tsx
'use client'

import { Button } from '@olyx/react/button'
import { ArrowRightIcon } from 'lucide-react'

export default function Particle() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant="outline">Button</Button>
      <Button variant="outline" asIcon aria-label="Next">
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
```

**Bad — Verbose inline styles, unreadable:**
```tsx
// ❌ NEVER do this
<div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem'
}}>
  <div>
    <h3 style={{
      margin: '0 0 1rem 0',
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: 'var(--color-on-surface-variant)'
    }}>
      Primary Variant
    </h3>
    ...
  </div>
</div>
```

### First Particle: Default Preview

The first particle (`p-{component}-1`) shows the **default component** — simple and representative.

**Rules:**
- **Small components (button, badge, switch):** Show 1-2 instances max. Text button + icon button is fine.
- **Large components (accordion, dialog, menu):** Show ONE complete example with realistic content.
- No headers, no descriptions, no variant showcases — just the component.

**Examples:**

Button (small component):
```tsx
export default function Particle() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant="outline">Button</Button>
      <Button variant="outline" asIcon aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```

Accordion (large component):
```tsx
export default function Particle() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your theme.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

Dialog (large component):
```tsx
export default function Particle() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile.</DialogDescription>
        </DialogHeader>
        <DialogPanel>...</DialogPanel>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  )
}
```

### Subsequent Particles: One Feature Each

Each particle after the first demonstrates **exactly one thing**:

- `p-button-2`: Outline variant → `<Button variant="outline">Outline</Button>`
- `p-button-3`: Secondary variant → `<Button variant="secondary">Secondary</Button>`
- `p-button-4`: Ghost variant → `<Button variant="ghost">Ghost</Button>`
- `p-button-5`: Destructive variant → `<Button variant="destructive">Destructive</Button>`
- `p-button-6`: Small size → `<Button size="sm">Small</Button>`
- `p-button-7`: Large size → `<Button size="lg">Large</Button>`
- `p-button-8`: With icon → `<Button><IconPlus /> Add Item</Button>`
- `p-button-9`: Icon only → `<Button size="icon"><IconSettings /></Button>`
- `p-button-10`: Disabled → `<Button disabled>Disabled</Button>`
- `p-button-11`: Loading → `<Button disabled><Spinner /> Loading</Button>`

**The MDX section title describes what it shows. The particle just shows it.**

### Allowed Inline Styles

Only these properties, only when necessary:

```tsx
// Layout for multiple items
style={{ display: 'flex', gap: '0.5rem' }}
style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
```

**Never use:**
- `padding`, `margin` (except `gap`)
- `fontSize`, `fontWeight`, `letterSpacing`
- `color`, `background`
- `textTransform`, `border`, `borderRadius`
- Any decorative styling

---

## MDX Structure (EXACT)

```mdx
---
title: {ComponentName}
description: {One sentence: what it does}

links:
  doc: https://base-ui.com/react/components/{base-ui-component}#api-reference
---

<ComponentPreview name="p-{component}-1" />

## Installation

<CodeTabs>

<TabsList>
  <TabsTab value="cli">CLI</TabsTab>
  <TabsTab value="manual">Manual</TabsTab>
</TabsList>

<TabsPanel value="cli">

```bash
npx shadcn@latest add @olyx/{component}
```

</TabsPanel>

<TabsPanel value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @base-ui/react
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="{component}" title="components/ui/{component}.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsPanel>

</CodeTabs>

## Usage

```tsx
import { {MainComponent} } from "@/components/ui/{component}"
```

```tsx
<{MainComponent}>Content</{MainComponent}>
```

## API Reference

{Component API sections — see API Reference Rules}

## Examples

### {VariantName}

<ComponentPreview name="p-{component}-2" />

### {AnotherVariantName}

<ComponentPreview name="p-{component}-3" />

{One particle per variant/size/state — title describes it, particle shows it}
```

### Description Pattern

Short, no fluff:
- "A button or a component that looks like a button."
- "A vertically stacked set of interactive headings."
- "A popup that opens on top of the entire page."

---

## API Reference Rules (SIMPLIFIED)

**CRITICAL: Keep API documentation concise. Developers read code, not novels.**

### Format: Always Use Tables

Every component gets a simple table. No verbose explanations of what "filled" means or why "primary" is blue.

```markdown
#### Button

Styled wrapper for `Button` from Base UI.

| Prop      | Type                                          | Default     |
| --------- | --------------------------------------------- | ----------- |
| `variant` | `"primary" \| "neutral" \| "error" \| "link"` | `"primary"` |
| `mode`    | `"filled" \| "lighter" \| "ghost" \| "stroke"`| `"filled"`  |
| `size`    | `"sm" \| "md" \| "lg"`                        | `"md"`      |
| `asIcon`  | `boolean`                                     | `false`     |
| `asRtl`   | `boolean`                                     | `false`     |
```

### For Compound Components

List each component with a one-line description + table (if it has props):

```markdown
#### Accordion

Root component. Alias for `Accordion.Root` from Base UI.

#### AccordionItem

Individual item container with border styling.

#### AccordionTrigger

Toggle button with built-in chevron icon.

#### AccordionPanel

Collapsible content with animated height transitions.
```

### For Direct Aliases (No Custom Props)

Just link to Base UI:

```markdown
#### DialogPortal

Alias for `Dialog.Portal` from Base UI. See [Base UI docs](link).
```

### What NOT to Do

❌ **Never explain what each value does:**
```markdown
- `mode` - "filled" | "lighter" | "ghost" | "stroke"
  - **filled**: Solid background with high contrast
  - **lighter**: Subtle background color
  - **ghost**: Transparent background
  - **stroke**: Outlined with border
```

❌ **Never include pixel values or implementation details:**
```markdown
- **lg**: 40px height, 18px font
- **md**: 36px height, 14px font
```

❌ **Never duplicate Base UI documentation**

✅ **Do this instead:**
```markdown
| Prop   | Type                                           | Default    |
| ------ | ---------------------------------------------- | ---------- |
| `mode` | `"filled" \| "lighter" \| "ghost" \| "stroke"` | `"filled"` |
```

The particles demonstrate the variants visually. The table documents them technically. That's it.

---

## Example Titles (MDX Section Headers)

Title describes what the particle shows. Keep it short.

**Variants:**
- "Outline" (not "Outline Variant" or "Outline Button Example")
- "Secondary"
- "Destructive"
- "Ghost"

**Sizes:**
- "Small Size" or just "Small"
- "Large Size" or just "Large"

**Features:**
- "With Icon"
- "Icon Only"
- "Disabled"
- "Loading"
- "Multiple" (for accordion)
- "Controlled"

**Bad titles:**
- ❌ "Example 2"
- ❌ "Advanced Usage"
- ❌ "More Examples"
- ❌ "Primary Variant Button with Filled Mode"

---

## Registry Update

Add to `apps/web/src/registry/registry-particles.ts`:

```typescript
// Imports (top)
const P{Pascal}1 = lazy(() => import('./particles/p-{component}-1'))
const P{Pascal}2 = lazy(() => import('./particles/p-{component}-2'))

// Registry object
export const particles = {
  // existing...
  'p-{component}-1': P{Pascal}1,
  'p-{component}-2': P{Pascal}2,
}
```

---

## Workflow

1. Read component source (`index.tsx`, `style.css`)
2. Fetch Base UI docs
3. Plan particles (3-6 unique examples, hero first)
4. Create particle files in `apps/web/src/registry/particles/`
5. Update particle registry
6. Generate MDX in `apps/web/content/docs/components/{component}.mdx`

---

## Quality Checklist

- [ ] First particle is simple (1-2 components for small, 1 complete example for large)
- [ ] Each particle shows ONE feature (one variant, one size, one state)
- [ ] Minimal inline CSS (only flex/gap when needed)
- [ ] No verbose styling, no headers within particles
- [ ] Clean, copyable code
- [ ] Particles registered in registry-particles.ts
- [ ] API Reference uses table format only
- [ ] MDX example titles match particle content

---

## Prohibited

- Verbose inline styles (padding, margin, fontSize, colors, etc.)
- Headers or descriptions within particles
- Multiple variants in one particle (use separate particles)
- Placeholder content ("Item 1", "Lorem ipsum", "Click me")
- Import from @base-ui/react in particles
- Explaining what prop values mean in prose
