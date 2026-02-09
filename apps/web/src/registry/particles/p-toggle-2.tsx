"use client";

import { TextItalicIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Toggle } from "@olyx/react/toggle";

export default function Particle() {
  return (
    <>
      <Toggle variant="ghost" aria-label="Toggle italic">
        <HugeiconsIcon icon={TextItalicIcon} />
      </Toggle>
      <Toggle variant="ghost">Italic</Toggle>
    </>
  );
}
