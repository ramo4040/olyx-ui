import { Kbd, KbdGroup } from "@olyx/react";

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
