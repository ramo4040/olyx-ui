"use client";

import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Button variant="error" mode="filled">
        Filled
      </Button>
      <Button variant="error" mode="lighter">
        Lighter
      </Button>
      <Button variant="error" mode="ghost">
        Ghost
      </Button>
      <Button variant="error" mode="stroke">
        Stroke
      </Button>
    </div>
  );
}
