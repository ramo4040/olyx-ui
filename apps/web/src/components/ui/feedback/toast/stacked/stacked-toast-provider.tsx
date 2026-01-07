import { getIcon } from "../get-icon";
import type { ToastType } from "../types";
import "./style.css";
import { Toast } from "@base-ui/react/toast";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const stackedToastManager = Toast.createToastManager();

function StackedToastProvider({ ...props }: Toast.Provider.Props) {
  return (
    <Toast.Provider toastManager={stackedToastManager} {...props}>
      <StackedToasts />
    </Toast.Provider>
  );
}

function StackedToasts() {
  const { toasts } = Toast.useToastManager();

  return (
    <Toast.Portal>
      <Toast.Viewport data-ui="toast-stacked-viewport">
        {toasts.map((toast) => {
          const icon = getIcon(toast.type as ToastType);
          return (
            <Toast.Root
              data-ui="root-toast-stacked"
              key={toast.id}
              toast={toast}
            >
              <Toast.Content data-ui="toast-stacked-content">
                {icon && <div data-ui="toast-stacked-icon">{icon}</div>}

                <div data-ui="toast-stacked-body">
                  <Toast.Title data-ui="toast-stacked-title" />
                  <Toast.Description data-ui="toast-stacked-description" />
                  <Toast.Action data-ui="toast-stacked-action" />
                </div>

                <Toast.Close data-slot="toast-stacked-close">
                  <HugeiconsIcon icon={Cancel01Icon} />
                </Toast.Close>
              </Toast.Content>
            </Toast.Root>
          );
        })}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export { StackedToastProvider };
