"use client";

import { ArrowUpIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";

export default function Particle() {
  return (
    <>
      <Button>Button</Button>
      <Button asIcon aria-label="Submit">
        <HugeiconsIcon icon={ArrowUpIcon} />
      </Button>
    </>
  );
}
