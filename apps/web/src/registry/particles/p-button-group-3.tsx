"use client";

import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { ButtonGroup } from "@olyx/react/button-group";

export default function Particle() {
  return (
    <>
      <ButtonGroup>
        <Button size="sm" variant="neutral" mode="stroke">
          Small
        </Button>
        <Button size="sm" variant="neutral" mode="stroke">
          Button
        </Button>
        <Button size="sm" variant="neutral" mode="stroke">
          Group
        </Button>
        <Button
          size="sm"
          variant="neutral"
          mode="stroke"
          asIcon
          aria-label="Add"
        >
          <HugeiconsIcon icon={PlusSignIcon} />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="neutral" mode="stroke">
          Default
        </Button>
        <Button variant="neutral" mode="stroke">
          Button
        </Button>
        <Button variant="neutral" mode="stroke">
          Group
        </Button>
        <Button variant="neutral" mode="stroke" asIcon aria-label="Add">
          <HugeiconsIcon icon={PlusSignIcon} />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button size="lg" variant="neutral" mode="stroke">
          Large
        </Button>
        <Button size="lg" variant="neutral" mode="stroke">
          Button
        </Button>
        <Button size="lg" variant="neutral" mode="stroke">
          Group
        </Button>
        <Button
          size="lg"
          variant="neutral"
          mode="stroke"
          asIcon
          aria-label="Add"
        >
          <HugeiconsIcon icon={PlusSignIcon} />
        </Button>
      </ButtonGroup>
    </>
  );
}
