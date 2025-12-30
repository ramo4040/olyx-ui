import { Separator } from "@/components/ui";

export const SeparatorExample = () => {
  return (
    <>
      <h4>Separator </h4>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Separator style={{ width: 100 }} />
        <Separator orientation="vertical" style={{ height: 100 }} />
      </div>
    </>
  );
};
