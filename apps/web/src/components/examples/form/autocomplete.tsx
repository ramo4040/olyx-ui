"use client";

import { Location01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  Field,
  FieldDescription,
  FieldLabel,
} from "@olyx/react";
import { useState } from "react";

interface Fruit {
  label: string;
  value: string;
}

interface GroupedItem {
  label: string;
  value: string;
  category: string;
}

interface City {
  label: string;
  value: string;
}

const fruits: Fruit[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

const groupedItems: GroupedItem[] = [
  { label: "Apple", value: "apple", category: "Fruits" },
  { label: "Banana", value: "banana", category: "Fruits" },
  { label: "Orange", value: "orange", category: "Fruits" },
  { label: "Carrot", value: "carrot", category: "Vegetables" },
  { label: "Broccoli", value: "broccoli", category: "Vegetables" },
  { label: "Spinach", value: "spinach", category: "Vegetables" },
  { label: "Salmon", value: "salmon", category: "Proteins" },
  { label: "Chicken", value: "chicken", category: "Proteins" },
  { label: "Tofu", value: "tofu", category: "Proteins" },
];

const cities: City[] = [
  { label: "New York", value: "new-york" },
  { label: "Los Angeles", value: "los-angeles" },
  { label: "Chicago", value: "chicago" },
  { label: "Houston", value: "houston" },
  { label: "Phoenix", value: "phoenix" },
  { label: "Philadelphia", value: "philadelphia" },
  { label: "San Antonio", value: "san-antonio" },
  { label: "San Diego", value: "san-diego" },
  { label: "Dallas", value: "dallas" },
  { label: "San Jose", value: "san-jose" },
];

/** Default */
function AutocompleteDefault() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete items={fruits} itemToStringValue={(item) => item.label}>
        <AutocompleteInput placeholder="Search fruits..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** Disabled */
function AutocompleteDisabled() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        items={fruits}
        itemToStringValue={(item) => item.label}
        disabled
      >
        <AutocompleteInput placeholder="Search fruits..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** With Label */
function AutocompleteWithLabel() {
  return (
    <div style={{ width: 300 }}>
      <Field>
        <FieldLabel>Favorite Fruit</FieldLabel>
        <Autocomplete items={fruits} itemToStringValue={(item) => item.label}>
          <AutocompleteInput placeholder="Select a fruit..." />
          <AutocompletePopup>
            <AutocompleteEmpty>No results found.</AutocompleteEmpty>
            <AutocompleteList>
              {(item: Fruit) => (
                <AutocompleteItem key={item.value} value={item}>
                  {item.label}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </Autocomplete>
        <FieldDescription>
          Choose your favorite fruit from the list.
        </FieldDescription>
      </Field>
    </div>
  );
}

/** Inline Autocomplete */
function AutocompleteInline() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        items={fruits}
        itemToStringValue={(item) => item.label}
        mode="inline"
      >
        <AutocompleteInput placeholder="Type to autocomplete..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** Auto Highlight */
function AutocompleteAutoHighlight() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        items={fruits}
        itemToStringValue={(item) => item.label}
        autoHighlight
      >
        <AutocompleteInput placeholder="Search fruits..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** With Clear Button */
function AutocompleteWithClear() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete items={fruits} itemToStringValue={(item) => item.label}>
        <AutocompleteInput placeholder="Search fruits..." showTrigger={false} />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** With Trigger and Clear Buttons */
function AutocompleteWithTriggerAndClear() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete items={fruits} itemToStringValue={(item) => item.label}>
        <AutocompleteInput
          placeholder="Search fruits..."
          showTrigger
          showClear
        />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** With Start Addon */
function AutocompleteWithStartAddon() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete items={cities} itemToStringValue={(item) => item.label}>
        <AutocompleteInput
          placeholder="Search cities..."
          startAddon={<HugeiconsIcon icon={Location01Icon} />}
        />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item: City) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** With Groups */
function AutocompleteWithGroups() {
  const categories = [...new Set(groupedItems.map((item) => item.category))];

  const groupedData = categories.map((category) => ({
    label: category,
    items: groupedItems.filter((item) => item.category === category),
  }));

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        items={groupedData}
        itemToStringValue={(item) => item.label}
      >
        <AutocompleteInput placeholder="Search food..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
          <AutocompleteList>
            {(group: { label: string; items: GroupedItem[] }) => (
              <AutocompleteGroup key={group.label}>
                <AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
                <AutocompleteCollection>
                  {(item: GroupedItem) => (
                    <AutocompleteItem key={item.value} value={item}>
                      {item.label}
                    </AutocompleteItem>
                  )}
                </AutocompleteCollection>
              </AutocompleteGroup>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

/** Async Search */
function AutocompleteAsync() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Fruit[]>([]);

  const handleInputChange = async (value: string) => {
    if (!value) {
      setResults([]);
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    const filtered = fruits.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase()),
    );
    setResults(filtered);
    setLoading(false);
  };

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        items={results}
        itemToStringValue={(item) => item.label}
        onValueChange={handleInputChange}
        filter={null}
      >
        <AutocompleteInput placeholder="Search fruits..." />
        <AutocompletePopup>
          <AutocompleteStatus>{loading ? "Loading..." : ""}</AutocompleteStatus>
          <AutocompleteEmpty>
            {loading ? "" : "No results found."}
          </AutocompleteEmpty>
          <AutocompleteList>
            {(item: Fruit) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}

export function AutocompleteExamples() {
  return (
    <>
      <AutocompleteDefault />
      <AutocompleteDisabled />
      <AutocompleteWithLabel />
      <AutocompleteInline />
      <AutocompleteAutoHighlight />
      <AutocompleteWithClear />
      <AutocompleteWithTriggerAndClear />
      <AutocompleteWithStartAddon />
      <AutocompleteWithGroups />
      <AutocompleteAsync />
    </>
  );
}
