"use client";

import { ArrowUpIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 4 }}>
        <Button size="sm">Small</Button>
        <Button size="sm" asIcon aria-label="Small icon">
          <HugeiconsIcon icon={ArrowUpIcon} />
        </Button>
      </div>

      <div style={{ display: "flex", gap: 4 }}>
        <Button size="md">Default</Button>
        <Button size="md" asIcon aria-label="Default icon">
          <HugeiconsIcon icon={ArrowUpIcon} />
        </Button>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <Button size="lg">Large</Button>
        <Button size="lg" asIcon aria-label="Large icon">
          <HugeiconsIcon icon={ArrowUpIcon} />
        </Button>
      </div>
    </div>
  );
}
