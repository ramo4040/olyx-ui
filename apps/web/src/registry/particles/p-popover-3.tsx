"use client";

import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { Input } from "@olyx/react/input";
import { InputWrapper } from "@olyx/react/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@olyx/react/popover";

export default function Particle() {
  return (
    <InputWrapper>
      <Input aria-label="Password" placeholder="Password" type="password" />
      <Popover>
        <PopoverTrigger
          openOnHover
          render={
            <Button
              aria-label="Password requirements"
              size="sm"
              asIcon
              mode="ghost"
              variant="neutral"
            />
          }
        >
          <HugeiconsIcon icon={InformationCircleIcon} />
        </PopoverTrigger>
        <PopoverContent side="top" tooltipStyle>
          <p>Min. 8 characters</p>
        </PopoverContent>
      </Popover>
    </InputWrapper>
  );
}
