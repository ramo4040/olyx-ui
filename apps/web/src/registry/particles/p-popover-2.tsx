"use client";

import { Button } from "@olyx/react/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@olyx/react/popover";

export default function Particle() {
  return (
    <Popover>
      <PopoverTrigger render={<Button mode="stroke" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverClose />

        <PopoverHeader>
          <PopoverTitle className="text-base">Notifications</PopoverTitle>
          <PopoverDescription>
            You are all caught up. Good job!
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
