import {
  Alert02Icon,
  AlertDiamondIcon,
  Loading03Icon,
  Tick02Icon,
  UnavailableIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StatusBadge } from "@/components/ui";

export const StatusBadgeExample = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <StatusBadge status="success" variant="light">
          <HugeiconsIcon icon={Tick02Icon} /> success
        </StatusBadge>
        <StatusBadge status="warning" variant="light">
          <HugeiconsIcon icon={Alert02Icon} />
          Warning
        </StatusBadge>
        <StatusBadge status="failed" variant="light">
          <HugeiconsIcon icon={AlertDiamondIcon} />
          Failed
        </StatusBadge>
        <StatusBadge status="disabled" variant="light">
          <HugeiconsIcon icon={UnavailableIcon} />
          Disabled
        </StatusBadge>

        <StatusBadge status="info" variant="light">
          <HugeiconsIcon icon={Loading03Icon} />
          In Progress
        </StatusBadge>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <StatusBadge status="success" variant="stroke">
          <HugeiconsIcon icon={Tick02Icon} /> success
        </StatusBadge>
        <StatusBadge status="warning" variant="stroke">
          <HugeiconsIcon icon={Alert02Icon} />
          Warning
        </StatusBadge>
        <StatusBadge status="failed" variant="stroke">
          <HugeiconsIcon icon={AlertDiamondIcon} />
          Failed
        </StatusBadge>
        <StatusBadge status="disabled" variant="stroke">
          <HugeiconsIcon icon={UnavailableIcon} />
          Disabled
        </StatusBadge>

        <StatusBadge status="info" variant="stroke">
          <HugeiconsIcon icon={Loading03Icon} />
          In Progress
        </StatusBadge>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <StatusBadge status="success" variant="stroke" doted>
          success
        </StatusBadge>
        <StatusBadge status="warning" variant="stroke" doted>
          Warning
        </StatusBadge>
        <StatusBadge status="failed" variant="stroke" doted>
          Failed
        </StatusBadge>
        <StatusBadge status="disabled" variant="stroke" doted>
          Disabled
        </StatusBadge>
        <StatusBadge status="info" variant="stroke" doted>
          In Progress
        </StatusBadge>
      </div>
    </div>
  );
};
