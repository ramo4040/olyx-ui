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

const items = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
];

export default function Particle() {
  const anchorRef = useComboboxAnchor();

  return (
    <Combobox items={items} multiple>
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
                  selected.length > 0 ? undefined : "Select frameworks..."
                }
                aria-label="Select frameworks"
              />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchorRef}>
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
  );
}
