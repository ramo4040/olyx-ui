"use client";

import { CheckBox } from "@olyx/react/checkbox";
import { CheckboxGroup } from "@olyx/react/checkbox-group";
import { Field, FieldLabel } from "@olyx/react/field";
import React from "react";

const reactEcosystem = [
  { id: "nextjs", name: "Next.js" },
  { id: "remix", name: "Remix" },
];

const vueEcosystem = [
  { id: "nuxt", name: "Nuxt" },
  { id: "vitest", name: "Vitest" },
];

export default function Particle() {
  const mainId = React.useId();
  const reactId = React.useId();
  const vueId = React.useId();

  const [mainValue, setMainValue] = React.useState<string[]>([]);
  const [reactValue, setReactValue] = React.useState<string[]>([]);
  const [vueValue, setVueValue] = React.useState<string[]>([]);

  const allEcosystemIds = [
    ...reactEcosystem.map((e) => e.id),
    ...vueEcosystem.map((e) => e.id),
  ];

  const handleMainChange = (value: string[]) => {
    if (
      value.length ===
      allEcosystemIds.length + reactEcosystem.length + vueEcosystem.length
    ) {
      setReactValue(reactEcosystem.map((e) => e.id));
      setVueValue(vueEcosystem.map((e) => e.id));
    } else {
      setReactValue([]);
      setVueValue([]);
    }
    setMainValue(value);
  };

  const handleReactChange = (value: string[]) => {
    setReactValue(value);
    setMainValue([...value, ...vueValue]);
  };

  const handleVueChange = (value: string[]) => {
    setVueValue(value);
    setMainValue([...reactValue, ...value]);
  };

  return (
    <CheckboxGroup
      aria-labelledby={mainId}
      value={mainValue}
      onValueChange={handleMainChange}
      allValues={allEcosystemIds}
    >
      <Field orientation="horizontal">
        <CheckBox parent />
        <FieldLabel id={mainId}>All frameworks</FieldLabel>
      </Field>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "1.5rem",
        }}
      >
        <CheckboxGroup
          aria-labelledby={reactId}
          value={reactValue}
          onValueChange={handleReactChange}
          allValues={reactEcosystem.map((e) => e.id)}
        >
          <Field orientation="horizontal">
            <CheckBox parent />
            <FieldLabel id={reactId}>React ecosystem</FieldLabel>
          </Field>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginLeft: "1.5rem",
            }}
          >
            {reactEcosystem.map((e) => (
              <Field key={e.id} orientation="horizontal">
                <CheckBox value={e.id} />
                <FieldLabel>{e.name}</FieldLabel>
              </Field>
            ))}
          </div>
        </CheckboxGroup>
        <CheckboxGroup
          aria-labelledby={vueId}
          value={vueValue}
          onValueChange={handleVueChange}
          allValues={vueEcosystem.map((e) => e.id)}
        >
          <Field orientation="horizontal">
            <CheckBox parent />
            <FieldLabel id={vueId}>Vue ecosystem</FieldLabel>
          </Field>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginLeft: "1.5rem",
            }}
          >
            {vueEcosystem.map((e) => (
              <Field key={e.id} orientation="horizontal">
                <CheckBox value={e.id} />
                <FieldLabel>{e.name}</FieldLabel>
              </Field>
            ))}
          </div>
        </CheckboxGroup>
      </div>
    </CheckboxGroup>
  );
}
