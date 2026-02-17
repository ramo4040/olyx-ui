# Contributing to Olyx UI

Thanks for your interest in contributing.

## Setup

```sh
git clone https://github.com/ramo4040/olyx-ui.git
cd olyx-ui
bun install
bun dev
```

Docs site runs at `http://localhost:3000`.

## Project Structure

```
olyx-ui/
├── apps/
│   └── web/                   # Docs site (Next.js 16, Fumadocs)
│       ├── content/docs/      # MDX documentation
│       └── src/registry/      # Interactive examples (particles)
└── packages/
    ├── react/src/{component}/ # Component source
    │   ├── index.tsx          # Component implementation
    │   └── style.css          # Component styles
    ├── cli/                   # CLI (olyx add, olyx init)
    └── config/                # Shared TypeScript config
```

## Component Structure

Each component lives in `packages/react/src/{name}/` with two files:

**`index.tsx`** — Base UI primitive wrapped with `data-*` attributes for variant control:

```tsx
<Primitive
  data-ui="component-name"
  data-variant={variant}
  data-mode={mode}
  data-size={size}
  {...rest}
/>
```

**`style.css`** — All styling scoped by data attributes inside `@layer components`:

```css
@layer components {
  [data-ui="component-name"] {
    /* base styles */

    &[data-size="md"] { /* ... */ }
    &[data-size="sm"] { /* ... */ }

    &[data-variant="primary"] { /* ... */ }
    &[data-variant="neutral"] { /* ... */ }

    &[data-mode="filled"] { /* ... */ }
    &[data-mode="ghost"]  { /* ... */ }
  }
}
```

Use design tokens everywhere — `--color-*`, `--spacing-*`, `--radius-*`, `--font-*`.

## Standards

- TypeScript strict mode
- Biome for formatting — not Prettier, not ESLint
- `@base-ui/react` primitives when available
- No Tailwind utilities, no `className` for variants, no CSS-in-JS
- WCAG 2.1 AA minimum

## Before Submitting

```sh
bun check        # lint + format
bun check-types  # TypeScript
bun build        # full build
```

All three must pass.

## Pull Requests

- One concern per PR, small diffs
- Include screenshots for visual changes
- Reference issues with `Fixes #123`
- PRs are reviewed within 48 hours

## Issues

[Open an issue](https://github.com/ramo4040/olyx-ui/issues/new) for bugs, feature requests, or component proposals.
For new contributors, check issues labeled [`good first issue`](https://github.com/ramo4040/olyx-ui/labels/good%20first%20issue).

## License

By contributing, you agree your work is licensed under [MIT](./LICENSE).
