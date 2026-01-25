"use client";

import "./style.css";
import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@olyx/react";

export const TeamSize = () => {
  return (
    <div data-ui="team-size">
      <Fieldset>
        <div className="legend-description">
          <FieldsetLegend>Team members</FieldsetLegend>
          <FieldsetDescription>
            Choose how many people will join your workspace.
          </FieldsetDescription>
        </div>

        <NumberField defaultValue={5} min={1} max={50}>
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
      </Fieldset>
    </div>
  );
};
