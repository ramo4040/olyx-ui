import { RadioGroup, RadioGroupItem } from "@/components/ui";

export const RadioExample = () => {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <RadioGroup name="number" style={{ display: "flex", gap: "8px" }}>
        <RadioGroupItem value={1} />
        <RadioGroupItem value={2} disabled />
        <RadioGroupItem value={3} />
        <RadioGroupItem value={5} disabled />
      </RadioGroup>
    </div>
  );
};
