![Olyx UI - Modern React Component Library](./apps/web/public/og.png)

<h3 align="center">Olyx UI</h3>
<p align="center">Modern, accessible React components built on <strong>Base UI</strong> with native CSS.</p>

<p align="center">
  <a href="https://olyxui.com">Website</a> · 
  <a href="https://olyxui.com/docs">Documentation</a> · 
  <a href="https://olyxui.com/docs/components/accordion">Components</a>
</p>

## About Olyx UI

**Olyx UI** is a collection of 50+ beautifully designed, accessible, and composable React components that you can copy, paste, and own. Built on top of [Base UI](https://base-ui.com/) and styled with native CSS using the HCT color system, Olyx UI gives you production-ready components without the bloat.

Unlike traditional component libraries that lock you into a specific styling solution, Olyx UI embraces the **copy-paste philosophy**. Every component is yours to customize, extend, and adapt to your exact needs. No package dependencies to maintain, no breaking changes to worry about, just clean, readable code that you control.

### Why Olyx UI?

- **🎨 Native CSS First** - Leverage modern CSS features with HCT color system for perceptually uniform colors
- **♿ Accessibility Built-In** - WCAG 2.1 compliant components built on Base UI primitives
- **📦 Zero Lock-In** - Copy-paste components you own, not npm packages you depend on
- **⚡ Performance Focused** - Minimal runtime, tree-shakeable, and optimized for React 19
- **🎯 Type-Safe** - Full TypeScript support with intelligent autocomplete
- **🎭 Unstyled Foundation** - Base UI primitives give you complete styling freedom
- **🚀 CLI Powered** - Add components to your project with a single command

## Quick Start

### Installation

Add components to your project using the Olyx CLI:

```sh
# Install the CLI globally
bun add -g olyx

# Add a component to your project
olyx add button

# Add multiple components
olyx add button input dialog
```

Or install without the CLI:

```sh
# Copy component code from the website
# Visit https://olyxui.com/docs/components
```

### Prerequisites

Olyx UI components require:

- React 19.0.0 or later
- TypeScript 5.0 or later (recommended)

## Repository Structure

This is a monorepo managed with [Turborepo](https://turbo.build/repo) containing:

```
olyx/
├── apps/
│   └── web/              # Documentation website (Next.js)
├── packages/
│   ├── react/            # React component library
│   ├── cli/              # CLI tool for component installation
│   └── config/           # Shared TypeScript configurations
```

### Development Stack

- **Framework**: [React 19](https://react.dev/) with [Next.js 16](https://nextjs.org/)
- **UI Primitives**: [Base UI](https://base-ui.com/) by MUI
- **Styling**: Native CSS with HCT color system
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Bun](https://bun.sh/) for fast installs and builds
- **Linting**: [Biome](https://biomejs.dev/) for consistent code quality
- **Monorepo**: [Turborepo](https://turbo.build/repo) for efficient builds
- **Documentation**: [Fumadocs](https://fumadocs.dev/) for interactive component docs

## Local Development

### Setup

Clone the repository and install dependencies:

```sh
git clone https://github.com/ramo4040/olyx-ui.git
cd olyx-ui
bun install
```

## Contributing

We welcome contributions from the community! Whether it's:

- 🐛 Bug reports and fixes
- ✨ New component requests
- 📝 Documentation improvements
- 🎨 Design system enhancements
- ♿ Accessibility improvements


### Reporting Issues

Found a bug or have a feature request? [Open an issue](https://github.com/ramo4040/olyx-ui/issues) on GitHub.

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to use, modify, and distribute this software for any purpose, commercial or non-commercial.

## Acknowledgements

Olyx UI stands on the shoulders of giants:

- **[Base UI](https://base-ui.com/)** - For providing the accessible, unstyled primitives that form our foundation
- **[React](https://react.dev/)** - The declarative UI library that powers modern web development
- **[Fumadocs](https://fumadocs.dev/)** - For the excellent documentation framework
- **[Biome](https://biomejs.dev/)** - For fast, reliable linting and formatting
- **[Bun](https://bun.sh/)** - For blazing-fast JavaScript runtime and package management

## Connect

- **Website**: [olyxui.com](https://olyxui.com)
- **Documentation**: [olyxui.com/docs](https://olyxui.com/docs)
- **GitHub**: [@ramo4040](https://github.com/ramo4040)
- **Twitter**: [@yassir_rouane](https://twitter.com/yassir_rouane)
- **Creator**: [Yassir Rouane](https://www.linkedin.com/in/yassir-rouane)

---

<p align="center">Built with ❤️ by <a href="https://github.com/ramo4040">Yassir Rouane</a></p>
<p align="center">Made for developers who value control, quality, and accessibility.</p>
