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
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Positioner key={toast.id} toast={toast}>
            <Toast.Root toast={toast}>{/* ... */}</Toast.Root>
          </Toast.Positioner>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export { AnchoredToastProvider, anchoredToastManager };
