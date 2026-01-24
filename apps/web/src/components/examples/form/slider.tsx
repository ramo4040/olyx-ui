import { Slider } from "@olyx/react";

export const SliderExample = () => {
  return (
    <div style={{ display: "flex", gap: 64 }}>
      <div style={{ display: "flex", gap: 14 }}>
        <Slider orientation="vertical" defaultValue={[10, 70]} />
        <Slider defaultValue={40} orientation="vertical" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Slider orientation="horizontal" defaultValue={[10, 70]} />
        <Slider defaultValue={90} />

        <Slider defaultValue={50} disabled />
      </div>
    </div>
  );
};
