"use client";

import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@olyx/react/autocomplete";

const items = [
  { value: "search1", label: "Search Query" },
  { value: "search2", label: "Search Results" },
  { value: "search3", label: "Search Engine" },
  { value: "search4", label: "Search Filter" },
];

export default function Particle() {
  return (
    <Autocomplete items={items}>
      <AutocompleteInput
        startAddon={<HugeiconsIcon icon={Search01Icon} />}
        placeholder="Search with icon..."
      />
      <AutocompletePopup>
        <AutocompleteEmpty>No results found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
