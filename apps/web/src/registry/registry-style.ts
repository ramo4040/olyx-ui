import type { Registry } from "./types";

export const registryStyle: Registry["items"] = [
  {
    name: "tokens.css",
    title: "Design Tokens",
    description: "CSS custom properties for theming and design tokens.",
    type: "registry:style",
    files: [
      { path: "@olyx/react/styles/_base/tokens.css", type: "registry:style" },
    ],
    meta: {
      tags: ["design", "tokens", "css"],
    },
  },
  {
    name: "colors.css",
    title: "Colors",
    description: "Color palette and CSS variables for theming.",
    type: "registry:style",
    files: [
      { path: "@olyx/react/styles/_base/colors.css", type: "registry:style" },
    ],
    meta: {
      tags: ["colors", "palette", "css"],
    },
  },
];
