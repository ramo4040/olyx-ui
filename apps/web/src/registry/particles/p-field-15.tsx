"use client";

import {
  Field,
  FieldLabel,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
} from "@olyx/react/field";
import { RadioGroup, RadioGroupItem } from "@olyx/react/radio";

export default function Particle() {
  return (
    <Fieldset>
      <FieldsetLegend>Plan</FieldsetLegend>
      <RadioGroup defaultValue="pro">
        <Field orientation="horizontal">
          <RadioGroupItem value="free" />
          <FieldLabel>Free</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="pro" />
          <FieldLabel>Pro</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="enterprise" />
          <FieldLabel>Enterprise</FieldLabel>
        </Field>
      </RadioGroup>
      <FieldsetDescription>Select your subscription plan.</FieldsetDescription>
    </Fieldset>
  );
}
