"use client";

import { Switch } from "@olyx/react/switch";

export default function Particle() {
  return (
    <>
      <Switch style={{ "--track-size": "28px" } as React.CSSProperties} />
      <Switch />
      <Switch style={{ "--track-size": "48px" } as React.CSSProperties} />
    </>
  );
}
