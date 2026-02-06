import { Field, FieldLabel } from "@olyx/react/field";
import { RadioGroup, RadioGroupItem } from "@olyx/react/radio";

export default function Particle() {
  return (
    <RadioGroup defaultValue="next">
      <Field orientation="horizontal">
        <RadioGroupItem value="next" />
        <FieldLabel>Next.js</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="vite" />
        <FieldLabel>Vite</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="astro" />
        <FieldLabel>Astro</FieldLabel>
      </Field>
    </RadioGroup>
  );
}
