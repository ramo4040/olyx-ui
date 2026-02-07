"use client";

import {
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ToggleGroup, ToggleGroupItem } from "@olyx/react/toggle-group";

export default function Particle() {
  return (
    <ToggleGroup grouped={false}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <HugeiconsIcon icon={TextBoldIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <HugeiconsIcon icon={TextItalicIcon} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <HugeiconsIcon icon={TextUnderlineIcon} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
