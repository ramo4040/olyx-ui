"use client";

import { SettingsIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm" asIcon aria-label="Small icon">
        <HugeiconsIcon icon={SettingsIcon} />
      </Button>
      <Button size="md" asIcon aria-label="Default icon">
        <HugeiconsIcon icon={SettingsIcon} />
      </Button>
      <Button size="lg" asIcon aria-label="Large icon">
        <HugeiconsIcon icon={SettingsIcon} />
      </Button>
    </div>
  );
}
