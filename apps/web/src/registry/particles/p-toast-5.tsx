"use client";

import { Button } from "@olyx/react/button";
import { AnchoredToastProvider, anchoredToast } from "@olyx/react/toast";
import { useRef } from "react";

export default function Particle() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <AnchoredToastProvider>
      <Button
        ref={buttonRef}
        variant="neutral"
        mode="stroke"
        onClick={() =>
          anchoredToast.success({
            title: "Copied!",
            positionerProps: {
              anchor: buttonRef.current,
            },
          })
        }
      >
        Copy Link
      </Button>
    </AnchoredToastProvider>
  );
}
