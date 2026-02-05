"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
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
      <Alert variant="filled" status="success">
        <AlertIcon>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="light" status="success">
        <AlertIcon>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Light</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="success">
        <AlertIcon>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Lighter</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="stroke" status="success">
        <AlertIcon>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Stroke</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </>
  );
}
