"use client";

import { CheckBox } from "@olyx/react/checkbox";
import { CheckboxGroup } from "@olyx/react/checkbox-group";
import { Field, FieldLabel } from "@olyx/react/field";

export default function Particle() {
  return (
    <CheckboxGroup>
      <Field orientation="horizontal">
        <CheckBox />
        <FieldLabel>React</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <CheckBox disabled />
        <FieldLabel>Vue (unavailable)</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <CheckBox />
        <FieldLabel>Svelte</FieldLabel>
      </Field>
    </CheckboxGroup>
  );
}
