"use client";

import { UnavailableIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StatusBadge } from "@olyx/react/status-badge";

export default function Particle() {
  return (
    <>
      <StatusBadge status="success" variant="stroke" doted>
        Success
      </StatusBadge>
      <StatusBadge status="success" variant="stroke">
        <HugeiconsIcon icon={UnavailableIcon} />
        Success
      </StatusBadge>
      <StatusBadge status="success" doted>
        Success
      </StatusBadge>
      <StatusBadge status="success">
        <HugeiconsIcon icon={UnavailableIcon} />
        Success
      </StatusBadge>
    </>
  );
}
