"use client";

import {
  Archive02Icon,
  ArrowDown01Icon,
  Calendar01Icon,
  Clock01Icon,
  Delete02Icon,
  LeftToRightListBulletIcon,
  Mail01Icon,
  Tag01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { ButtonGroup, ButtonGroupSeparator } from "@olyx/react/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@olyx/react/dropdown-menu";

export default function Particle() {
  return (
    <>
      <ButtonGroup>
        <Button variant="primary" mode="lighter">
          Archive
        </Button>
        <ButtonGroupSeparator />
        <Button variant="primary" mode="lighter">
          Report
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="neutral" mode="stroke">
          Snooze
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="neutral"
                mode="stroke"
                asIcon
                aria-label="Message actions"
              >
                <HugeiconsIcon icon={ArrowDown01Icon} />
              </Button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Mail01Icon} />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Archive02Icon} />
              Archive
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Clock01Icon} />
              Snooze
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <HugeiconsIcon icon={Calendar01Icon} />
              Add to Calendar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={LeftToRightListBulletIcon} />
              Add to List
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Tag01Icon} />
              Label As...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem style={{ color: "var(--color-error)" }}>
              <HugeiconsIcon icon={Delete02Icon} />
              Trash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </>
  );
}
