import { category, type RegistryItem } from "@olyx/registry";
import React, { type LazyExoticComponent } from "react";

const data: RegistryItem[] = [
  {
    name: "p-accordion-1",
    description: "Basic accordion",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-accordion-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/accordion"],
    meta: {
      category: category("accordion"),
      tags: ["accordion", "collapse", "toggle"],
    },
  },
  {
    name: "p-button-1",
    description: "Button with icon and plain button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "icon"],
    },
  },
  {
    name: "p-button-2",
    description: "Primary button modes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "mode"],
    },
  },
  {
    name: "p-button-3",
    description: "Neutral variant with all modes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "variant"],
    },
  },
  {
    name: "p-button-4",
    description: "Error variant with all modes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "variant", "error"],
    },
  },
  {
    name: "p-button-5",
    description: "Button sizes with icons",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "size"],
    },
  },
  {
    name: "p-button-6",
    description: "Button with text and icon",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "icon"],
    },
  },
  {
    name: "p-button-7",
    description: "Icon only button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "icon"],
    },
  },
  {
    name: "p-button-8",
    description: "Disabled button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-8.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "disabled"],
    },
  },
  {
    description: "Accordion with one panel open",
    files: [
      { path: "registry/particles/p-accordion-2.tsx", type: "registry:block" },
    ],
    meta: {
      category: category("accordion"),
      tags: ["accordion", "collapse", "toggle"],
    },
    name: "p-accordion-2",
    registryDependencies: ["@olyx/react/accordion"],
    type: "registry:block",
  },
  {
    description: "Accordion allowing multiple panels open",
    files: [
      { path: "registry/particles/p-accordion-3.tsx", type: "registry:block" },
    ],
    meta: {
      category: category("accordion"),
      tags: ["accordion", "collapse", "toggle"],
    },
    name: "p-accordion-3",
    registryDependencies: ["@olyx/react/accordion"],
    type: "registry:block",
  },
  {
    description: "Controlled accordion",
    files: [
      { path: "registry/particles/p-accordion-4.tsx", type: "registry:block" },
    ],
    meta: {
      category: category("accordion"),
      tags: ["accordion", "collapse", "toggle"],
    },
    name: "p-accordion-4",
    registryDependencies: ["@olyx/react/accordion", "@olyx/react/button"],
    type: "registry:block",
  },
  {
    name: "p-button-9",
    description: "Icon only button sizes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-9.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button"],
    meta: {
      category: category("button"),
      tags: ["button", "icon", "size"],
    },
  },
  {
    name: "p-button-10",
    description: "Loading button with spinner",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-10.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button", "@olyx/react/spinner"],
    meta: {
      category: category("button"),
      tags: ["button", "spinner", "loading"],
    },
  },
];

type RegistryItemWithComponent = RegistryItem & {
  component: LazyExoticComponent<any>;
};

export const particles: Record<string, RegistryItemWithComponent> = data.reduce(
  (acc, item) => {
    acc[item.name] = {
      ...item,
      component: React.lazy(async () => {
        const mod = await import(`@/registry/particles/${item.name}.tsx`);
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object",
          ) || item.name;
        return { default: mod.default || mod[exportName] };
      }),
    };
    return acc;
  },
  {} as Record<string, RegistryItemWithComponent>,
);
