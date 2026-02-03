export type RegistryFileType =
  | "registry:ui"
  | "registry:style"
  | "registry:component"
  | "registry:block"
  | "registry:hook"
  | "registry:lib"
  | "registry:page"
  | "registry:file";

export interface RegistryFile {
  path: string;
  type: RegistryFileType;
  target?: string;
}

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
  files: RegistryFile[];
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
