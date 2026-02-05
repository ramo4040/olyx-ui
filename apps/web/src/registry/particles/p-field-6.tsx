"use client";

import {
  Field,
  FieldGroup,
  FieldLabel,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
} from "@olyx/react/field";
import { Input } from "@olyx/react/input";

export default function Particle() {
  return (
    <Fieldset>
      <FieldsetLegend>Contact Details</FieldsetLegend>
      <FieldsetDescription>
        Provide your contact information below.
      </FieldsetDescription>
      <FieldGroup>
        <Field>
          <FieldLabel>First name</FieldLabel>
          <Input placeholder="Jane" />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Doe" />
        </Field>
      </FieldGroup>
    </Fieldset>
  );
}
