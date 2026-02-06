import { Field, FieldDescription, FieldLabel } from "@olyx/react/field";
import { RadioGroup, RadioGroupItem } from "@olyx/react/radio";

export default function Particle() {
  return (
    <RadioGroup defaultValue="comfort">
      <Field orientation="horizontal">
        <RadioGroupItem value="comfort" />
        <div>
          <FieldLabel>Comfortable</FieldLabel>
          <FieldDescription>More spacing, easier to read.</FieldDescription>
        </div>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" />
        <div>
          <FieldLabel>Compact</FieldLabel>
          <FieldDescription>
            Denser layout, more content visible.
          </FieldDescription>
        </div>
      </Field>
    </RadioGroup>
  );
}
