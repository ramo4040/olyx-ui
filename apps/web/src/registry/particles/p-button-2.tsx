"use client";

import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Button mode="filled">Filled</Button>
      <Button mode="lighter">Lighter</Button>
      <Button mode="ghost">Ghost</Button>
      <Button mode="stroke">Stroke</Button>
    </div>
  );
}
