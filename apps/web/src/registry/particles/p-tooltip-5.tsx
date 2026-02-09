"use client";

import { Button } from "@olyx/react/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@olyx/react/tooltip";

export default function Particle() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="neutral" mode="stroke" />}>
        Hover me
      </TooltipTrigger>
      <TooltipContent size="lg">
        This tooltip provides extended information about the feature you are
        about to use.
      </TooltipContent>
    </Tooltip>
  );
}
