import type { Registry } from "../types";

export const form: Registry["items"] = [
  {
    name: "checkbox",
    title: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "form/checkbox/index.tsx",
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
    dependencies: ["@radix-ui/react-popover", "@radix-ui/react-command"],
    files: [
      {
        path: "form/combobox/index.tsx",
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
        path: "form/field/index.tsx",
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
        path: "form/input/index.tsx",
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
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "form/number-field/index.tsx",
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
    dependencies: ["@radix-ui/react-radio-group"],
    files: [
      {
        path: "form/radio/index.tsx",
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
    dependencies: ["@radix-ui/react-select"],
    files: [
      {
        path: "form/select/index.tsx",
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
    dependencies: ["@radix-ui/react-slider"],
    files: [
      {
        path: "form/slider/index.tsx",
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
    dependencies: ["@radix-ui/react-switch"],
    files: [
      {
        path: "form/switch/index.tsx",
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
        path: "form/textarea/index.tsx",
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
    dependencies: ["@radix-ui/react-toggle"],
    files: [
      {
        path: "form/toggle/index.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      category: "form",
      tags: ["button", "state"],
    },
  },
];
