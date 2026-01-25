import type { Registry } from "../types";
import { core } from "./core";
import { dataDisplay } from "./data-display";
import { disclosure } from "./disclosure";
import { feedback } from "./feedback";
import { form } from "./form";
import { layout } from "./layout";
import { navigation } from "./navigation";

export const registry: Registry = {
  name: "olyx",
  items: [
    ...core,
    ...form,
    ...feedback,
    ...dataDisplay,
    ...disclosure,
    ...layout,
    ...navigation,
  ],
};
