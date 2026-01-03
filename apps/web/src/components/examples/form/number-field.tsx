import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldScrubArea,
} from "@/components/ui";

export const NumberFieldExamples = () => {
  return (
    <div style={{ display: "flex", gap: 18, width: 600 }}>
      <NumberField>
        <NumberFieldScrubArea>Value</NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldIncrement
            render={
              <Button variant="primary" mode="lighter" size="sm" asIcon>
                <HugeiconsIcon icon={Add01Icon} />
              </Button>
            }
          />

          <NumberFieldDecrement
            render={
              <Button variant="primary" mode="lighter" size="sm" asIcon>
                <HugeiconsIcon icon={MinusSignIcon} />
              </Button>
            }
          />
        </NumberFieldGroup>
      </NumberField>

      <NumberField disabled>
        <NumberFieldScrubArea>Value</NumberFieldScrubArea>
        <NumberFieldGroup variant="end-aligned">
          <NumberFieldIncrement
            render={
              <Button variant="neutral" mode="lighter" size="sm" asIcon>
                <HugeiconsIcon icon={Add01Icon} />
              </Button>
            }
          />

          <NumberFieldDecrement
            render={
              <Button variant="neutral" mode="lighter" size="sm" asIcon>
                <HugeiconsIcon icon={MinusSignIcon} />
              </Button>
            }
          />
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
};
