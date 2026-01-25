import type { Registry } from "../types";

export const feedback: Registry["items"] = [
  {
    name: "alert",
    title: "Alert",
    description: "Displays a callout for user attention.",
    type: "registry:ui",
    files: [
      {
        path: "feedback/alert/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["callout", "notification"],
    },
  },
  {
    name: "alert-dialog",
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: ["button"],
    files: [
      {
        path: "feedback/alert-dialog/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["modal", "confirm"],
    },
  },
  {
    name: "dialog",
    title: "Dialog",
    description:
      "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "feedback/dialog/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["modal", "overlay"],
    },
  },
  {
    name: "preview-card",
    title: "Preview Card",
    description: "A card that displays a preview of content with actions.",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "feedback/preview-card/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["preview", "card"],
    },
  },
  {
    name: "spinner",
    title: "Spinner",
    description: "A loading indicator that spins to indicate progress.",
    type: "registry:ui",
    files: [
      {
        path: "feedback/spinner/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["loading", "progress"],
    },
  },
  {
    name: "toast",
    title: "Toast",
    description: "A succinct message that is displayed temporarily.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toast"],
    files: [
      {
        path: "feedback/toast/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["notification", "snackbar"],
    },
  },
  {
    name: "tooltip",
    title: "Tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        path: "feedback/tooltip/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["hint", "popup"],
    },
  },
];
