import path from "node:path";
import fs from "fs-extra";

/**
 * Check if a component already exists in the user's components directory.
 * Looks for the component folder (e.g., src/components/ui/button/).
 */
export async function checkComponentExists(
  componentDir: string,
  componentName: string,
): Promise<boolean> {
  const componentPath = path.resolve(componentDir, componentName);
  return fs.pathExists(componentPath);
}
