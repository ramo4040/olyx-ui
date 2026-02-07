"use client";

import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StatusBadge } from "@olyx/react/status-badge";

export default function Particle() {
  return (
    <>
      <StatusBadge status="info" variant="stroke" doted>
        New
      </StatusBadge>
      <StatusBadge status="info" variant="stroke">
        <HugeiconsIcon icon={Alert02Icon} />
        New
      </StatusBadge>
      <StatusBadge status="info" doted>
        New
      </StatusBadge>
      <StatusBadge status="info">
        <HugeiconsIcon icon={Alert02Icon} />
        New
      </StatusBadge>
    </>
  );
}
