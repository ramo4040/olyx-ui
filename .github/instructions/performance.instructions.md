---
description: "JavaScript and TypeScript performance optimization patterns"
applyTo: "**/*.{ts,tsx,js,mjs}"
---

# Performance Optimization Rules

Apply these patterns throughout the codebase. For complete documentation with examples, see [.github/skills/vercel-react-best-practices/](.github/skills/vercel-react-best-practices/).

## Async Patterns (CRITICAL Impact)

### Parallel Execution
```typescript
// ❌ Waterfall - 3 sequential round trips
const user = await fetchUser()
const config = await fetchConfig()
const data = await fetchData()

// ✅ Parallel - 1 round trip
const [user, config, data] = await Promise.all([
  fetchUser(),
  fetchConfig(),
  fetchData()
])
```

### Defer Await
```typescript
// ❌ Blocks even when not needed
async function handle(userId: string, skip: boolean) {
  const data = await fetchData(userId)
  if (skip) return { skipped: true }
  return process(data)
}

// ✅ Only await when needed
async function handle(userId: string, skip: boolean) {
  if (skip) return { skipped: true }
  const data = await fetchData(userId)
  return process(data)
}
```

### API Routes
```typescript
// ✅ Start promises early, await late
export async function GET() {
  const sessionPromise = auth()
  const configPromise = fetchConfig()
  
  const session = await sessionPromise
  const [config, data] = await Promise.all([
    configPromise,
    fetchData(session.user.id)
  ])
  
  return Response.json({ config, data })
}
```

## Bundle Optimization (CRITICAL Impact)

### Direct Imports
```typescript
// ❌ Barrel import loads entire library (200-800ms)
import { Check, Menu } from 'lucide-react'

// ✅ Direct import loads only what's used
import Check from 'lucide-react/dist/esm/icons/check'
import Menu from 'lucide-react/dist/esm/icons/menu'
```

### Dynamic Imports
```typescript
// ✅ Heavy components load on demand
const Monaco = dynamic(() => import('./monaco-editor'), { ssr: false })

// ✅ Conditional module loading
useEffect(() => {
  if (enabled && typeof window !== 'undefined') {
    import('./heavy-module').then(m => setModule(m))
  }
}, [enabled])
```

### Defer Third-Party
```typescript
// ✅ Analytics after hydration
const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(m => m.Analytics),
  { ssr: false }
)
```

## Data Structure Optimization (MEDIUM Impact)

### Use Set/Map for Lookups
```typescript
// ❌ O(n) array lookup
const found = items.find(item => item.id === targetId)

// ✅ O(1) Map lookup
const itemMap = new Map(items.map(item => [item.id, item]))
const found = itemMap.get(targetId)
```

### Build Index Maps
```typescript
// ✅ For repeated lookups, build map once
const indexById = new Map(items.map(item => [item.id, item]))

function getItem(id: string) {
  return indexById.get(id) // O(1)
}
```

## Loop Optimization (LOW-MEDIUM Impact)

### Combine Iterations
```typescript
// ❌ Multiple passes
const active = items.filter(x => x.active)
const names = active.map(x => x.name)
const upper = names.map(x => x.toUpperCase())

// ✅ Single pass
const result = []
for (const item of items) {
  if (item.active) {
    result.push(item.name.toUpperCase())
  }
}
```

### Cache Property Access
```typescript
// ❌ Property lookup each iteration
for (let i = 0; i < items.length; i++) { ... }

// ✅ Cache length
for (let i = 0, len = items.length; i < len; i++) { ... }
```

### Early Exit
```typescript
// ✅ Return early for better branch prediction
function process(items: Item[]) {
  if (!items?.length) return []
  if (items.length === 1) return [transform(items[0])]
  
  return items.map(transform)
}
```

### Length Check First
```typescript
// ❌ Expensive comparison runs even on empty arrays
if (arraysAreEqual(items, otherItems)) { ... }

// ✅ Cheap check first
if (items.length === otherItems.length && arraysAreEqual(items, otherItems)) { ... }
```

## Caching Patterns

### Module-Level Cache
```typescript
// ✅ Cache expensive function results
const cache = new Map<string, Result>()

function expensiveOperation(key: string): Result {
  if (cache.has(key)) return cache.get(key)!
  const result = compute(key)
  cache.set(key, result)
  return result
}
```

### Storage API Cache
```typescript
// ✅ Cache localStorage reads
let cachedTheme: string | null = null

function getTheme() {
  if (cachedTheme === null) {
    cachedTheme = localStorage.getItem('theme')
  }
  return cachedTheme
}
```

### Hoist RegExp
```typescript
// ❌ Creates regex each call
function validate(input: string) {
  return /^[a-z]+$/i.test(input)
}

// ✅ Create once
const ALPHA_REGEX = /^[a-z]+$/i

function validate(input: string) {
  return ALPHA_REGEX.test(input)
}
```

## Immutability

```typescript
// ✅ Use toSorted() for immutable sort (no mutation)
const sorted = items.toSorted((a, b) => a.value - b.value)

// ✅ Use toReversed() for immutable reverse
const reversed = items.toReversed()

// ✅ Use toSpliced() for immutable splice
const updated = items.toSpliced(2, 1, newItem)
```

## Complete Reference

See [.github/skills/vercel-react-best-practices/rules/](.github/skills/vercel-react-best-practices/rules/) for all 45 rules with detailed examples and impact ratings.
