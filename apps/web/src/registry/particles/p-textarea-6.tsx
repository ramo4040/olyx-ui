"use client";

import { Button } from "@olyx/react/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@olyx/react/field";
import { Textarea } from "@olyx/react/textarea";
import { type FormEvent, useState } from "react";

export default function Particle() {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    window.alert(`Feedback: ${value}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Field>
        <FieldLabel>Feedback</FieldLabel>
        <FieldDescription>
          Share your thoughts so we can improve.
        </FieldDescription>
        <Textarea
          placeholder="What could we do better?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <FieldError />
      </Field>
      <Button type="submit">Send Feedback</Button>
    </form>
  );
}
