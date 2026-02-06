import { Skeleton } from "@olyx/react/skeleton";

export default function Particle() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      <Skeleton rounded style={{ width: 48, height: 48 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Skeleton style={{ width: 160, height: 16 }} />
        <Skeleton style={{ width: 120, height: 12 }} />
      </div>
    </div>
  );
}
