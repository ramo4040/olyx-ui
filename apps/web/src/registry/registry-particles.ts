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
    description: "Accordion with one panel open",
    files: [
      { path: "registry/particles/p-accordion-2.tsx", type: "registry:block" },
    ],
    meta: {
      category: category("accordion"),
      tags: ["accordion", "collapse", "toggle"],
    },
    name: "p-accordion-2",
    registryDependencies: ["@coss/accordion"],
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
    registryDependencies: ["@coss/accordion"],
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
    registryDependencies: ["@coss/accordion", "@coss/button"],
    type: "registry:block",
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
