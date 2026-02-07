"use client";

import { Field, FieldDescription, FieldLabel } from "@olyx/react/field";
import { Switch } from "@olyx/react/switch";

export default function Particle() {
  return (
    <Field orientation="horizontal" style={{ alignItems: "start" }}>
      <Switch />
      <div>
        <FieldLabel>Airplane Mode</FieldLabel>
        <FieldDescription>Disable all wireless connections.</FieldDescription>
      </div>
    </Field>
  );
}
