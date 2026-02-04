"use client";

import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <Button>
      <HugeiconsIcon icon={PlusSignIcon} />
      Add Item
    </Button>
  );
}
