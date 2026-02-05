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
    <>
      <Alert variant="lighter" status="information" size="sm">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Small</AlertTitle>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="information" size="md">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Medium</AlertTitle>
          <AlertDescription>Default size with description.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="information" size="lg">
        <AlertIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Large</AlertTitle>
          <AlertDescription>
            Larger alert with more padding and spacing for emphasis.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </>
  );
}
