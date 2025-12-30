import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button, Separator } from "@/components/ui";

export const SeparatorExample = () => {
  return (
    <>
      <h4>Separator </h4>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Separator style={{ width: 100 }} />
        <Separator orientation="vertical" style={{ height: 100 }} />

        <Separator style={{ width: 200 }} variant="content">
          Or
        </Separator>

        <Separator variant="content" orientation="vertical">
          <Button asIcon variant="neutral" mode="lighter" size="sm">
            <HugeiconsIcon icon={PlusSignIcon} />
          </Button>
        </Separator>

        <Separator variant="content" style={{ width: 200 }}>
          <Button asIcon variant="neutral" mode="lighter" size="sm">
            <HugeiconsIcon icon={PlusSignIcon} />
          </Button>
        </Separator>

        <Separator style={{ width: 200 }} variant="solid-text">
          Title Separator
        </Separator>
      </div>
    </>
  );
};
