"use client";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@olyx/react/collapsible";

export default function Particle() {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        Toggle content
        <HugeiconsIcon icon={ArrowDown01Icon} />
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <p>
          Yes, you can access your files from any device with an internet
          connection. Simply log in to your account and your files will be
          available.
        </p>
      </CollapsiblePanel>
    </Collapsible>
  );
}
