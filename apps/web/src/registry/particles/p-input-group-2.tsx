"use client";

import { SettingsIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "@olyx/react/input";
import { InputIcon, InputWrapper } from "@olyx/react/input-group";

export default function Particle() {
  return (
    <InputWrapper>
      <Input placeholder="Configuration name" />
      <InputIcon>
        <HugeiconsIcon icon={SettingsIcon} />
      </InputIcon>
    </InputWrapper>
  );
}
