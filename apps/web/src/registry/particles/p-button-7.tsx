"use client";

import { SettingsIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <Button asIcon aria-label="Settings">
      <HugeiconsIcon icon={SettingsIcon} />
    </Button>
  );
}
