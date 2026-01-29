"use client";

import "./style.css";
import {
  ArrowDown01Icon,
  ArrowMoveDownLeftIcon,
  ArrowUp01Icon,
  DarkModeIcon,
  Search01Icon,
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
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@olyx/react";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";

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

export const MainNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  function handleItemClick(_item: Item) {
    setOpen(false);
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme, setTheme]);

  return (
    <NavigationMenu data-ui="main-navbar">
      <NavigationMenuList className="main-navbar-list">
        {/* Logo */}
        <NavigationMenuItem>
          <Logo />
        </NavigationMenuItem>

        {/* Links */}
        <NavigationMenuList>
          <NavigationMenuItem className="link-item">
            <NavigationMenuLink href="#">Docs</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="link-item">
            <NavigationMenuLink href="#">Components</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="link-item">
            <NavigationMenuLink href="#">Blocks</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="actions-list">
          {/* Search */}
          <CommandDialog onOpenChange={setOpen} open={open}>
            <CommandDialogTrigger
              render={
                <NavigationMenuItem>
                  <Button mode="stroke" variant="neutral">
                    <HugeiconsIcon icon={Search01Icon} />
                    Search
                    <KbdGroup className="kbd-group">
                      <Kbd>⌘</Kbd>
                      <Kbd>K</Kbd>
                    </KbdGroup>
                  </Button>
                </NavigationMenuItem>
              }
            />

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
                                  <CommandShortcut>
                                    {item.shortcut}
                                  </CommandShortcut>
                                )}
                              </CommandItem>
                            )}
                          </CommandCollection>
                        </CommandGroup>
                        {groupedItems.length - 1 !== _index && (
                          <CommandSeparator />
                        )}
                      </Fragment>
                    )}
                  </CommandList>
                </CommandPanel>

                <CommandFooter>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
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

                    <div
                      style={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <Kbd>
                        <HugeiconsIcon icon={ArrowMoveDownLeftIcon} />{" "}
                      </Kbd>
                      <span>Open</span>
                    </div>
                  </div>

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Kbd>Esc</Kbd>
                    <span>Close</span>
                  </div>
                </CommandFooter>
              </Command>
            </CommandDialogContent>
          </CommandDialog>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <GitHubIcon />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                render={
                  <Button mode="ghost" variant="neutral" asIcon>
                    <HugeiconsIcon icon={DarkModeIcon} />
                  </Button>
                }
              />

              <TooltipContent>
                Toggle theme <Kbd>D</Kbd>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
