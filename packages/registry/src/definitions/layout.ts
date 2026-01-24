import type { Registry } from "../types";

export const layout: Registry["items"] = [
  {
    name: "skeleton",
    title: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    type: "registry:ui",
    files: [
      {
        path: "layout/skeleton/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "layout",
      tags: ["loading", "placeholder"],
    },
  },
];
