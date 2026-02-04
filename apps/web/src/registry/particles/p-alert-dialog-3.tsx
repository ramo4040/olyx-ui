"use client";

import {
  AlertDialog,
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
          <Button variant="primary" mode="filled">
            Continue
          </Button>
        }
      />
      <AlertDialogContent showCloseButton={false}>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms of Service</AlertDialogTitle>
          <AlertDialogDescription>
            By continuing, you agree to our Terms of Service and Privacy Policy.
            Please review these documents before proceeding.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="primary" mode="filled">
            I Agree
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
