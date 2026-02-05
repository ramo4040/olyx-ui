"use client";

import {
  Archive02Icon,
  Delete02Icon,
  Mail01Icon,
  SettingsIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@olyx/react/dropdown-menu";

export default function Particle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="neutral" mode="stroke">
            My Account
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <HugeiconsIcon icon={Mail01Icon} />
          Messages
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={Archive02Icon} />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HugeiconsIcon icon={SettingsIcon} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem style={{ color: "var(--color-error)" }}>
          <HugeiconsIcon icon={Delete02Icon} />
          Delete Account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
