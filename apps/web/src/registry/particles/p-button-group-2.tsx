"use client";

import {
  Notification01Icon,
  Setting07Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { ButtonGroup } from "@olyx/react/button-group";

export default function Particle() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="neutral" mode="stroke">
        <HugeiconsIcon icon={UserIcon} />
      </Button>
      <Button variant="neutral" mode="stroke">
        <HugeiconsIcon icon={Notification01Icon} />
      </Button>
      <Button variant="neutral" mode="stroke">
        <HugeiconsIcon icon={Setting07Icon} />
      </Button>
    </ButtonGroup>
  );
}
