"use client";

import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <>
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
    </>
  );
}
