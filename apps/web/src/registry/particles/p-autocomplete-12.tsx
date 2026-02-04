"use client";

import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  useAutocompleteFilter,
} from "@olyx/react/autocomplete";
import { Spinner } from "@olyx/react/spinner";
import { Fragment, type ReactNode, useEffect, useState } from "react";

type Framework = { id: string; name: string };
type FrameworkGroup = { category: string; items: Framework[] };

const frameworks: FrameworkGroup[] = [
  {
    category: "Frontend",
    items: [
      { id: "1", name: "React" },
      { id: "2", name: "Vue" },
      { id: "3", name: "Angular" },
    ],
  },
  {
    category: "Backend",
    items: [
      { id: "4", name: "Node.js" },
      { id: "5", name: "Django" },
      { id: "6", name: "Laravel" },
      { id: "7", name: "Express" },
    ],
  },
  {
    category: "Fullstack",
    items: [{ id: "8", name: "Next.js" }],
  },
];

async function searchFrameworks(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<FrameworkGroup[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 500 + 200),
  );
  return frameworks
    .map((group) => ({
      category: group.category,
      items: group.items.filter(
        (framework) =>
          filter(framework.name, query) || filter(group.category, query),
      ),
    }))
    .filter((group) => group.items.length > 0);
}

export default function Particle() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<FrameworkGroup[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { contains } = useAutocompleteFilter({ sensitivity: "base" });

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    let ignore = false;

    const timeoutId = setTimeout(async () => {
      try {
        const results = await searchFrameworks(searchValue, contains);
        if (!ignore) setSearchResults(results);
      } catch {
        if (!ignore) {
          setError("Failed to fetch results. Please try again.");
          setSearchResults([]);
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      ignore = true;
    };
  }, [searchValue, contains]);

  const totalResults = searchResults.reduce(
    (acc, group) => acc + group.items.length,
    0,
  );

  let status: ReactNode = `${totalResults} result${totalResults === 1 ? "" : "s"} found`;
  if (isLoading) {
    status = (
      <span
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Searching...
        <Spinner style={{ width: "1rem", height: "1rem" }} />
      </span>
    );
  } else if (error) {
    status = <span style={{ color: "var(--error-color)" }}>{error}</span>;
  } else if (totalResults === 0 && searchValue) {
    status = <span>No frameworks found for "{searchValue}"</span>;
  }

  const shouldRenderPopup = searchValue !== "";

  return (
    <Autocomplete
      filter={null}
      items={searchResults}
      itemToStringValue={(item: unknown) => (item as Framework).name}
      onValueChange={setSearchValue}
      value={searchValue}
    >
      <AutocompleteInput placeholder="Search frameworks..." />
      {shouldRenderPopup && (
        <AutocompletePopup aria-busy={isLoading || undefined}>
          <AutocompleteStatus>{status}</AutocompleteStatus>
          <AutocompleteList>
            {searchResults.map((group) => (
              <Fragment key={group.category}>
                <AutocompleteGroup items={group.items}>
                  <AutocompleteGroupLabel>
                    {group.category}
                  </AutocompleteGroupLabel>
                  <AutocompleteCollection>
                    {(framework: Framework) => (
                      <AutocompleteItem key={framework.id} value={framework}>
                        {framework.name}
                      </AutocompleteItem>
                    )}
                  </AutocompleteCollection>
                </AutocompleteGroup>
              </Fragment>
            ))}
          </AutocompleteList>
        </AutocompletePopup>
      )}
    </Autocomplete>
  );
}
