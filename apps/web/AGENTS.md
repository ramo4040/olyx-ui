# Olyx UI Component Library

## Overview

Olyx is a modern, accessible React component library built with Next.js 16, React 19, and Base UI. The project uses a monorepo structure with Turborepo, Bun, and Biome for linting/formatting.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **UI**: React 19, Base UI, Vaul
- **Build**: Turborepo, Bun 1.3.4
- **Linting**: Biome
- **Icons**: HugeIcons
  - Example: `<HugeiconsIcon icon={SettingsIcon} />`
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

Follow this workflow when adding new components:

1. **Create component files** in `packages/react/src/{name}/`
   - `index.tsx` - Component implementation
   - `style.css` - Component styles

2. **Export from package** in `packages/react/index.ts`

3. **Add registry entry** in `packages/registry/src/registry/registry-ui.ts`

4. **Build registry** - Run `bun run build` in packages/registry

5. **Create documentation** in `apps/web/content/docs/components/{name}.mdx`

6. **Add examples (particles)** in `apps/web/src/registry/particles/p-{name}-*.tsx`

7. **Register particles** in `apps/web/src/registry/registry-particles.ts`

### Component Guidelines

- **Use Base UI primitives** (`@base-ui/react`) when available
- **Use Vaul** for drawer components
- **Style via CSS** with `[data-ui="component"]` selectors
- **Props pattern**: Extend Base UI props with variant/mode/size options
- **Accessibility**: Follow WCAG 2.1 AA best practices
- **Data attributes**: Use `data-variant`, `data-mode`, `data-size` for component variants

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

### @react-optimizer
Performance analysis and optimization for React components.

### @design-reviewer
UI/UX and accessibility review for components and layouts.

### @doc-generator
Generate clean, developer-focused documentation for Overview and Handbook sections.

**Usage**: Specify section type when invoking:
- **Overview**: "introduction" | "get-started" | "roadmap"
- **Handbook**: "styling" | "colors" | "typography" | "theming" | "animation"

**Evidence Priority** (read in this order):
1. Design tokens: `apps/web/src/styles/tokens.css` or `packages/react/src/tokens.css`
2. Color system: `apps/web/src/styles/colors.css`
3. Typography: `apps/web/src/styles/typography.css` or font configuration
4. Theme config: `tailwind.config.js`, `theme.config.ts`, or CSS custom properties
5. Animation: CSS transition/animation definitions
6. Project README: `README.md`, `CONTRIBUTING.md`
7. Package.json: Dependencies, scripts, metadata

**Documentation Requirements**:
- Use MDX format with frontmatter
- Extract actual values from code (no placeholders)
- Include working code examples
- Use tables for reference data
- Keep sections under 500 lines
- No marketing fluff or verbose explanations
- Link to external resources where appropriate
- Follow accessibility best practices
- Test all code examples

**Output Locations**:
- Overview: `apps/web/content/docs/(root)/{section}.mdx`
- Handbook: `apps/web/content/docs/handbook/{section}.mdx`

**Prohibited Content**:
- Lorem ipsum or placeholder content
- Marketing language ("amazing", "powerful")
- Incomplete code examples
- Outdated version numbers
- Invented features that don't exist
- Missing accessibility considerations

## Development Workflow

### Starting Development
```bash
bun dev          # Start all apps
bun dev:web      # Start web app only
```

### Before Committing
```bash
bun check        # Run Biome check
bun check-types  # TypeScript type check
bun build        # Verify build works
```

### Registry Updates
When modifying component registry:
```bash
cd packages/registry
bun run build    # Regenerates __index__.ts and registry.json
```

## Important Notes

- **Never use Prettier or ESLint** - Biome handles all formatting and linting
- **Avoid barrel file imports** - Import directly from source files
- **TypeScript strict mode** - All code must pass strict type checking
- **Server Components first** - Use client components only when necessary
- **Accessibility is mandatory** - All components must meet WCAG 2.1 AA standards

---

## Documentation Generation Guide

### Overview Section Templates

#### Introduction
Document what Olyx is, why it exists, and who should use it.

**Required Content**:
- What is Olyx (1-2 sentences)
- Key features (bullet list with brief descriptions)
- When to use Olyx (use cases)
- Tech stack table (from package.json)
- License information

**Structure**:
```mdx
---
title: Introduction
description: A modern, accessible React component library
---

## What is Olyx?
{Brief explanation}

## Key Features
- **Feature** — Description
- **Feature** — Description

## When to Use Olyx
- Use case 1
- Use case 2

## Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| React      | 19      | UI      |

## License
{From package.json}
```

#### Get Started
Guide developers from zero to first component in 5 minutes.

