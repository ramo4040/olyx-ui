"use client";

import { Button } from "@olyx/react/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@olyx/react/tooltip";

export default function Particle() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="neutral" mode="stroke" size="sm" />}
      >
        Hover me
      </TooltipTrigger>
      <TooltipContent size="sm">Small tooltip</TooltipContent>
    </Tooltip>
  );
}
