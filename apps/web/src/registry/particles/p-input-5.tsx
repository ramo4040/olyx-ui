"use client";

import { Button } from "@olyx/react/button";
import { Input } from "@olyx/react/input";

export default function Particle() {
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Input type="email" placeholder="you@example.com" />
      <Button>Subscribe</Button>
    </div>
  );
}
