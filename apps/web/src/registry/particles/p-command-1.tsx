"use client";

import { Button } from "@olyx/react/button";
import {
  Command,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
} from "@olyx/react/command";

const items = [
  { value: "linear", label: "Linear" },
  { value: "figma", label: "Figma" },
  { value: "slack", label: "Slack" },
  { value: "notion", label: "Notion" },
  { value: "github", label: "GitHub" },
];

export default function Particle() {
  return (
    <CommandDialog>
      <CommandDialogTrigger render={<Button mode="stroke" />}>
        Open Command Palette
      </CommandDialogTrigger>

      <CommandDialogContent>
        <Command items={items}>
          <CommandInput placeholder="Search apps..." />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(item) => (
                <CommandItem key={item.value} value={item}>
                  {item.label}
                </CommandItem>
              )}
            </CommandList>
          </CommandPanel>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
}
