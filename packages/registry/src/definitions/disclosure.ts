import type { Registry } from "../types";

export const disclosure: Registry["items"] = [
  {
    name: "accordion",
    title: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: [
      {
        path: "disclosure/accordion/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["collapsible", "expandable"],
    },
  },
  {
    name: "collapsible",
    title: "Collapsible",
    description: "An interactive component which expands/collapses a panel.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-collapsible"],
    files: [
      {
        path: "disclosure/collapsible/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["expand", "collapse"],
    },
  },
  {
    name: "context-menu",
    title: "Context Menu",
    description:
      "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-context-menu"],
    files: [
      {
        path: "disclosure/context-menu/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["menu", "right-click"],
    },
  },
  {
    name: "drawer",
    title: "Drawer",
    description: "A drawer component for React.",
    type: "registry:ui",
    dependencies: ["vaul"],
    files: [
      {
        path: "disclosure/drawer/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["sheet", "slide"],
    },
  },
  {
    name: "dropdown-menu",
    title: "Dropdown Menu",
    description:
      "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: [
      {
        path: "disclosure/dropdown-menu/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["menu", "dropdown"],
    },
  },
  {
    name: "menu-bar",
    title: "Menu Bar",
    description: "A visually persistent menu common in desktop applications.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-menubar"],
    files: [
      {
        path: "disclosure/menu-bar/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["menubar", "desktop"],
    },
  },
  {
    name: "popover",
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-popover"],
    files: [
      {
        path: "disclosure/popover/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["popup", "overlay"],
    },
  },
];
