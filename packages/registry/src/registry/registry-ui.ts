import type { Registry } from "../types";

export const registryUi: Registry["items"] = [
  // core
  {
    name: "avatar",
    title: "Avatar",
    description: "An image element with a fallback for representing the user.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/avatar",
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
        path: "@olyx/react/badge",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/button",
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
        path: "@olyx/react/button-group",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/scroll-area",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/separator",
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
    files: [
      {
        path: "@olyx/react/status-badge",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "core",
      tags: ["status", "indicator"],
    },
  },
  // ...data-display
  {
    name: "banner",
    title: "Banner",
    description: "A prominent message display at the top of the page.",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "@olyx/react/banner",
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
        path: "@olyx/react/kbd",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/progress",
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
    registryDependencies: ["radio"],
    files: [
      {
        path: "@olyx/react/rating-bar",
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
    files: [
      {
        path: "@olyx/react/rating-review",
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
        path: "@olyx/react/table",
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
        path: "@olyx/react/tag",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "data-display",
      tags: ["label", "chip"],
    },
  },
  // ...disclosure
  {
    name: "accordion",
    title: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/accordion",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/collapsible",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/context-menu",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/drawer",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/dropdown-menu",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/menu-bar",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/popover",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "disclosure",
      tags: ["popup", "overlay"],
    },
  },
  // ...feedback
  {
    name: "alert",
    title: "Alert",
    description: "Displays a callout for user attention.",
    type: "registry:ui",
    files: [
      {
        path: "@olyx/react/alert",
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
    dependencies: ["@base-ui/react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@olyx/react/alert-dialog",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/dialog",
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
        path: "@olyx/react/preview-card",
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
        path: "@olyx/react/spinner",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/toast",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/tooltip",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "feedback",
      tags: ["hint", "popup"],
    },
  },
  // ...form
  {
    name: "checkbox",
    title: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/checkbox",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["input", "boolean", "toggle"],
    },
  },
  {
    name: "combobox",
    title: "Combobox",
    description:
      "Autocomplete input and command palette with a list of suggestions.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/combobox",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["autocomplete", "search", "select"],
    },
  },
  {
    name: "field",
    title: "Field",
    description: "A form field with label, input, and error message.",
    type: "registry:ui",
    registryDependencies: ["input"],
    files: [
      {
        path: "@olyx/react/field",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["wrapper", "label", "error"],
    },
  },
  {
    name: "input",
    title: "Input",
    description:
      "Displays a form input field or a component that looks like an input field.",
    type: "registry:ui",
    files: [
      {
        path: "@olyx/react/input",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["text", "field"],
    },
  },
  {
    name: "number-field",
    title: "Number Field",
    description: "A numeric input with increment and decrement buttons.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/number-field",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["numeric", "stepper"],
    },
  },
  {
    name: "radio",
    title: "Radio Group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/radio",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["choice", "option", "group"],
    },
  },
  {
    name: "select",
    title: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/select",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["dropdown", "picker"],
    },
  },
  {
    name: "slider",
    title: "Slider",
    description:
      "An input where the user selects a value from within a given range.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/slider",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["range", "input"],
    },
  },
  {
    name: "switch",
    title: "Switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/switch",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["toggle", "boolean"],
    },
  },
  {
    name: "textarea",
    title: "Textarea",
    description:
      "Displays a form textarea or a component that looks like a textarea.",
    type: "registry:ui",
    files: [
      {
        path: "@olyx/react/textarea",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["multiline", "text"],
    },
  },
  {
    name: "toggle",
    title: "Toggle",
    description: "A two-state button that can be either on or off.",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/toggle",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["button", "state"],
    },
  },
  // ...layout
  {
    name: "skeleton",
    title: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    type: "registry:ui",
    files: [
      {
        path: "@olyx/react/skeleton",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "layout",
      tags: ["loading", "placeholder"],
    },
  },
  // ...navigation
  {
    name: "breadcrumb",
    title: "Breadcrumb",
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    type: "registry:ui",
    files: [
      {
        path: "@olyx/react/breadcrumb",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/navigation-menu",
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
        path: "@olyx/react/pagination",
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
    dependencies: ["@base-ui/react"],
    files: [
      {
        path: "@olyx/react/tabs",
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
    dependencies: ["@base-ui/react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@olyx/react/toolbar",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "navigation",
      tags: ["controls", "actions"],
    },
  },
];
