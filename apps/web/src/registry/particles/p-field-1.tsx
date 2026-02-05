"use client";

import { Field, FieldLabel } from "@olyx/react/field";
import { Input } from "@olyx/react/input";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
    </Field>
  );
}
