"use client";

import { TimeQuarter02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StatusBadge } from "@olyx/react/status-badge";

export default function Particle() {
  return (
    <>
      <StatusBadge status="warning" variant="stroke" doted>
        Pending
      </StatusBadge>
      <StatusBadge status="warning" variant="stroke">
        <HugeiconsIcon icon={TimeQuarter02Icon} />
        Pending
      </StatusBadge>
      <StatusBadge status="warning" doted>
        Pending
      </StatusBadge>
      <StatusBadge status="warning">
        <HugeiconsIcon icon={TimeQuarter02Icon} />
        Pending
      </StatusBadge>
    </>
  );
}
