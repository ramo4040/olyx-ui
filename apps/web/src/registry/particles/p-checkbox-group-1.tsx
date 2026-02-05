"use client";

import { CheckBox } from "@olyx/react/checkbox";
import { CheckboxGroup } from "@olyx/react/checkbox-group";
import { Field, FieldLabel } from "@olyx/react/field";

export default function Particle() {
  return (
    <CheckboxGroup>
      <Field orientation="horizontal">
        <CheckBox defaultChecked />
        <FieldLabel>Next.js</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <CheckBox />
        <FieldLabel>Vite</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <CheckBox />
        <FieldLabel>Astro</FieldLabel>
      </Field>
    </CheckboxGroup>
  );
}
