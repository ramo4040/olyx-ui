"use client";

import { Button } from "@olyx/react/button";
import { ButtonGroup } from "@olyx/react/button-group";

export default function Particle() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="neutral" mode="stroke">
        Top
      </Button>
      <Button variant="neutral" mode="stroke">
        Middle
      </Button>
      <Button variant="neutral" mode="stroke">
        Bottom
      </Button>
    </ButtonGroup>
  );
}
