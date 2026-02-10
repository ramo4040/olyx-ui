"use client";

import {
  ArrowDown01Icon,
  ArrowMoveDownLeftIcon,
  ArrowUp01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Command,
  CommandCollection,
  CommandCreateHandle,
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
  Kbd,
  KbdGroup,
} from "@olyx/react";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { appConfig } from "@/lib/config";
import type { source } from "@/lib/source";

export const docsCommandHandle = CommandCreateHandle();

interface PageItem {
  value: string;
  label: string;
  url: string;
  keywords?: string[];
}

interface PageGroup {
  value: string;
  items: PageItem[];
}

export const DocsCommand = ({ tree }: { tree: typeof source.pageTree }) => {
  // Convert tree structure to grouped items
  const groupedItems = useMemo<PageGroup[]>(() => {
    const groups: PageGroup[] = [];

    // Add nav items group
    if (appConfig.navItems && appConfig.navItems.length > 0) {
      groups.push({
        value: "Olyx UI",
        items: appConfig.navItems.map((item) => ({
          value: `Navigation ${item.label}`,
          label: item.label,
          url: item.href,
          keywords: ["nav", "navigation", item.label.toLowerCase()],
        })),
      });
    }

    // Add tree groups
    tree.children.forEach((group) => {
      if (group.type === "folder") {
        const items: PageItem[] = [];
        group.children.forEach((item) => {
          if (item.type === "page") {
            const itemName = item.name?.toString() || "";
            items.push({
              value: itemName ? `${group.name} ${itemName}` : "",
              label: itemName,
              url: item.url,
            });
          }
        });
        if (items.length > 0) {
          groups.push({
            value:
              typeof group.name === "string" ? group.name : String(group.name),
            items,
          });
        }
      }
    });

    return groups;
  }, [tree]);

  function handleItemClick() {
    docsCommandHandle.close();
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        docsCommandHandle.isOpen
          ? docsCommandHandle.close()
          : docsCommandHandle.open(null);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog handle={docsCommandHandle}>
      <CommandDialogTrigger
        render={
          <Button mode="stroke" variant="neutral">
            <HugeiconsIcon icon={Search01Icon} />
            Search
            <KbdGroup style={{ marginLeft: "var(--spacing-32)" }}>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </Button>
        }
      />

      <CommandDialogContent>
        <Command autoHighlight items={groupedItems}>
          <CommandInput placeholder="Search for apps and commands..." />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: PageGroup) => (
                <CommandGroup key={group.value} items={group.items}>
                  <CommandGroupLabel>{group.value}</CommandGroupLabel>
                  <CommandCollection>
                    {(item: PageItem) => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onClick={handleItemClick}
                        render={
                          <Link href={item.url as any}>{item.label}</Link>
                        }
                      />
                    )}
                  </CommandCollection>
                </CommandGroup>
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
  );
};
