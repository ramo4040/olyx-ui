"use client";

import { Button } from "@olyx/react/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@olyx/react/dropdown-menu";
import { useState } from "react";

export default function Particle() {
  const [sort, setSort] = useState("date");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="neutral" mode="stroke">
            Sort By
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="size">Size</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
