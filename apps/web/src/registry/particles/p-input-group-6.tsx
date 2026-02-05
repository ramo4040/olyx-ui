"use client";

import { Input } from "@olyx/react/input";
import { InputAffix, InputWrapper } from "@olyx/react/input-group";

export default function Particle() {
  return (
    <InputWrapper>
      <InputAffix inline>$</InputAffix>
      <Input placeholder="0.00" />
    </InputWrapper>
  );
}
