"use client";

import { Field, FieldLabel, FieldValidity } from "@olyx/react/field";
import { Input } from "@olyx/react/input";

export default function FieldWithValidityDemo() {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="Enter your email" required type="email" />
      <FieldValidity>
        {(validity) => (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {validity.error && (
              <p style={{ color: "var(--color-error)" }}>{validity.error}</p>
            )}
            <div style={{ background: "var(--color-surface-container-low)" }}>
              <pre
                style={{
                  maxHeight: 200,
                  overflow: "auto",
                  padding: 8,
                  fontSize: 13,
                }}
              >
                {JSON.stringify(validity, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </FieldValidity>
    </Field>
  );
}
