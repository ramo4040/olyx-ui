"use client";

import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Button variant="neutral" mode="filled">
        Filled
      </Button>
      <Button variant="neutral" mode="lighter">
        Lighter
      </Button>
      <Button variant="neutral" mode="ghost">
        Ghost
      </Button>
      <Button variant="neutral" mode="stroke">
        Stroke
      </Button>
    </div>
  );
}
