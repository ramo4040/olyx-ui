"use client";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@olyx/react/autocomplete";

const items = [
  { value: "design", label: "Design" },
  { value: "development", label: "Development" },
  { value: "documentation", label: "Documentation" },
  { value: "deployment", label: "Deployment" },
];

export default function Particle() {
  return (
    <Autocomplete items={items} autoHighlight="always">
      <AutocompleteInput placeholder="Search services..." />
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
