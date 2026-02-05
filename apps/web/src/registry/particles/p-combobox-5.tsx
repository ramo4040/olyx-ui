"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@olyx/react/combobox";
import { Fragment } from "react";

interface Item {
  id: string;
  label: string;
}

interface ItemGroup {
  value: string;
  items: Item[];
}

const groups: ItemGroup[] = [
  {
    value: "Frontend",
    items: [
      { id: "react", label: "React" },
      { id: "vue", label: "Vue" },
      { id: "angular", label: "Angular" },
    ],
  },
  {
    value: "Backend",
    items: [
      { id: "node", label: "Node.js" },
      { id: "django", label: "Django" },
      { id: "laravel", label: "Laravel" },
    ],
  },
];

export default function Particle() {
  return (
    <Combobox items={groups}>
      <ComboboxInput placeholder="Search frameworks..." />
      <ComboboxContent>
        <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
        <ComboboxList>
          {(group: ItemGroup, index: number) => (
            <Fragment key={group.value}>
              <ComboboxGroup items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item: Item) => (
                    <ComboboxItem key={item.id} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
              {index < groups.length - 1 && <ComboboxSeparator />}
            </Fragment>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
