"use client";

import { Button } from "@olyx/react/button";
import { stackedToast } from "@olyx/react/toast";

export default function Particle() {
  return (
    <Button
      variant="neutral"
      mode="stroke"
      onClick={() =>
        stackedToast.loading({
          title: "Uploading file",
          description: "Please wait while your file is being processed.",
        })
      }
    >
      Upload
    </Button>
  );
}
