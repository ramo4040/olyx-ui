"use client";

import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Field, FieldLabel } from "@olyx/react";
import { Button } from "@olyx/react/button";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@olyx/react/number-field";

export default function Particle() {
  return (
    <Field>
      <NumberField defaultValue={50}>
        <NumberFieldScrubArea>
          <FieldLabel>Opacity</FieldLabel>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement
            render={
              <Button variant="primary" mode="lighter" size="sm" asIcon>
                <HugeiconsIcon icon={MinusSignIcon} />
              </Button>
            }
          />
          <NumberFieldInput />
          <NumberFieldIncrement
            render={
              <Button variant="primary" mode="lighter" size="sm" asIcon>
                <HugeiconsIcon icon={Add01Icon} />
              </Button>
            }
          />
        </NumberFieldGroup>
      </NumberField>
    </Field>
  );
}
