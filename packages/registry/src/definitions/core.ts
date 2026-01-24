import type { Registry } from "../types";

export const core: Registry["items"] = [
  {
    name: "avatar",
    title: "Avatar",
    description: "An image element with a fallback for representing the user.",
    type: "registry:ui",
    files: [
      {
        path: "core/avatar/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["user", "profile", "image"],
    },
  },
  {
    name: "badge",
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    type: "registry:ui",
    files: [
      {
        path: "core/badge/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["status", "label", "tag"],
    },
  },
  {
    name: "button",
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    type: "registry:ui",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "core/button/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["action", "click", "primary"],
    },
  },
  {
    name: "button-group",
    title: "Button Group",
    description: "Groups related buttons together.",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "core/button-group/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["group", "collection"],
    },
  },
  {
    name: "scroll-area",
    title: "Scroll Area",
    description:
      "Augments native scroll functionality for custom, cross-browser styling.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: [
      {
        path: "core/scroll-area/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["scroll", "overflow"],
    },
  },
  {
    name: "separator",
    title: "Separator",
    description: "Visually or semantically separates content.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-separator"],
    files: [
      {
        path: "core/separator/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["divider", "hr"],
    },
  },
  {
    name: "status-badge",
    title: "Status Badge",
    description: "Displays status information with colored indicators.",
    type: "registry:ui",
    registryDependencies: ["badge"],
    files: [
      {
        path: "core/status-badge/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["status", "indicator"],
    },
  },
];
