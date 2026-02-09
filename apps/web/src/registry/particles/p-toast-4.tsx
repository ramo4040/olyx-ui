"use client";

import { Button } from "@olyx/react/button";
import { stackedToast } from "@olyx/react/toast";

export default function Particle() {
  return (
    <Button
      variant="neutral"
      mode="stroke"
      onClick={() =>
        stackedToast.default({
          title: "Message archived",
          description: "The conversation has been moved to archive.",
          actionProps: {
            children: "Undo",
            onClick: () => {},
          },
        })
      }
    >
      Archive Message
    </Button>
  );
}
