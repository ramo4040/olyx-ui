"use client";

import { UnavailableIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StatusBadge } from "@olyx/react/status-badge";

export default function Particle() {
  return (
    <>
      <StatusBadge status="disabled" variant="stroke" doted>
        Disabled
      </StatusBadge>
      <StatusBadge status="disabled" variant="stroke">
        <HugeiconsIcon icon={UnavailableIcon} />
        Disabled
      </StatusBadge>
      <StatusBadge status="disabled" doted>
        Disabled
      </StatusBadge>
      <StatusBadge status="disabled">
        <HugeiconsIcon icon={UnavailableIcon} />
        Disabled
      </StatusBadge>
    </>
  );
}
