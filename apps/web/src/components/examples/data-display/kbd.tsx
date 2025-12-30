import { Kbd, KbdGroup } from "@/components/ui";

export const KbdExample = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Kbd>⌘</Kbd>

      <KbdGroup>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  );
};
