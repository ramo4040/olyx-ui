import React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui";

export const ComboboxExamples = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: 300,
      }}
    >
      <h4>Basic Combobox</h4>
      <Combobox items={fruits}>
        <ComboboxInput placeholder="Select an option" />
        <ComboboxContent>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(fruit: string) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <h4>Combobox multiple select</h4>
      <Combobox items={langs} multiple>
        <ComboboxChips ref={containerRef}>
          <ComboboxValue>
            {(values: ProgrammingLanguage[]) => (
              <>
                {values.map((v) => (
                  <ComboboxChip key={v.id}>{v.value}</ComboboxChip>
                ))}
                <ComboboxChipsInput
                  placeholder={values.length > 0 ? "" : "e.g. TypeScript"}
                />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>

        <ComboboxContent anchor={containerRef}>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(lang: ProgrammingLanguage) => (
              <ComboboxItem key={lang.id} value={lang}>
                {lang.value}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Grape",
  "Mango",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Kiwi",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Papaya",
  "Guava",
  "Lychee",
  "Pomegranate",
  "Apricot",
  "Grapefruit",
  "Passionfruit",
];

interface ProgrammingLanguage {
  id: string;
  value: string;
}

const langs: ProgrammingLanguage[] = [
  { id: "js", value: "JavaScript" },
  { id: "ts", value: "TypeScript" },
  { id: "py", value: "Python" },
  { id: "java", value: "Java" },
  { id: "cpp", value: "C++" },
  { id: "cs", value: "C#" },
  { id: "php", value: "PHP" },
  { id: "ruby", value: "Ruby" },
  { id: "go", value: "Go" },
  { id: "rust", value: "Rust" },
  { id: "swift", value: "Swift" },
];
