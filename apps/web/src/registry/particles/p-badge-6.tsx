"use client";

import { CheckCheck } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@olyx/react/badge";

export default function Particle() {
  return (
    <Badge>
      <HugeiconsIcon icon={CheckCheck} />
      Verified
    </Badge>
  );
}
