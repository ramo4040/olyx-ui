import { ScrollArea } from "@/components/ui";

export function ScrollAreaExample() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: 400,
      }}
    >
      <ScrollArea>
        <p>
          Vernacular architecture is building done outside any academic
          tradition, and without professional guidance. It is not a particular
          architectural movement or style, but rather a broad category,
          encompassing a wide range and variety of building types, with
          differing methods of construction, from around the world, both
          historical and extant and classical and modern. Vernacular
          architecture constitutes 95% of the world's built environment, as
          estimated in 1995 by Amos Rapoport, as measured against the small
          percentage of new buildings every year designed by architects and
          built by engineers.
        </p>
        <p>
          This type of architecture usually serves immediate, local needs, is
          constrained by the materials available in its particular region and
          reflects local traditions and cultural practices. The study of
          vernacular architecture does not examine formally schooled architects,
          but instead that of the design skills and tradition of local builders,
          who were rarely given any attribution for the work. More recently,
          vernacular architecture has been examined by designers and the
          building industry in an effort to be more energy conscious with
          contemporary design and construction—part of a broader interest in
          sustainable design.
        </p>
      </ScrollArea>

      <ScrollArea>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 80px)",
            gridTemplateRows: "repeat(10, 80px)",
            gap: 10,
            listStyle: "none",
          }}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <li
              key={i}
              style={{
                borderRadius: 10,
                display: "grid",
                placeContent: "center",
                border: "1px solid var(--color-surface-container-high)",
              }}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
