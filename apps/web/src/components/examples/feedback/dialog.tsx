import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

export const DialogExamples = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Dialog>
        <DialogTrigger
          render={
            <Button variant="primary" mode="lighter">
              Open
            </Button>
          }
        />

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div
            style={{
              height: 200,
              display: "grid",
              placeContent: "center",
              backgroundColor: "var(--color-surface-container-low)",
              borderRadius: "var(--radius-md)",
            }}
          >
            Form
          </div>

          <DialogFooter>
            <Button variant="primary" mode="lighter">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger
          render={<Button variant="primary">View notifications</Button>}
        />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              You are all caught up. Good job!
            </DialogDescription>
          </DialogHeader>
          <div>
            <Dialog>
              <DialogTrigger
                render={<Button mode="stroke">Customize</Button>}
              />
              <DialogContent style={{ height: 200 }}>
                <DialogHeader>
                  <DialogTitle>Customize notifications</DialogTitle>
                  <DialogDescription>
                    Review your settings here.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
