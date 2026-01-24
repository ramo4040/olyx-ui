import type { Registry } from "../types";

export const navigation: Registry["items"] = [
  {
    name: "breadcrumb",
    title: "Breadcrumb",
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    type: "registry:ui",
    files: [
      {
        path: "navigation/breadcrumb/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "navigation",
      tags: ["breadcrumbs", "path"],
    },
  },
  {
    name: "navigation-menu",
    title: "Navigation Menu",
    description: "A collection of links for navigating websites.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: [
      {
        path: "navigation/navigation-menu/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "navigation",
      tags: ["menu", "navigation"],
    },
  },
  {
    name: "pagination",
    title: "Pagination",
    description: "Pagination with page navigation, next and previous links.",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "navigation/pagination/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "navigation",
      tags: ["paging", "pages"],
    },
  },
  {
    name: "tabs",
    title: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: [
      {
        path: "navigation/tabs/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "navigation",
      tags: ["tabpanel", "switcher"],
    },
  },
  {
    name: "toolbar",
    title: "Toolbar",
    description: "A container for grouping a set of controls.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toolbar"],
    registryDependencies: ["button"],
    files: [
      {
        path: "navigation/toolbar/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "navigation",
      tags: ["controls", "actions"],
    },
  },
];
