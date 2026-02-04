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
      <Alert variant="filled" status="information">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>
            Check out the new analytics dashboard in your settings.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="light" status="information">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Light</AlertTitle>
          <AlertDescription>
            Check out the new analytics dashboard in your settings.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="information">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Lighter</AlertTitle>
          <AlertDescription>
            Check out the new analytics dashboard in your settings.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="stroke" status="information">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Stroke</AlertTitle>
          <AlertDescription>
            Check out the new analytics dashboard in your settings.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
