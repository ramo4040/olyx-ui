"use client";

import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { Input } from "@olyx/react/input";
import { InputWrapper } from "@olyx/react/input-group";

export default function Particle() {
  return (
    <InputWrapper>
      <Input placeholder="Enter your email" />
      <Button size="sm" mode="lighter">
        <HugeiconsIcon icon={Add01Icon} />
      </Button>
    </InputWrapper>
  );
}
