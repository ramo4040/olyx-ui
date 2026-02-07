"use client";

import { UnavailableIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StatusBadge } from "@olyx/react/status-badge";

export default function Particle() {
  return (
    <>
      <StatusBadge status="failed" variant="stroke" doted>
        Error
      </StatusBadge>
      <StatusBadge status="failed" variant="stroke">
        <HugeiconsIcon icon={UnavailableIcon} />
        Error
      </StatusBadge>
      <StatusBadge status="failed" doted>
        Error
      </StatusBadge>
      <StatusBadge status="failed">
        <HugeiconsIcon icon={UnavailableIcon} />
        Error
      </StatusBadge>
    </>
  );
}
