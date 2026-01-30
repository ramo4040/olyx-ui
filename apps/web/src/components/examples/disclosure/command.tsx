"use client";

import {
  ArrowDown01Icon,
  ArrowMoveDownLeftIcon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
  Kbd,
  KbdGroup,
} from "@olyx/react";
import { Fragment, useEffect, useState } from "react";

interface Item {
  value: string;
  label: string;
  shortcut?: string;
}

interface Group {
  value: string;
  items: Item[];
}

const suggestions: Item[] = [
  { label: "Linear", shortcut: "⌘L", value: "linear" },
  { label: "Figma", shortcut: "⌘F", value: "figma" },
  { label: "Slack", shortcut: "⌘S", value: "slack" },
  { label: "YouTube", shortcut: "⌘Y", value: "youtube" },
  { label: "Raycast", shortcut: "⌘R", value: "raycast" },
];

const commands: Item[] = [
  { label: "Clipboard History", shortcut: "⌘⇧C", value: "clipboard-history" },
  { label: "Import Extension", shortcut: "⌘I", value: "import-extension" },
  { label: "Create Snippet", shortcut: "⌘N", value: "create-snippet" },
  { label: "System Preferences", shortcut: "⌘,", value: "system-preferences" },
  { label: "Window Management", shortcut: "⌘⇧W", value: "window-management" },
];

const groupedItems: Group[] = [
  { items: suggestions, value: "Suggestions" },
  { items: commands, value: "Commands" },
];

export function CommandExample() {
  const [open, setOpen] = useState(false);

  function handleItemClick(_item: Item) {
    setOpen(false);
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div style={{ minWidth: 300 }}>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandDialogTrigger
          render={<Button mode="stroke" variant="neutral" />}
        >
          Open Command Palette
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>J</Kbd>
          </KbdGroup>
        </CommandDialogTrigger>

        <CommandDialogContent>
          <Command items={groupedItems}>
            <CommandInput placeholder="Search for apps and commands..." />
            <CommandPanel>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandList>
                {(group: Group, _index: number) => (
                  <Fragment key={group.value}>
                    <CommandGroup items={group.items}>
                      <CommandGroupLabel>{group.value}</CommandGroupLabel>
                      <CommandCollection>
                        {(item: Item) => (
                          <CommandItem
                            key={item.value}
                            onClick={() => handleItemClick(item)}
                            value={item.value}
                          >
                            <span className="flex-1">{item.label}</span>
                            {item.shortcut && (
                              <CommandShortcut>{item.shortcut}</CommandShortcut>
                            )}
                          </CommandItem>
                        )}
                      </CommandCollection>
                    </CommandGroup>
                    {groupedItems.length - 1 !== _index && <CommandSeparator />}
                  </Fragment>
                )}
              </CommandList>
            </CommandPanel>

            <CommandFooter>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <KbdGroup>
                    <Kbd>
                      <HugeiconsIcon icon={ArrowUp01Icon} />
                    </Kbd>
                    <Kbd>
                      <HugeiconsIcon icon={ArrowDown01Icon} />
                    </Kbd>
                  </KbdGroup>
                  <span>Navigate</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Kbd>
                    <HugeiconsIcon icon={ArrowMoveDownLeftIcon} />{" "}
                  </Kbd>
                  <span>Open</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Kbd>Esc</Kbd>
                <span>Close</span>
              </div>
            </CommandFooter>
          </Command>
        </CommandDialogContent>
      </CommandDialog>
    </div>
  );
}
