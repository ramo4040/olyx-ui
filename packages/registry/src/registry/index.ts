import type { Registry } from "../types";
import { registryStyle } from "./registry-style";
import { registryUi } from "./registry-ui";

export const registry = {
  name: "olyx-ui",
  items: [...registryUi, ...registryStyle],
} satisfies Registry;