**Required Content**:
- Prerequisites (Node/Bun versions, framework requirements)
- Installation options (CLI + manual)
- First component tutorial
- Project structure
- Next steps links

**Structure**: Use `<Steps>` component for sequential instructions.

#### Roadmap
Show planned features and contribution opportunities.

**Required Content**:
- Current version and state
- Completed features (checkmarks)
- In-progress features (by quarter)
- Planned features
- Component backlog
- How to contribute

**Data Sources**: package.json version, GitHub issues, CHANGELOG

---

### Handbook Section Templates

#### Styling
Explain the styling approach and customization methods.

**Required Content**:
- Styling approach (CSS + data attributes)
- Data attributes explanation with examples
- Custom properties usage
- Three customization methods (override properties, target attributes, component-level)
- File structure
- Best practices

**Key Topics**:
- `data-variant`, `data-mode`, `data-size` patterns
- CSS custom property naming
- Specificity management
- Component file organization

#### Colors
Document the complete color system.

**Required Content**:
- Color tokens table (extract from colors.css)
- Surface colors with light/dark values
- Brand colors
- Semantic colors (success, warning, error, info)
- Color scales (50-900)
- Dark mode implementation
- Customization examples
- Accessibility notes (WCAG contrast ratios)

**Format**: Use tables for token reference. Include both light and dark mode values.

#### Typography
Document type scale, fonts, and text styling.

**Required Content**:
- Font families (from config)
- Font loading code (Next.js font loader)
- Type scale table (size, line-height, usage)
- Font weights
- Usage examples (in components and CSS)
- Customization
- Responsive typography (clamp)
- Best practices

**Data Sources**: typography.css, font configuration, app/layout.tsx

#### Theming
Explain dark mode and custom theme creation.

**Required Content**:
- Built-in themes
- Theme switching (static and dynamic)
- Theme structure (CSS custom properties)
- Creating custom themes (single and multiple)
- System preference detection
- Best practices
- Complete token reference table

**Code Examples**: 
- Static theme setting
- Dynamic theme toggle component
- useSystemTheme hook
- Custom theme CSS

#### Animation
Document animation system and motion patterns.

**Required Content**:
- Animation tokens (duration, easing, presets)
- Usage in components
- Custom animations (@keyframes)
- Common patterns (enter/exit, hover, loading)
- Accessibility (reduced motion)
- Performance tips
- Best practices

**Key Sections**:
- Transition presets
- Easing curves
- `prefers-reduced-motion` handling
- Performance optimization (transform/opacity only)

---

### Documentation Quality Standards

**Evidence-Based Writing**:
1. Read source files BEFORE writing
2. Extract actual values (no guessing)
3. Test code examples
4. Verify version numbers
5. Check accessibility claims

**Writing Style**:
- Clear, concise, developer-focused
- No marketing language
- Use tables for reference data
- Code examples must be complete and working
- Link to external resources
- Include accessibility notes

**Format Requirements**:
- MDX with frontmatter
- Syntax highlighting for code blocks
- Consistent terminology
- Under 500 lines per section
- Use appropriate MDX components (`<Steps>`, `<ComponentPreview>`, etc.)

**Quality Checklist**:
- [ ] All source files read
- [ ] Actual values extracted (no placeholders)
- [ ] Tables for reference data
- [ ] Code examples with syntax highlighting
- [ ] No fluff or marketing speak
- [ ] External links included
- [ ] Code examples tested
- [ ] MDX component patterns followed
- [ ] Consistent terminology
- [ ] Accessibility considerations included

**Prohibited**:
- Lorem ipsum or placeholder content
- Verbose explanations of obvious concepts
- Marketing language ("amazing", "powerful", "revolutionary")
- Incomplete code examples
- Outdated version numbers or deprecated APIs
- Copying without attribution
- Missing accessibility notes
- Invented features

---

### File Locations

**Overview Documentation**:
- `apps/web/content/docs/(root)/introduction.mdx`
- `apps/web/content/docs/(root)/get-started.mdx`
- `apps/web/content/docs/(root)/roadmap.mdx`

**Handbook Documentation**:
- `apps/web/content/docs/handbook/styling.mdx`
- `apps/web/content/docs/handbook/colors.mdx`
- `apps/web/content/docs/handbook/typography.mdx`
- `apps/web/content/docs/handbook/tokens.mdx`

**Source Files to Reference**:
- `apps/web/src/styles/tokens.css`
- `apps/web/src/styles/colors.css`
- `apps/web/src/styles/typography.css`
- `package.json`
- Component CSS files in `packages/react/src/{component}/style.css`
- Font configuration in `apps/web/app/layout.tsx`