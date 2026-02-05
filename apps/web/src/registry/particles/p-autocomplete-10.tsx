"use client";

import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteSeparator,
} from "@olyx/react/autocomplete";
import { Fragment } from "react";

interface Item {
  id: string;
  label: string;
}

interface ItemGroup {
  value: string;
  items: Item[];
}

const frameworkGroups: ItemGroup[] = [
  {
    value: "Frontend",
    items: [
      { id: "1", label: "React" },
      { id: "2", label: "Vue" },
      { id: "3", label: "Angular" },
    ],
  },
  {
    value: "Backend",
    items: [
      { id: "4", label: "Node.js" },
      { id: "5", label: "Django" },
      { id: "6", label: "Laravel" },
    ],
  },
];

export default function Particle() {
  return (
    <Autocomplete items={frameworkGroups}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <AutocompleteInput
          aria-label="Search frameworks"
          placeholder="e.g. React"
        />
      </div>
      <AutocompletePopup>
        <AutocompleteEmpty>No frameworks found.</AutocompleteEmpty>
        <AutocompleteList>
          {(group: ItemGroup) => (
            <Fragment key={group.value}>
              <AutocompleteGroup items={group.items}>
                <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                <AutocompleteCollection>
                  {(item: Item) => (
                    <AutocompleteItem key={item.id} value={item}>
                      {item.label}
                    </AutocompleteItem>
                  )}
                </AutocompleteCollection>
              </AutocompleteGroup>
              {group.value !== "Backend" && <AutocompleteSeparator />}
            </Fragment>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
