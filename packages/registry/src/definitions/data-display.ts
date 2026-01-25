import type { Registry } from "../types";

export const dataDisplay: Registry["items"] = [
  {
    name: "banner",
    title: "Banner",
    description: "A prominent message display at the top of the page.",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "data-display/banner/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["announcement", "message"],
    },
  },
  {
    name: "kbd",
    title: "Keyboard",
    description:
      "Displays which key or combination of keys performs a given action.",
    type: "registry:ui",
    files: [
      {
        path: "data-display/kbd/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["keyboard", "shortcut"],
    },
  },
  {
    name: "progress",
    title: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: [
      {
        path: "data-display/progress/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["loading", "indicator"],
    },
  },
  {
    name: "rating-bar",
    title: "Rating Bar",
    description: "Displays a rating using stars or other indicators.",
    type: "registry:ui",
    files: [
      {
        path: "data-display/rating-bar/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["rating", "stars"],
    },
  },
  {
    name: "rating-review",
    title: "Rating Review",
    description: "Displays detailed rating information with reviews.",
    type: "registry:ui",
    registryDependencies: ["rating-bar"],
    files: [
      {
        path: "data-display/rating-review/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["rating", "review"],
    },
  },
  {
    name: "table",
    title: "Table",
    description: "A responsive table component for displaying tabular data.",
    type: "registry:ui",
    files: [
      {
        path: "data-display/table/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["data", "grid"],
    },
  },
  {
    name: "tag",
    title: "Tag",
    description:
      "A compact element that represents an input, attribute, or action.",
    type: "registry:ui",
    files: [
      {
        path: "data-display/tag/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["label", "chip"],
    },
  },
];
