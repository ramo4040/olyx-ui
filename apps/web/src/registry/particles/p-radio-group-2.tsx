import { Field, FieldLabel } from "@olyx/react/field";
import { RadioGroup, RadioGroupItem } from "@olyx/react/radio";

export default function Particle() {
  return (
    <RadioGroup defaultValue="email" disabled>
      <Field orientation="horizontal">
        <RadioGroupItem value="email" />
        <FieldLabel>Email</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="sms" />
        <FieldLabel>SMS</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="push" />
        <FieldLabel>Push notification</FieldLabel>
      </Field>
    </RadioGroup>
  );
}
