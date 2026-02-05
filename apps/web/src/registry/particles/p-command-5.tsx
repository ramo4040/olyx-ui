"use client";

import { Button } from "@olyx/react/button";
import {
  Command,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
} from "@olyx/react/command";
import { Kbd } from "@olyx/react/kbd";

const items = [
  { value: "linear", label: "Linear" },
  { value: "figma", label: "Figma" },
  { value: "slack", label: "Slack" },
  { value: "notion", label: "Notion" },
];

export default function Particle() {
  return (
    <CommandDialog>
      <CommandDialogTrigger render={<Button mode="stroke" />}>
        Open Command Palette
      </CommandDialogTrigger>

      <CommandDialogContent>
        <Command items={items}>
          <CommandInput placeholder="Search..." />
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
          <CommandFooter>
            <span>Navigate with arrow keys</span>
            <div style={{ display: "flex", gap: "0.25rem" }}>
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              <span>to navigate</span>
              <Kbd>↵</Kbd>
              <span>to select</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
}
