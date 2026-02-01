"use client";

import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@olyx/react";
import type { FC } from "react";
import { useCopy } from "@/hooks/use-copy";

export const CopyButton: FC<
  React.ComponentProps<"button"> & { value: string | null }
> = ({ value, ...props }) => {
  const { copied, copy } = useCopy();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="copy-button"
            aria-label={copied ? "Copied" : "Copy source"}
            disabled={copied}
            onClick={() => copy(value || "")}
            size="sm"
            asIcon
            variant="neutral"
            mode="stroke"
            {...props}
          >
            {copied ? (
              <HugeiconsIcon icon={Tick02Icon} />
            ) : (
              <HugeiconsIcon icon={Copy01Icon} />
            )}
          </Button>
        }
      />

      <TooltipContent>Copy</TooltipContent>
    </Tooltip>
  );
};
