import { Skeleton } from "@olyx/react";

export const SkeletonExamples = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        style={{
          display: "grid",
          gap: "8px",
          width: "280px",
        }}
      >
        <Skeleton
          aria-label="loading..."
          style={{ height: "200px", width: "100%" }}
        />
        <Skeleton
          aria-label="loading..."
          style={{ height: "16px", width: "100%" }}
        />
        <Skeleton
          aria-label="loading..."
          style={{ height: "14px", width: "70%" }}
        />
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <Skeleton
            aria-label="loading..."
            style={{ height: "32px", flex: 1 }}
          />
          <Skeleton
            aria-label="loading..."
            style={{ height: "32px", width: "32px" }}
          />
        </div>
      </div>
    </div>
  );
};
