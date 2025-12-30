import { Textarea } from "@/components/ui";

export const TextareaExample = () => {
  return (
    <div style={{ display: "grid", gap: 18, maxWidth: 300 }}>
      <Textarea placeholder="This is a textarea example." />
      <Textarea disabled>This is a textarea example.</Textarea>
      <Textarea data-invalid>This is a textarea example.</Textarea>
    </div>
  );
};
