"use client";

import { CheckBox } from "@olyx/react/checkbox";
import { Field, FieldLabel } from "@olyx/react/field";

export default function Particle() {
  return (
    <Field orientation="horizontal">
      <CheckBox />
      <FieldLabel>I agree to the terms and conditions</FieldLabel>
    </Field>
  );
}
