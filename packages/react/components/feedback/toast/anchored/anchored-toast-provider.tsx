import "./style.css";
import { Toast } from "@base-ui/react/toast";

const anchoredToastManager = Toast.createToastManager();

function AnchoredToastProvider({ ...props }: Toast.Provider.Props) {
  return (
    <Toast.Provider toastManager={anchoredToastManager} {...props}>
      <AnchoredToasts />
    </Toast.Provider>
  );
}

function AnchoredToasts() {
  const { toasts } = Toast.useToastManager();
  return (
    <Toast.Portal>
      <Toast.Viewport data-ui="toast-anchored-viewport">
        {toasts.map((toast) => {
          return (
            <Toast.Positioner
              key={toast.id}
              toast={toast}
              sideOffset={8}
              data-ui="toast-anchored-positioner"
            >
              <Toast.Root toast={toast} data-ui="toast-anchored-root">
                <Toast.Content data-ui="toast-anchored-content">
                  <Toast.Title data-ui="toast-title" />
                  <Toast.Description data-ui="toast-description" />
                  <Toast.Action data-ui="toast-action" />
                </Toast.Content>
              </Toast.Root>
            </Toast.Positioner>
          );
        })}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export { AnchoredToastProvider, anchoredToastManager };
