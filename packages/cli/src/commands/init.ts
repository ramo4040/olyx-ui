import path from "node:path";
import * as p from "@clack/prompts";
import { execa } from "execa";
import fs from "fs-extra";
import type { Framework } from "../types.js";
import { detectFramework } from "../utils/detect-framework.js";
import { configExists, writeConfig } from "../utils/get-config.js";
import { getPackageManager } from "../utils/get-package-manager.js";
import { findGlobalCss, injectStyleImports } from "../utils/inject-styles.js";
import { logger } from "../utils/logger.js";
import {
  fetchFileContent,
  fetchRegistry,
  findComponent,
} from "../utils/registry.js";

const DEFAULT_COMPONENT_DIR = "src/components/ui";

/** Scaffold commands for each framework */
const SCAFFOLD_COMMANDS: Record<Exclude<Framework, "manual">, string> = {
  next: "npx create-next-app@latest",
  vite: "npm create vite@latest",
  "tanstack-start": "npm create @tanstack/start@latest",
};

export interface InitOptions {
  /** When true, use defaults without interactive prompts (called from `add`). */
  silent?: boolean;
}

/**
 * Initialize Olyx UI in the current or newly scaffolded project.
 * Returns the resolved project root path (may differ from process.cwd()
 * if a new project was scaffolded into a subdirectory).
 */
