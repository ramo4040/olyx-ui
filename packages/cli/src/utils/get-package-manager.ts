import path from "node:path";
import fs from "fs-extra";
import type { PackageManager } from "../types.js";

const LOCK_FILES: Record<string, PackageManager> = {
  "bun.lock": "bun",
  "bun.lockb": "bun",
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
};

/** Detect the package manager by looking for lock files in cwd */
export async function getPackageManager(cwd: string): Promise<PackageManager> {
  for (const [lockFile, pm] of Object.entries(LOCK_FILES)) {
    if (await fs.pathExists(path.resolve(cwd, lockFile))) {
      return pm;
    }
  }
  // fallback to npm
  return "npm";
}

/** Get the install command for a package manager */
export function getInstallCommand(
  pm: PackageManager,
  packages: string[],
): string {
  const deps = packages.join(" ");
  switch (pm) {
    case "bun":
      return `bun add ${deps}`;
    case "pnpm":
      return `pnpm add ${deps}`;
    case "yarn":
      return `yarn add ${deps}`;
    case "npm":
      return `npm install ${deps}`;
  }
}
