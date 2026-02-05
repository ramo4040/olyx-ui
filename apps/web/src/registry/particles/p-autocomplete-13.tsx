"use client";

import { Field, FieldLabel } from "@olyx/react";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@olyx/react/autocomplete";
import { Button } from "@olyx/react/button";

const items = [
  { value: "opt-1", label: "Option 1" },
  { value: "opt-2", label: "Option 2" },
  { value: "opt-3", label: "Option 3" },
];

export default function Particle() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <Field>
        <FieldLabel>Label</FieldLabel>
        <Autocomplete items={items}>
          <AutocompleteInput
            placeholder="Select an option..."
            name="selection"
          />
          <AutocompletePopup>
            <AutocompleteEmpty>No options available.</AutocompleteEmpty>
            <AutocompleteList>
              {(item: (typeof items)[0]) => (
                <AutocompleteItem key={item.value} value={item}>
                  {item.label}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </Autocomplete>
      </Field>

      <Button type="submit" style={{ marginTop: 8 }}>
        Submit
      </Button>
    </form>
  );
}
