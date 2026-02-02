import type { Registry } from "../types";
import { registryUi } from "./registry-ui";

export const registry = {
  name: "olyx-ui",
  items: [...registryUi],
} satisfies Registry;
