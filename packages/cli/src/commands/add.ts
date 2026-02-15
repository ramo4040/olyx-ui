import path from "node:path";
import * as p from "@clack/prompts";
import { execa } from "execa";
import fs from "fs-extra";
import type { Registry, RegistryItem } from "../types.js";
import { checkComponentExists } from "../utils/check-component-exists.js";
import { getConfig } from "../utils/get-config.js";
import {
  getInstallCommand,
  getPackageManager,
} from "../utils/get-package-manager.js";
import { logger } from "../utils/logger.js";
import {
  collectNpmDependencies,
  fetchFileContent,
  fetchRegistry,
  findComponent,
  resolveDependencies,
} from "../utils/registry.js";
import { init } from "./init.js";

export async function add(inputComponents: string[]) {
  let components = inputComponents;
  if (components.length === 0) {
    // No components specified — show interactive picker
    const pickSpinner = p.spinner();
    pickSpinner.start("Fetching registry...");

    let pickRegistry: Registry;
    try {
      pickRegistry = await fetchRegistry();
    } catch {
      pickSpinner.stop("Failed to fetch registry.");
      logger.error(
        "Could not reach the component registry. Check your connection.",
      );
      process.exit(1);
    }
    pickSpinner.stop("Registry loaded.");

    // Build selectable list from registry:ui items
    const uiItems = pickRegistry.items.filter(
      (item) => item.type === "registry:ui",
    );

    const selected = await p.multiselect<string>({
      message: "Which components would you like to add?",
      options: uiItems.map((item) => ({
        value: item.name,
        label: item.title ?? item.name,
      })),
      required: true,
    });

    if (p.isCancel(selected)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    components = selected;
  }

  let cwd = process.cwd();

  // Detect whether we're inside a project at all
  const hasPackageJson = await fs.pathExists(path.resolve(cwd, "package.json"));

  if (!hasPackageJson) {
    // No project — scaffold + init in one seamless flow
    cwd = await init({ silent: true });
  }

  // Ensure components.json exists (auto-init if project exists but no config)
  let config = await getConfig(cwd);
  if (!config) {
    cwd = await init({ silent: true });
    config = await getConfig(cwd);
    if (!config) {
      logger.error("Initialization failed. No components.json found.");
      process.exit(1);
    }
  }

  const componentDir = path.resolve(cwd, config.componentDir);

  p.intro("Adding components");

  const s = p.spinner();
  s.start("Fetching registry...");

  let registry: Registry | undefined;
  try {
    registry = await fetchRegistry();
  } catch {
    s.stop("Failed to fetch registry.");
    logger.error(
      "Could not reach the component registry. Check your connection.",
    );
    process.exit(1);
  }

  s.stop();

  // Resolve all components and their dependencies
  const allItems: RegistryItem[] = [];
  const resolved = new Set<string>();

  for (const name of components) {
    const found = findComponent(registry, name);
    if (!found) {
      logger.error(`Component "${name}" not found in registry.`);
      process.exit(1);
    }
    const deps = resolveDependencies(registry, name, resolved);
    allItems.push(...deps);
  }

  // Deduplicate (resolveDependencies already tracks via the shared Set, but just in case)
  const uniqueItems = [
    ...new Map(allItems.map((item) => [item.name, item])).values(),
  ];

  if (uniqueItems.length === 0) {
    logger.info("All components already resolved. Nothing to add.");
    p.outro("Done.");
    return;
  }

  // Show what will be installed
  const names = uniqueItems.map((item) => item.name);
  logger.info(
    `Components to install: ${names.map((n) => logger.highlight(n)).join(", ")}`,
  );

  // Check for existing components — ask per-component, skip if declined
  const skipSet = new Set<string>();
  for (const item of uniqueItems) {
    if (item.type === "registry:style") continue;
    if (await checkComponentExists(componentDir, item.name)) {
      const overwrite = await p.confirm({
        message: `${item.name} already exists. Overwrite?`,
      });
      if (p.isCancel(overwrite) || !overwrite) {
        skipSet.add(item.name);
      }
    }
  }

  // Remove skipped components from the install list
  const itemsToInstall = uniqueItems.filter((item) => !skipSet.has(item.name));

  if (itemsToInstall.length === 0) {
    logger.info("Nothing to install.");
    p.outro("Done.");
    return;
  }

  // Download and write files
  const writeSpinner = p.spinner();
  writeSpinner.start("Installing components...");

  try {
    for (const item of itemsToInstall) {
      for (const file of item.files) {
        const content = await fetchFileContent(file.path);
        // "ui/button/index.tsx" → write to {componentDir}/button/index.tsx
        const relativePath = file.path.replace(/^ui\//, "");
        const targetPath = path.resolve(componentDir, relativePath);
        await fs.ensureDir(path.dirname(targetPath));
        await fs.writeFile(targetPath, content, "utf-8");
      }
    }
    writeSpinner.stop("Components installed.");
  } catch (error) {
    writeSpinner.stop("Failed to install components.");
    const message = error instanceof Error ? error.message : String(error);
    logger.error(`Error writing files: ${message}`);
    process.exit(1);
  }

  // Install npm dependencies (include all resolved items — skipped components
  // may already be installed but their npm deps still need to be present)
  const npmDeps = collectNpmDependencies(uniqueItems);
  if (npmDeps.length > 0) {
    const pm = await getPackageManager(cwd);
    const installCmd = getInstallCommand(pm, npmDeps);

    const depSpinner = p.spinner();
    depSpinner.start(`Installing dependencies with ${pm}...`);

    try {
      const [cmd = "npm", ...args] = installCmd.split(" ");
      await execa(cmd, args, { cwd });
      depSpinner.stop("Dependencies installed.");
    } catch {
      depSpinner.stop("Failed to install dependencies.");
      logger.warn(
        `Could not install dependencies automatically. Run manually:\n  ${installCmd}`,
      );
    }
  }

  // Summary
  logger.break();
  for (const item of itemsToInstall) {
    logger.success(
      `${item.title ?? item.name} ${logger.dim(`(${item.name})`)}`,
    );
  }
  if (skipSet.size > 0) {
    logger.info(
      `Skipped (already installed): ${[...skipSet].map((n) => logger.highlight(n)).join(", ")}`,
    );
  }

  p.outro("Done. Import your components and start building.");
}
