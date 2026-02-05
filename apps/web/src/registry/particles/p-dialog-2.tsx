"use client";

import { Button } from "@olyx/react/button";
import {
  Dialog,
  DialogClose,
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
      <DialogTrigger
        render={
          <Button variant="neutral" mode="stroke">
            Share Document
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Document</DialogTitle>
          <DialogDescription>
            Anyone with the link can view this document.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton={false}>
          <DialogClose render={<Button variant="neutral" mode="stroke" />}>
            Cancel
          </DialogClose>
          <Button>Copy Link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
