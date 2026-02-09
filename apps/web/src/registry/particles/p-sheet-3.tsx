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
    <>
      <Sheet>
        <SheetTrigger render={<Button variant="neutral">Right</Button>} />
        <SheetPopup side="right">
          <SheetHeader>
            <SheetTitle>Right Side</SheetTitle>
            <SheetDescription>
              Sheet opens from the right edge.
            </SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>This is the default position for sheets.</p>
          </SheetPanel>
          <SheetFooter variant="bare">
            <SheetClose />
          </SheetFooter>
        </SheetPopup>
      </Sheet>

      <Sheet>
        <SheetTrigger render={<Button variant="neutral">Left</Button>} />
        <SheetPopup side="left">
          <SheetHeader>
            <SheetTitle>Left Side</SheetTitle>
            <SheetDescription>Sheet opens from the left edge.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>Useful for navigation menus or filters.</p>
          </SheetPanel>
          <SheetFooter variant="bare">
            <SheetClose />
          </SheetFooter>
        </SheetPopup>
      </Sheet>

      <Sheet>
        <SheetTrigger render={<Button variant="neutral">Top</Button>} />
        <SheetPopup side="top">
          <SheetHeader>
            <SheetTitle>Top Side</SheetTitle>
            <SheetDescription>Sheet opens from the top edge.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>Great for notifications or banners.</p>
          </SheetPanel>
          <SheetFooter variant="bare">
            <SheetClose />
          </SheetFooter>
        </SheetPopup>
      </Sheet>

      <Sheet>
        <SheetTrigger render={<Button variant="neutral">Bottom</Button>} />
        <SheetPopup side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Side</SheetTitle>
            <SheetDescription>
              Sheet opens from the bottom edge.
            </SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <p>Perfect for mobile-style action sheets.</p>
          </SheetPanel>
          <SheetFooter variant="bare">
            <SheetClose />
          </SheetFooter>
        </SheetPopup>
      </Sheet>
    </>
  );
}
