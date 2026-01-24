export interface RegistryItem {
  name: string;
  title?: string;
  description?: string;
  type:
    | "registry:ui"
    | "registry:block"
    | "registry:component"
    | "registry:example"
    | "registry:hook"
    | "registry:lib"
    | "registry:theme"
    | "registry:style"
    | "registry:page"
    | "registry:file";
  registryDependencies?: string[];
  dependencies?: string[];
  devDependencies?: string[];
  files: {
    path: string;
    type:
      | "registry:ui"
      | "registry:component"
      | "registry:hook"
      | "registry:lib"
      | "registry:page"
      | "registry:file";
    target?: string;
  }[];
  meta?: {
    category?: string;
    subcategory?: string;
    tags?: string[];
  };
}

export interface Registry {
  name: string;
  items: RegistryItem[];
}
