"use client";

import { Button } from "@olyx/react/button";
import { ButtonGroup } from "@olyx/react/button-group";

export default function Particle() {
  return (
    <ButtonGroup>
      <Button variant="neutral" mode="stroke">
        Previous
      </Button>
      <Button variant="neutral" mode="stroke">
        Next
      </Button>
    </ButtonGroup>
  );
}
