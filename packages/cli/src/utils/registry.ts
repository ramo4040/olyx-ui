import type { Registry, RegistryItem } from "../types.js";

/**
 * Remote GitHub sources (production mode)
 */
const REMOTE_REGISTRY_URL =
  "https://raw.githubusercontent.com/ramo4040/olyx-ui/refs/heads/main/apps/web/registry.json";

const REMOTE_RAW_BASE =
  "https://raw.githubusercontent.com/ramo4040/olyx-ui/refs/heads/main/packages/react/src";

/** Fetch the full registry (local or remote) */
export async function fetchRegistry(): Promise<Registry> {
  const res = await fetch(REMOTE_REGISTRY_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch registry: ${res.status} ${res.statusText}`,
    );
  }

  return res.json() as Promise<Registry>;
}

/** Find a component in the registry by name */
export function findComponent(
  registry: Registry,
  name: string,
): RegistryItem | undefined {
  return registry.items.find((item) => item.name === name);
}

/**
 * Resolve all registry dependencies recursively.
 * Returns a flat list of all components needed (including the target).
 */
export function resolveDependencies(
  registry: Registry,
  name: string,
  resolved = new Set<string>(),
): RegistryItem[] {
  if (resolved.has(name)) return [];

  const item = findComponent(registry, name);
  if (!item) return [];

  resolved.add(name);

  const deps: RegistryItem[] = [];

  if (item.registryDependencies) {
    for (const dep of item.registryDependencies) {
      deps.push(...resolveDependencies(registry, dep, resolved));
    }
  }

  deps.push(item);
  return deps;
}

/**
 * Fetch a single file's content (local or remote)
 */
export async function fetchFileContent(registryPath: string): Promise<string> {
  const repoPath = registryPath.replace(/^ui\//, "");
  const url = `${REMOTE_RAW_BASE}/${repoPath}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  return res.text();
}

/** Collect all npm dependencies from registry items */
export function collectNpmDependencies(items: RegistryItem[]): string[] {
  const deps = new Set<string>();

  for (const item of items) {
    if (item.dependencies) {
      for (const dep of item.dependencies) {
        deps.add(dep);
      }
    }
  }

  return [...deps];
}
