import { registryStyle } from "./registry-style";
import { registryUi } from "./registry-ui";
import type { Registry } from "./types";

export const registry = {
  name: "olyx-ui",
  items: [...registryUi, ...registryStyle],
} satisfies Registry;
