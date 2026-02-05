"use client";

import { Button } from "@olyx/react/button";
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
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
];

export default function Particle() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted");
      }}
    >
      <Field>
        <FieldLabel>Department</FieldLabel>
        <Combobox items={items}>
          <ComboboxInput
            name="department"
            placeholder="Select a department..."
          />
          <ComboboxContent>
            <ComboboxEmpty>No departments found.</ComboboxEmpty>
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

      <Button type="submit" style={{ marginTop: 8 }}>
        Submit
      </Button>
    </form>
  );
}
