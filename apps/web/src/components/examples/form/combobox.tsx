import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@olyx/react";

export const ComboboxExamples = () => {
  const containerRef = useComboboxAnchor();

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

      <h4>Grouped Combobox</h4>
      <Combobox items={products}>
        <ComboboxInput placeholder="Select an option" />
        <ComboboxContent>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(group: ProductGroup) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

interface ProductGroup {
  value: string;
  items: string[];
}

const products: ProductGroup[] = [
  {
    value: "Fruits",
    items: ["Apple", "Banana", "Orange"],
  },
  {
    value: "Vegetables",
    items: ["Carrot", "Lettuce", "Spinach"],
  },
];

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
