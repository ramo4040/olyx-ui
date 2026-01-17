import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../../core/button";
import "./style.css";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

function Tag({
  disabled,
  withDismiss,
  variant = "stroke",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  disabled?: boolean;
  withDismiss?: boolean;
  variant?: "lighter" | "stroke";
}) {
  return (
    <div
      data-ui="tag"
      data-variant={variant}
      aria-disabled={disabled}
      {...props}
    >
      {children}

      {withDismiss && (
        <Button
          data-slot="tag-dismiss"
          aria-disabled={disabled}
          type="button"
          variant="neutral"
          mode="ghost"
          asIcon
          size="sm"
        >
          <HugeiconsIcon icon={Cancel01Icon} />
        </Button>
      )}
    </div>
  );
}

export { Tag };
