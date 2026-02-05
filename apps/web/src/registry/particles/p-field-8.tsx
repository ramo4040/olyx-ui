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

const countries = [
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Country</FieldLabel>
      <Autocomplete items={countries}>
        <AutocompleteInput placeholder="Search countries..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No countries found.</AutocompleteEmpty>
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
