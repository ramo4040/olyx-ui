"use client";

import { TextBoldIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Toggle } from "@olyx/react/toggle";

export default function Particle() {
  return (
    <Toggle>
      <HugeiconsIcon icon={TextBoldIcon} />
      Bold
    </Toggle>
  );
}
