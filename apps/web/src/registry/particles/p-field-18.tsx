"use client";

import { Field, FieldLabel } from "@olyx/react/field";
import NumberFieldParticle from "./p-number-field-1";
export default function Particle() {
  return (
    <Field>
      <FieldLabel>Quantity</FieldLabel>
      <NumberFieldParticle />
    </Field>
  );
}
