"use client";

import { Button } from "@olyx/react/button";
import { Spinner } from "@olyx/react/spinner";

export default function Particle() {
  return (
    <Button disabled>
      <Spinner />
      Loading...
    </Button>
  );
}
