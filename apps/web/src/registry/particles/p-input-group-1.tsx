"use client";

import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "@olyx/react/input";
import { InputIcon, InputWrapper } from "@olyx/react/input-group";

export default function Particle() {
  return (
    <InputWrapper>
      <InputIcon>
        <HugeiconsIcon icon={StarIcon} />
      </InputIcon>
      <Input placeholder="Add to favorites" />
    </InputWrapper>
  );
}
