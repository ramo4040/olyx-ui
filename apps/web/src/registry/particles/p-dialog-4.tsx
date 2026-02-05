"use client";

import { Button } from "@olyx/react/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@olyx/react/dialog";

export default function Particle() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open Dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>First Dialog</DialogTitle>
          <DialogDescription>
            This is the first dialog. You can open another one inside.
          </DialogDescription>
        </DialogHeader>
        <Dialog>
          <DialogTrigger
            render={
              <Button variant="neutral" mode="stroke">
                Open Nested
              </Button>
            }
          />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nested Dialog</DialogTitle>
              <DialogDescription>
                This dialog is nested within the first one.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
