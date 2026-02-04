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
  { value: "option1", label: "Option One" },
  { value: "option2", label: "Option Two" },
  { value: "option3", label: "Option Three" },
];

export default function Particle() {
  return (
    <Autocomplete disabled items={items}>
      <AutocompleteInput placeholder="Disabled state..." />
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
