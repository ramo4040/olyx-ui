"use client";

import { UserWarning01Icon } from "@hugeicons/core-free-icons";
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
      <Alert variant="filled" status="warning">
        <AlertIcon>
          <HugeiconsIcon icon={UserWarning01Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Filled</AlertTitle>
          <AlertDescription>
            Your storage is almost full. Consider upgrading your plan.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="light" status="warning">
        <AlertIcon>
          <HugeiconsIcon icon={UserWarning01Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Light</AlertTitle>
          <AlertDescription>
            Your storage is almost full. Consider upgrading your plan.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="lighter" status="warning">
        <AlertIcon>
          <HugeiconsIcon icon={UserWarning01Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Lighter</AlertTitle>
          <AlertDescription>
            Your storage is almost full. Consider upgrading your plan.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="stroke" status="warning">
        <AlertIcon>
          <HugeiconsIcon icon={UserWarning01Icon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Stroke</AlertTitle>
          <AlertDescription>
            Your storage is almost full. Consider upgrading your plan.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </>
  );
}
