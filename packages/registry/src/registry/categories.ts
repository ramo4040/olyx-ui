export const registryCategories = [
  "accordion",
  "alert",
  "alert-dialog",
  "autocomplete",
  "avatar",
  "badge",
  "banner",
  "breadcrumb",
  "button",
  "button-group",
  "card",
  "checkbox",
  "checkbox-group",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "empty-state",
  "field",
  "fieldset",
  "form",
  "frame",
  "group",
  "input",
  "input-group",
  "kbd",
  "label",
  "link-button",
  "menu",
  "menu-bar",
  "meter",
  "navigation-menu",
  "number-field",
  "pagination",
  "popover",
  "preview-card",
  "progress",
  "radio",
  "rating-bar",
  "rating-review",
  "scroll-area",
  "select",
  "separator",
  "skeleton",
  "slider",
  "spinner",
  "status-badge",
  "switch",
  "table",
  "tabs",
  "tag",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "toolbar",
  "tooltip",
] as const;

export type RegistryCategory = (typeof registryCategories)[number];

/** Type-safe category helper for particles */
export function category(name: RegistryCategory): RegistryCategory {
  return name;
}

/** Validate if string is a valid category */
export function isValidCategory(value: string): value is RegistryCategory {
  return registryCategories.includes(value as RegistryCategory);
}

/** Get sort order for category (for consistent ordering) */
export function getCategorySortOrder(cat: string): number {
  const idx = registryCategories.indexOf(cat as RegistryCategory);
  return idx === -1 ? Number.POSITIVE_INFINITY : idx;
}
