import path from "node:path";
import fs from "fs-extra";
import type { DetectedFramework } from "../types.js";

/**
 * Detect the project's framework by inspecting package.json dependencies
 * and directory structure.
 */
export async function detectFramework(cwd: string): Promise<DetectedFramework> {
  const pkgPath = path.resolve(cwd, "package.json");

  if (!(await fs.pathExists(pkgPath))) return "unknown";

  let pkg: Record<string, Record<string, string> | undefined>;
  try {
    pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));
  } catch {
    return "unknown";
  }

  const deps = { ...pkg.dependencies, ...pkg.devDependencies };

  // Next.js — distinguish App Router vs Pages Router
  if (deps.next) {
    const hasAppDir =
      (await fs.pathExists(path.resolve(cwd, "app"))) ||
      (await fs.pathExists(path.resolve(cwd, "src/app")));

    return hasAppDir ? "nextjs-app" : "nextjs-pages";
  }

  // TanStack Start
  if (deps["@tanstack/react-start"] || deps["@tanstack/start"]) {
    return "tanstack-start";
  }

  // Remix
  if (deps["@remix-run/react"]) {
    return "remix";
  }

  // Vite (check after frameworks that also use vite)
  if (deps.vite) {
    return "vite";
  }

  return "unknown";
}
