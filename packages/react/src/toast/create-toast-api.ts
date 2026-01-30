import type { Toast } from "@base-ui/react/toast";
import type { ToastOptions, ToastType } from "./types";

type ToastManager = ReturnType<typeof Toast.createToastManager>;

export function createToastApi(manager: ToastManager) {
  function createTypedToast(type: ToastType) {
    return (input: string | ToastOptions) => {
      const opts = typeof input === "string" ? { description: input } : input;
      return manager.add({ ...opts, type });
    };
  }

  return {
    default: createTypedToast("default"),
    success: createTypedToast("success"),
    error: createTypedToast("error"),
    info: createTypedToast("info"),
    warning: createTypedToast("warning"),
    loading: createTypedToast("loading"),
    update: manager.update,
    remove: manager.close,
    promise: manager.promise,
    add: manager.add,
  };
}
