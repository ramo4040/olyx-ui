"use client";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@olyx/react/alert-dialog";
import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="error" mode="filled">
            Delete Project
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the project and all of its data. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter showCloseButton={false}>
          <AlertDialogClose>
            <Button variant="neutral" mode="stroke">
              Cancel
            </Button>
          </AlertDialogClose>
          <Button variant="error" mode="filled">
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
