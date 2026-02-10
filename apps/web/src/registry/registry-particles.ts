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
      classname: "p-accordion",
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
      classname: "flex-col",
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
      classname: "flex-col",
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
      classname: "flex-col",
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
      classname: "flex-col",
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
      classname: "flex-col",
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
      classname: "flex-col",
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
      classname: "flex-col",
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
      classname: "p-accordion",
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
      classname: "p-accordion",
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
      classname: "p-accordion",
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
      classname: "flex-col",
      tags: ["button", "spinner", "loading"],
    },
  },
  {
    name: "p-breadcrumb-1",
    description: "Basic breadcrumb navigation",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-breadcrumb-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/breadcrumb"],
    meta: {
      category: category("breadcrumb"),
      tags: ["breadcrumb", "navigation"],
    },
  },
  {
    name: "p-breadcrumb-2",
    description: "Breadcrumb with dropdown menu and ellipsis",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-breadcrumb-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/breadcrumb",
      "@olyx/react/dropdown-menu",
    ],
    meta: {
      category: category("breadcrumb"),
      tags: ["breadcrumb", "navigation", "dropdown"],
    },
  },
  {
    name: "p-button-group-1",
    description: "Button groups with dropdown menu",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-group-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/button-group",
      "@olyx/react/button",
      "@olyx/react/dropdown-menu",
    ],
    meta: {
      category: category("button-group"),
      tags: ["button-group", "buttons", "dropdown"],
    },
  },
  {
    name: "p-button-group-2",
    description: "Vertical button group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-group-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button-group", "@olyx/react/button"],
    meta: {
      category: category("button-group"),
      tags: ["button-group", "buttons", "vertical"],
    },
  },
  {
    name: "p-button-group-3",
    description: "Button group sizes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-group-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/button-group", "@olyx/react/button"],
    meta: {
      category: category("button-group"),
      classname: "flex-col",
      tags: ["button-group", "buttons", "sizes"],
    },
  },
  {
    name: "p-button-group-4",
    description: "Split button group with dropdown",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-button-group-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/button-group",
      "@olyx/react/button",
      "@olyx/react/dropdown-menu",
    ],
    meta: {
      category: category("button-group"),
      tags: ["button-group", "buttons", "split", "dropdown"],
    },
  },
  {
    name: "p-checkbox-1",
    description: "Default checkbox",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/checkbox"],
    meta: {
      category: category("checkbox"),
      tags: ["checkbox", "form"],
    },
  },
  {
    name: "p-checkbox-2",
    description: "Disabled checkbox",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/checkbox"],
    meta: {
      category: category("checkbox"),
      tags: ["checkbox", "form", "disabled"],
    },
  },
  {
    name: "p-checkbox-3",
    description: "Indeterminate checkbox",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/checkbox"],
    meta: {
      category: category("checkbox"),
      tags: ["checkbox", "form", "indeterminate"],
    },
  },
  {
    name: "p-checkbox-group-1",
    description: "Basic checkbox group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-group-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/checkbox-group",
      "@olyx/react/checkbox",
      "@olyx/react/field",
    ],
    meta: {
      category: category("checkbox-group"),
      tags: ["checkbox-group", "form"],
    },
  },
  {
    name: "p-checkbox-group-2",
    description: "Checkbox group with disabled item",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-group-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/checkbox-group",
      "@olyx/react/checkbox",
      "@olyx/react/field",
    ],
    meta: {
      category: category("checkbox-group"),
      tags: ["checkbox-group", "form", "disabled"],
    },
  },
  {
    name: "p-checkbox-group-3",
    description: "Checkbox group with parent checkbox",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-group-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/checkbox-group",
      "@olyx/react/checkbox",
      "@olyx/react/field",
    ],
    meta: {
      category: category("checkbox-group"),
      tags: ["checkbox-group", "form", "parent"],
    },
  },
  {
    name: "p-checkbox-group-4",
    description: "Nested parent checkbox group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-group-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/checkbox-group",
      "@olyx/react/checkbox",
      "@olyx/react/field",
    ],
    meta: {
      category: category("checkbox-group"),
      tags: ["checkbox-group", "form", "nested"],
    },
  },
  {
    name: "p-checkbox-group-5",
    description: "Checkbox group form integration",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-checkbox-group-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/checkbox-group",
      "@olyx/react/checkbox",
      "@olyx/react/button",
      "@olyx/react/field",
    ],
    meta: {
      category: category("checkbox-group"),
      tags: ["checkbox-group", "form", "controlled"],
    },
  },
  {
    name: "p-collapsible-1",
    description: "Basic collapsible panel",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-collapsible-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/collapsible", "@olyx/react/button"],
    meta: {
      category: category("collapsible"),
      classname: "p-collapsible",
      tags: ["collapsible", "toggle", "panel"],
    },
  },
  {
    name: "p-alert-1",
    description: "Default alert with information status",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      tags: ["alert", "notification"],
    },
  },
  {
    name: "p-alert-2",
    description: "Error status with all variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      classname: "flex-col",
      tags: ["alert", "error"],
    },
  },
  {
    name: "p-alert-3",
    description: "Warning status with all variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      classname: "flex-col",
      tags: ["alert", "warning"],
    },
  },
  {
    name: "p-alert-4",
    description: "Success status with all variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      classname: "flex-col",
      tags: ["alert", "success"],
    },
  },
  {
    name: "p-alert-5",
    description: "Information status with all variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      classname: "flex-col",
      tags: ["alert", "stroke"],
    },
  },
  {
    name: "p-alert-6",
    description: "Feature status with all variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      tags: ["alert", "dismissible"],
    },
  },
  {
    name: "p-alert-7",
    description: "Alert with close button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      tags: ["alert", "small"],
    },
  },
  {
    name: "p-alert-8",
    description: "All size variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-8.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert"],
    meta: {
      category: category("alert"),
      classname: "flex-col",
      tags: ["alert", "large"],
    },
  },
  {
    name: "p-alert-dialog-1",
    description: "Default alert dialog with destructive action",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-dialog-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert-dialog", "@olyx/react/button"],
    meta: {
      category: category("alert-dialog"),
      tags: ["alert-dialog", "destructive"],
    },
  },
  {
    name: "p-alert-dialog-2",
    description: "Alert dialog with custom footer buttons",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-dialog-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert-dialog", "@olyx/react/button"],
    meta: {
      category: category("alert-dialog"),
      tags: ["alert-dialog", "custom-footer"],
    },
  },
  {
    name: "p-alert-dialog-3",
    description: "Alert dialog without close button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-dialog-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert-dialog", "@olyx/react/button"],
    meta: {
      category: category("alert-dialog"),
      tags: ["alert-dialog", "no-close"],
    },
  },
  {
    name: "p-alert-dialog-4",
    description: "Sign out confirmation dialog",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-alert-dialog-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/alert-dialog", "@olyx/react/button"],
    meta: {
      category: category("alert-dialog"),
      tags: ["alert-dialog", "sign-out"],
    },
  },
  {
    name: "p-avatar-1",
    description: "Avatar with image and fallback",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-avatar-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/avatar"],
    meta: {
      category: category("avatar"),
      tags: ["avatar", "image", "user"],
    },
  },
  {
    name: "p-avatar-2",
    description: "Avatar with fallback only",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-avatar-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/avatar"],
    meta: {
      category: category("avatar"),
      tags: ["avatar", "fallback"],
    },
  },
  {
    name: "p-avatar-3",
    description: "Avatar with status badges",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-avatar-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/avatar"],
    meta: {
      category: category("avatar"),
      tags: ["avatar", "status", "badge"],
    },
  },
  {
    name: "p-avatar-4",
    description: "Avatar sizes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-avatar-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/avatar"],
    meta: {
      category: category("avatar"),
      tags: ["avatar", "sizes"],
    },
  },
  {
    name: "p-avatar-5",
    description: "Avatar shapes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-avatar-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/avatar"],
    meta: {
      category: category("avatar"),
      tags: ["avatar", "shapes", "circle", "square"],
    },
  },
  {
    name: "p-avatar-6",
    description: "Avatar group with count",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-avatar-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/avatar"],
    meta: {
      category: category("avatar"),
      tags: ["avatar", "group", "stack"],
    },
  },
  {
    name: "p-badge-1",
    description: "Default badge",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge"],
    },
  },
  {
    name: "p-badge-2",
    description: "Badge modes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge", "modes"],
    },
  },
  {
    name: "p-badge-3",
    description: "Badge sizes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge", "sizes"],
    },
  },
  {
    name: "p-badge-4",
    description: "Badge shapes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge", "shapes"],
    },
  },
  {
    name: "p-badge-5",
    description: "Badge with dot",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge", "dot", "indicator"],
    },
  },
  {
    name: "p-badge-6",
    description: "Badge with icon",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge", "icon"],
    },
  },
  {
    name: "p-badge-7",
    description: "Disabled badge",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-badge-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/badge"],
    meta: {
      category: category("badge"),
      tags: ["badge", "disabled"],
    },
  },
  {
    name: "p-banner-1",
    description: "Default banner",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner"],
    },
  },
  {
    name: "p-banner-2",
    description: "Error banner variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner", "error", "variants"],
    },
  },
  {
    name: "p-banner-3",
    description: "Warning banner variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner", "warning", "variants"],
    },
  },
  {
    name: "p-banner-4",
    description: "Success banner variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner", "success", "variants"],
    },
  },
  {
    name: "p-banner-5",
    description: "Info banner variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner", "info", "variants"],
    },
  },
  {
    name: "p-banner-6",
    description: "Feature banner variants",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner", "feature", "variants"],
    },
  },
  {
    name: "p-banner-7",
    description: "Banner with close button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-banner-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/banner"],
    meta: {
      category: category("banner"),
      classname: "w-full",
      tags: ["banner", "close", "dismissible"],
    },
  },
  {
    name: "p-autocomplete-1",
    description: "Basic autocomplete",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "input", "suggestions"],
    },
  },
  {
    name: "p-autocomplete-2",
    description: "Disabled autocomplete",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "disabled"],
    },
  },
  {
    name: "p-autocomplete-5",
    description: "Autocomplete with label",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "label"],
    },
  },
  {
    name: "p-autocomplete-6",
    description: "Inline autocomplete",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "inline"],
    },
  },
  {
    name: "p-autocomplete-7",
    description: "Auto highlight autocomplete",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "highlight"],
    },
  },
  {
    name: "p-autocomplete-8",
    description: "Autocomplete with clear button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-8.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "clear"],
    },
  },
  {
    name: "p-autocomplete-9",
    description: "Autocomplete with trigger and clear buttons",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-9.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "trigger", "clear"],
    },
  },
  {
    name: "p-autocomplete-10",
    description: "Autocomplete with groups",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-10.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "group"],
    },
  },
  {
    name: "p-autocomplete-11",
    description: "Autocomplete with limit results",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-11.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "limit"],
    },
  },
  {
    name: "p-autocomplete-12",
    description: "Autocomplete async search",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-12.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "async"],
    },
  },
  {
    name: "p-autocomplete-13",
    description: "Autocomplete form integration",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-13.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "form"],
    },
  },
  {
    name: "p-autocomplete-14",
    description: "Autocomplete with start addon",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-autocomplete-14.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/autocomplete"],
    meta: {
      category: category("autocomplete"),
      classname: "p-autocomplete",
      tags: ["autocomplete", "addon", "icon"],
    },
  },
  {
    name: "p-combobox-1",
    description: "Default combobox with single selection",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/combobox"],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "select"],
    },
  },
  {
    name: "p-combobox-2",
    description: "Disabled combobox",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/combobox"],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "disabled"],
    },
  },
  {
    name: "p-combobox-3",
    description: "Combobox with clear button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/combobox"],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "clear"],
    },
  },
  {
    name: "p-combobox-4",
    description: "Combobox with label",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/combobox", "@olyx/react/field"],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "label", "field"],
    },
  },
  {
    name: "p-combobox-5",
    description: "Combobox with groups",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/combobox"],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "group"],
    },
  },
  {
    name: "p-combobox-6",
    description: "Combobox with multiple selection chips",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/combobox"],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "multiple", "chips"],
    },
  },
  {
    name: "p-combobox-7",
    description: "Combobox form integration",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-combobox-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/combobox",
      "@olyx/react/button",
      "@olyx/react/field",
    ],
    meta: {
      category: category("combobox"),
      classname: "p-autocomplete",
      tags: ["combobox", "form"],
    },
  },
  {
    name: "p-command-1",
    description: "Default command dialog",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-command-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/command", "@olyx/react/button"],
    meta: {
      category: category("command"),
      tags: ["command", "dialog", "palette"],
    },
  },
  {
    name: "p-command-2",
    description: "Command dialog with groups",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-command-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/command", "@olyx/react/button"],
    meta: {
      category: category("command"),
      tags: ["command", "dialog", "groups"],
    },
  },
  {
    name: "p-command-3",
    description: "Command dialog with shortcuts",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-command-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/command", "@olyx/react/button"],
    meta: {
      category: category("command"),
      tags: ["command", "dialog", "shortcuts"],
    },
  },
  {
    name: "p-command-4",
    description: "Standalone command without dialog",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-command-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/command"],
    meta: {
      category: category("command"),
      tags: ["command", "standalone"],
    },
  },
  {
    name: "p-command-5",
    description: "Command dialog with footer",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-command-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/command",
      "@olyx/react/button",
      "@olyx/react/kbd",
    ],
    meta: {
      category: category("command"),
      tags: ["command", "dialog", "footer"],
    },
  },
  {
    name: "p-context-menu-1",
    description: "Default context menu",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-context-menu-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/context-menu"],
    meta: {
      category: category("context-menu"),
      classname: "p-context-menu",
      tags: ["context-menu", "right-click"],
    },
  },
  {
    name: "p-context-menu-2",
    description: "Context menu with submenu",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-context-menu-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/context-menu"],
    meta: {
      category: category("context-menu"),
      classname: "p-context-menu",
      tags: ["context-menu", "submenu"],
    },
  },
  {
    name: "p-context-menu-3",
    description: "Context menu with groups",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-context-menu-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/context-menu"],
    meta: {
      category: category("context-menu"),
      classname: "p-context-menu",
      tags: ["context-menu", "groups"],
    },
  },
  {
    name: "p-context-menu-4",
    description: "Context menu with checkbox items",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-context-menu-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/context-menu"],
    meta: {
      category: category("context-menu"),
      classname: "p-context-menu",
      tags: ["context-menu", "checkbox"],
    },
  },
  {
    name: "p-context-menu-5",
    description: "Context menu with radio items",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-context-menu-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/context-menu"],
    meta: {
      category: category("context-menu"),
      classname: "p-context-menu",
      tags: ["context-menu", "radio"],
    },
  },
  {
    name: "p-dialog-1",
    description: "Default dialog",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dialog-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dialog", "@olyx/react/button"],
    meta: {
      category: category("dialog"),
      tags: ["dialog", "modal"],
    },
  },
  {
    name: "p-dialog-2",
    description: "Dialog with custom footer buttons",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dialog-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dialog", "@olyx/react/button"],
    meta: {
      category: category("dialog"),
      tags: ["dialog", "modal", "custom-footer"],
    },
  },
  {
    name: "p-dialog-3",
    description: "Dialog without close button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dialog-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dialog", "@olyx/react/button"],
    meta: {
      category: category("dialog"),
      tags: ["dialog", "modal", "no-close"],
    },
  },
  {
    name: "p-dialog-4",
    description: "Nested dialogs",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dialog-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dialog", "@olyx/react/button"],
    meta: {
      category: category("dialog"),
      tags: ["dialog", "modal", "nested"],
    },
  },
  {
    name: "p-drawer-1",
    description: "Default bottom drawer with handle",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-drawer-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/drawer", "@olyx/react/button"],
    meta: {
      category: category("drawer"),
      tags: ["drawer", "bottom", "handle"],
    },
  },
  {
    name: "p-drawer-2",
    description: "Right side drawer",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-drawer-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/drawer", "@olyx/react/button"],
    meta: {
      category: category("drawer"),
      tags: ["drawer", "right", "side"],
    },
  },
  {
    name: "p-drawer-3",
    description: "Left side drawer",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-drawer-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/drawer", "@olyx/react/button"],
    meta: {
      category: category("drawer"),
      tags: ["drawer", "left", "side"],
    },
  },
  {
    name: "p-drawer-4",
    description: "Top drawer",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-drawer-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/drawer", "@olyx/react/button"],
    meta: {
      category: category("drawer"),
      tags: ["drawer", "top"],
    },
  },
  {
    name: "p-dropdown-menu-1",
    description: "Default dropdown menu with icons",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dropdown-menu-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dropdown-menu", "@olyx/react/button"],
    meta: {
      category: category("dropdown-menu"),
      tags: ["dropdown-menu", "icons"],
    },
  },
  {
    name: "p-dropdown-menu-2",
    description: "Dropdown menu with groups",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dropdown-menu-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dropdown-menu", "@olyx/react/button"],
    meta: {
      category: category("dropdown-menu"),
      tags: ["dropdown-menu", "groups"],
    },
  },
  {
    name: "p-dropdown-menu-3",
    description: "Dropdown menu with checkbox items",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dropdown-menu-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dropdown-menu", "@olyx/react/button"],
    meta: {
      category: category("dropdown-menu"),
      tags: ["dropdown-menu", "checkbox"],
    },
  },
  {
    name: "p-dropdown-menu-4",
    description: "Dropdown menu with radio group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dropdown-menu-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dropdown-menu", "@olyx/react/button"],
    meta: {
      category: category("dropdown-menu"),
      tags: ["dropdown-menu", "radio"],
    },
  },
  {
    name: "p-dropdown-menu-5",
    description: "Dropdown menu with submenu",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-dropdown-menu-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/dropdown-menu", "@olyx/react/button"],
    meta: {
      category: category("dropdown-menu"),
      tags: ["dropdown-menu", "submenu"],
    },
  },
  {
    name: "p-field-1",
    description: "Default field with label and input",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-1.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "label", "form"],
    },
  },
  {
    name: "p-field-2",
    description: "Field with description text",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-2.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "description"],
    },
  },
  {
    name: "p-field-3",
    description: "Field with error validation",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-3.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "error", "validation"],
    },
  },
  {
    name: "p-field-4",
    description: "Horizontal field orientation",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-4.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "horizontal"],
    },
  },
  {
    name: "p-field-5",
    description: "Field with validity state display",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-5.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "validity", "state"],
    },
  },
  {
    name: "p-field-6",
    description: "Fieldset with legend and multiple fields",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-6.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      tags: ["field", "fieldset"],
    },
  },
  {
    name: "p-field-7",
    description: "Disabled field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-7.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "disabled"],
    },
  },
  {
    name: "p-field-8",
    description: "Autocomplete field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-8.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/autocomplete"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "autocomplete"],
    },
  },
  {
    name: "p-field-9",
    description: "Combobox field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-9.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/combobox"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "combobox"],
    },
  },
  {
    name: "p-field-10",
    description: "Combobox multiple field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-10.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/combobox"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "combobox", "multiple"],
    },
  },
  {
    name: "p-field-11",
    description: "Textarea field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-11.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/textarea"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "textarea"],
    },
  },
  {
    name: "p-field-12",
    description: "Select field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-12.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/select"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "select"],
    },
  },
  {
    name: "p-field-13",
    description: "Checkbox field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-13.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/checkbox"],
    meta: {
      category: category("field"),
      classname: "w-fit",
      tags: ["field", "checkbox"],
    },
  },
  {
    name: "p-field-14",
    description: "Checkbox group field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-14.tsx", type: "registry:block" },
    ],
    registryDependencies: [
      "@olyx/react/field",
      "@olyx/react/checkbox",
      "@olyx/react/checkbox-group",
    ],
    meta: {
      category: category("field"),
      tags: ["field", "checkbox-group"],
    },
  },
  {
    name: "p-field-15",
    description: "Radio group field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-15.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/radio"],
    meta: {
      category: category("field"),
      tags: ["field", "radio"],
    },
  },
  {
    name: "p-field-16",
    description: "Switch field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-16.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/switch"],
    meta: {
      category: category("field"),
      classname: "w-fit",
      tags: ["field", "switch"],
    },
  },
  {
    name: "p-field-17",
    description: "Slider field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-17.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/slider"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "slider"],
    },
  },
  {
    name: "p-field-18",
    description: "Number field within field",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-18.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/number-field"],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "number-field"],
    },
  },
  {
    name: "p-field-19",
    description: "Complete form example",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-field-19.tsx", type: "registry:block" },
    ],
    registryDependencies: [
      "@olyx/react/field",
      "@olyx/react/input",
      "@olyx/react/select",
      "@olyx/react/textarea",
      "@olyx/react/checkbox",
      "@olyx/react/button",
    ],
    meta: {
      category: category("field"),
      classname: "p-input",
      tags: ["field", "form"],
    },
  },
  {
    name: "p-input-1",
    description: "Default input with placeholder",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-input-1.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/input"],
    meta: {
      category: category("input"),
      classname: "p-input",
      tags: ["input", "form"],
    },
  },
  {
    name: "p-input-2",
    description: "Disabled input",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-input-2.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/input"],
    meta: {
      category: category("input"),
      classname: "p-input",
      tags: ["input", "disabled"],
    },
  },

  {
    name: "p-input-4",
    description: "Input with label and description",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-input-4.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/field", "@olyx/react/input"],
    meta: {
      category: category("input"),
      classname: "p-input",
      tags: ["input", "label", "field"],
    },
  },
  {
    name: "p-input-group-1",
    description: "Input group with start icon",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      classname: "p-input",
      tags: ["input-group", "icon"],
    },
  },
  {
    name: "p-input-group-2",
    description: "Input group with end icon",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      classname: "p-input",
      tags: ["input-group", "icon"],
    },
  },
  {
    name: "p-input-group-3",
    description: "Input group with start affix",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      classname: "p-input",
      tags: ["input-group", "affix"],
    },
  },
  {
    name: "p-input-group-4",
    description: "Input group with end affix",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      classname: "p-input",
      tags: ["input-group", "affix"],
    },
  },
  {
    name: "p-input-group-5",
    description: "Input group with start and end affix",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      classname: "p-input",
      tags: ["input-group", "affix"],
    },
  },
  {
    name: "p-input-group-6",
    description: "Input group with inline affix",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      classname: "p-input",
      tags: ["input-group", "affix", "inline"],
    },
  },
  {
    name: "p-input-group-7",
    description: "Input group with keyboard shortcut",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/input-group",
      "@olyx/react/input",
      "@olyx/react/kbd",
    ],
    meta: {
      category: category("input-group"),
      tags: ["input-group", "kbd"],
      classname: "p-input",
    },
  },
  {
    name: "p-input-group-8",
    description: "Disabled input group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-8.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/input-group", "@olyx/react/input"],
    meta: {
      category: category("input-group"),
      tags: ["input-group", "disabled"],
      classname: "p-input",
    },
  },
  {
    name: "p-input-group-9",
    description: "Input group with button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-input-group-9.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/input-group",
      "@olyx/react/input",
      "@olyx/react/button",
    ],
    meta: {
      category: category("input-group"),
      tags: ["input-group", "button"],
      classname: "p-input",
    },
  },
  {
    name: "p-kbd-1",
    description: "Single key and key combination",
    type: "registry:block",
    files: [{ path: "registry/particles/p-kbd-1.tsx", type: "registry:block" }],
    registryDependencies: ["@olyx/react/kbd"],
    meta: {
      category: category("kbd"),
      tags: ["kbd", "keyboard", "shortcut"],
    },
  },
  {
    name: "p-link-button-1",
    description: "Default link button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button"],
    },
  },
  {
    name: "p-link-button-2",
    description: "Gray variant link button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button", "gray"],
    },
  },
  {
    name: "p-link-button-3",
    description: "Primary variant link button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button", "primary"],
    },
  },
  {
    name: "p-link-button-4",
    description: "Error variant link button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button", "error"],
    },
  },
  {
    name: "p-link-button-5",
    description: "Small size link button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button", "small"],
    },
  },
  {
    name: "p-link-button-6",
    description: "Link button without underline",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button", "underline"],
    },
  },
  {
    name: "p-link-button-7",
    description: "Disabled link button",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-link-button-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/link-button"],
    meta: {
      category: category("link-button"),
      tags: ["link-button", "disabled"],
    },
  },
  {
    name: "p-number-field-1",
    description: "Default number field",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-number-field-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/number-field"],
    meta: {
      category: category("number-field"),
      tags: ["number-field", "form"],
    },
  },
  {
    name: "p-number-field-2",
    description: "Number field with scrub area",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-number-field-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/number-field"],
    meta: {
      category: category("number-field"),
      classname: "w-fit",
      tags: ["number-field", "scrub"],
    },
  },
  {
    name: "p-number-field-3",
    description: "Disabled number field",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-number-field-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/number-field"],
    meta: {
      category: category("number-field"),
      tags: ["number-field", "disabled"],
    },
  },
  {
    name: "p-number-field-4",
    description: "Number field with min/max range",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-number-field-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/number-field"],
    meta: {
      category: category("number-field"),
      tags: ["number-field", "range"],
    },
  },
  {
    name: "p-number-field-5",
    description: "Number field with step increment",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-number-field-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/number-field"],
    meta: {
      category: category("number-field"),
      tags: ["number-field", "step"],
    },
  },
  {
    name: "p-navigation-menu-1",
    description: "Default navigation menu with dropdown panels",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-navigation-menu-1.tsx",
        type: "registry:block",
      },
      {
        path: "registry/particles/styles/p-navigation-menu-1.css",
        type: "registry:style",
      },
    ],
    registryDependencies: ["@olyx/react/navigation-menu"],
    meta: {
      category: category("navigation-menu"),
      tags: ["navigation-menu", "navigation"],
    },
  },
  {
    name: "p-navigation-menu-2",
    description: "Navigation menu with direct links",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-navigation-menu-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/navigation-menu"],
    meta: {
      category: category("navigation-menu"),
      tags: ["navigation-menu", "links"],
    },
  },
  {
    name: "p-navigation-menu-3",
    description: "Vertical navigation menu",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-navigation-menu-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/navigation-menu"],
    meta: {
      category: category("navigation-menu"),
      tags: ["navigation-menu", "vertical"],
    },
  },
  {
    name: "p-menu-bar-1",
    description: "Default menubar with File, Edit, View menus",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-menu-bar-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/menu-bar"],
    meta: {
      category: category("menu-bar"),
      classname: "p-menu-bar",
      tags: ["menu-bar", "menubar"],
    },
  },
  {
    name: "p-menu-bar-2",
    description: "Menubar with checkbox items",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-menu-bar-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/menu-bar"],
    meta: {
      category: category("menu-bar"),
      classname: "p-menu-bar",
      tags: ["menu-bar", "checkbox"],
    },
  },
  {
    name: "p-menu-bar-3",
    description: "Menubar with radio group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-menu-bar-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/menu-bar"],
    meta: {
      category: category("menu-bar"),
      classname: "p-menu-bar",
      tags: ["menu-bar", "radio"],
    },
  },
  {
    name: "p-menu-bar-4",
    description: "Menubar with submenu",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-menu-bar-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/menu-bar"],
    meta: {
      category: category("menu-bar"),
      classname: "p-menu-bar",
      tags: ["menu-bar", "submenu"],
    },
  },
  {
    name: "p-pagination-1",
    description: "Default pagination",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-pagination-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/pagination"],
    meta: {
      category: category("pagination"),
      tags: ["pagination", "navigation"],
    },
  },
  {
    name: "p-pagination-2",
    description: "Rounded pagination",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-pagination-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/pagination"],
    meta: {
      category: category("pagination"),
      tags: ["pagination", "rounded"],
    },
  },
  {
    name: "p-popover-1",
    description: "Default popover with title and description",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-popover-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/popover", "@olyx/react/button"],
    meta: {
      category: category("popover"),
      tags: ["popover", "popup"],
    },
  },
  {
    name: "p-popover-2",
    description: "Popover positioned on top",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-popover-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/popover", "@olyx/react/button"],
    meta: {
      category: category("popover"),
      tags: ["popover", "positioning"],
    },
  },
  {
    name: "p-popover-3",
    description: "Popover as tooltip",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-popover-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/popover",
      "@olyx/react/input-group",
      "@olyx/react/input",
      "@olyx/react/button",
    ],
    meta: {
      category: category("popover"),
      classname: "p-input",
      tags: ["popover", "tooltip"],
    },
  },
  {
    name: "p-preview-card-1",
    description: "Default preview card with dark variant",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-preview-card-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/preview-card",
      "@olyx/react/link-button",
    ],
    meta: {
      category: category("preview-card"),
      tags: ["preview-card", "hover"],
    },
  },
  {
    name: "p-preview-card-2",
    description: "Preview card with light variant",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-preview-card-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/preview-card",
      "@olyx/react/link-button",
    ],
    meta: {
      category: category("preview-card"),
      tags: ["preview-card", "light"],
    },
  },
  {
    name: "p-progress-1",
    description: "Default progress bar",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-progress-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/progress"],
    meta: {
      category: category("progress"),
      classname: "p-input",
      tags: ["progress", "loading"],
    },
  },
  {
    name: "p-progress-2",
    description: "Progress with label and value",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-progress-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/progress"],
    meta: {
      category: category("progress"),
      classname: "p-input",
      tags: ["progress", "label", "value"],
    },
  },
  {
    name: "p-progress-3",
    description: "Progress with formatted value",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-progress-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/progress"],
    meta: {
      category: category("progress"),
      classname: "p-input",
      tags: ["progress", "format", "value"],
    },
  },
  {
    name: "p-radio-group-1",
    description: "Default radio group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-radio-group-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/radio", "@olyx/react/field"],
    meta: {
      category: category("radio"),
      tags: ["radio", "form"],
    },
  },
  {
    name: "p-radio-group-2",
    description: "Disabled radio group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-radio-group-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/radio", "@olyx/react/field"],
    meta: {
      category: category("radio"),
      tags: ["radio", "disabled"],
    },
  },
  {
    name: "p-radio-group-3",
    description: "Radio group with description",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-radio-group-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/radio", "@olyx/react/field"],
    meta: {
      category: category("radio"),
      tags: ["radio", "description"],
    },
  },
  {
    name: "p-rating-bar-1",
    description: "Default number rating bar",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-bar-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-bar"],
    meta: {
      category: category("rating-bar"),
      tags: ["rating", "input"],
    },
  },
  {
    name: "p-rating-bar-2",
    description: "Rating bar with star styling",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-bar-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-bar"],
    meta: {
      category: category("rating-bar"),
      tags: ["rating", "star"],
    },
  },
  {
    name: "p-rating-bar-3",
    description: "Rating bar with heart styling",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-bar-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-bar"],
    meta: {
      category: category("rating-bar"),
      tags: ["rating", "heart"],
    },
  },
  {
    name: "p-rating-bar-4",
    description: "Small size rating bar",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-bar-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-bar"],
    meta: {
      category: category("rating-bar"),
      tags: ["rating", "size", "small"],
    },
  },
  {
    name: "p-rating-bar-5",
    description: "Large size rating bar",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-bar-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-bar"],
    meta: {
      category: category("rating-bar"),
      tags: ["rating", "size", "large"],
    },
  },
  {
    name: "p-rating-review-1",
    description: "Default star rating review",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-review-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-review"],
    meta: {
      category: category("rating-review"),
      tags: ["rating", "review", "star"],
    },
  },
  {
    name: "p-rating-review-2",
    description: "Heart variant rating review",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-rating-review-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/rating-review"],
    meta: {
      category: category("rating-review"),
      tags: ["rating", "review", "heart"],
    },
  },
  {
    name: "p-scroll-area-1",
    description: "Default vertical scroll area",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-scroll-area-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/scroll-area"],
    meta: {
      category: category("scroll-area"),
      tags: ["scroll", "overflow"],
    },
  },
  {
    name: "p-scroll-area-3",
    description: "Scroll area with both scrollbars",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-scroll-area-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/scroll-area"],
    meta: {
      category: category("scroll-area"),
      tags: ["scroll", "horizontal", "vertical"],
    },
  },
  {
    name: "p-scroll-area-4",
    description: "Scroll area with fade effect",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-scroll-area-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/scroll-area"],
    meta: {
      category: category("scroll-area"),
      tags: ["scroll", "fade"],
    },
  },
  {
    name: "p-select-1",
    description: "Default select",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-select-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/select"],
    meta: {
      category: category("select"),
      classname: "p-input",
      tags: ["select", "form"],
    },
  },
  {
    name: "p-select-4",
    description: "Disabled select",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-select-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/select"],
    meta: {
      category: category("select"),
      classname: "p-input",
      tags: ["select", "disabled"],
    },
  },
  {
    name: "p-select-5",
    description: "Select with groups",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-select-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/select"],
    meta: {
      category: category("select"),
      classname: "p-input",
      tags: ["select", "group"],
    },
  },
  {
    name: "p-separator-1",
    description: "Default line separator",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-separator-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/separator"],
    meta: {
      category: category("separator"),
      classname: "w-fit",
      tags: ["separator", "divider"],
    },
  },
  {
    name: "p-separator-2",
    description: "Solid text separator",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-separator-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/separator"],
    meta: {
      category: category("separator"),
      classname: "p-separator",
      tags: ["separator", "text"],
    },
  },
  {
    name: "p-separator-3",
    description: "Content separator",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-separator-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/separator"],
    meta: {
      category: category("separator"),
      classname: "p-separator",
      tags: ["separator", "content"],
    },
  },
  {
    name: "p-separator-4",
    description: "Underline separator",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-separator-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/separator"],
    meta: {
      category: category("separator"),
      classname: "p-separator",
      tags: ["separator", "underline"],
    },
  },
  {
    name: "p-sheet-1",
    description: "Default sheet",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-sheet-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/sheet",
      "@olyx/react/button",
      "@olyx/react/field",
      "@olyx/react/input",
    ],
    meta: {
      category: category("sheet"),
      tags: ["sheet", "panel", "drawer"],
    },
  },
  {
    name: "p-sheet-2",
    description: "Inset sheet",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-sheet-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/sheet", "@olyx/react/button"],
    meta: {
      category: category("sheet"),
      tags: ["sheet", "inset"],
    },
  },
  {
    name: "p-sheet-3",
    description: "Sheet sides",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-sheet-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/sheet", "@olyx/react/button"],
    meta: {
      category: category("sheet"),
      tags: ["sheet", "sides"],
    },
  },
  {
    name: "p-skeleton-1",
    description: "Card skeleton layout",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-skeleton-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/skeleton"],
    meta: {
      category: category("skeleton"),
      tags: ["skeleton", "loading"],
    },
  },
  {
    name: "p-skeleton-2",
    description: "Skeleton lines",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-skeleton-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/skeleton"],
    meta: {
      category: category("skeleton"),
      tags: ["skeleton", "lines"],
    },
  },
  {
    name: "p-slider-1",
    description: "Default slider",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-slider-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/slider"],
    meta: {
      category: category("slider"),
      classname: "p-input",
      tags: ["slider", "range", "input"],
    },
  },
  {
    name: "p-slider-2",
    description: "Range slider",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-slider-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/slider"],
    meta: {
      category: category("slider"),
      classname: "p-input",
      tags: ["slider", "range"],
    },
  },
  {
    name: "p-slider-3",
    description: "Vertical slider",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-slider-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/slider"],
    meta: {
      category: category("slider"),
      tags: ["slider", "vertical"],
    },
  },
  {
    name: "p-slider-4",
    description: "Slider with Label and Value",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-slider-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/slider", "@olyx/react/field"],
    meta: {
      category: category("slider"),
      classname: "p-input",
      tags: ["slider", "label", "value"],
    },
  },
  {
    name: "p-spinner-1",
    description: "Default spinner",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-spinner-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/spinner"],
    meta: {
      category: category("spinner"),
      tags: ["spinner", "loading"],
    },
  },
  {
    name: "p-spinner-2",
    description: "Spinner sizes",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-spinner-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/spinner"],
    meta: {
      category: category("spinner"),
      tags: ["spinner", "size"],
    },
  },
  {
    name: "p-spinner-3",
    description: "Spinner in input group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-spinner-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/spinner",
      "@olyx/react/input-group",
      "@olyx/react/input",
    ],
    meta: {
      category: category("spinner"),
      classname: "p-input",
      tags: ["spinner", "input", "loading"],
    },
  },
  {
    name: "p-spinner-4",
    description: "Loading button with spinner",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-spinner-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/spinner", "@olyx/react/button"],
    meta: {
      category: category("spinner"),
      tags: ["spinner", "button", "loading"],
    },
  },
  // Status Badge
  {
    name: "p-status-badge-1",
    description: "Success status with 4 variations",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-status-badge-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/status-badge"],
    meta: {
      category: category("status-badge"),
      tags: ["status-badge", "success"],
    },
  },
  {
    name: "p-status-badge-2",
    description: "Warning status with 4 variations",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-status-badge-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/status-badge"],
    meta: {
      category: category("status-badge"),
      tags: ["status-badge", "warning"],
    },
  },
  {
    name: "p-status-badge-3",
    description: "Failed status with 4 variations",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-status-badge-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/status-badge"],
    meta: {
      category: category("status-badge"),
      tags: ["status-badge", "error"],
    },
  },
  {
    name: "p-status-badge-4",
    description: "Info status with 4 variations",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-status-badge-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/status-badge"],
    meta: {
      category: category("status-badge"),
      tags: ["status-badge", "info"],
    },
  },
  {
    name: "p-status-badge-5",
    description: "Disabled status with 4 variations",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-status-badge-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/status-badge"],
    meta: {
      category: category("status-badge"),
      tags: ["status-badge", "disabled"],
    },
  },
  {
    name: "p-status-badge-6",
    description: "Success status with 4 variations",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-status-badge-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/status-badge"],
    meta: {
      category: category("status-badge"),
      tags: ["status-badge", "success"],
    },
  },
  {
    name: "p-switch-1",
    description: "Default switch",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-switch-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/switch"],
    meta: {
      category: category("switch"),
      tags: ["switch", "toggle"],
    },
  },
  {
    name: "p-switch-2",
    description: "Disabled switch",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-switch-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/switch"],
    meta: {
      category: category("switch"),
      tags: ["switch", "disabled"],
    },
  },
  {
    name: "p-switch-3",
    description: "Switch with description",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-switch-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/switch", "@olyx/react/field"],
    meta: {
      category: category("switch"),
      classname: "w-fit",
      tags: ["switch", "field", "description"],
    },
  },
  {
    name: "p-switch-4",
    description: "Card style switches",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-switch-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/switch", "@olyx/react/field"],
    meta: {
      category: category("switch"),
      tags: ["switch", "card"],
    },
  },
  {
    name: "p-switch-5",
    description: "Switch form integration",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-switch-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/switch",
      "@olyx/react/field",
      "@olyx/react/button",
    ],
    meta: {
      category: category("switch"),
      tags: ["switch", "form"],
    },
  },
  {
    name: "p-switch-6",
    description: "Customizing switch size",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-switch-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/switch"],
    meta: {
      category: category("switch"),
      tags: ["switch", "size"],
    },
  },
  {
    name: "p-table-1",
    description: "Team members table",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-table-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/table",
      "@olyx/react/checkbox",
      "@olyx/react/avatar",
      "@olyx/react/tag",
      "@olyx/react/status-badge",
      "@olyx/react/button",
      "@olyx/react/dropdown-menu",
    ],
    meta: {
      category: category("table"),
      classname: "p-table",
      tags: ["table", "data"],
    },
  },
  {
    name: "p-table-2",
    description: "Project tracker table",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-table-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/table",
      "@olyx/react/badge",
      "@olyx/react/status-badge",
      "@olyx/react/progress",
      "@olyx/react/button",
      "@olyx/react/dropdown-menu",
    ],
    meta: {
      category: category("table"),
      classname: "p-table",
      tags: ["table", "project", "tracker"],
    },
  },
  {
    name: "p-tabs-1",
    description: "Default tabs",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tabs-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tabs"],
    meta: {
      category: category("tabs"),
      tags: ["tabs", "navigation"],
    },
  },
  {
    name: "p-tabs-3",
    description: "Vertical orientation tabs",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tabs-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tabs"],
    meta: {
      category: category("tabs"),
      tags: ["tabs", "vertical"],
    },
  },
  {
    name: "p-tag-1",
    description: "Default tags",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tag-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tag"],
    meta: {
      category: category("tag"),
      tags: ["tag", "label"],
    },
  },
  {
    name: "p-tag-2",
    description: "Lighter variant tags",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tag-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tag"],
    meta: {
      category: category("tag"),
      tags: ["tag", "lighter"],
    },
  },
  {
    name: "p-tag-3",
    description: "Dismissible tags",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tag-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tag"],
    meta: {
      category: category("tag"),
      tags: ["tag", "dismiss"],
    },
  },
  {
    name: "p-tag-4",
    description: "Disabled tags",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tag-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tag"],
    meta: {
      category: category("tag"),
      tags: ["tag", "disabled"],
    },
  },
  {
    name: "p-tag-5",
    description: "Tags with icons",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-tag-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/tag"],
    meta: {
      category: category("tag"),
      tags: ["tag", "icon"],
    },
  },
  {
    name: "p-textarea-1",
    description: "Default textarea",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-textarea-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/textarea"],
    meta: {
      category: category("textarea"),
      classname: "p-input",
      tags: ["textarea", "form"],
    },
  },
  {
    name: "p-textarea-2",
    description: "Small textarea",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-textarea-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/textarea"],
    meta: {
      category: category("textarea"),
      classname: "p-input",
      tags: ["textarea", "small"],
    },
  },
  {
    name: "p-textarea-3",
    description: "Large textarea",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-textarea-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/textarea"],
    meta: {
      category: category("textarea"),
      classname: "p-input",
      tags: ["textarea", "large"],
    },
  },
  {
    name: "p-textarea-4",
    description: "Disabled textarea",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-textarea-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/textarea"],
    meta: {
      category: category("textarea"),
      classname: "p-input",
      tags: ["textarea", "disabled"],
    },
  },
  {
    name: "p-textarea-5",
    description: "Textarea with label",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-textarea-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/textarea", "@olyx/react/field"],
    meta: {
      category: category("textarea"),
      classname: "p-input",
      tags: ["textarea", "label"],
    },
  },
  {
    name: "p-textarea-6",
    description: "Textarea form integration",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-textarea-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: [
      "@olyx/react/textarea",
      "@olyx/react/field",
      "@olyx/react/button",
    ],
    meta: {
      category: category("textarea"),
      classname: "p-input",
      tags: ["textarea", "form"],
    },
  },
  {
    name: "p-toast-1",
    description: "Default toast",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toast-1.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toast", "@olyx/react/button"],
    meta: {
      category: category("toast"),
      tags: ["toast", "notification"],
    },
  },
  {
    name: "p-toast-2",
    description: "Toast with status types",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toast-2.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toast", "@olyx/react/button"],
    meta: {
      category: category("toast"),
      tags: ["toast", "status"],
    },
  },
  {
    name: "p-toast-3",
    description: "Loading toast",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toast-3.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toast", "@olyx/react/button"],
    meta: {
      category: category("toast"),
      tags: ["toast", "loading"],
    },
  },
  {
    name: "p-toast-4",
    description: "Toast with action",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toast-4.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toast", "@olyx/react/button"],
    meta: {
      category: category("toast"),
      tags: ["toast", "action"],
    },
  },
  {
    name: "p-toast-5",
    description: "Anchored toast",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toast-5.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toast", "@olyx/react/button"],
    meta: {
      category: category("toast"),
      tags: ["toast", "anchored"],
    },
  },
  {
    name: "p-toggle-1",
    description: "Default toggle",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toggle-1.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toggle"],
    meta: {
      category: category("toggle"),
      tags: ["toggle"],
    },
  },
  {
    name: "p-toggle-2",
    description: "Ghost variant toggle",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toggle-2.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toggle"],
    meta: {
      category: category("toggle"),
      tags: ["toggle", "ghost"],
    },
  },
  {
    name: "p-toggle-3",
    description: "Toggle with icon and text",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toggle-3.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toggle"],
    meta: {
      category: category("toggle"),
      tags: ["toggle", "icon"],
    },
  },
  {
    name: "p-toggle-4",
    description: "Small toggle",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toggle-4.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toggle"],
    meta: {
      category: category("toggle"),
      tags: ["toggle", "small"],
    },
  },
  {
    name: "p-toggle-5",
    description: "Large toggle",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toggle-5.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toggle"],
    meta: {
      category: category("toggle"),
      tags: ["toggle", "large"],
    },
  },
  {
    name: "p-toggle-6",
    description: "Disabled toggle",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toggle-6.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/toggle"],
    meta: {
      category: category("toggle"),
      tags: ["toggle", "disabled"],
    },
  },
  {
    name: "p-toggle-group-1",
    description: "Default toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-1.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group"],
    },
  },
  {
    name: "p-toggle-group-2",
    description: "Small toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-2.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group", "small"],
    },
  },
  {
    name: "p-toggle-group-3",
    description: "Large toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-3.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group", "large"],
    },
  },
  {
    name: "p-toggle-group-4",
    description: "Ghost variant toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-4.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group", "ghost"],
    },
  },
  {
    name: "p-toggle-group-5",
    description: "Ungrouped toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-5.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group", "ungrouped"],
    },
  },
  {
    name: "p-toggle-group-6",
    description: "Vertical toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-6.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group", "vertical"],
    },
  },
  {
    name: "p-toggle-group-7",
    description: "Disabled toggle group",
    type: "registry:block",
    files: [
      {
        path: "registry/particles/p-toggle-group-7.tsx",
        type: "registry:block",
      },
    ],
    registryDependencies: ["@olyx/react/toggle-group"],
    meta: {
      category: category("toggle-group"),
      tags: ["toggle-group", "disabled"],
    },
  },
  {
    name: "p-toolbar-1",
    description: "Default toolbar",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-toolbar-1.tsx", type: "registry:block" },
    ],
    registryDependencies: [
      "@olyx/react/toolbar",
      "@olyx/react/toggle",
      "@olyx/react/button",
      "@olyx/react/toggle-group",
      "@olyx/react/select",
      "@olyx/react/number-field",
    ],
    meta: {
      category: category("toolbar"),
      tags: ["toolbar"],
    },
  },
  {
    name: "p-tooltip-1",
    description: "Default tooltip",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-tooltip-1.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/tooltip", "@olyx/react/button"],
    meta: {
      category: category("tooltip"),
      tags: ["tooltip"],
    },
  },
  {
    name: "p-tooltip-2",
    description: "Light variant tooltip",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-tooltip-2.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/tooltip", "@olyx/react/button"],
    meta: {
      category: category("tooltip"),
      tags: ["tooltip", "light"],
    },
  },
  {
    name: "p-tooltip-3",
    description: "Tooltip positioning",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-tooltip-3.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/tooltip", "@olyx/react/button"],
    meta: {
      category: category("tooltip"),
      tags: ["tooltip", "positioning"],
    },
  },
  {
    name: "p-tooltip-4",
    description: "Small tooltip",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-tooltip-4.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/tooltip", "@olyx/react/button"],
    meta: {
      category: category("tooltip"),
      tags: ["tooltip", "small"],
    },
  },
  {
    name: "p-tooltip-5",
    description: "Large tooltip",
    type: "registry:block",
    files: [
      { path: "registry/particles/p-tooltip-5.tsx", type: "registry:block" },
    ],
    registryDependencies: ["@olyx/react/tooltip", "@olyx/react/button"],
    meta: {
      category: category("tooltip"),
      tags: ["tooltip", "large"],
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
