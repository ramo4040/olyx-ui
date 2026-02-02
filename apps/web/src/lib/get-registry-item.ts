import fs from "node:fs/promises";
import path from "node:path";
import { Index } from "@olyx/registry";

/**
 * Get raw source code for displaying in docs
 * @param name - Registry component name (e.g., "accordion")
 * @returns Object with file metadata and raw code content
 */
export async function getRegistryItem(name: string) {
  const item = Index[name];
  if (!item) return null;

  let content: string | undefined;

  for (const file of item.files) {
    const componentPath = file.path.replace("@olyx/react/", "");

    const filePath = path.join(
      process.cwd(),
      "../../packages/react/src",
      componentPath,
      "index.tsx",
    );

    content = await fs.readFile(filePath, "utf-8");
  }

  return content;
}
