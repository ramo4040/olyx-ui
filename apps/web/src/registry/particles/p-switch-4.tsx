"use client";

import "./styles/p-switch-4.css";
import { Field, FieldDescription, FieldLabel } from "@olyx/react/field";
import { Switch } from "@olyx/react/switch";
import { useState } from "react";

export default function Particle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Field
      orientation="horizontal"
      data-checked={enabled}
      className="switch-field-4"
    >
      <FieldLabel>
        <div>
          <p>Push Notifications</p>
          <FieldDescription>
            Receive alerts for new messages and updates.
          </FieldDescription>
        </div>
      </FieldLabel>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </Field>
  );
}
