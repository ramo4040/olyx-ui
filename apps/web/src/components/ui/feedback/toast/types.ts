import type { Toast } from "@base-ui/react";

type ToastOptions = Partial<Omit<Toast.Root.ToastObject, "type">>;
type ToastType =
  | "default"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "loading";

export type { ToastOptions, ToastType };
