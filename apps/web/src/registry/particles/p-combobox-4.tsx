"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@olyx/react/combobox";
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
      <FieldLabel htmlFor="country-select">Country</FieldLabel>
      <Combobox items={items}>
        <ComboboxInput id="country-select" placeholder="Select a country..." />
        <ComboboxContent>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  );
}
