"use client";

import { Button } from "@olyx/react/button";
import { stackedToast } from "@olyx/react/toast";

export default function Particle() {
  return (
    <Button
      onClick={() =>
        stackedToast.default({
          title: "Event created",
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Show Toast
    </Button>
  );
}
