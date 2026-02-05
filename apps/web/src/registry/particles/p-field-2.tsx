"use client";

import { Field, FieldDescription, FieldLabel } from "@olyx/react/field";
import { Input } from "@olyx/react/input";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="olyx_user" />
      <FieldDescription>
        This will be your public display name.
      </FieldDescription>
    </Field>
  );
}
