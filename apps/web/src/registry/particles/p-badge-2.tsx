"use client";

import { Badge } from "@olyx/react/badge";

export default function Particle() {
  return (
    <>
      <Badge mode="filled">Filled</Badge>
      <Badge mode="light">Light</Badge>
      <Badge mode="lighter">Lighter</Badge>
      <Badge mode="stroke">Stroke</Badge>
    </>
  );
}
