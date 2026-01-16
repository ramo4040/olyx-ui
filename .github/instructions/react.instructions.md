---
description: "React and Next.js component development guidelines"
applyTo: "**/*.{ts,tsx,js,mjs}"
---

# React Component Guidelines

These rules apply to all React/TSX files. For complete documentation, see [.github/skills/vercel-react-best-practices/](.github/skills/vercel-react-best-practices/).

## Component Structure

### Server vs Client Components
- **Default to Server Components** - No directive needed
- **Use `'use client'`** only when you need:
  - Event handlers (onClick, onChange, etc.)
  - Hooks (useState, useEffect, etc.)
  - Browser APIs (localStorage, window, etc.)

### Component Organization
```tsx
// 1. Imports (external → internal → types)
// 2. Types/Interfaces
// 3. Constants (hoisted static JSX, config)
// 4. Helper functions
// 5. Component definition
// 6. Named export
```

## Performance Patterns

### Eliminate Waterfalls (CRITICAL)
```tsx
// ❌ Sequential - blocks each step
const user = await fetchUser()
const posts = await fetchPosts()

// ✅ Parallel - runs concurrently
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
])
```

### Suspense Boundaries
```tsx
// ✅ Show shell immediately, stream content
function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Skeleton />}>
        <AsyncContent />
      </Suspense>
      <Footer />
    </div>
  )
}
```

### Memoization
```tsx
// ✅ Extract expensive child to prevent re-renders
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return items.map(item => <ExpensiveItem key={item.id} {...item} />)
})

// ✅ Lazy state initialization
const [state, setState] = useState(() => expensiveComputation())

// ✅ Functional setState for stable callbacks
const increment = useCallback(() => {
  setCount(c => c + 1) // Not dependent on `count`
}, [])
```

## Import Patterns

### Avoid Barrel Files
```tsx
// ❌ Imports entire library
import { Button, Input } from '@/components/ui'

// ✅ Direct imports
import { Button } from '@/components/ui/core/button'
import { Input } from '@/components/ui/form/input'
```

### Dynamic Imports for Heavy Components
```tsx
// ✅ Code-split large components
const Editor = dynamic(() => import('./editor'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

## Conditional Rendering

```tsx
// ❌ Short-circuit can render "0" or ""
{items.length && <List items={items} />}

// ✅ Explicit ternary
{items.length > 0 ? <List items={items} /> : null}
```

## Event Handlers

```tsx
// ✅ Inline for simple handlers
<button onClick={() => setOpen(true)}>Open</button>

// ✅ Named function for complex logic
function handleSubmit(e: FormEvent) {
  e.preventDefault()
  // complex logic
}
<form onSubmit={handleSubmit}>
```

## Hooks Best Practices

### useEffect Dependencies
```tsx
// ❌ Object dependency causes infinite loop
useEffect(() => {
  doSomething(user.id)
}, [user]) // user object changes every render

// ✅ Primitive dependency
useEffect(() => {
  doSomething(userId)
}, [userId]) // string/number is stable
```

### Custom Hooks
- Prefix with `use`
- Single responsibility
- Return tuple or object (not both)

## Accessibility

- All interactive elements need accessible names
- Use semantic HTML (`button`, `nav`, `main`, etc.)
- Manage focus for modals/dialogs
- Provide skip links for keyboard navigation
- Test with screen reader and keyboard only

## Complete Reference

See [.github/skills/vercel-react-best-practices/rules/](.github/skills/vercel-react-best-practices/rules/) for:
- 45 detailed optimization rules
- Before/after code examples
- Impact ratings by category
