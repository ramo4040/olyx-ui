"use client";

import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@olyx/react/alert";

export default function Particle() {
  return (
    <Alert variant="lighter" status="information">
      <AlertIcon>
        <HugeiconsIcon icon={InformationCircleIcon} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>System update</AlertTitle>
        <AlertDescription>
          A new version is available. Restart to update.
        </AlertDescription>
      </AlertContent>
      <AlertClose aria-label="Dismiss" />
    </Alert>
  );
}
