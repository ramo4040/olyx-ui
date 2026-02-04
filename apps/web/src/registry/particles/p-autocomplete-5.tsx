"use client";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@olyx/react/autocomplete";
import { Field, FieldLabel } from "@olyx/react/field";

const items = [
  { value: "uk", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

export default function Particle() {
  return (
    <Field>
      <FieldLabel htmlFor="country-search">Select Country</FieldLabel>
      <Autocomplete items={items}>
        <AutocompleteInput
          id="country-search"
          placeholder="Search countries..."
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
    </Field>
  );
}
