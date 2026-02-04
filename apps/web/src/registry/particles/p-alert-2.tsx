"use client";

import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@olyx/react/alert";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Alert variant="filled" status="error">
        <AlertIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="light" status="error">
        <AlertIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Light</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="error">
        <AlertIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Lighter</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="stroke" status="error">
        <AlertIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Stroke</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
