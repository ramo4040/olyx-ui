"use client";

import { CheckBox } from "@olyx/react/checkbox";
import { CheckboxGroup } from "@olyx/react/checkbox-group";
import {
  Field,
  FieldLabel,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
} from "@olyx/react/field";

export default function Particle() {
  return (
    <Fieldset>
      <FieldsetLegend>Notifications</FieldsetLegend>
      <CheckboxGroup>
        <Field orientation="horizontal">
          <CheckBox defaultChecked />
          <FieldLabel>Email notifications</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <CheckBox />
          <FieldLabel>SMS notifications</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <CheckBox />
          <FieldLabel>Push notifications</FieldLabel>
        </Field>
      </CheckboxGroup>
      <FieldsetDescription>
        Choose how you want to be notified.
      </FieldsetDescription>
    </Fieldset>
  );
}
