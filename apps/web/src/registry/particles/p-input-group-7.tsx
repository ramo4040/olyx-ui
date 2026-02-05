"use client";

import { Input } from "@olyx/react/input";
import { InputWrapper } from "@olyx/react/input-group";
import { Kbd, KbdGroup } from "@olyx/react/kbd";

export default function Particle() {
  return (
    <InputWrapper>
      <Input placeholder="Search..." />
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </InputWrapper>
  );
}
