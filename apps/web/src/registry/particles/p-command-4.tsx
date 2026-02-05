"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
} from "@olyx/react/command";

const items = [
  { value: "calendar", label: "Calendar" },
  { value: "search", label: "Search Emoji" },
  { value: "calculator", label: "Calculator" },
  { value: "clipboard", label: "Clipboard History" },
  { value: "settings", label: "System Preferences" },
];

export default function Particle() {
  return (
    <CommandPanel>
      <Command items={items}>
        <CommandInput placeholder="Type a command..." />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList>
          {(item) => (
            <CommandItem key={item.value} value={item}>
              {item.label}
            </CommandItem>
          )}
        </CommandList>
      </Command>
    </CommandPanel>
  );
}
