"use client";

import { Button } from "@olyx/react/button";
import { CheckBox } from "@olyx/react/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@olyx/react/field";
import { Input } from "@olyx/react/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@olyx/react/select";
import { Textarea } from "@olyx/react/textarea";

export default function Particle() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel>Full name</FieldLabel>
          <Input placeholder="Jane Doe" required />
          <FieldError>Name is required.</FieldError>
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="jane@example.com" required />
          <FieldDescription>We'll send a confirmation email.</FieldDescription>
          <FieldError>Enter a valid email address.</FieldError>
        </Field>
        <Field>
          <FieldLabel>Department</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel>Bio</FieldLabel>
          <Textarea placeholder="Tell us about yourself..." rows={3} />
        </Field>
        <Field orientation="horizontal">
          <CheckBox required />
          <FieldLabel>I accept the privacy policy</FieldLabel>
        </Field>
        <Button type="submit">Submit</Button>
      </FieldGroup>
    </form>
  );
}
