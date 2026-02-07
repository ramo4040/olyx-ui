"use client";

import { Button } from "@olyx/react/button";
import { Field, FieldLabel } from "@olyx/react/field";
import { Switch } from "@olyx/react/switch";
import { useState } from "react";

export default function Particle() {
  const [agreed, setAgreed] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Terms accepted: ${agreed}`);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "fit-content",
      }}
    >
      <Field orientation="horizontal">
        <FieldLabel>Enable marketing emails</FieldLabel>
        <Switch checked={agreed} onCheckedChange={setAgreed} />
      </Field>
      <Button type="submit" disabled={!agreed} style={{ width: "100%" }}>
        Continue
      </Button>
    </form>
  );
}
