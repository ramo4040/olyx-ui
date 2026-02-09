"use client";

import { Button } from "@olyx/react/button";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@olyx/react/sheet";

export default function Particle() {
  return (
    <Sheet>
      <SheetTrigger render={<Button>Open Inset Sheet</Button>} />
      <SheetPopup variant="inset">
        <SheetHeader>
          <SheetTitle>Inset Sheet</SheetTitle>
          <SheetDescription>
            This sheet has spacing around the edges on desktop screens.
          </SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <p>
            The inset variant adds visual separation from the page edges, making
            it feel like a floating panel rather than a full-edge drawer.
          </p>
        </SheetPanel>
        <SheetFooter>
          <SheetClose />
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  );
}
