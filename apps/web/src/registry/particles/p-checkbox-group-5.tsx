"use client";

import { Button } from "@olyx/react/button";
import { CheckBox } from "@olyx/react/checkbox";
import { CheckboxGroup } from "@olyx/react/checkbox-group";
import { Field, FieldLabel } from "@olyx/react/field";
import { useState } from "react";

export default function Particle() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Selected: ${selected.join(", ")}`);
      }}
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <CheckboxGroup value={selected} onValueChange={setSelected}>
        <Field orientation="horizontal">
          <CheckBox value="email" />
          <FieldLabel>Email notifications</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <CheckBox value="sms" />
          <FieldLabel>SMS notifications</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <CheckBox value="push" />
          <FieldLabel>Push notifications</FieldLabel>
        </Field>
      </CheckboxGroup>
      <Button type="submit">Save preferences</Button>
    </form>
  );
}