export async function init(options: InitOptions = {}): Promise<string> {
  const { silent = false } = options;
  let cwd = process.cwd();

  if (!silent) {
    p.intro("Initializing Olyx UI");
  }

  // Check if already initialized
  if (await configExists(cwd)) {
    if (silent) {
      // Called from `add` — config exists, nothing to do
      return cwd;
    }
    const shouldContinue = await p.confirm({
      message: "components.json already exists. Re-initialize?",
    });
    if (p.isCancel(shouldContinue) || !shouldContinue) {
      p.cancel("Cancelled.");
      process.exit(0);
    }
  }

  // Check if this is an existing project (has package.json)
  const hasPackageJson = await fs.pathExists(path.resolve(cwd, "package.json"));

  if (!hasPackageJson) {
    // Empty folder — offer to scaffold a new project
    const framework = await p.select<Framework>({
      message: `The path ${logger.highlight(cwd)} does not contain a package.json file.\n  Would you like to start a new project?`,
      options: [
        { value: "next", label: "Next.js" },
        { value: "vite", label: "Vite" },
        { value: "tanstack-start", label: "TanStack Start" },
        { value: "manual", label: "Skip" },
      ],
    });

    if (p.isCancel(framework)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    if (framework !== "manual") {
      // Snapshot existing directories so we can detect the new project folder
      const dirsBefore = new Set(
        (await fs.readdir(cwd, { withFileTypes: true }))
          .filter((d) => d.isDirectory())
          .map((d) => d.name),
      );

      const cmd = SCAFFOLD_COMMANDS[framework];
      logger.info(`Running: ${logger.highlight(cmd)}`);
      logger.info(
        logger.dim("Follow the prompts from the scaffolding tool.\n"),
      );

      const [bin = "npx", ...args] = cmd.split(" ");
      try {
        await execa(bin, args, { cwd, stdio: "inherit" });
      } catch {
        logger.error("Project scaffolding failed or was cancelled.");
        process.exit(1);
      }

      // Detect the newly created project directory
      const dirsAfter = (await fs.readdir(cwd, { withFileTypes: true }))
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

      const newDirs = dirsAfter.filter((d) => !dirsBefore.has(d));

      if (newDirs.length === 1) {
        // Auto-enter the new project directory and continue setup
        const projectDir = newDirs[0] as string;
        cwd = path.resolve(cwd, projectDir);
        logger.break();
        logger.success(
          `Project created. Continuing setup in ${logger.highlight(projectDir)}/`,
        );
      } else if (newDirs.length > 1) {
        // Multiple new dirs — ask user which one
        const selected = await p.select<string>({
          message: "Multiple new directories detected. Which is your project?",
          options: newDirs.map((d) => ({ value: d, label: d })),
        });
        if (p.isCancel(selected)) {
          p.cancel("Cancelled.");
          process.exit(0);
        }
        cwd = path.resolve(cwd, selected);
      } else {
        // No new directory — scaffolding may have created project in-place
        // or the user cancelled the scaffold tool's name prompt.
        // Check if package.json now exists in cwd
        if (!(await fs.pathExists(path.resolve(cwd, "package.json")))) {
          logger.error(
            "Could not detect the new project folder. Run `olyx init` inside your project directory.",
          );
          process.exit(1);
        }
      }
    }
  }

  // --- From here on, cwd points to the actual project root ---

  // Detect framework
  const detected = await detectFramework(cwd);
  if (detected !== "unknown") {
    logger.info(`Detected framework: ${logger.highlight(detected)}`);
  }

  // Prompt for component directory (skip in silent mode)
  let componentDir: string;
  if (silent) {
    componentDir = DEFAULT_COMPONENT_DIR;
  } else {
    const answer = await p.text({
      message: "Where should components be installed?",
      placeholder: DEFAULT_COMPONENT_DIR,
      defaultValue: DEFAULT_COMPONENT_DIR,
    });

    if (p.isCancel(answer)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }
    componentDir = answer;
  }

  const resolvedDir = path.resolve(cwd, componentDir);

  // Detect package manager
  const pm = await getPackageManager(cwd);
  logger.info(`Detected package manager: ${logger.highlight(pm)}`);

  // Create components directory
  await fs.ensureDir(resolvedDir);
  logger.success(`Created ${logger.highlight(componentDir)}`);

  // Copy global CSS files (tokens.css, colors.css)
  const s = p.spinner();
  s.start("Fetching global styles...");

  try {
    const registry = await fetchRegistry();

    const tokensItem = findComponent(registry, "tokens.css");
    const colorsItem = findComponent(registry, "colors.css");

    const styleItems = [tokensItem, colorsItem].filter(
      (item): item is NonNullable<typeof item> => item != null,
    );

    for (const item of styleItems) {
      for (const file of item.files) {
        const content = await fetchFileContent(file.path);
        const targetPath = path.resolve(
          resolvedDir,
          file.path.replace(/^ui\//, ""),
        );
        await fs.ensureDir(path.dirname(targetPath));
        await fs.writeFile(targetPath, content, "utf-8");
      }
    }

    s.stop("Global styles installed.");
  } catch {
    s.stop("Failed to fetch global styles.");
    logger.warn(
      "Could not download global CSS files. You can add them manually later.",
    );
  }

  // Auto-inject @import statements into the project's global CSS
  let stylesInjected = false;
  if (detected !== "unknown") {
    const globalCssPath = await findGlobalCss(cwd, detected);

    if (globalCssPath) {
      stylesInjected = await injectStyleImports(
        globalCssPath,
        componentDir,
        cwd,
      );

      if (stylesInjected) {
        const relGlobal = path.relative(cwd, globalCssPath);
        logger.success(
          `Injected style imports into ${logger.highlight(relGlobal)}`,
        );
      }
    }
  }

  // If auto-injection didn't happen, show manual instructions
  if (!stylesInjected) {
    logger.break();
    logger.warn("Could not auto-inject style imports.");
    logger.info("Add these imports to your global CSS file:\n");
    logger.info(
      `  @import "./<relative-path-to>/${componentDir}/styles/_base/tokens.css";`,
    );
    logger.info(
      `  @import "./<relative-path-to>/${componentDir}/styles/_base/colors.css";`,
    );
    logger.break();
  }

  // Write components.json
  await writeConfig(cwd, {
    $schema: "https://olyx.dev/schema.json",
    componentDir,
  });
  logger.success(`Config saved to ${logger.highlight("components.json")}`);

  if (!silent) {
    p.outro(
      "Olyx UI initialized. Run `olyx add <component>` to add components.",
    );
  }

  return cwd;
}
