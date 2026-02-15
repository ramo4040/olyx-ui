import path from "node:path";
import fs from "fs-extra";
import type { DetectedFramework } from "../types.js";
import { logger } from "./logger.js";

/**
 * Known global CSS file locations per framework.
 * Order matters — first match wins.
 */
const GLOBAL_CSS_PATHS: Record<
  Exclude<DetectedFramework, "unknown">,
  string[]
> = {
  "nextjs-app": ["src/app/globals.css", "app/globals.css"],
  "nextjs-pages": ["src/styles/globals.css", "styles/globals.css"],
  "tanstack-start": ["src/app.css", "app/styles.css"],
  vite: ["src/index.css", "src/App.css"],
  remix: ["app/root.css", "app/styles/global.css"],
};

/**
 * Locate the project's global CSS entry file.
 * Returns the absolute path if found, null otherwise.
 */
export async function findGlobalCss(
  cwd: string,
  framework: DetectedFramework,
): Promise<string | null> {
  if (framework === "unknown") return null;

  const candidates = GLOBAL_CSS_PATHS[framework];
  for (const relativePath of candidates) {
    const abs = path.resolve(cwd, relativePath);
    if (await fs.pathExists(abs)) return abs;
  }

  return null;
}

/**
 * Inject @import statements for tokens.css and colors.css into the project's
 * global CSS file.
 *
 * - Computes the relative path from the global CSS file to the style files
 *   inside the user's component directory.
 * - Prepends the @import statements so they load before any other styles.
 * - Is idempotent: skips injection if imports already exist.
 *
 * @returns true if injection was performed, false if skipped or failed
 */
export async function injectStyleImports(
  globalCssPath: string,
  componentDir: string,
  cwd: string,
): Promise<boolean> {
  const globalDir = path.dirname(globalCssPath);
  const absoluteComponentDir = path.resolve(cwd, componentDir);

  // Path from the global CSS file to the style files
  const tokensTarget = path.resolve(
    absoluteComponentDir,
    "styles/_base/tokens.css",
  );
  const colorsTarget = path.resolve(
    absoluteComponentDir,
    "styles/_base/colors.css",
  );

  const tokensRel = normalizeCssPath(path.relative(globalDir, tokensTarget));
  const colorsRel = normalizeCssPath(path.relative(globalDir, colorsTarget));

  let content: string;
  try {
    content = await fs.readFile(globalCssPath, "utf-8");
  } catch {
    return false;
  }

  // Idempotent — don't double-inject
  if (content.includes("tokens.css") && content.includes("colors.css")) {
    logger.info("Style imports already present in global CSS. Skipping.");
    return true;
  }

  const injection = [
    "/* Olyx Design Tokens */",
    `@import "${tokensRel}";`,
    `@import "${colorsRel}";`,
    "",
  ].join("\n");

  // Prepend so tokens load before everything else
  const updated = `${injection}\n${content}`;

  await fs.writeFile(globalCssPath, updated, "utf-8");
  return true;
}

/**
 * Ensure forward slashes for CSS @import paths (Windows compat).
 * Also ensures relative paths start with ./
 */
function normalizeCssPath(p: string): string {
  const normalized = p.replace(/\\/g, "/");
  return normalized.startsWith(".") ? normalized : `./${normalized}`;
}
