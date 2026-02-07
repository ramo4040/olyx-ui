"use client";

import { Button } from "@olyx/react/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@olyx/react/tooltip";

export default function Particle() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<Button variant="neutral" mode="stroke" />}>
          Top
        </TooltipTrigger>
        <TooltipContent side="top">Top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="neutral" mode="stroke" />}>
          Bottom
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="neutral" mode="stroke" />}>
          Left
        </TooltipTrigger>
        <TooltipContent side="left">Left</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="neutral" mode="stroke" />}>
          Right
        </TooltipTrigger>
        <TooltipContent side="right">Right</TooltipContent>
      </Tooltip>
    </>
  );
}
