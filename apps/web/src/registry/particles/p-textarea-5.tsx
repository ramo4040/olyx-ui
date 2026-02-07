"use client";

import { Field, FieldLabel } from "@olyx/react/field";
import { Textarea } from "@olyx/react/textarea";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Bio</FieldLabel>
      <Textarea placeholder="Tell us about yourself..." />
    </Field>
  );
}
