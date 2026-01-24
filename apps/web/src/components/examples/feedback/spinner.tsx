import { Spinner } from "@olyx/react";

export const SpinnerExamples = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h4>Spinner</h4>
      <Spinner />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
};
