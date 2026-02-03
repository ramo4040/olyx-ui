import fs from "node:fs/promises";
import path from "node:path";
import { Index } from "@olyx/registry";

export interface RegistryItemFiles {
  tsx: string;
  css?: string;
}

/**
 * Get raw source code for displaying in docs
 * @param name - Registry component name (e.g., "accordion")
 * @returns Object with file metadata and raw code content
 */
export async function getRegistryItem(
  name: string,
): Promise<RegistryItemFiles | null> {
  const item = Index[name];
  if (!item?.files?.length) return null;

  const data: RegistryItemFiles = { tsx: "" };

  for (const file of item.files) {
    const filePath = file.path.replace("@olyx/react/", "");
    const fullPath = path.join(
      process.cwd(),
      "../../packages/react/src",
      filePath,
    );

    const content = await fs.readFile(fullPath, "utf-8");

    if (file.type === "registry:ui") {
      data.tsx = content;
    } else if (file.type === "registry:style") {
      data.css = content;
    }
  }

  return data;
}
