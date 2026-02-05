"use client";

import { Input } from "@olyx/react/input";
import { InputAffix, InputWrapper } from "@olyx/react/input-group";

export default function Particle() {
  return (
    <InputWrapper>
      <Input placeholder="username" />
      <InputAffix>@domain.com</InputAffix>
    </InputWrapper>
  );
}
