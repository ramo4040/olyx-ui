"use client";

import { Field, FieldLabel } from "@olyx/react/field";
import { Switch } from "@olyx/react/switch";

export default function Particle() {
  return (
    <Field orientation="horizontal">
      <FieldLabel>Dark mode</FieldLabel>
      <Switch />
    </Field>
  );
}
