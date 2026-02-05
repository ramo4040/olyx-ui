"use client";

import { Button } from "@olyx/react/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
} from "@olyx/react/command";
import { Fragment } from "react";

interface CommandEntry {
  value: string;
  label: string;
}

interface CommandCategory {
  value: string;
  items: CommandEntry[];
}

const categories: CommandCategory[] = [
  {
    value: "Suggestions",
    items: [
      { value: "linear", label: "Linear" },
      { value: "figma", label: "Figma" },
      { value: "slack", label: "Slack" },
    ],
  },
  {
    value: "Settings",
    items: [
      { value: "profile", label: "Profile" },
      { value: "billing", label: "Billing" },
      { value: "preferences", label: "Preferences" },
    ],
  },
];

export default function Particle() {
  return (
    <CommandDialog>
      <CommandDialogTrigger render={<Button mode="stroke" />}>
        Open Command Palette
      </CommandDialogTrigger>

      <CommandDialogContent>
        <Command items={categories}>
          <CommandInput placeholder="Search..." />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: CommandCategory, index: number) => (
                <Fragment key={group.value}>
                  <CommandGroup items={group.items}>
                    <CommandGroupLabel>{group.value}</CommandGroupLabel>
                    <CommandCollection>
                      {(item: CommandEntry) => (
                        <CommandItem key={item.value} value={item}>
                          {item.label}
                        </CommandItem>
                      )}
                    </CommandCollection>
                  </CommandGroup>
                  {index < categories.length - 1 && <CommandSeparator />}
                </Fragment>
              )}
            </CommandList>
          </CommandPanel>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
}
