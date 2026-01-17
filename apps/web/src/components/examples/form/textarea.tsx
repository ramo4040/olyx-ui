import { Textarea } from "@/components/ui";

export const TextareaExample = () => {
  return (
    <div style={{ display: "grid", gap: 18, maxWidth: 300 }}>
      <Textarea placeholder="This is a textarea example." defaultValue={""} />
      <Textarea disabled defaultValue={"This is a textarea example."} />
      <Textarea data-invalid defaultValue={"This is a textarea example."} />
    </div>
  );
};
