import { Progress, ProgressLabel, ProgressValue } from "@olyx/react";

export const ProgressExamples = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Progress value={70} style={{ width: 300 }}>
        <ProgressLabel>Loading...</ProgressLabel>
        <ProgressValue />
      </Progress>

      <Progress value={30} style={{ width: 300 }}>
        <ProgressLabel>Value...</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
};
