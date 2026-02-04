"use client";

import { InformationCircleIcon } from "@hugeicons/core-free-icons";
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
      <Alert variant="filled" status="feature">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>
            A new version is available. Restart to update.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="light" status="feature">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Light</AlertTitle>
          <AlertDescription>
            A new version is available. Restart to update.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="feature">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Lighter</AlertTitle>
          <AlertDescription>
            A new version is available. Restart to update.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="stroke" status="feature">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Stroke</AlertTitle>
          <AlertDescription>
            A new version is available. Restart to update.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
