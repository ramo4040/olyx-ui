---
name: "Generate Olyx Component Documentation"
description: "Generate complete component docs by analyzing source, fetching Base UI API, creating unique particles with inline CSS, and writing MDX"
tools: [
  "read",
  "edit",
  "search",
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