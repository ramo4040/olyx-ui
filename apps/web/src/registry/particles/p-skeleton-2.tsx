import { Skeleton } from "@olyx/react/skeleton";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Skeleton style={{ width: "100%", height: 16 }} />
      <Skeleton style={{ width: "80%", height: 16 }} />
      <Skeleton style={{ width: "60%", height: 16 }} />
    </div>
  );
}
