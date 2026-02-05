import { Field, FieldLabel } from "@olyx/react/field";
import { Slider } from "@olyx/react/slider";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Volume</FieldLabel>
      <Slider defaultValue={50} />
    </Field>
  );
}
