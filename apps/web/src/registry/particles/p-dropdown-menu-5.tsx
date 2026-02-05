"use client";

import { Button } from "@olyx/react/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubmenu,
  DropdownMenuSubmenuTrigger,
  DropdownMenuTrigger,
} from "@olyx/react/dropdown-menu";

export default function Particle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="neutral" mode="stroke">
            Actions
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuItem>New File</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSubmenu>
          <DropdownMenuSubmenuTrigger>Share</DropdownMenuSubmenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Messages</DropdownMenuItem>
            <DropdownMenuItem>AirDrop</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuSubmenu>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Print</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
