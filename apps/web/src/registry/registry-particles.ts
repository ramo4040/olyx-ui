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
