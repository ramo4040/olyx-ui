"use client";

import { CheckBox } from "@olyx/react/checkbox";
import { CheckboxGroup } from "@olyx/react/checkbox-group";
import { Field, FieldLabel } from "@olyx/react/field";
import React from "react";

const languages = [
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
];

export default function Particle() {
  const id = React.useId();
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <CheckboxGroup
      aria-labelledby={id}
      value={value}
      onValueChange={setValue}
      allValues={languages.map((l) => l.id)}
    >
      <Field orientation="horizontal">
        <CheckBox parent />
        <FieldLabel id={id}>Select all languages</FieldLabel>
      </Field>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "1.5rem",
        }}
      >
        {languages.map((lang) => (
          <Field key={lang.id} orientation="horizontal">
            <CheckBox value={lang.id} />
            <FieldLabel>{lang.name}</FieldLabel>
          </Field>
        ))}
      </div>
    </CheckboxGroup>
  );
}
