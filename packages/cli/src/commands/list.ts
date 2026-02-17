import * as p from "@clack/prompts";
import { logger } from "../utils/logger.js";
import { fetchRegistry } from "../utils/registry.js";

export async function list() {
  const s = p.spinner();
  s.start("Fetching components...");

  try {
    const registry = await fetchRegistry();
    s.stop("Components loaded.");

    const components = registry.items
      .filter((item) => item.type === "registry:ui")
      .sort((a, b) => a.name.localeCompare(b.name));

    if (components.length === 0) {
      logger.warn("No components found.");
      return;
    }

    console.log("\nAvailable components:\n");
    console.log(components.map((c) => c.name).join("\n"));
    console.log("");
  } catch (_) {
    s.stop("Failed to fetch registry.");
    logger.error(
      "Could not reach the component registry. Check your connection.",
    );
    process.exit(1);
  }
}
