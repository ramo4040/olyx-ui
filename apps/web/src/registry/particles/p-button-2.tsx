"use client";

import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <>
      <Button mode="filled">Filled</Button>
      <Button mode="lighter">Lighter</Button>
      <Button mode="ghost">Ghost</Button>
      <Button mode="stroke">Stroke</Button>
    </>
  );
}
