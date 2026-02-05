"use client";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { ButtonGroup, ButtonGroupSeparator } from "@olyx/react/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@olyx/react/dropdown-menu";

export default function Particle() {
  return (
    <ButtonGroup>
      <Button variant="primary" mode="filled">
        Save Changes
      </Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="primary"
              mode="filled"
              asIcon
              aria-label="More options"
            >
              <HugeiconsIcon icon={ArrowDown01Icon} />
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuItem>Save & Close</DropdownMenuItem>
          <DropdownMenuItem>Save & Continue</DropdownMenuItem>
          <DropdownMenuItem>Save as Draft</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
