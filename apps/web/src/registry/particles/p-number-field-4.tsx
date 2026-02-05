"use client";

import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@olyx/react/number-field";

export default function Particle() {
  return (
    <NumberField defaultValue={50} min={0} max={100}>
      <NumberFieldGroup>
        <NumberFieldDecrement
          render={
            <Button variant="neutral" mode="lighter" size="sm" asIcon>
              <HugeiconsIcon icon={MinusSignIcon} />
            </Button>
          }
        />
        <NumberFieldInput />
        <NumberFieldIncrement
          render={
            <Button variant="neutral" mode="lighter" size="sm" asIcon>
              <HugeiconsIcon icon={Add01Icon} />
            </Button>
          }
        />
      </NumberFieldGroup>
    </NumberField>
  );
}
