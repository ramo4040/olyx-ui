// Registry types — single source of truth in @olyx/config
export type {
  Registry,
  RegistryFile,
  RegistryFileType,
  RegistryItem,
} from "@olyx/config/types";

/** Supported frameworks for project scaffolding */
export type Framework = "next" | "vite" | "tanstack-start" | "manual";

/** Detected framework after project analysis */
export type DetectedFramework =
  | "nextjs-app"
  | "nextjs-pages"
  | "vite"
  | "tanstack-start"
  | "remix"
  | "unknown";

/** Supported package managers */
export type PackageManager = "bun" | "pnpm" | "yarn" | "npm";

/** components.json config shape */
export interface ComponentsConfig {
  $schema: string;
  componentDir: string;
}
