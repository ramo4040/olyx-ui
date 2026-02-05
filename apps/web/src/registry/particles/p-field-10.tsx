"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@olyx/react/combobox";
import { Field, FieldLabel } from "@olyx/react/field";

const skills = [
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "node", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
];

export default function Particle() {
  const anchorRef = useComboboxAnchor();

  return (
    <Field>
      <FieldLabel>Skills</FieldLabel>
      <Combobox items={skills} multiple>
        <ComboboxChips ref={anchorRef}>
          <ComboboxValue>
            {(selected: { value: string; label: string }[]) => (
              <>
                {selected.map((item) => (
                  <ComboboxChip key={item.value} aria-label={item.value}>
                    {item.label}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput
                  placeholder={
                    selected.length > 0 ? undefined : "Select skills..."
                  }
                  aria-label="Select skills"
                />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchorRef}>
          <ComboboxEmpty>No skills found.</ComboboxEmpty>
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
