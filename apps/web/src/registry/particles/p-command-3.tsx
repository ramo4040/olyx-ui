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
  CommandShortcut,
} from "@olyx/react/command";

const items = [
  { value: "new-file", label: "New File" },
  { value: "open-file", label: "Open File" },
  { value: "save", label: "Save" },
  { value: "find", label: "Find" },
  { value: "replace", label: "Replace" },
];

export default function Particle() {
  return (
    <CommandDialog>
      <CommandDialogTrigger render={<Button mode="stroke" />}>
        Open Command Palette
      </CommandDialogTrigger>

      <CommandDialogContent>
        <Command items={items}>
          <CommandInput placeholder="Type a command..." />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(item) => (
                <CommandItem key={item.value} value={item}>
                  {item.label}
                  <CommandShortcut>
                    {item.value === "new-file" && "⌘N"}
                    {item.value === "open-file" && "⌘O"}
                    {item.value === "save" && "⌘S"}
                    {item.value === "find" && "⌘F"}
                    {item.value === "replace" && "⌘H"}
                  </CommandShortcut>
                </CommandItem>
              )}
            </CommandList>
          </CommandPanel>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
}
