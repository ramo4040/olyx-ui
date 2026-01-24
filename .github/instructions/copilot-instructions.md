---
description: "Main repository instructions for Olyx UI component library"
applyTo: "**"
---

# Project: Olyx

## Overview

Olyx is a modern, accessible React component library built with Next.js 16, React 19, and Base UI. The project uses a monorepo structure with Turborepo, Bun, and Biome for linting/formatting.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **UI**: React 19, Base UI, Vaul
- **Build**: Turborepo, Bun 1.3.4
- **Linting**: Biome
- **Icons**: HugeIcons
- **Language**: TypeScript (strict mode)
- **Compiler**: React Compiler (babel-plugin-react-compiler)

## Project Structure

```
apps/web/         # Documentation site
  src/components/
    ui/           # Core component implementations
    examples/     # Component usage examples
packages/config/  # Shared TypeScript config
```

## Build Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev servers (all apps) |
| `bun dev:web` | Start web app only |
| `bun build` | Build all packages |
| `bun check` | Run Biome check |
| `bun check-types` | TypeScript type check |

## Coding Standards

### General
- Use TypeScript strict mode
- Prefer React Server Components
- Use Biome for formatting (no Prettier/ESLint)
- Import directly, avoid barrel files (see skills)

### Components
- Place components in `apps/web/src/components/ui/{category}/`
- Export examples in `apps/web/src/components/examples/{category}/`
- Use Base UI primitives when available
- Follow accessibility best practices (WCAG 2.1 AA)

### State & Performance
- Use React 19 features (`use`, `useOptimistic`, `useFormStatus`)
- Prefer server-side data fetching
- Apply memoization judiciously (see react-optimizer agent)

## Detailed Rules

For comprehensive performance optimization patterns, see:
- [React Best Practices](.github/skills/vercel-react-best-practices/)
- [Web Design Guidelines](.github/skills/web-design-guidelines/)

## Custom Agents

- `@react-optimizer` - Performance analysis and optimization
- `@design-reviewer` - UI/UX and accessibility review
