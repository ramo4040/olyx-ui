import path from "node:path";
import fs from "fs-extra";
import type { ComponentsConfig } from "../types.js";

const CONFIG_FILE = "components.json";

/** Resolve the config file path from the project root (cwd) */
function configPath(cwd: string): string {
  return path.resolve(cwd, CONFIG_FILE);
}

/** Check if components.json exists */
export async function configExists(cwd: string): Promise<boolean> {
  return fs.pathExists(configPath(cwd));
}

/** Read components.json. Returns null if it doesn't exist. */
export async function getConfig(cwd: string): Promise<ComponentsConfig | null> {
  const file = configPath(cwd);
  if (!(await fs.pathExists(file))) return null;

  const raw = await fs.readFile(file, "utf-8");
  try {
    return JSON.parse(raw) as ComponentsConfig;
  } catch {
    return null;
  }
}

/** Write components.json */
export async function writeConfig(
  cwd: string,
  config: ComponentsConfig,
): Promise<void> {
  const file = configPath(cwd);
  await fs.writeFile(file, JSON.stringify(config, null, 2), "utf-8");
}
