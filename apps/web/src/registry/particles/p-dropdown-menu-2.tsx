"use client";

import { Button } from "@olyx/react/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
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
            Options
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Account</DropdownMenuGroupLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Team</DropdownMenuGroupLabel>
          <DropdownMenuItem>Invite Members</DropdownMenuItem>
          <DropdownMenuItem>Manage Roles</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
