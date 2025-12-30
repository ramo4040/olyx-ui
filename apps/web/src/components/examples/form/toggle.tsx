import { TextItalicIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Toggle, ToggleGroup } from "@/components/ui";

export const ToogleExample = () => {
  return (
    <div style={{ display: "grid", gap: 8, maxWidth: 500 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Toggle size="sm">
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="sm" variant="ghost">
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="md">
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="md" variant="ghost">
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="lg">
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="lg" variant="ghost">
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="md" disabled>
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
        <Toggle size="md" variant="ghost" disabled>
          <HugeiconsIcon icon={TextItalicIcon} />
        </Toggle>
      </div>
      <h4>Toggle Group</h4>
      <div style={{ display: "flex", gap: 10 }}>
        <ToggleGroup size="lg" orientation="horizontal" variant="ghost">
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
        </ToggleGroup>
        <ToggleGroup size="md" orientation="horizontal" grouped={false}>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
        </ToggleGroup>
        <ToggleGroup size="lg" multiple disabled orientation="vertical" grouped>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
          <Toggle>
            <HugeiconsIcon icon={TextItalicIcon} />
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  );
};
