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
        examples: <HugeiconsIcon icon={SettingsIcon} />
- **Language**: TypeScript (strict mode)
- **Compiler**: React Compiler (babel-plugin-react-compiler)

## Project Structure

```
apps/web/                        # Documentation site (Fumadocs-powered)
  content/docs/                  # MDX documentation files
    components/                  # Component documentation (accordion.mdx, button.mdx, etc.)
    (root)/                      # Root-level docs
  src/
    registry/
      particles/                 # Component example implementations (p-accordion-1.tsx, etc.)
      registry-particles.ts      # Particles registry with lazy-loaded components
    components/
      examples/                  # Additional component examples
      misc/                      # Miscellaneous components
    widgets/                     # Widget implementations

packages/
  react/                         # @olyx/react - Core component library
    index.ts                     # Barrel export for all components
    src/{component}/             # Component implementations (index.tsx + style.css)
  
  registry/                      # @olyx/registry - Component registry system
    src/
      types.ts                   # RegistryItem, RegistryFile, Registry types
      registry/
        index.ts                 # Main registry export
        registry-ui.ts           # UI component definitions
        categories.ts            # Component categories list
        __index__.ts             # Auto-generated registry index
    scripts/
      build-registry.ts          # Builds __index__.ts and registry.json
    registry.json                # Generated registry manifest
  
  config/                        # @olyx/config - Shared TypeScript config
```

## Key Packages

### @olyx/react
Core React component library. Each component lives in `packages/react/src/{name}/`:
- `index.tsx` - Component implementation using Base UI primitives
- `style.css` - Component styles

Components use data attributes for variants: `data-variant`, `data-mode`, `data-size`.

### @olyx/registry
Registry system for component distribution (shadcn-style). Key types:
- `RegistryItem` - Component metadata (name, type, files, dependencies)
- `RegistryFileType` - "registry:ui" | "registry:style" | "registry:block" | "registry:hook" | etc.

Run `bun run build` in packages/registry to regenerate `__index__.ts` and `registry.json`.

### Particles (Documentation Examples)
Interactive examples in `apps/web/src/registry/particles/`:
- Named as `p-{component}-{number}.tsx` (e.g., `p-accordion-1.tsx`)
- Registered in `registry-particles.ts` with lazy loading
- Referenced in MDX docs via `<ComponentPreview name="p-accordion-1" />`

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

### Adding New Components
1. Create component in `packages/react/src/{name}/index.tsx` + `style.css`
2. Export from `packages/react/index.ts`
3. Add registry entry in `packages/registry/src/registry/registry-ui.ts`
4. Run `bun run build` in packages/registry
5. Create documentation in `apps/web/content/docs/components/{name}.mdx`
6. Add particles (examples) in `apps/web/src/registry/particles/p-{name}-*.tsx`
7. Register particles in `apps/web/src/registry/registry-particles.ts`

### Component Guidelines
- Use Base UI primitives (`@base-ui/react`) when available
- Use Vaul for drawer components
- Style via CSS with `[data-ui="component"]` selectors
- Props pattern: extend Base UI props with variant/mode/size options
- Follow accessibility best practices (WCAG 2.1 AA)

### Documentation (MDX)
- Use `<ComponentPreview name="p-{name}-{n}" />` for live examples
- Use `<ComponentSource name="{name}" />` for code display
- Include installation instructions (CLI + manual)
- Link to Base UI docs when applicable

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
